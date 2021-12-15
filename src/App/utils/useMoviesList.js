import { useEffect, useState } from "react";

const useMoviesList = () => {
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        fetch('http://olafek.com/player/file_list.php')
            .then(response => response.json())
            .then(data => setMoviesList(data));
    }, []);


    return moviesList;
}

export default useMoviesList;