import { ButtonContainer, Menu, Title, VideoButton } from "./styled";
import useMoviesList from "../../utils/useMoviesList";

const List = () => {
    const moviesList = useMoviesList();

    return (
        <Menu>
            <Title>Videos</Title>
            <ButtonContainer>
            {moviesList.map((movie, index) => {
                return <VideoButton key={index}>{movie}</VideoButton>
            })}
            </ButtonContainer>
        </Menu>
    );
}

export default List;