import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData]       = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not loading the data from resource or input value is wrong...');
                }
                return res.json();
            })
            .then(weather => {
                setData(weather);
                setLoading(false);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError') {
                    console.log('Fetch Aborted');
                } else {
                    setLoading(false);
                    setError(err.message);
                }
            });
            return () => abortCont.abort();
    }, [url]);

    return {data, loading, error};
}

export default useFetch;