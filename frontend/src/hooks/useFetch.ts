import { useState, useEffect } from 'react';


/**
 * A custom hook to fetch data from an API endpoint.
 * This hook handles the fetching of data from the provided URL and returns the data once it has been loaded.
 *
 * @param {string} url - The URL from which to fetch the data.
 *
 * @returns {Object} An object containing the fetched data:
 *   - `data`: The fetched data, or `null` if the data is not available yet or there was an error.
 */

export default function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    async function fetchData(fetchUrl: string) {
      try {
        console.log('Fetching data from:', fetchUrl);
        const res = await fetch(fetchUrl);
        if (!res.ok) throw new Error(`Failed to fetch. Status: ${res.status}`);

        const json = await res.json();
        setData(json.data ?? json);
      } catch (err) {
        console.error('Error fetching data:', (err as Error).stack);
      }
    }

    fetchData(url);
  }, [url]);

  return { data };
}
