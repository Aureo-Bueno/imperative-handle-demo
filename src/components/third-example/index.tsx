import { forwardRef, useImperativeHandle, useRef, useState } from "react";

type BoxHandle = {
  start: () => void;
  stop: () => void;
  reset: () => void;
};

const AnimatedBox = forwardRef<BoxHandle>((_, ref) => {
  const [position, setPosition] = useState(0);
  const animationRef = useRef<number | undefined>(undefined);

  const animate = () => {
    setPosition((prev) => prev + 2);
    animationRef.current = requestAnimationFrame(animate);
  };

  useImperativeHandle(ref, () => ({
    start() {
      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    },
    stop() {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = undefined;
      }
    },
    reset() {
      setPosition(0);
    },
  }));

  return (
    <div
      style={{
        width: 50,
        height: 50,
        background: "tomato",
        transform: `translateX(${position}px)`,
      }}
    />
  );
});

export function ThirdExample() {
  const boxRef = useRef<BoxHandle>(null);

  return (
    <div>
      <p>
        Exemplo de animação controlada imperativamente: iniciar, parar e resetar
      </p>
      <AnimatedBox ref={boxRef} />
      <div style={{ marginTop: 10 }}>
        <button onClick={() => boxRef.current?.start()}>Iniciar</button>
        <button onClick={() => boxRef.current?.stop()}>Parar</button>
        <button onClick={() => boxRef.current?.reset()}>Resetar</button>
      </div>
    </div>
  );
}
