import { HStack, useColorMode} from "@chakra-ui/react";
import { Switch } from '@chakra-ui/react'

const ColorModeSwitch= () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <HStack>
            <Switch colorScheme='green' isChecked={colorMode=='dark'} onChange={toggleColorMode}/>
        </HStack>

    )
}
export default ColorModeSwitch;
