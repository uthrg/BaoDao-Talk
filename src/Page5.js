import { Box } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import {
    Slider,
    SliderTrack,
    SliderFilledTrack} from '@chakra-ui/react'

function Page5 () {
    return (
        <Box
        w="90%"
        pos="relative"
        transform="translate(-50%, 0%)"
        left="50%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between" 
        >
            <Box color="#313030" fontFamily="Poppins" fontSize="20px" fontWeight="700" lineHeight="30px" >
                <chakra.h5>Specially designed interactive materials for students at all levels</chakra.h5>
            </Box>

            <Box mt="3"  borderRadius="8px" boxShadow={"0px 4px 10px 0px rgba(0, 0, 0, 0.13)"} bgSize="cover">
                <Image borderRadius="8px" w="100%" bgSize="cover" 
                // src="https://s3-alpha-sig.figma.com/img/47bd/bb2f/3e888eea1c4081f4c2da1f92db8aef56?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PMoKcsihtSo9csc3tx~SV0qMnn-qHzJPfrqx3QaZPzSSMcHiOrGZU2ITFGCeTd4~yysRMBN2tX0a7PygFsFEnetB01e6iTPReY214-isInHNO5NSVEPhqKQ-yvdxdrs5pTLKTrvkQYzSp3fhNOiGuzteRFiNy-dbdGt-62X7B1SIVCbvXlx4YrKpfJ4eUSXU~RKU76K85J2kMC9vL51la1nQfBmS-8rOUp86rgzFlwQyRhomKm2pwJhu-cCrwu80scm1F4yYgRY8qnX2oPJ0oi7fdYrVgJOWQzVgNB5nrOIv6epminaOK9QwwF0jDDZu1AgVoj4VpbceAEitALSgsw__" alt="picture"
                src="/Image/台灣飲食文化.png"
                alt="台灣飲食文化"
                ></Image>
            </Box>
            <Box mt="8" color="#7156E5" fontFamily="Roboto" fontSize="20px" fontWeight="500" lineHeight="24px">
                <p>Spiral curriculum design</p>
            </Box>
            <Box mt="3" color="#313030" fontFamily="Roboto" fontSize="16px" fontWeight="400" lineHeight="24px">
                <p>Integrating and expanding new and old concepts for complete understanding</p>
            </Box>

            <Slider mt="5" mb="5" aria-label='slider-ex-2' colorScheme='purple' defaultValue={30}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            {/* <SliderThumb /> */}
            </Slider>
        </Box>
    )
}

export default Page5;