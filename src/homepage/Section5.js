import React from 'react';
import { Box, Grid, Hide, Show, Image } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';
import { Slider, SliderTrack, SliderFilledTrack} from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';
import "./swiper.css"


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

            {/* Title */}
            <Box mb={{ md:"40px" }} color="#313030" fontFamily="Poppins" fontSize={{ base:"20px", md:"32px" }} fontWeight="700" lineHeight={{ base:"30px", md:"48px"}} textAlign={{ base:"left",md:"center"}}>
                <chakra.h5>Specially designed interactive materials for students at all levels</chakra.h5>
            </Box>

            <Show above='md'>
                <Box mb={{ md:"48px" }} display="flex">
                    <Grid gridTemplateColumns={{ base:"1fr", md:"1fr 1fr 1fr"}}>

                            <Image m="auto" w="90%" borderRadius="8px" bgSize="cover" src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section5_TaiwanFoodculture.png" alt="台灣飲食文化"></Image>
                            <Image m="auto" w="90%" borderRadius="8px" bgSize="cover" src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section5_TaiwanTroditionalclothies.jpg" alt="傳統服飾"></Image>
                            <Image m="auto" w="90%" borderRadius="8px" bgSize="cover" src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section5_HeIsHoXian.png" alt="他是侯孝賢"></Image>
                            <Box m={{ base:"12px auto auto"}}  w={{ base:"100%", md:"80%" }}>
                                {/* Image */}

                                {/* Heading */}
                                <Box mt="8" color="#7156E5" fontFamily="Roboto" fontSize="20px" fontWeight="500" lineHeight="24px" textAlign={{ base:"left",md:"center"}}>
                                    <p>Spiral curriculum design</p>
                                </Box>

                                {/* Content */}
                                <Box mt="3" color="#313030" fontFamily="Roboto" fontSize="16px" fontWeight="400" lineHeight="24px" textAlign={{ base:"left",md:"center"}}>
                                    <p>Integrating and expanding new and old concepts for complete understanding</p>
                                </Box>
                            </Box>

                            <Box m={{ base:"12px auto auto"}}  w={{ base:"100%",md:"80%" }}>

                                {/* Heading */}
                                <Box mt="8" color="#7156E5" fontFamily="Roboto" fontSize="20px" fontWeight="500" lineHeight="24px" textAlign={{ base:"left",md:"center"}}>
                                    <p>Traditional Mandarin Mastery</p>
                                </Box>

                                {/* Content */}
                                <Box mt="3" color="#313030" fontFamily="Roboto" fontSize="16px" fontWeight="400" lineHeight="24px" textAlign={{ base:"left",md:"center"}}>
                                    <p>Immersion in Taiwan culture and life. Bringing everyday conversations to life through practical learning.</p>
                                </Box>
                            </Box>

                            <Box m={{ base:"12px auto auto"}}  w={{ base:"100%",md:"80%" }}>

                                {/* Heading */}
                                <Box mt="8" color="#7156E5" fontFamily="Roboto" fontSize="20px" fontWeight="500" lineHeight="24px" textAlign={{ base:"left",md:"center"}}>
                                    <p>Building solid foundations</p>
                                </Box>

                                {/* Content */}
                                <Box mt="3" color="#313030" fontFamily="Roboto" fontSize="16px" fontWeight="400" lineHeight="24px" textAlign={{ base:"left",md:"center"}}>
                                    <p>Transforming short-Term memory into long-term knowledge</p>
                                </Box>
                            </Box>

                    </Grid>
                </Box>
            </Show>



            {/* Mobile Slider */}
            <Hide above='md'>
                <Box w="100%">
                    <Swiper
                        modules={[Scrollbar]}
                        loop={true}
                        scrollbar={{
                            hide: false,
                            draggable: true,
                        }}
                        spaceBetween={10}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                        <Box m="12px auto 20px"  w="100%">
                            {/* Image */}
                            <Image m="auto" borderRadius="8px" bgSize="cover" src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section5_TaiwanFoodculture.png" alt="台灣飲食文化"></Image>

                            {/* Heading */}
                            <Box mt="8" color="#7156E5" fontFamily="Roboto" fontSize="20px" fontWeight="500" lineHeight="24px" textAlign={{ base:"left",md:"center"}}>
                                <p>Spiral curriculum design</p>
                            </Box>

                            {/* Content */}
                            <Box mt="3" color="#313030" fontFamily="Roboto" fontSize="16px" fontWeight="400" lineHeight="24px" textAlign={{ base:"left",md:"center"}}>
                                <p>Integrating and expanding new and old concepts for complete understanding</p>
                            </Box>
                        </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                        <Box m="12px auto 20px"  w="100%">
                            <Image m="auto" borderRadius="8px" bgSize="cover"  src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section5_TaiwanTroditionalclothies.jpg" alt="傳統服飾"></Image>

                            {/* Heading */}
                            <Box mt="8" color="#7156E5" fontFamily="Roboto" fontSize="20px" fontWeight="500" lineHeight="24px" textAlign={{ base:"left",md:"center"}}>
                                <p>Traditional Mandarin Mastery</p>
                            </Box>

                            {/* Content */}
                            <Box mt="3" color="#313030" fontFamily="Roboto" fontSize="16px" fontWeight="400" lineHeight="24px" textAlign={{ base:"left",md:"center"}}>
                                <p>Immersion in Taiwan culture and life. Bringing everyday conversations to life through practical learning.</p>
                            </Box>
                        </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                        <Box m="12px auto 20px"  w="100%">
                                <Image m="auto" borderRadius="8px" bgSize="cover" src="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section5_HeIsHoXian.png" alt="他是侯孝賢"></Image>

                                {/* Heading */}
                                <Box mt="8" color="#7156E5" fontFamily="Roboto" fontSize="20px" fontWeight="500" lineHeight="24px" textAlign={{ base:"left",md:"center"}}>
                                    <p>Building solid foundations</p>
                                </Box>

                                {/* Content */}
                                <Box mt="3" color="#313030" fontFamily="Roboto" fontSize="16px" fontWeight="400" lineHeight="24px" textAlign={{ base:"left",md:"center"}}>
                                    <p>Transforming short-Term memory into long-term knowledge</p>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </Box>

                {/* <Slider mt="5" mb="5" aria-label='slider-ex-2' colorScheme='purple' defaultValue={30}>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
                </Slider> */}
            </Hide>
        </Box>
    )
}

export default Page5;