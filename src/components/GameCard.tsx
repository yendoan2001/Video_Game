import {Games} from "../hooks/useGames";
import {Card, CardBody, Text, Image, Heading, SimpleGrid} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/image-url";
interface Props{
    game: Games;
}
const GameCard = ({game}:Props) =>{
    return(
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <PlatformIconList platform={game.parent_platforms.map(p=>(p.platform))}/>
            </CardBody>
        </Card>
    )
}
export default GameCard