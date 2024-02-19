import { Box, Hide, Show, Image } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';

function Page6 () {
    return(
        <Box 
        mt="20px"
        w="100%"
        h="482px"
        pos="relative"
        display="flex"                
        bgPosition="80% 0%"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgImage="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section6_TwoWomen.png"
        >
            <Box w={{ base:"95%", md:"50%" }} h="90%" p="16px" gap={{ base:"11px", md:"16px", xl:"20px"}} borderRadius="8px" 
            bgColor={{ base:"rgba(255, 255, 255, 0.95)",md:"#fff" }}
            display="flex"
            flexDirection="column" 
            justifyContent="space-between"
            position="absolute"
            transform="translate(-50%,-50%)"
            top="50%" 
            left={{ base:"50%",md:"28%" }}
            >


                {/* Title */}
                <Box m={{ base:"4px 0 0 0", md:"10px 0 0 16px" }} color="#313030" fontFamily="Poppins" fontSize={{ base:"20px",md:"32px" }} fontWeight="700" lineHeight={{ base:"30px",md:"48px" }}>
                    <chakra.h5>About BaoDao Talk</chakra.h5>
                </Box>


                {/* Content */}
                <Box m={{ md:"0 0  0 16px", xl:"0 49px 0 16px"}} color="#313030" fontFamily="Roboto" fontSize="16px" fontWeight="400" lineHeight="24px" justifyContent="space-between">
                    <p>"寶島 BaoDao" means "beautiful and rich island" which is another name represents Taiwan. </p><br/>
                    <p>We promote Taiwanese culture and Mandarin, offering professional Mandarin learning services to help people know more about Taiwan, and experience its unique culture.</p><br/>
                    <p>Join us in embracing the beauty of Taiwan and sharing the spirit of "BaoDao" with the world.</p>
                </Box>



                {/* Start Btn */}
                <Box
                m={{ md:"0 16px 24px 16px" }}
                p={{ base:"8px 0px" }}
                w={{ base:"100%", md:"50%" }}
                h={{ md:"48px" }}
                display="flex"
                justifyContent="center" 
                alignItems="center" 
                borderRadius="4px" 
                bgColor="#7156E5"
                color="#fff" 
                fontFamily="Roboto" 
                fontSize={{ base:"13px",md:"15px" }}
                fontWeight="700" 
                lineHeight={{ base:"22px",md:"26px" }}
                >
                    <Hide above='md'><button>Get Started</button></Hide>
                    <Show above='md'><button style={{ display:"contents" }}>Start learning</button></Show>
                </Box>
            </Box>
        </Box>
    )
}

export default Page6;