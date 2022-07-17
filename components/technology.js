import { Box } from '@chakra-ui/react'
import Image from 'next/image'

const Technology = ({thumbnail, children }) => {
    return (
        <Box w="100%" textAlign="center" mb={16}>
            <Image
                src={thumbnail}
                placeholder="blur"
            />
        </Box>
    )
}

export default Technology
