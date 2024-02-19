import { Box, Grid, Hide, Show, Image } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';
// import { image } from '@chalra-ui/react';

function Page3 () {
    return(
        <Box bgColor="#f5f6f9" pb={{ base:"0", md:"16" }}>       
        <Box 
        width="90%"
        position="relative"
        transform="translate(-50%, 0%)"
        left="50%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"       
        >

            {/* Title */}
            <Box m={{ base:"24px 0", md:"48px 0 24px 0"}} fontFamily="Poppins" color="#313030" fontSize={{ base:"20px", md:"32px"}} fontWeight="700" lineHeight={{ base:"30px", md:"48px"}} textAlign="center">
                <chakra.h5>Why learn with BaoDao Talk</chakra.h5>
            </Box>


            <Box display="flex" flexWrap="wrap">
                <Grid gap={{ base:"24px", md:"40px 160px"}} gridTemplateColumns={{ base:"auto",md:"1fr 1fr"}} margin="auto">


                    <Box display="flex"  justifyContent={{ md:"end" }}>

                        {/* 手機Icon */}
                        <Hide above='md'>
                            <Box borderRadius='50%' w="42px" h="42px" bg='#' position="relative">
                                    <svg xmlns="/image/Group 19962.svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#FEA32B"/>
                                    </svg>
                                <Box pos="absolute" transform="translate(-50%, -50%)" top="50%" left="50%">
                                    <svg xmlns="/image/bookopen.svg" width="22px" height="22px" viewBox="0 0 22 22" fill="none">
                                        <path d="M11.0001 17.7199H5.2881C4.34721 17.7199 3.87677 17.7199 3.51739 17.5368C3.20128 17.3757 2.94427 17.1187 2.78321 16.8026C2.6001 16.4432 2.6001 15.9728 2.6001 15.0319V6.96791C2.6001 6.02702 2.6001 5.55657 2.78321 5.1972C2.94427 4.88109 3.20128 4.62408 3.51739 4.46302C3.87677 4.27991 4.34721 4.27991 5.2881 4.27991H5.6241C7.50587 4.27991 8.44676 4.27991 9.16551 4.64613C9.79773 4.96826 10.3117 5.48227 10.6339 6.1145C11.0001 6.83324 11.0001 7.77413 11.0001 9.65591M11.0001 17.7199V9.65591M11.0001 17.7199H16.7121C17.653 17.7199 18.1234 17.7199 18.4828 17.5368C18.7989 17.3757 19.0559 17.1187 19.217 16.8026C19.4001 16.4432 19.4001 15.9728 19.4001 15.0319V6.96791C19.4001 6.02702 19.4001 5.55657 19.217 5.1972C19.0559 4.88109 18.7989 4.62408 18.4828 4.46302C18.1234 4.27991 17.653 4.27991 16.7121 4.27991H16.3761C14.4943 4.27991 13.5534 4.27991 12.8347 4.64613C12.2025 4.96826 11.6885 5.48227 11.3663 6.1145C11.0001 6.83324 11.0001 7.77413 11.0001 9.65591" stroke="#FE9000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Box>
                            </Box>
                        </Hide>


                        {/* 電腦Icon */}
                        <Show above='md'>
                            <Box borderRadius='50%' w="50px" h="50px" position="relative">
                                <svg xmlns="/image/Group 19962.svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="#FEA32B"/>
                                </svg>
                                <Box pos="absolute" transform="translate(-50%, -50%)" top="50%" left="50%">
                                    <svg xmlns="/image/bookopen.svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 20H5.2C4.07989 20 3.51984 20 3.09202 19.782C2.71569 19.5903 2.40973 19.2843 2.21799 18.908C2 18.4802 2 17.9201 2 16.8V7.2C2 6.07989 2 5.51984 2.21799 5.09202C2.40973 4.71569 2.71569 4.40973 3.09202 4.21799C3.51984 4 4.07989 4 5.2 4H5.6C7.84021 4 8.96031 4 9.81596 4.43597C10.5686 4.81947 11.1805 5.43139 11.564 6.18404C12 7.03968 12 8.15979 12 10.4M12 20V10.4M12 20H18.8C19.9201 20 20.4802 20 20.908 19.782C21.2843 19.5903 21.5903 19.2843 21.782 18.908C22 18.4802 22 17.9201 22 16.8V7.2C22 6.07989 22 5.51984 21.782 5.09202C21.5903 4.71569 21.2843 4.40973 20.908 4.21799C20.4802 4 19.9201 4 18.8 4H18.4C16.1598 4 15.0397 4 14.184 4.43597C13.4314 4.81947 12.8195 5.43139 12.436 6.18404C12 7.03968 12 8.15979 12 10.4" stroke="#FE9000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Box>
                            </Box>
                        </Show>

                        {/* Content */}
                        <Box ml={{ base:"16px", md:"20px"}}>
                            <Box color="#313030" fontFamily="Roboto" fontSize={{ base:"16px",md:"20px" }} fontWeight={{ base:"600", md:"700"}} lineHeight={{ base:"24px",md:"30px" }}>
                                <p>Well-structured Courses</p>
                            </Box>
                            <Box color="#6F6e6e" fontFamily="Roboto" fontSize={{ base:'14px', md:"16px" }} fontWeight="400" lineHeight={{ base:'22px', md:"24px" }}>
                                <p>Spiral curriculum revisits and builds upon previous lessons.</p>
                            </Box>
                        </Box>
                    </Box>


                    <Box display="flex"  justifyContent={{ md:"start" }}>

                        {/* 手機Icon */}
                        <Hide above='md'>
                            <Box borderRadius='50%' w='42px' h='42px' bg='#' position="relative"> 
                                <svg xmlns="/image/Group 19962.svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#FEA32B"/>
                                </svg>
                                <Box pos="absolute" transform="translate(-50%, -50%)" top="50%" left="50%">
                                <svg xmlns="/image/star.svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                    <path d="M19.4001 10.9997H17.7201M16.9397 16.9394L15.7518 15.7515M4.2801 10.9997H2.6001M6.24815 6.24799L5.06021 5.06005M11.0001 4.27973V2.59973M15.7518 6.24799L16.9397 5.06005M11.0001 19.3997V17.7197M5.06021 16.9394L6.24815 15.7515M11.0001 6.79973L12.2979 9.42893L15.2001 9.85313L13.1001 11.8985L13.5957 14.7881L11.0001 13.4231L8.4045 14.7881L8.9001 11.8985L6.8001 9.85313L9.7023 9.42893L11.0001 6.79973Z" stroke="#FE9000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Box>
                            </Box>                            
                        </Hide>

                        {/* 電腦Icon */}
                        <Show above='md'>
                            <Box borderRadius='50%' w="50px" h="50px" position="relative">
                                <svg xmlns="/image/Group 19962.svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="#FEA32B"/>
                                </svg>
                                <Box pos="absolute" transform="translate(-50%, -50%)" top="50%" left="50%">
                                <svg xmlns="/image/star.svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 12H20M19.071 19.0711L17.6567 17.6569M4 12H2M6.34292 6.34317L4.92871 4.92896M12 4V2M17.6567 6.34317L19.071 4.92896M12 22V20M4.92871 19.0711L6.34292 17.6569M12 7L13.545 10.13L17 10.635L14.5 13.07L15.09 16.51L12 14.885L8.91 16.51L9.5 13.07L7 10.635L10.455 10.13L12 7Z" stroke="#FE9000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                </Box>
                            </Box>
                        </Show>

                        {/* Content */}
                        <Box ml={{ base:"16px", md:"20px"}}>
                            <Box color="#313030" fontFamily="Roboto" fontSize={{ base:"16px",md:"20px" }} fontWeight={{ base:"600", md:"700"}} lineHeight={{ base:"24px",md:"30px" }}>
                                <p>Selected Tutors</p>
                            </Box>
                            <Box color="#6F6e6e" fontFamily="Roboto" fontSize={{ base:'14px', md:"16px" }} fontWeight="400" lineHeight={{ base:'22px', md:"24px" }}>
                                <p>Highly qualified and experienced Mandarin tutors carefully chosen by us.</p>
                            </Box>
                        </Box>
                    </Box>


                    <Box display="flex"  justifyContent={{ md:"end" }}>

                        {/* Mobile Icon */}
                        <Hide above='md'>
                            <Box borderRadius='50%' w='42px' h='42px' position="relative">
                                    <svg xmlns="/image/Group 19962.svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#FEA32B"/>
                                    </svg>
                                <Box pos="absolute" transform="translate(-50%, -50%)" top="50%" left="50%">
                                    <svg xmlns="/image/laptop.svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M18.5601 14.3597V6.96766C18.5601 6.02677 18.5601 5.55633 18.377 5.19696C18.2159 4.88085 17.9589 4.62384 17.6428 4.46277C17.2834 4.27966 16.813 4.27966 15.8721 4.27966H6.1281C5.18721 4.27966 4.71677 4.27966 4.35739 4.46277C4.04128 4.62384 3.78427 4.88085 3.62321 5.19696C3.4401 5.55633 3.4401 6.02677 3.4401 6.96766V14.3597M4.8401 17.7197H17.1601C17.6809 17.7197 17.9413 17.7197 18.1549 17.6624C18.7347 17.5071 19.1875 17.0542 19.3429 16.4745C19.4001 16.2608 19.4001 16.0004 19.4001 15.4797C19.4001 15.2193 19.4001 15.0891 19.3715 14.9823C19.2938 14.6924 19.0674 14.466 18.7775 14.3883C18.6707 14.3597 18.5405 14.3597 18.2801 14.3597H3.7201C3.45971 14.3597 3.32951 14.3597 3.22269 14.3883C2.93281 14.466 2.70639 14.6924 2.62872 14.9823C2.6001 15.0891 2.6001 15.2193 2.6001 15.4797C2.6001 16.0004 2.6001 16.2608 2.65734 16.4745C2.81269 17.0542 3.26553 17.5071 3.84528 17.6624C4.05892 17.7197 4.31931 17.7197 4.8401 17.7197Z" stroke="#FE9000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Box>
                            </Box>
                        </Hide>

                        {/* Desktop Icon */}
                        <Show above='md'>
                            <Box borderRadius='50%' w="50px" h="50px" position="relative">
                                <svg xmlns="/image/Group 19962.svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="#FEA32B"/>
                                </svg>
                                <Box pos="absolute" transform="translate(-50%, -50%)" top="50%" left="50%">
                                    <svg xmlns="/image/laptop.svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M21 16V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16M4.66667 20H19.3333C19.9533 20 20.2633 20 20.5176 19.9319C21.2078 19.7469 21.7469 19.2078 21.9319 18.5176C22 18.2633 22 17.9533 22 17.3333C22 17.0233 22 16.8683 21.9659 16.7412C21.8735 16.3961 21.6039 16.1265 21.2588 16.0341C21.1317 16 20.9767 16 20.6667 16H3.33333C3.02334 16 2.86835 16 2.74118 16.0341C2.39609 16.1265 2.12654 16.3961 2.03407 16.7412C2 16.8683 2 17.0233 2 17.3333C2 17.9533 2 18.2633 2.06815 18.5176C2.25308 19.2078 2.79218 19.7469 3.48236 19.9319C3.73669 20 4.04669 20 4.66667 20Z" stroke="#FE9000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Box>
                            </Box>
                        </Show>


                        {/* Content */}
                        <Box ml={{ base:"16px", md:"20px"}}>
                            <Box color="#313030" fontFamily="Roboto" fontSize={{ base:"16px",md:"20px" }} fontWeight={{ base:"600", md:"700"}} lineHeight={{ base:"24px",md:"30px" }}>
                                <p>Interactive Learning</p>
                            </Box>
                            <Box color="#6F6e6e" fontFamily="Roboto" fontSize={{ base:'14px', md:"16px" }} fontWeight="400" lineHeight={{ base:'22px', md:"24px" }}>
                                <p>Innovative interactive materials for high-quality instruction.</p>
                            </Box>
                        </Box>
                    </Box>


                    <Box display="flex"  justifyContent={{ md:"start" }}>

                        {/* Mobile Icon */}
                        <Hide above='md'>
                            <Box borderRadius='50%' w='42px' h='42px' position="relative"> 
                                <svg xmlns="/image/Group 19962.svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#FEA32B"/>
                                </svg>
                                <Box pos="absolute" transform="translate(-50%, -50%)" top="50%" left="50%">
                                    <svg xmlns="/image/trendup.svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M19.4001 6.79968L12.7904 13.4093C12.4578 13.742 12.2915 13.9083 12.0997 13.9706C11.931 14.0254 11.7492 14.0254 11.5805 13.9706C11.3887 13.9083 11.2224 13.742 10.8897 13.4093L8.59045 11.11C8.25779 10.7774 8.09147 10.6111 7.89967 10.5487C7.73096 10.4939 7.54923 10.4939 7.38052 10.5487C7.18873 10.6111 7.0224 10.7774 6.68975 11.11L2.6001 15.1997M19.4001 6.79968H13.5201M19.4001 6.79968V12.6797" stroke="#FE9000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Box>
                            </Box>
                        </Hide>

                        {/* Desktop Icon */}
                        <Show above='md'>
                            <Box borderRadius='50%' w="50px" h="50px" position="relative">
                                <svg xmlns="/image/Group 19962.svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="#FEA32B"/>
                                </svg>
                                <Box pos="absolute" transform="translate(-50%, -50%)" top="50%" left="50%">
                                    <svg xmlns="/image/trendup.svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14" stroke="#FE9000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Box>
                            </Box>
                        </Show>

                        <Box ml={{ base:"16px", md:"20px"}}>
                            <Box color="#313030" fontFamily="Roboto" fontSize={{ base:"16px",md:"20px" }} fontWeight={{ base:"600", md:"700"}} lineHeight={{ base:"24px",md:"30px" }}>
                                <p>Boost your Mandarin learning journey</p>
                            </Box>
                            <Box color="#6F6e6e" fontFamily="Roboto" fontSize={{ base:'14px', md:"16px" }} fontWeight="400" lineHeight={{ base:'22px', md:"24px" }}>
                                <p>Learning Traditional Mandarin will enhance your comprehension of Chinese culture and help you learn Mandarin more quickly in the long run.</p>
                            </Box>
                        </Box>
                    </Box> 

                </Grid>
            </Box>

            <Hide above='md'>
                <Box mt="10" mb="10" p="8px 24px" justifyContent="center" 
                    alignContent="center" 
                    borderRadius="4px" 
                    bgColor="#FE9000"
                    color="#ffffff"
                    fontFamily="Roboto"
                    fontSize="13px"
                    fontWeight="700"
                    lineHeight="22px"
                    textAlign="center">
                    <chakra.button>
                        Start learning
                    </chakra.button>
                </Box>
            </Hide>


        </Box>
        </Box>
    )
}

export default Page3;