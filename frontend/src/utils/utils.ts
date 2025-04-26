
/**
 * Fetch data from a Strapi API endpoint.
 * 
 * @param url - The URL of the Strapi API endpoint to fetch data from.
 * @returns The data from the API or null in case of an error.
 */
export async function fetchStrapi(url: string) {
  try {
    const res = await fetch(url, { cache: 'force-cache' });
    if (res.ok) {
      const data = await res.json().then((m) => m.data); // Strapi wraps the response in a "data" object
      return data;
    }
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return null;
  }
}
