import { Icon, HStack} from "@chakra-ui/react";
import {FaWindows,FaApple, FaLinux, FaXbox, FaAndroid} from 'react-icons/fa'
import {MdPhone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe, BsPlaystation} from "react-icons/bs";
import {Platform} from "../hooks/useGames";
import {IconType} from "react-icons";
interface Props{
    platform: Platform[]
}
const PlatformIconList = ({platform}:Props) =>{
    const iconMap: {[key: string]: IconType}= {
        pc: FaWindows,
        playStation: BsPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhone,
        android: FaAndroid,
        web: BsGlobe
    }

    return(
        <HStack marginY={'10px'} >
            {platform.map((platform) => (
                    <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'></Icon>
            ))}
        </HStack>

    )
}
export default PlatformIconList;