import { ButtonContainer, Menu, Title, VideoButton } from "./styled";
import useMoviesList from "../../utils/useMoviesList";

const List = ({ onLoadFile }) => {
    const moviesList = useMoviesList();

    return (
        <Menu>
            <Title>Videos</Title>
            <ButtonContainer>
                {moviesList.map((movie, index) => {
                    return <VideoButton key={index} onClick={() => onLoadFile(movie)}>{movie.substring(0, movie.length - 4)}</VideoButton>
                })}
            </ButtonContainer>
        </Menu>
    );
}

export default List;