import { useEffect, useRef } from "react";

export default function DroneCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const canHover =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const loop = () => {
      if (ref.current) {
        ref.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div ref={ref} className="cursor-drone" aria-hidden>
      {/* propellers */}
      <div className="cursor-prop cursor-prop-tl" />
      <div className="cursor-prop cursor-prop-tr" />
      <div className="cursor-prop cursor-prop-bl" />
      <div className="cursor-prop cursor-prop-br" />
      {/* arms */}
      <div className="cursor-arm cursor-arm-h1" />
      <div className="cursor-arm cursor-arm-h2" />
      <div className="cursor-arm cursor-arm-v1" />
      <div className="cursor-arm cursor-arm-v2" />
      {/* body */}
      <div className="cursor-body" />
    </div>
  );
}
