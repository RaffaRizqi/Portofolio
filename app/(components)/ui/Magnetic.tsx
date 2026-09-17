'use client';
import React, { useRef, useState } from 'react';

export function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const boundingRect = ref.current?.getBoundingClientRect();
    if (boundingRect) {
      const { width, height, top, left } = boundingRect;
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({ x: x * 0.3, y: y * 0.3 }); // 0.3 adalah kekuatan tarikan magnet
    }
  };

  const reset = () => { setPosition({ x: 0, y: 0 }); };

  const magneticChild = children as React.ReactElement<
    React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>
  >;

  return React.cloneElement(magneticChild, {
    ref,
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    style: {
      ...(magneticChild.props.style || {}),
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      transition: position.x === 0 && position.y === 0 ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
      willChange: 'transform'
    }
  });
}
