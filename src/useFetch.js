import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    // can be used to fetch data
    // npx json-server --watch data/db.json --port 8000
    useEffect(() => {
        console.log("Runs when dom changes?");
        fetch(url).then(
            (response) => {
                // console.log(response);
                if (!response.ok) {
                    throw Error("Error: Couldnt fetch data for that resource");
                }
                return response.json()
            })
            .then((data) => {
                setTimeout(() => {
                    setIsPending(false);
                    setError(null);
                    setData(data);
                }, 1000);
            }).catch((err) => {
                console.log(err.message);
                setIsPending(false);
                setError(err.message);
            });
    
    }, [url])
    return { data, isPending, error }

}

export default useFetch;