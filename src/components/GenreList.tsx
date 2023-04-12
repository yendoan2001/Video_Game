import  useGenres from "../hooks/useGenres";
import  {Genre} from "../hooks/useGenres";
import {List, ListItem, Image, HStack, Spinner, Button, Heading} from '@chakra-ui/react';
import getCroppedImageUrl from "../services/image-url";

interface Props{
    onSelectGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}
const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
    const {data, isLoading, error} = useGenres();
    if(error) return null;
    if(isLoading)  return <Spinner/>
    return(
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {data.map(genre=>
                    <ListItem key={genre.id}>
                        <HStack paddingY={2}>
                            <Image boxSize='32px'
                                   borderRadius={8}
                                   objectFit='cover'
                                   src={getCroppedImageUrl(genre.image_background)}/>
                            <Button whiteSpace='normal' textAlign='left'fontWeight={genre.id===selectedGenre?.id ? 'bold':'normal'} onClick={() => onSelectGenre(genre)} variant='link' fontSize='lg'>
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>)}
            </List>
        </>
    )
}
export default GenreList