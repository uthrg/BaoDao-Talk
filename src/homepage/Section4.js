import { Box, Hide, Show, Image } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';

function Page4 () {
    return(
        <Box
        width="95%"
        pos="relative"
        transform="translate(-50%, 0%)"
        left="50%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"          
        >

            {/* 手機標題 */}
            <Hide above='md'>
                <Box m="3" color="#313030" fontFamily="Poppins" fontSize="20px" fontWeight="700" lineHeight="30px">
                    <chakra.h5>Book your lesson in 3 easy steps with BaoDao Talk</chakra.h5>
                </Box>
            </Hide>

            {/* 電腦標題 */}
            <Show above='md'>
                <Box m="5" color="#313030" fontFamily="Poppins" fontSize="32px" fontWeight="700" lineHeight="48px" textAlign="center">
                    <chakra.h3>Book your lesson in 3 easy steps with BaoDao Talk</chakra.h3>
                </Box>
            </Show>


            <Box mt={{ base:"12px", md:"20px"}} display={{ md:"flex" }}>

                {/* 圖片 */}
                <Box 
                w={{ base:"100%",md:"45%" }}
                h={{ base:"200px",md:"394px"}} 
                bgRepeat="no-repeat" bgSize="contain" 
                bgPos="center"
                bgImage="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section4_HiTeacher.png"
                />


                {/* 內容 */}
                <Box w={{ base:"100%", md:"55%" }} display={{ md:"flex" }} flexWrap={{ md:"wrap" }}>

                    {/* 1 */}
                    <Box mt={{ base:"12px", md:"0" }} display="flex">

                        {/* Mobile Icon*/}
                        <Hide above='md'>
                            <Box borderRadius="50%" w="42px" h="42px" bgColor="#" position="relative">
                                <svg xmlns="/image/Oval.svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#C5BAF4"/>
                                </svg>
                                <Box position="absolute"  transform="translate(-60%, -60%)" top="50%" left="50%"
                                    w="6.72px" h="25.28px" color="#7156E5" fontFamily="Poppins" fontSize="20px" fontWeight="700" lineHeight="30px">
                                    <chakra.h5>1</chakra.h5>
                                </Box>
                            </Box>
                        </Hide>

                        {/* Desktop Icon */}
                        <Show above='md'>
                            <Box borderRadius="50%" w="50px" h="50px" bgColor="#" position="relative">
                                <svg xmlns="/image/Oval.svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M25 50.2822C38.8071 50.2822 50 39.0724 50 25.2443C50 11.4162 38.8071 0.20636 25 0.20636C11.1929 0.20636 0 11.4162 0 25.2443C0 39.0724 11.1929 50.2822 25 50.2822Z" fill="#C5BAF4"/>
                                </svg>
                                <Box position="absolute"  transform="translate(-60%, -60%)" top="50%" left="50%"
                                    w="6.72px" h="25.28px" color="#7156E5" fontFamily="Poppins" fontSize="20px" fontWeight="700" lineHeight="30px">
                                    <chakra.h5>1</chakra.h5>
                                </Box>
                            </Box>
                        </Show>

                        {/* Content */}
                        <Box ml={{ base:"5px", md:"32px" }}>
                            <Box color="#121212" fontFamily="Poppins" fontSize="20px" fontWeight="500" lineHeight="30px">
                                <p>Choose a tutor</p>
                            </Box>
                            <Box w={{ base:"100%", md:"70%" }} color="313030" fontFamily="Roboto" fontSize={{ base:"12px", md:"16px"}} fontWeight="400" lineHeight={{ base:"18px", md:"24px" }}>
                                <p>Explore tutors and review their background, expertise and experience. You can also message a tutor to personalize your lessons and communicate your specific needs.</p>
                            </Box>
                        </Box>
                    </Box>

                    {/* 2 */}
                    <Box mt={{ base:"12px", md:"40px" }} display="flex">
                        
                        {/* Mobile Icon*/}
                        <Hide above='md'>
                            <Box borderRadius="50%" w="42px" h="42px" bgColor="#" position="relative">
                                <svg xmlns="/image/Oval.svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#C5BAF4"/>
                                </svg>
                                <Box position="absolute"  transform="translate(-50%, -50%)" top="45%" left="45%"
                                    w="6.72px" h="25.28px" color="#7156E5" fontFamily="Poppins" fontSize="20px" fontWeight="700" lineHeight="30px">
                                    <chakra.h5>2</chakra.h5>
                                </Box>
                            </Box>
                        </Hide>

                        {/* Desktop Icon */}
                        <Show above='md'>
                            <Box borderRadius="50%" w="50px" h="50px" bgColor="#" position="relative">
                                <svg xmlns="/image/Oval.svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M25 50.2822C38.8071 50.2822 50 39.0724 50 25.2443C50 11.4162 38.8071 0.20636 25 0.20636C11.1929 0.20636 0 11.4162 0 25.2443C0 39.0724 11.1929 50.2822 25 50.2822Z" fill="#C5BAF4"/>
                                </svg>
                                <Box position="absolute"  transform="translate(-50%, -50%)" top="45%" left="45%"
                                    w="6.72px" h="25.28px" color="#7156E5" fontFamily="Poppins" fontSize="20px" fontWeight="700" lineHeight="30px">
                                    <chakra.h5>2</chakra.h5>
                                </Box>
                            </Box>
                        </Show>

                        {/* Content */}
                        <Box ml={{ base:"5px", md:"32px" }}>
                            <Box color="#121212" fontFamily="Poppins" fontSize="20px" fontWeight="500" lineHeight="30px">
                                <p>Select a time and schedule a class</p>
                            </Box>
                            <Box w={{ base:"100%", md:"70%" }} color="313030" fontFamily="Roboto" fontSize={{ base:"12px", md:"16px"}} fontWeight="400" lineHeight={{ base:"18px", md:"24px" }}>
                                <p>Select a time slot and schedule a one-on-one lesson. You have the flexibility to cancel or reschedule up to 12 hours before your class.</p>
                            </Box>
                        </Box>
                    </Box>

                    {/* 3 */}
                    <Box mt={{ base:"12px", md:"40px" }} display="flex">
                        
                        {/* Mobile Icon*/}
                        <Hide above='md'>
                            <Box borderRadius="50%" w="42px" h="42px" bgColor="#" position="relative">
                                <svg xmlns="/image/Oval.svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#C5BAF4"/>
                                </svg>
                                <Box position="absolute"  transform="translate(-50%, -50%)" top="45%" left="45%"
                                    w="6.72px" h="25.28px" color="#7156E5" fontFamily="Poppins" fontSize="20px" fontWeight="700" lineHeight="30px">
                                    <chakra.h5>3</chakra.h5>
                                </Box>
                            </Box>
                        </Hide>

                        {/* Desktop Icon */}
                        <Show above='md'>
                            <Box borderRadius="50%" w="50px" h="50px" bgColor="#" position="relative">
                                <svg xmlns="/image/Oval.svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M25 50.2822C38.8071 50.2822 50 39.0724 50 25.2443C50 11.4162 38.8071 0.20636 25 0.20636C11.1929 0.20636 0 11.4162 0 25.2443C0 39.0724 11.1929 50.2822 25 50.2822Z" fill="#C5BAF4"/>
                                </svg>
                                <Box position="absolute"  transform="translate(-50%, -50%)" top="45%" left="45%"
                                    w="6.72px" h="25.28px" color="#7156E5" fontFamily="Poppins" fontSize="20px" fontWeight="700" lineHeight="30px">
                                    <chakra.h5>3</chakra.h5>
                                </Box>
                            </Box>
                        </Show>

                        {/* Content */}
                        <Box ml={{ base:"5px", md:"32px" }}>
                            <Box color="#121212" fontFamily="Poppins" fontSize="20px" fontWeight="500" lineHeight="30px">
                                <p>Top-up your points</p>
                            </Box>
                            <Box w={{ base:"100%", md:"100%" }} color="313030" fontFamily="Roboto" fontSize={{ base:"12px", md:"16px"}} fontWeight="400" lineHeight={{ base:"18px", md:"24px" }}>
                                <p>Add points to your account for instant checkout.</p>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>

            {/* Btn */}
            <Box
                m={{ base:"20px 0", md:"48px 0" }}
                p={{ base:"8px 24px", md:"11px 76px"}} 
                w={{ base:"95%", md:"300px" }}
                justifyContent="center" 
                alignItems="center" 
                position="relative"
                transform="translate(-50%, 0%)"
                left="50%"
                borderRadius="4px" 
                bgColor="#7156E5"
                color="#ffffff"
                fontFamily="Roboto"
                fontSize={{ base:"13px", md:"15px" }}
                fontWeight="700"
                lineHeight={{ base:"22px", md:"24px" }}
                textAlign="center">
                <chakra.button>Book your lesson now</chakra.button>
            </Box>
            
        </Box>
    )
}

export default Page4;