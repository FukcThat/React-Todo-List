import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue, hydrator) {
  const [state, setState] = useState(() => {
    const item = localStorage.getItem(key);
    if (item) {
      const parsedItem = JSON.parse(item);
      return Array.isArray(parsedItem)
        ? parsedItem.map(hydrator)
        : initialValue;
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
}
