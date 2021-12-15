import ReactPlayer from "react-player";
import { PlayerContainer } from "./styled";

const Player = ({ fileName }) => {
    const file = './mp4/' + fileName;
    return (
        <PlayerContainer>
            <ReactPlayer controls playing width="100%" height="100%" url={file} />
        </PlayerContainer>
    );
}

export default Player;