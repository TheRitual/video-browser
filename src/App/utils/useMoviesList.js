import { useEffect, useState } from "react";

const useMoviesList = (password) => {
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        fetch('./file_list.php', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pwd: password,
            }),
        }).then(response => response.json())
            .then(data => setMoviesList(data));
    }, []);


    return moviesList;
}

export default useMoviesList;