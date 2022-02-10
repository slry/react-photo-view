import React, { useLayoutEffect, useRef } from 'react';
import isTouchDevice from './utils/isTouchDevice';
import getMultipleTouchPosition from './utils/getMultipleTouchPosition';
import getPositionOnMoveOrScale from './utils/getPositionOnMoveOrScale';
import { getReachType, getClosedEdge } from './utils/edgeHandle';
import getAnimateOrigin from './utils/getAnimateOrigin';
import getRotateSize from './utils/getRotateSize';
import { maxScale, minStartTouchOffset, minScale, scaleBuffer, animationCSS } from './variables';
import type { ReachMoveFunction, ReachFunction, PhotoTapFunction, OriginRectType, BrokenElementParams } from './types';
import type { ReachType, TouchStartType } from './types';
import useSetState from './hooks/useSetState';
import getSuitableImageSize from './utils/getSuitableImageSize';
import useDebounceCallback from './hooks/useDebounceCallback';
import useEventListener from './hooks/useEventListener';
import useContinuousTap from './hooks/useContinuousTap';
import useTargetScale from './hooks/useTargetScale';
import useScrollPosition from './hooks/useScrollPosition';
import useMountedRef from './hooks/useMountedRef';
import type { IPhotoLoadedParams } from './Photo';
import Photo from './Photo';
import './PhotoBox.less';

export interface PhotoBoxProps {
  // 图片地址
  src?: string;
  // 自定义渲染
  render?: (props: Partial<React.HTMLAttributes<HTMLElement>>) => React.ReactNode;
  // 自定义渲染节点宽度
  width?: number;
  // 自定义渲染节点高度
  height?: number;
  // 容器类名
  wrapClassName?: string;
  // 图片类名
  className?: string;
  // style
  style?: object;
  // 自定义 loading
  loadingElement?: JSX.Element;
  // 加载失败 Element
  brokenElement?: JSX.Element | ((photoProps: BrokenElementParams) => JSX.Element);
  // 旋转状态
  rotate?: number;
  // 放大缩小
  scale?: number;

  // Photo 点击事件
  onPhotoTap: PhotoTapFunction;
  // Mask 点击事件
  onMaskTap: PhotoTapFunction;
  // 到达边缘滑动事件
  onReachMove: ReachMoveFunction;
  // 触摸解除事件
  onReachUp: ReachFunction;
  // Resize 事件
  onPhotoResize?: () => void;
  // 滚轮事件
  onWheel: (scale: number) => void;
  // 是否在当前操作中
  isActive: boolean;

  // 动画类型
  activeAnimation?: 'enter' | 'leave';
  // 动画源位置
  originRect?: OriginRectType;
}

const initialState = {
  // 真实宽度
  naturalWidth: undefined as number | undefined,
  // 真实高度
  naturalHeight: undefined as number | undefined,
  // 宽度
  width: 1,
  // 高度
  height: 1,
  // 加载成功状态
  loaded: undefined as boolean | undefined,
  // 破碎状态
  broken: false,

  // 图片 X 偏移量
  x: 0,
  // 图片 y 偏移量
  y: 0,
  // 图片处于触摸的状态
  touched: false,
  // 背景处于触摸状态
  maskTouched: false,

  // 触摸开始时 x 原始坐标
  CX: 0,
  // 触摸开始时 y 原始坐标
  CY: 0,

  // 触摸开始时图片 x 偏移量
  lastX: 0,
  // 触摸开始时图片 y 偏移量
  lastY: 0,
  // 上一个触摸状态 x 原始坐标
  lastCX: 0,
  // 上一个触摸状态 y 原始坐标
  lastCY: 0,

  // 触摸开始时时间
  touchTime: 0,
  // 多指触控间距
  touchLength: 0,
  // 是否渐变
  easing: true,
  // 停止 Raf
  stopRaf: true,

  // 当前边缘触发状态
  currReach: undefined as ReachType,
};

export default function PhotoBox({
  src,
  render,
  width: customWidth,
  height: customHeight,
  wrapClassName,
  className,
  style,
  loadingElement,
  brokenElement,
  rotate = 0,
  scale = 1,

  onPhotoTap,
  onMaskTap,
  onReachMove,
  onReachUp,
  onPhotoResize,
  onWheel,
  isActive,

  activeAnimation,
  originRect,
}: PhotoBoxProps) {
  const [state, updateState] = useSetState(initialState);
  const initialTouchRef = useRef<TouchStartType>();
  const mounted = useMountedRef();

  const {
    naturalWidth = customWidth || 1,
    naturalHeight = customHeight || 1,
    width,
    height,
    loaded = !src,
    broken,

    x,
    y,
    touched,
    stopRaf,
    maskTouched,

    CX,
    CY,
    lastX,
    lastY,
    lastCX,
    lastCY,
    touchTime,
    touchLength,
    easing,

    currReach,
  } = state;

  const handleMove = useDebounceCallback(
    (nextClientX: number, nextClientY: number, currentTouchLength: number = 0) => {
      if ((touched || maskTouched) && isActive) {
        // 通过旋转调换宽高
        const [currentWidth, currentHeight] = getRotateSize(rotate, width, height);
        // 单指最小缩放下，以初始移动距离来判断意图
        if (currentTouchLength === 0 && initialTouchRef.current === undefined) {
          const isStillX = Math.abs(nextClientX - CX) <= minStartTouchOffset;
          const isStillY = Math.abs(nextClientY - CY) <= minStartTouchOffset;
          // 初始移动距离不足
          if (isStillX && isStillY) {
            // 方向记录上次移动距离，以便平滑过渡
            updateState({
              lastCX: nextClientX,
              lastCY: nextClientY,
            });
            return;
          }
          // 设置响应状态
          initialTouchRef.current = !isStillX ? 'x' : nextClientY > CY ? 'pull' : 'push';
        }

        const offsetX = nextClientX - lastCX;
        const offsetY = nextClientY - lastCY;
        // 边缘触发状态
        let currentReach: ReachType = undefined;
        if (currentTouchLength === 0) {
          // 边缘超出状态
          const horizontalCloseEdge = getClosedEdge(offsetX + lastX, scale, currentWidth, window.innerWidth);
          const verticalCloseEdge = getClosedEdge(offsetY + lastY, scale, currentHeight, window.innerHeight);
          // 边缘触发检测
          currentReach = getReachType(initialTouchRef.current, horizontalCloseEdge, verticalCloseEdge, currReach);

          // 接触边缘
          if (currentReach !== undefined) {
            onReachMove(currentReach, nextClientX, nextClientY, scale);
          }
        }
        // 横向边缘触发、背景触发禁用当前滑动
        if (currentReach === 'x' || maskTouched) {
          updateState({
            currReach: 'x',
          });
        } else {
          // 目标倍数
          const endScale = scale + ((currentTouchLength - touchLength) / 100 / 2) * scale;
          // 限制最大倍数和最小倍数
          const toScale = Math.max(
            Math.min(endScale, Math.max(maxScale, naturalWidth / width)),
            minScale - scaleBuffer,
          );
          if (scale !== toScale) {
            onWheel(toScale);
          }
          const position = getPositionOnMoveOrScale(
            x,
            y,
            nextClientX,
            nextClientY,
            width,
            height,
            scale,
            toScale,
            offsetX,
            offsetY,
          );
          updateState({
            touchLength: currentTouchLength,
            currReach: currentReach,
            ...position,
          });
        }
      }
    },
    {
      maxWait: 8,
    },
  );

  const slideToPosition = useScrollPosition(
    (nextX) => {
      if (stopRaf || touched) {
        return false;
      }
      if (mounted.current) {
        updateState({ x: nextX, easing: false });
      }
      return mounted.current;
    },
    (nextY) => {
      if (stopRaf || touched) {
        return false;
      }
      if (mounted.current) {
        updateState({ y: nextY, easing: false });
      }
      return mounted.current;
    },
    (nextScale) => {
      if (mounted.current) {
        onWheel(nextScale);
      }
      return !touched && mounted.current;
    },
  );

  const handlePhotoTap = useContinuousTap(
    (currentClientX: number, currentClientY: number) => {
      onPhotoTap?.(currentClientX, currentClientY);
    },
    (currentClientX: number, currentClientY: number) => {
      if (currReach !== undefined) {
        return;
      }
      // 若图片足够大，则放大适应的倍数
      const toScale = scale !== 1 ? 1 : Math.max(2, naturalWidth / width);
      const position = getPositionOnMoveOrScale(x, y, currentClientX, currentClientY, width, height, scale, toScale);
      onWheel(toScale);
      updateState({
        CX,
        CY,
        ...position,
        ...(toScale <= 1 && { x: 0, y: 0 }),
      });
    },
  );

  function handleUp(nextClientX: number, nextClientY: number) {
    // 重置响应状态
    initialTouchRef.current = undefined;
    if ((touched || maskTouched) && isActive) {
      const hasMove = CX !== nextClientX || CY !== nextClientY;
      const targetScale = Math.max(Math.min(scale, Math.max(maxScale, naturalWidth / width)), minScale);
      if (targetScale !== scale) {
        onWheel(targetScale);
      }
      updateState({
        touched: false,
        maskTouched: false,
        easing: true,
        stopRaf: false,
        // 重置触发状态
        currReach: undefined,
      });
      // Go
      slideToPosition(x, y, lastX, lastY, width, height, scale, rotate, touchTime);

      onReachUp?.(nextClientX, nextClientY);
      // 触发 Tap 事件
      if (!hasMove) {
        if (touched && onPhotoTap) {
          handlePhotoTap(nextClientX, nextClientY);
        } else if (maskTouched && onMaskTap) {
          onMaskTap(nextClientX, nextClientY);
        }
      }
    }
  }

  useEventListener(isTouchDevice ? undefined : 'mousemove', (e) => {
    e.preventDefault();
    handleMove(e.clientX, e.clientY);
  });
  useEventListener(isTouchDevice ? undefined : 'mouseup', (e) => {
    handleUp(e.clientX, e.clientY);
  });
  useEventListener(
    isTouchDevice ? 'touchmove' : undefined,
    (e) => {
      e.preventDefault();
      const position = getMultipleTouchPosition(e);
      handleMove(...position);
    },
    { passive: false },
  );
  useEventListener(
    isTouchDevice ? 'touchend' : undefined,
    ({ changedTouches }) => {
      const touch = changedTouches[0];
      handleUp(touch.clientX, touch.clientY);
    },
    { passive: false },
  );
  useEventListener(
    'resize',
    useDebounceCallback(
      () => {
        if (loaded) {
          updateState(getSuitableImageSize(naturalWidth, naturalHeight, rotate));
          if (onPhotoResize) {
            onPhotoResize();
          }
        }
      },
      { maxWait: 8 },
    ),
  );

  useLayoutEffect(() => {
    updateState(getSuitableImageSize(naturalWidth, naturalHeight, rotate));
  }, [rotate]);

  function handlePhotoLoad(params: IPhotoLoadedParams) {
    updateState({
      ...params,
      ...(params.loaded && getSuitableImageSize(params.naturalWidth || 0, params.naturalHeight || 0, rotate)),
    });
  }

  function handleStart(currentClientX: number, currentClientY: number, currentTouchLength: number = 0) {
    updateState({
      touched: true,
      CX: currentClientX,
      CY: currentClientY,
      lastCX: currentClientX,
      lastCY: currentClientY,
      lastX: x,
      lastY: y,
      touchLength: currentTouchLength,
      touchTime: Date.now(),
    });
  }

  function handleWheel(e: React.WheelEvent) {
    if (currReach !== undefined) {
      return;
    }
    const endScale = scale - e.deltaY / 100 / 2;
    // 限制最大倍数和最小倍数
    const toScale = Math.max(Math.min(endScale, Math.max(maxScale, naturalWidth / width)), minScale);
    const position = getPositionOnMoveOrScale(x, y, e.clientX, e.clientY, width, height, scale, toScale);

    updateState({
      CX: e.clientX,
      CY: e.clientY,
      stopRaf: true,
      ...position,
      ...(toScale <= 1 && { x: 0, y: 0 }),
    });
    onWheel(toScale);
  }

  function handleMaskStart(currentClientX: number, currentClientY: number) {
    updateState({
      maskTouched: true,
      CX: currentClientX,
      CY: currentClientY,
      lastX: x,
      lastY: y,
    });
  }

  function handleMaskMouseDown(e: React.MouseEvent) {
    handleMaskStart(e.clientX, e.clientY);
  }

  function handleMaskTouchStart(e: React.TouchEvent) {
    const touch = e.touches[0];
    handleMaskStart(touch.clientX, touch.clientY);
  }

  function handleTouchStart(e: React.TouchEvent) {
    handleStart(...getMultipleTouchPosition(e));
  }

  function handleMouseDown(e: React.MouseEvent) {
    e.preventDefault();
    handleStart(e.clientX, e.clientY, 0);
  }
  // 延迟更新 width/height
  const [currentWidth, currentHeight, currentScale] = useTargetScale(width, height, scale, (should) =>
    updateState({ easing: should }),
  );

  const photoProps = {
    className,
    onMouseDown: isTouchDevice ? undefined : handleMouseDown,
    onTouchStart: isTouchDevice ? handleTouchStart : undefined,
    onWheel: handleWheel,
    style: {
      width: currentWidth,
      height: currentHeight,
      transform: `translate3d(${x}px, ${y}px, 0) scale(${currentScale}) rotate(${rotate}deg)`,
      transition: touched || !easing ? undefined : `transform 0.4s ${animationCSS}`,
      willChange: isActive ? 'transform' : undefined,
    },
  };

  return (
    <div className={`PhotoView__PhotoWrap${wrapClassName ? ` ${wrapClassName}` : ''}`} style={style}>
      <div
        className="PhotoView__PhotoMask"
        onMouseDown={!isTouchDevice && isActive ? handleMaskMouseDown : undefined}
        onTouchStart={isTouchDevice && isActive ? handleMaskTouchStart : undefined}
      />
      <div
        className={`PhotoView__PhotoBox${
          loaded
            ? activeAnimation === 'enter'
              ? ' PhotoView__animateIn'
              : activeAnimation === 'leave'
              ? ' PhotoView__animateOut'
              : ''
            : ''
        }`}
        style={{
          transformOrigin: loaded ? getAnimateOrigin(originRect, width, height) : undefined,
          width,
          height,
        }}
      >
        {src ? (
          <Photo
            src={src}
            loaded={loaded}
            broken={broken}
            {...photoProps}
            onPhotoLoad={handlePhotoLoad}
            loadingElement={loadingElement}
            brokenElement={brokenElement}
          />
        ) : (
          render?.(photoProps)
        )}
      </div>
    </div>
  );
}