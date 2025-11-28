const getData = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/changes?page=1",
    {
      method: "GET",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzNhMTIxMDYyNTU4NjBhMWI5YzhmMjgxMmI0MmRmNyIsIm5iZiI6MTc2MzUyMzc4My4wNDQ5OTk4LCJzdWIiOiI2OTFkM2NjNzI4NGU4MTdkMTU3YWQ2YmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mfl-GQGp-ReV8ZU3_05ivKG90EVZD8w5trYvvNnpjow",
        accept: "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
};
getData();
