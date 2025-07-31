import React, { useRef, useEffect, useState } from 'react';
import pencilImg from '../assets/shakalaka-boom-boom.png';

const PencilTrail = () => {
  const canvasRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let drawing = false;
    let lastX = 0;
    let lastY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // ✅ Set canvas styles properly
    Object.assign(canvas.style, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0, // Keep it below other elements
      pointerEvents: 'none', // Let clicks pass through
    });

    const fadeCanvas = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const draw = (x, y) => {
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.03)';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';

      lastX = x;
      lastY = y;
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
      if (drawing) draw(clientX, clientY);
    };

    const startDrawing = (e) => {
      drawing = true;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    const stopDrawing = () => {
      drawing = false;
    };

    const animate = () => {
    //   fadeCanvas();
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', startDrawing);
    window.addEventListener('mouseup', stopDrawing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', startDrawing);
      window.removeEventListener('mouseup', stopDrawing);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
      <img
        src={pencilImg}
        alt="Pencil"
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '50px',
          pointerEvents: 'none',
          zIndex: 100, // Above canvas, below buttons/menu if needed
        }}
      />
    </>
  );
};

export default PencilTrail;
