import { useState, useEffect } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch. Status: ${res.status}`);

        const json = await res.json();
        setData(json.data ?? json); // Strapi wraps the response in a "data" object

      } catch (err) {
        console.error("Error fetching data:", (err as Error).stack);
      } finally {
      }
    }

    fetchData();
  }, [url]);

  return { data };
}