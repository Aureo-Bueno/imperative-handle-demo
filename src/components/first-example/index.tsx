import { forwardRef, useImperativeHandle, useRef, useState } from "react";

type InputHandle = {
  clear: () => void;
};

const CustomInput = forwardRef<InputHandle>((_, ref) => {
  const [value, setValue] = useState("");

  useImperativeHandle(ref, () => ({
    clear() {
      setValue("");
    },
  }));

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Digite algo"
    />
  );
});

export function FirstExample() {
  const inputRef = useRef<InputHandle>(null);

  return (
    <div>
      <p>Exemplo de input controlado com botão para limpar o campo</p>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current?.clear()}>Limpar</button>
    </div>
  );
}
