import { ButtonContainer, Menu, Title, VideoButton } from "./styled";
import useMoviesList from "../../utils/useMoviesList";
import { useState } from "react";

const List = ({ onLoadFile }) => {
    const moviesList = useMoviesList();
    const [active, setActive] = useState(null);

    const onClickHandler = (movie, index) => {
        onLoadFile(movie);
        setActive(index);
    }

    return (
        <Menu>
            <Title>Videos</Title>
            <ButtonContainer>
                {moviesList.map((movie, index) => {
                    return <VideoButton key={index} active={index === active} onClick={() => onClickHandler(movie, index)}>{movie.substring(0, movie.length - 4)}</VideoButton>
                })}
            </ButtonContainer>
        </Menu>
    );
}

export default List;