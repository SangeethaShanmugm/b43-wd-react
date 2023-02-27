import { useGlobalContext } from "./useGlobalContext";

export function Sample2() {
  const name = useGlobalContext();
  return (
    <div>
      <h2>Hello {name}</h2>
    </div>
  );
}
