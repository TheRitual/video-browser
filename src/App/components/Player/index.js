import ReactPlayer from "react-player";
import { Dummy, PlayerContainer, Title } from "./styled";

const Player = ({ fileName, dir }) => {
    const file = { src: './' + dir + '/' + fileName, type: 'video/mp4' };
    return (
        <PlayerContainer>
            {fileName && <Title>{fileName.substring(0, fileName.length - 4)}</Title>}
            {fileName ?
                <ReactPlayer controls playing width="100%" height="100%" url={[file]} />
                :
                <Dummy />
            }
        </PlayerContainer>
    );
}

export default Player;