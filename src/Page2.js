import { React } from 'react';
import { Box, Hide, Show, Image, Grid } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css';



function Page2 () {
    return (
        <Box mt={{ base:"5px",md:"10px" }} h={{ base:"570px", md:"auto" }} w="100%" maxW="1500px" pos="relative" transform="translate(-50%, 0)" left="50%" p="3" display="flex" flexDirection="column" justifyContent="space-between" color="#313030" fontFamily="Poppins">
            
            {/* 手機標題 */}
            <Hide above='md'>
                <Box ml="3" w="90%" h="16" fontSize="20px" fontWeight="700" lineHeight="30px">
                    <chakra.h5>A broad selection of qualified tutors and topics</chakra.h5>
                </Box>
            </Hide>

            {/* 電腦標題 */}
            <Show above='md'>
                <Box textAlign="center" color="#313030" fontFamily="Poppins" fontSize={{ lg:"32px", md:"28px" }} fontWeight="700" lineHeight="48px">
                    <chakra.h3>A broad selection of qualified tutors and topics</chakra.h3>
                </Box>
            </Show>

            {/* 電腦Tag */}
            <Show above='md'>
                <Box mt="5" mb="5" w="80%" pos="relative" transform="translate(-50%, 0%)" left="50%" display="inline-flex" justifyContent="space-around" >
                    <Box p="8px 20px" justifyContent="center" alignItems="center" color="#313030" borderRadius="30px" bgColor="#f5f6f9" fontFamily="Roboto" fontSize="16px" fontWeight="600" lineHeight="24px"><p>Business</p></Box>
                    <Box p="8px 20px" justifyContent="center" alignItems="center" color="#313030" borderRadius="30px" bgColor="#f5f6f9" fontFamily="Roboto" fontSize="16px" fontWeight="600" lineHeight="24px"><p>Travel</p></Box>
                    <Box p="8px 20px" justifyContent="center" alignItems="center" color="#313030" borderRadius="30px" bgColor="#f5f6f9" fontFamily="Roboto" fontSize="16px" fontWeight="600" lineHeight="24px"><p>TOCFL</p></Box>
                    <Box p="8px 20px" justifyContent="center" alignItems="center" color="#313030" borderRadius="30px" bgColor="#f5f6f9" fontFamily="Roboto" fontSize="16px" fontWeight="600" lineHeight="24px"><p>Kids and Teens</p></Box>
                    <Show above='808px'><Box p="8px 20px" justifyContent="center" alignItems="center" color="#313030" borderRadius="30px" bgColor="#f5f6f9" fontFamily="Roboto" fontSize="16px" fontWeight="600" lineHeight="24px"><p>Advanced</p></Box></Show>
                    <Show above='908px'><Box p="8px 20px" justifyContent="center" alignItems="center" color="#313030" borderRadius="30px" bgColor="#f5f6f9" fontFamily="Roboto" fontSize="16px" fontWeight="600" lineHeight="24px"><p>Basic</p></Box></Show>
                    <Show above='1068px'><Box p="8px 20px" justifyContent="center" alignItems="center" color="#313030" borderRadius="30px" bgColor="#f5f6f9" fontFamily="Roboto" fontSize="16px" fontWeight="600" lineHeight="24px"><p>Intermediate</p></Box></Show>
                    <Box p="8px 20px" justifyContent="center" alignItems="center" color="#313030" borderRadius="30px" bgColor="#f5f6f9" fontFamily="Roboto" fontSize="16px" fontWeight="600" lineHeight="24px"><p>More</p></Box>
                </Box>
            </Show>


            {/*  Mobile Card */}
            <Hide above='md'>
                <Box h="100%" display="flex" flexWrap="wrap" position="relative" >
                    <Swiper
                        pagination={true}
                        modules={[Pagination]}
                        loop={true}                       
                        spaceBetween={10}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Box w={{ base:"95%", md:"90%"}} h="350px" mt="5px"  borderRadius="8px"
                            border="1px solid #e5e5e5" boxShadow="0 1 8 0 rgba(0,0,0,0.3)" 
                            pos={{ base:"absolute", md:"unset"}} transform={{ base:"translate(-50%, -50%)", md:"translate(5%, 2%)" }} left={{ base:"50%" }} top={{ base:"50%" }}
                            display="flex" flexDirection="column" justifyContent="space-between"
                            fontFamily="Roboto">
                            

                            {/* 圖片 */}
                            <Box w="100%" h="160px" 
                                borderRadius="8px 8px 0 0" 
                                bgPosition="center"
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                bgImage="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png">
                            </Box>

                            {/* 作者 */}
                            <Box ml="3" display="flex" alignItems="center">
                                <Image w="38px" h="38px" borderRadius="72px" src='https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png'></Image>
                                <Box ml="3" fontSize="15px" fontWeight="700" lineHeight="26px">
                                    <p>Dobby Potter</p>
                                </Box>
                            </Box>


                            {/* Tag */}
                            <Box ml="3" display="flex" flexWrap="wrap">
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">TOCEL</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                            </Box>   

                            {/* Point */}
                            <Box ml="3" mt="5px" mb="5px" display="flex" alignItems="center" verticalAlign="bottom">
                                <Box color="#929292" fontSize="14px" fontWeight="600" lineHeight="22px"><p>Trial from</p></Box>
                                <Box ml="5" color="#313030" fontSize="18px" fontWeight="700" lineHeight="28px"><p>33Points</p></Box>
                            </Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box w={{ base:"95%", md:"90%"}} h="350px" mt="5px"  borderRadius="8px"
                                border="1px solid #e5e5e5" boxShadow="0 1 8 0 rgba(0,0,0,0.3)" 
                                pos={{ base:"absolute", md:"unset"}} transform={{ base:"translate(-50%, -50%)", md:"translate(5%, 2%)" }} left={{ base:"50%" }} top={{ base:"50%" }}
                                display="flex" flexDirection="column" justifyContent="space-between"
                                fontFamily="Roboto">
                                

                                {/* 圖片 */}
                                <Box w="100%" h="160px" 
                                    borderRadius="8px 8px 0 0" 
                                    bgPosition="center"
                                    bgRepeat="no-repeat"
                                    bgSize="cover"
                                    bgImage="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png">
                                </Box>

                                {/* 作者 */}
                                <Box ml="3" display="flex" alignItems="center">
                                    <Image w="38px" h="38px" borderRadius="72px" src='https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png'></Image>
                                    <Box ml="3" fontSize="15px" fontWeight="700" lineHeight="26px">
                                        <p>Dobby Potter2</p>
                                    </Box>
                                </Box>


                                {/* Tag */}
                                <Box ml="3" display="flex" flexWrap="wrap">
                                    <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">TOCEL</Box>
                                    <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                    <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                                    <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                    <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                                </Box>   

                                {/* Point */}
                                <Box ml="3" mt="5px" mb="5px" display="flex" alignItems="center" verticalAlign="bottom">
                                    <Box color="#929292" fontSize="14px" fontWeight="600" lineHeight="22px"><p>Trial from</p></Box>
                                    <Box ml="5" color="#313030" fontSize="18px" fontWeight="700" lineHeight="28px"><p>33Points</p></Box>
                                </Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box w={{ base:"95%", md:"90%"}} h="350px" mt="5px"  borderRadius="8px"
                            border="1px solid #e5e5e5" boxShadow="0 1 8 0 rgba(0,0,0,0.3)" 
                            pos={{ base:"absolute", md:"unset"}} transform={{ base:"translate(-50%, -50%)", md:"translate(5%, 2%)" }} left={{ base:"50%" }} top={{ base:"50%" }}
                            display="flex" flexDirection="column" justifyContent="space-between"
                            fontFamily="Roboto">
                            

                            {/* 圖片 */}
                            <Box w="100%" h="160px" 
                                borderRadius="8px 8px 0 0" 
                                bgPosition="center"
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                bgImage="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png">
                            </Box>

                            {/* 作者 */}
                            <Box ml="3" display="flex" alignItems="center">
                                <Image w="38px" h="38px" borderRadius="72px" src='https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png'></Image>
                                <Box ml="3" fontSize="15px" fontWeight="700" lineHeight="26px">
                                    <p>Dobby Potter3</p>
                                </Box>
                            </Box>


                            {/* Tag */}
                            <Box ml="3" display="flex" flexWrap="wrap">
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">TOCEL</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                            </Box>   

                            {/* Point */}
                            <Box ml="3" mt="5px" mb="5px" display="flex" alignItems="center" verticalAlign="bottom">
                                <Box color="#929292" fontSize="14px" fontWeight="600" lineHeight="22px"><p>Trial from</p></Box>
                                <Box ml="5" color="#313030" fontSize="18px" fontWeight="700" lineHeight="28px"><p>33Points</p></Box>
                            </Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box w={{ base:"95%", md:"90%"}} h="350px" mt="5px"  borderRadius="8px"
                            border="1px solid #e5e5e5" boxShadow="0 1 8 0 rgba(0,0,0,0.3)" 
                            pos={{ base:"absolute", md:"unset"}} transform={{ base:"translate(-50%, -50%)", md:"translate(5%, 2%)" }} left={{ base:"50%" }} top={{ base:"50%" }}
                            display="flex" flexDirection="column" justifyContent="space-between"
                            fontFamily="Roboto">
                            

                            {/* 圖片 */}
                            <Box w="100%" h="160px" 
                                borderRadius="8px 8px 0 0" 
                                bgPosition="center"
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                bgImage="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png">
                            </Box>

                            {/* 作者 */}
                            <Box ml="3" display="flex" alignItems="center">
                                <Image w="38px" h="38px" borderRadius="72px" src='https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png'></Image>
                                <Box ml="3" fontSize="15px" fontWeight="700" lineHeight="26px">
                                    <p>Dobby Potter4</p>
                                </Box>
                            </Box>


                            {/* Tag */}
                            <Box ml="3" display="flex" flexWrap="wrap">
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">TOCEL</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                            </Box>   

                            {/* Point */}
                            <Box ml="3" mt="5px" mb="5px" display="flex" alignItems="center" verticalAlign="bottom">
                                <Box color="#929292" fontSize="14px" fontWeight="600" lineHeight="22px"><p>Trial from</p></Box>
                                <Box ml="5" color="#313030" fontSize="18px" fontWeight="700" lineHeight="28px"><p>33Points</p></Box>
                            </Box>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box w={{ base:"95%", md:"90%"}} h="350px" mt="5px"  borderRadius="8px"
                            border="1px solid #e5e5e5" boxShadow="0 1 8 0 rgba(0,0,0,0.3)" 
                            pos={{ base:"absolute", md:"unset"}} transform={{ base:"translate(-50%, -50%)", md:"translate(5%, 2%)" }} left={{ base:"50%" }} top={{ base:"50%" }}
                            display="flex" flexDirection="column" justifyContent="space-between"
                            fontFamily="Roboto">
                            

                            {/* 圖片 */}
                            <Box w="100%" h="160px" 
                                borderRadius="8px 8px 0 0" 
                                bgPosition="center"
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                bgImage="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png">
                            </Box>

                            {/* 作者 */}
                            <Box ml="3" display="flex" alignItems="center">
                                <Image w="38px" h="38px" borderRadius="72px" src='https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png'></Image>
                                <Box ml="3" fontSize="15px" fontWeight="700" lineHeight="26px">
                                    <p>Dobby Potter5</p>
                                </Box>
                            </Box>


                            {/* Tag */}
                            <Box ml="3" display="flex" flexWrap="wrap">
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">TOCEL</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                            </Box>   

                            {/* Point */}
                            <Box ml="3" mt="5px" mb="5px" display="flex" alignItems="center" verticalAlign="bottom">
                                <Box color="#929292" fontSize="14px" fontWeight="600" lineHeight="22px"><p>Trial from</p></Box>
                                <Box ml="5" color="#313030" fontSize="18px" fontWeight="700" lineHeight="28px"><p>33Points</p></Box>
                            </Box>
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </Box>  
            </Hide>
            

            {/* Destop Card */}
            <Show above='md'>
                <Box h="100%" display="flex" flexWrap="wrap" position="relative" >
                    <Grid gap="20px" gridTemplateColumns={{ md:"1fr 1fr", lg:"1fr 1fr 1fr", xl:"1fr 1fr 1fr 1fr"}} gridTemplateRows={{ md:"1fr 1fr" }}>
                        <Box w={{ base:"95%", md:"90%"}} h="350px" mt="5px"  borderRadius="8px"
                            border="1px solid #e5e5e5" boxShadow="0 1 8 0 rgba(0,0,0,0.3)" 
                            pos={{ base:"absolute", md:"unset"}} transform={{ base:"translate(-50%, -50%)", md:"translate(5%, 2%)" }} left={{ base:"50%" }} top={{ base:"50%" }}
                            display="flex" flexDirection="column" justifyContent="space-between"
                            fontFamily="Roboto">
                            

                            {/* 圖片 */}
                            <Box w="100%" h="160px" 
                                borderRadius="8px 8px 0 0" 
                                bgPosition="center"
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                bgImage="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png">
                            </Box>

                            {/* 作者 */}
                            <Box ml="3" display="flex" alignItems="center">
                                <Image w="38px" h="38px" borderRadius="72px" src='https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png'></Image>
                                <Box ml="3" fontSize="15px" fontWeight="700" lineHeight="26px">
                                    <p>Dobby Potter</p>
                                </Box>
                            </Box>


                            {/* Tag */}
                            <Box ml="3" display="flex" flexWrap="wrap">
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">TOCEL</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                            </Box>   

                            {/* Point */}
                            <Box ml="3" mt="5px" mb="5px" display="flex" alignItems="center" verticalAlign="bottom">
                                <Box color="#929292" fontSize="14px" fontWeight="600" lineHeight="22px"><p>Trial from</p></Box>
                                <Box ml="5" color="#313030" fontSize="18px" fontWeight="700" lineHeight="28px"><p>33Points</p></Box>
                            </Box>
                        </Box>
                        
                        <Box w="90%" h="350px" mt="5px"  borderRadius="8px"
                            border="1px solid #e5e5e5" boxShadow="0 1 8 0 rgba(0,0,0,0.3)" 
                            pos={{ base:"absolute", md:"unset"}} transform={{ base:"translate(-50%, -50%)", md:"translate(5%, 2%)" }} left={{ base:"50%" }} top={{ base:"50%" }}
                            display="flex" flexDirection="column" justifyContent="space-between"
                            fontFamily="Roboto">
                            

                            {/* 圖片 */}
                            <Box w="100%" h="160px" 
                                borderRadius="8px 8px 0 0" 
                                bgPosition="center"
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                bgImage="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png">
                            </Box>

                            {/* 作者 */}
                            <Box ml="3" display="flex" alignItems="center">
                                <Image w="38px" h="38px" borderRadius="72px" src='https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png'></Image>
                                <Box ml="3" fontSize="15px" fontWeight="700" lineHeight="26px">
                                    <p>Dobby Potter</p>
                                </Box>
                            </Box>


                            {/* Tag */}
                            <Box ml="3" display="flex" flexWrap="wrap">
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">TOCEL</Box>
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                            </Box>   

                            {/* Point */}
                            <Box ml="3" mt="5px" mb="5px" display="flex" alignItems="center" verticalAlign="bottom">
                                <Box color="#929292" fontSize="14px" fontWeight="600" lineHeight="22px"><p>Trial from</p></Box>
                                <Box ml="5" color="#313030" fontSize="18px" fontWeight="700" lineHeight="28px"><p>33Points</p></Box>
                            </Box>
                        </Box>

                        <Box w="90%" h="350px" mt="5px"  borderRadius="8px"
                            border="1px solid #e5e5e5" boxShadow="0 1 8 0 rgba(0,0,0,0.3)" 
                            pos={{ base:"absolute", md:"unset"}} transform={{ base:"translate(-50%, -50%)", md:"translate(5%, 2%)" }} left={{ base:"50%" }} top={{ base:"50%" }}
                            display="flex" flexDirection="column" justifyContent="space-between"
                            fontFamily="Roboto">
                            

                            {/* 圖片 */}
                            <Box w="100%" h="160px" 
                                borderRadius="8px 8px 0 0" 
                                bgPosition="center"
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                bgImage="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png">
                            </Box>

                            {/* 作者 */}
                            <Box ml="3" display="flex" alignItems="center">
                                <Image w="38px" h="38px" borderRadius="72px" src='https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png'></Image>
                                <Box ml="3" fontSize="15px" fontWeight="700" lineHeight="26px">
                                    <p>Dobby Potter</p>
                                </Box>
                            </Box>


                            {/* Tag */}
                            <Box ml="3" display="flex" flexWrap="wrap">
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">TOCEL</Box>
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                            </Box>   

                            {/* Point */}
                            <Box ml="3" mt="5px" mb="5px" display="flex" alignItems="center" verticalAlign="bottom">
                                <Box color="#929292" fontSize="14px" fontWeight="600" lineHeight="22px"><p>Trial from</p></Box>
                                <Box ml="5" color="#313030" fontSize="18px" fontWeight="700" lineHeight="28px"><p>33Points</p></Box>
                            </Box>
                        </Box>

                        <Box w="90%" h="350px" mt="5px"  borderRadius="8px"
                            border="1px solid #e5e5e5" boxShadow="0 1 8 0 rgba(0,0,0,0.3)" 
                            pos={{ base:"absolute", md:"unset"}} transform={{ base:"translate(-50%, -50%)", md:"translate(5%, 2%)" }} left={{ base:"50%" }} top={{ base:"50%" }}
                            display="flex" flexDirection="column" justifyContent="space-between"
                            fontFamily="Roboto">
                            

                            {/* 圖片 */}
                            <Box w="100%" h="160px" 
                                borderRadius="8px 8px 0 0" 
                                bgPosition="center"
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                bgImage="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png">
                            </Box>

                            {/* 作者 */}
                            <Box ml="3" display="flex" alignItems="center">
                                <Image w="38px" h="38px" borderRadius="72px" src='https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png'></Image>
                                <Box ml="3" fontSize="15px" fontWeight="700" lineHeight="26px">
                                    <p>Dobby Potter</p>
                                </Box>
                            </Box>


                            {/* Tag */}
                            <Box ml="3" display="flex" flexWrap="wrap">
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">TOCEL</Box>
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                            </Box>   

                            {/* Point */}
                            <Box ml="3" mt="5px" mb="5px" display="flex" alignItems="center" verticalAlign="bottom">
                                <Box color="#929292" fontSize="14px" fontWeight="600" lineHeight="22px"><p>Trial from</p></Box>
                                <Box ml="5" color="#313030" fontSize="18px" fontWeight="700" lineHeight="28px"><p>33Points</p></Box>
                            </Box>
                        </Box>

                        <Box w="90%" h="350px" mt="5px"  borderRadius="8px"
                            border="1px solid #e5e5e5" boxShadow="0 1 8 0 rgba(0,0,0,0.3)" 
                            pos={{ base:"absolute", md:"unset"}} transform={{ base:"translate(-50%, -50%)", md:"translate(5%, 2%)" }} left={{ base:"50%" }} top={{ base:"50%" }}
                            display="flex" flexDirection="column" justifyContent="space-between"
                            fontFamily="Roboto">
                            

                            {/* 圖片 */}
                            <Box w="100%" h="160px" 
                                borderRadius="8px 8px 0 0" 
                                bgPosition="center"
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                bgImage="https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy.png">
                            </Box>

                            {/* 作者 */}
                            <Box ml="3" display="flex" alignItems="center">
                                <Image w="38px" h="38px" borderRadius="72px" src='https://static-dev-baodao.s3.ap-northeast-2.amazonaws.com/homepage/Section2_Shortguy_Cercle.png'></Image>
                                <Box ml="3" fontSize="15px" fontWeight="700" lineHeight="26px">
                                    <p>Dobby Potter</p>
                                </Box>
                            </Box>


                            {/* Tag */}
                            <Box ml="3" display="flex" flexWrap="wrap">
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">TOCEL</Box>
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Box>
                                <Box m="3px" p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Box>
                            </Box>   

                            {/* Point */}
                            <Box ml="3" mt="5px" mb="5px" display="flex" alignItems="center" verticalAlign="bottom">
                                <Box color="#929292" fontSize="14px" fontWeight="600" lineHeight="22px"><p>Trial from</p></Box>
                                <Box ml="5" color="#313030" fontSize="18px" fontWeight="700" lineHeight="28px"><p>33Points</p></Box>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Show>


            {/* Find Tutor Btn */}
            <Box>    
                <chakra.button
                    width={{ base:"95%", md:"305px" }}
                    m="20px 0"
                    padding={{ base:"8px 24px", md:"11px 113px"}}           
                    alignItems="center"
                    position="relative"
                    transform="translate(-50%, 0%)"
                    left="50%"
                    borderRadius="4px"
                    bgColor="#F5F6F9"
                    fontSize={{ base:"13px", md:"15px"}}
                    fontWeight="700"
                    lineHeight={{ base:"22px", md:"26px"}}
                >
                    Find tutors
                </chakra.button>
            </Box>
        </Box>
    )
}

export default Page2;