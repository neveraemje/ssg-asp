"use client"
import React, { useState } from 'react';

function TrackDrag() {
  const [active, setActive] = useState(false);
  const [currentX, setCurrentX] = useState(0);
  const [initialX, setInitialX] = useState(0);
  const [xOffset, setXOffset] = useState(0);

  const containerRef = React.useRef(null);
  const dragItemRef = React.useRef(null);
  const beforeRef = React.useRef(null);
  const afterRef = React.useRef(null);
  const endRef = React.useRef(null);

  const dragWidth = containerRef.current
    ? containerRef.current.clientWidth - dragItemRef.current.clientWidth - 20
    : 0;

  const dragStart = (e) => {
    e.preventDefault();
    setInitialX(
      e.type === 'touchstart'
        ? e.touches[0].clientX - xOffset
        : e.clientX - xOffset
    );

    if (e.target === dragItemRef.current) {
      setActive(true);
    }
  };

  const dragEnd = () => {
    if (currentX < dragWidth - 5) {
      animateBack();
    } else {
      completed();
    }

    setInitialX(currentX);
    setActive(false);
  };

  const drag = (e) => {
    if (!active) return;

    e.preventDefault();

    setCurrentX(
      e.type === 'touchmove'
        ? e.touches[0].clientX - initialX
        : e.clientX - initialX
    );

    if (currentX > 0 && currentX < dragWidth) {
      setTranslate(currentX);
    }
  };

  const setTranslate = (xPos) => {
    dragItemRef.current.style.transform = `translate3d(${xPos}px, 0, 0)`;
    endRef.current.style.opacity = 0;

    if (xPos > dragWidth / 2) {
      afterRef.current.style.opacity = 1;
      beforeRef.current.style.opacity = 0;
      containerRef.current.style.backgroundColor = '#166534';
    } else {
      afterRef.current.style.opacity = 0;
      beforeRef.current.style.opacity = 1;
      containerRef.current.style.backgroundColor = '#15803D';
    }
  };

  const animateBack = () => {
    dragItemRef.current.classList.remove('animate');
    containerRef.current.classList.remove('animate');
    beforeRef.current.classList.remove('animate');
    afterRef.current.classList.remove('animate');
    setTranslate(0);
    setTimeout(() => {
      dragItemRef.current.classList.add('animate');
      containerRef.current.classList.add('animate');
      beforeRef.current.classList.add('animate');
      afterRef.current.classList.add('animate');
    }, 600);
  };

  const completed = () => {
    endRef.current.style.opacity = 1;
    afterRef.current.style.opacity = 0;
    beforeRef.current.style.opacity = 0;
    alert('Confirmed!');
  };

  return (
    <div id="outerContainer">
      <div
        className="track_drag animate"
        ref={containerRef}
        onTouchStart={dragStart}
        onTouchEnd={dragEnd}
        onTouchMove={drag}
        onMouseDown={dragStart}
        onMouseUp={dragEnd}
        onMouseMove={drag}
      >
        <div id="item" ref={dragItemRef}></div>
        <p className="track_text track_text--end animate" ref={endRef}>
          Confirmed
        </p>
        <p className="track_text track_text--after animate" ref={afterRef}>
          Confirming...
        </p>
        <p className="track_text track_text--before animate" ref={beforeRef}>
          Slide to Confirm
        </p>
      </div>
    </div>
  );
}

export default TrackDrag;