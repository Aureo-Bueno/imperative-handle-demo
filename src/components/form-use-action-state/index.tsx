
import { useActionState, useState, useEffect } from "react";

type FormState = {
  name: string;
  email: string;
  age: string;
  city: string;
  loading: boolean;
  response?: Record<string, unknown>;
  error?: string;
};

async function sendFormData(prevState: FormState, formData: FormData): Promise<FormState> {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    age: formData.get("age"),
    city: formData.get("city"),
  };

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Erro na requisição: ${res.status}`);
    }

    const json = await res.json();
    return { ...prevState, loading: false, response: json };
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Ocorreu um erro desconhecido";
    return { ...prevState, loading: false, error: errorMessage };
  }
}

export default function MyForm() {
  const initialState: FormState = {
    name: "",
    email: "",
    age: "",
    city: "",
    loading: false,
  };

  const [state, formAction] = useActionState(sendFormData, initialState);
  const [form, setForm] = useState<{
    name: string;
    email: string;
    age: string;
    city: string;
  }>({
    name: "",
    email: "",
    age: "",
    city: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (state.response) {
      setForm({ name: "", email: "", age: "", city: "" });
    }
  }, [state.response]);

  return (
    <form
      action={async (formData: FormData) => {
        await formAction(formData);
      }}
      className="flex flex-col gap-4 max-w-sm"
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nome"
        required
        className="border p-2"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="border p-2"
      />
      <input
        type="number"
        name="age"
        value={form.age}
        onChange={handleChange}
        placeholder="Idade"
        required
        className="border p-2"
      />
      <input
        name="city"
        value={form.city}
        onChange={handleChange}
        placeholder="Cidade"
        required
        className="border p-2"
      />

      <button
        type="submit"
        disabled={state.loading}
        className="bg-blue-500 text-white p-2"
      >
        {state.loading ? "Enviando..." : "Enviar"}
      </button>

      {state.response && (
        <pre className="bg-gray-100 p-2">{JSON.stringify(state.response, null, 2)}</pre>
      )}
      {state.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
}
