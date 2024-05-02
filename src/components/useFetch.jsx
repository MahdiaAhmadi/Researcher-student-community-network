import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error(" could not fetch, the resource is unavailable");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setisLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortEvent") {
            console.log("Fetch aborted");
          } else {
            setError(err.message);
            setisLoading(false);
          }
        });
    }, 1000);
    return () => {
      abortCont.abort();
    };
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
