import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App";

interface Props{
    gameQuery: GameQuery
}
const GameHeading = ({gameQuery}:Props) => {
    const headings = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
    return(
        <Heading marginY={5} as='h1'>
            {headings}
        </Heading>
    )
}
export default GameHeading;