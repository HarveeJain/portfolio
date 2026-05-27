import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [mouse, setMouse] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const move = (x, y) => {
      setMouse({ x, y });
    };

    const handlePointerMove = (e) => {
      move(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      const touch = e.touches[0];

      if (touch) {
        move(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[999]"
      style={{
        background: `radial-gradient(
          220px circle at ${mouse.x}px ${mouse.y}px,
          rgba(144, 85, 247, 0.15),
          transparent 65%
        )`,
      }}
    />
  );
}