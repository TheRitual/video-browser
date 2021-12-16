import { ButtonContainer, DirIcon, IconContainer, Menu, Title, VideoButton } from "./styled";
import { useState } from "react";

const List = ({ moviesList, onLoadFile, onChangeDir }) => {
    const [active, setActive] = useState(null);

    const onClickHandler = (movie, index) => {
        onLoadFile(movie);
        setActive(index);
    }

    return (
        <Menu>
            <Title>Videos</Title>
            <ButtonContainer>
                <IconContainer>
                    <DirIcon onClick={onChangeDir} />
                </IconContainer>
                {moviesList.map((movie, index) => {
                    return <VideoButton key={index} active={index === active} onClick={() => onClickHandler(movie, index)}>{movie.substring(0, movie.length - 4)}</VideoButton>
                })}
            </ButtonContainer>
        </Menu>
    );
}

export default List;