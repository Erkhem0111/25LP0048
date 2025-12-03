export const getData = async (apiEndpoint: string) => {
  const res = await fetch(`${process.env.TMDB_BASE_URL}${apiEndpoint}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
    },
  });
  const data = await res.json();
  return data;
};
