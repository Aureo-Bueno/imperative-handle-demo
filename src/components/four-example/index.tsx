import { forwardRef, useImperativeHandle, useRef, useState } from "react";

type SearchInputHandle = {
  clear: () => void;
  search: () => void;
  getValue: () => string;
};

const SearchInput = forwardRef<SearchInputHandle>((_, ref) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const fetchResults = async (query: string) => {
    setLoading(true);
    setResults([]);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setResults([`Resultado 1 para "${query}"`, `Resultado 2 para "${query}"`]);
    setLoading(false);
  };

  useImperativeHandle(ref, () => ({
    clear() {
      setValue("");
      setResults([]);
    },
    search() {
      if (value.trim()) {
        fetchResults(value);
      }
    },
    getValue() {
      return value;
    },
  }));

  return (
    <div>
      <input
        placeholder="Digite para buscar..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {loading && <p>🔄 Buscando...</p>}
      {!loading && results.length > 0 && (
        <ul>
          {results.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
});

export function FourExample() {
  const searchRef = useRef<SearchInputHandle>(null);

  const handleManualSearch = () => {
    searchRef.current?.search();
  };

  const handleClear = () => {
    searchRef.current?.clear();
  };

  const handleGetValue = () => {
    alert(`Valor atual: ${searchRef.current?.getValue()}`);
  };

  return (
    <div>
      <p>
        Exemplo de input de busca com métodos imperativos: buscar, limpar e
        obter valor
      </p>
      <SearchInput ref={searchRef} />
      <div style={{ marginTop: 10 }}>
        <button onClick={handleManualSearch}>🔍 Buscar</button>
        <button onClick={handleClear}>❌ Limpar</button>
        <button onClick={handleGetValue}>📋 Obter Valor</button>
      </div>
    </div>
  );
}
