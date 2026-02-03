import { useEffect, useRef, useCallback } from "react";

function hexToRgba(hex, alpha = 1) {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  let h = hex.replace("#", "");
  if (h.length === 3) {
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const int = parseInt(h, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const ElectricBorder = ({
  children,
  color = "#5227FF",
  speed = 1,
  chaos = 0.12,
  borderRadius = 9999,
  thickness = 2,
  className,
  style,
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const timeRef = useRef(0);
  const lastFrameTimeRef = useRef(0);

  const random = useCallback((x) => {
    return (Math.sin(x * 12.9898) * 43758.5453) % 1;
  }, []);

  const noise2D = useCallback(
    (x, y) => {
      const i = Math.floor(x);
      const j = Math.floor(y);
      const fx = x - i;
      const fy = y - j;

      const a = random(i + j * 57);
      const b = random(i + 1 + j * 57);
      const c = random(i + (j + 1) * 57);
      const d = random(i + 1 + (j + 1) * 57);

      const ux = fx * fx * (3.0 - 2.0 * fx);
      const uy = fy * fy * (3.0 - 2.0 * fy);

      return (
        a * (1 - ux) * (1 - uy) +
        b * ux * (1 - uy) +
        c * (1 - ux) * uy +
        d * ux * uy
      );
    },
    [random],
  );

  const octavedNoise = useCallback(
    (
      x,
      octaves,
      lacunarity,
      gain,
      baseAmplitude,
      baseFrequency,
      time,
      seed,
      baseFlatness,
    ) => {
      let y = 0;
      let amplitude = baseAmplitude;
      let frequency = baseFrequency;

      for (let i = 0; i < octaves; i++) {
        let octaveAmplitude = amplitude;
        if (i === 0) {
          octaveAmplitude *= baseFlatness;
        }
        y +=
          octaveAmplitude *
          noise2D(frequency * x + seed * 100, time * frequency * 0.3);
        frequency *= lacunarity;
        amplitude *= gain;
      }

      return y;
    },
    [noise2D],
  );

  const getCornerPoint = useCallback(
    (centerX, centerY, radius, startAngle, arcLength, progress) => {
      const angle = startAngle + progress * arcLength;
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    },
    [],
  );

  const getRoundedRectPoint = useCallback(
    (t, left, top, width, height, radius) => {
      const straightWidth = width - 2 * radius;
      const straightHeight = height - 2 * radius;
      const cornerArc = (Math.PI * radius) / 2;
      const totalPerimeter =
        2 * straightWidth + 2 * straightHeight + 4 * cornerArc;
      const distance = t * totalPerimeter;

      let accumulated = 0;

      if (distance <= accumulated + straightWidth) {
        const progress = (distance - accumulated) / straightWidth;
        return { x: left + radius + progress * straightWidth, y: top };
      }
      accumulated += straightWidth;

      if (distance <= accumulated + cornerArc) {
        const progress = (distance - accumulated) / cornerArc;
        return getCornerPoint(
          left + width - radius,
          top + radius,
          radius,
          -Math.PI / 2,
          Math.PI / 2,
          progress,
        );
      }
      accumulated += cornerArc;

      if (distance <= accumulated + straightHeight) {
        const progress = (distance - accumulated) / straightHeight;
        return { x: left + width, y: top + radius + progress * straightHeight };
      }
      accumulated += straightHeight;

      if (distance <= accumulated + cornerArc) {
        const progress = (distance - accumulated) / cornerArc;
        return getCornerPoint(
          left + width - radius,
          top + height - radius,
          radius,
          0,
          Math.PI / 2,
          progress,
        );
      }
      accumulated += cornerArc;

      if (distance <= accumulated + straightWidth) {
        const progress = (distance - accumulated) / straightWidth;
        return {
          x: left + width - radius - progress * straightWidth,
          y: top + height,
        };
      }
      accumulated += straightWidth;

      if (distance <= accumulated + cornerArc) {
        const progress = (distance - accumulated) / cornerArc;
        return getCornerPoint(
          left + radius,
          top + height - radius,
          radius,
          Math.PI / 2,
          Math.PI / 2,
          progress,
        );
      }
      accumulated += cornerArc;

      if (distance <= accumulated + straightHeight) {
        const progress = (distance - accumulated) / straightHeight;
        return {
          x: left,
          y: top + height - radius - progress * straightHeight,
        };
      }
      accumulated += straightHeight;

      const progress = (distance - accumulated) / cornerArc;
      return getCornerPoint(
        left + radius,
        top + radius,
        radius,
        Math.PI,
        Math.PI / 2,
        progress,
      );
    },
    [getCornerPoint],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const octaves = 10;
    const lacunarity = 1.6;
    const gain = 0.7;
    const amplitude = chaos;
    const frequency = 10;
    const baseFlatness = 0;
    const displacement = Math.max(4, chaos * 80);
    const borderOffset = Math.max(2, thickness);

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // reset transform here; we'll set correct scale each frame
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      return { width, height };
    };

    let { width, height } = updateSize();

    const drawElectricBorder = (currentTime) => {
      if (!canvas || !ctx) return;

      const deltaTime = (currentTime - lastFrameTimeRef.current) / 1000;
      timeRef.current += deltaTime * speed;
      lastFrameTimeRef.current = currentTime;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = color;
      ctx.lineWidth = Math.max(1, thickness);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      const scale = displacement;
      const padding = borderOffset;
      const left = padding;
      const top = padding;
      const borderWidth = Math.max(1, width - 2 * padding);
      const borderHeight = Math.max(1, height - 2 * padding);

      // detect computed border radius to switch to circle drawing
      const cs = window.getComputedStyle(container);
      const brPx = parseFloat(cs.borderTopLeftRadius) || 0;
      const isCircle = brPx >= Math.min(borderWidth, borderHeight) / 2 - 0.5;

      ctx.beginPath();

      if (isCircle) {
        const centerX = left + borderWidth / 2;
        const centerY = top + borderHeight / 2;
        const radius = Math.max(
          2,
          Math.min(borderWidth, borderHeight) / 2 - Math.max(1, thickness) / 2,
        );
        const sampleCount = Math.max(
          32,
          Math.floor((2 * Math.PI * radius) / 2),
        );

        for (let i = 0; i <= sampleCount; i++) {
          const progress = i / sampleCount;
          const angle = progress * Math.PI * 2;
          const xNoise = octavedNoise(
            progress * 8,
            octaves,
            lacunarity,
            gain,
            amplitude,
            frequency,
            timeRef.current,
            0,
            baseFlatness,
          );
          const yNoise = octavedNoise(
            progress * 8,
            octaves,
            lacunarity,
            gain,
            amplitude,
            frequency,
            timeRef.current,
            1,
            baseFlatness,
          );

          const px = centerX + Math.cos(angle) * radius + xNoise * scale;
          const py = centerY + Math.sin(angle) * radius + yNoise * scale;

          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
      } else {
        const maxRadius = Math.min(borderWidth, borderHeight) / 2;
        const r = Math.min(borderRadius, maxRadius);
        const approximatePerimeter =
          2 * (borderWidth + borderHeight) + 2 * Math.PI * r;
        const sampleCount = Math.max(32, Math.floor(approximatePerimeter / 2));

        for (let i = 0; i <= sampleCount; i++) {
          const progress = i / sampleCount;
          const point = getRoundedRectPoint(
            progress,
            left,
            top,
            borderWidth,
            borderHeight,
            r,
          );

          const xNoise = octavedNoise(
            progress * 8,
            octaves,
            lacunarity,
            gain,
            amplitude,
            frequency,
            timeRef.current,
            0,
            baseFlatness,
          );
          const yNoise = octavedNoise(
            progress * 8,
            octaves,
            lacunarity,
            gain,
            amplitude,
            frequency,
            timeRef.current,
            1,
            baseFlatness,
          );

          const displacedX = point.x + xNoise * scale;
          const displacedY = point.y + yNoise * scale;

          if (i === 0) ctx.moveTo(displacedX, displacedY);
          else ctx.lineTo(displacedX, displacedY);
        }
      }

      ctx.closePath();
      ctx.stroke();

      animationRef.current = requestAnimationFrame(drawElectricBorder);
    };

    const resizeObserver = new ResizeObserver(() => {
      const newSize = updateSize();
      width = newSize.width;
      height = newSize.height;
    });
    resizeObserver.observe(container);

    animationRef.current = requestAnimationFrame(drawElectricBorder);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [
    color,
    speed,
    chaos,
    borderRadius,
    thickness,
    octavedNoise,
    getRoundedRectPoint,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block overflow-visible isolate ${className ?? ""}`}
      style={{ "--electric-border-color": color, borderRadius, ...style }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[2] block"
      />
      <div className="absolute inset-0 rounded-[inherit] pointer-events-none z-0 hidden">
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            border: `2px solid ${hexToRgba(color, 0.6)}`,
            filter: "blur(1px)",
          }}
        />
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{ border: `2px solid ${color}`, filter: "blur(4px)" }}
        />
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none -z-[1] scale-110 opacity-30"
          style={{
            filter: "blur(32px)",
            background: `linear-gradient(-30deg, ${color}, transparent, ${color})`,
          }}
        />
      </div>
      <div className="block rounded-[inherit] z-[1]">{children}</div>
    </div>
  );
};

export default ElectricBorder;
