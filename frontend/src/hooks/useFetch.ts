import { useState, useEffect } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    async function fetchData(fetchUrl: string) {
      try {
        console.log("Fetching data from:", fetchUrl);
        const res = await fetch(fetchUrl);
        if (!res.ok) throw new Error(`Failed to fetch. Status: ${res.status}`);

        const json = await res.json();
        setData(json.data ?? json);

      } catch (err) {
        console.error("Error fetching data:", (err as Error).stack);
      }
    }

    fetchData(url);

  }, [url]);

  return { data };
}
