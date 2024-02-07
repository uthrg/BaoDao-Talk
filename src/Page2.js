import { Box, Hide, Show, Grid } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

function Page2 () {
    return (
        <Box mt={{ base:"5px",md:"10px" }} h={{ base:"535px", md:"auto" }} w="100%" p="3" display="inline-flex" flexDirection="column" justifyContent="space-between" color="#313030" fontFamily="Poppins">
            
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


            {/* Card */}
            <Box display="flex" flexWrap="wrap" position="relative" >
                <Grid gap={2} gridTemplateColumns={{ base:"1", md:"auto auto", lg:"auto auto auto", xl:"auto auto auto auto" }}>
                    
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
                            bgImage="https://s3-alpha-sig.figma.com/img/36ee/e77c/2a58f64dc666adb5d512cbec7df5b779?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBviZ6uCMNvVJyQuPBJqDCRccHBGC-Q662J8KI~i655p-BLZRBqsc~NtAYpp8GDnWYVeggCpfUAKzI0IngsTE4zMKLifjiMeAWO58dCfGDfpoLQCQU7ghmsavLS~DVl~SU0v3mIj5B-dnmtUMkNqY0hiMrcEotrsxLmwu4TDDIQ8yVdSGkfmBviCizquW9OLQ25-Y1i1VZY42u--8EDIger1Y4LLAUcYsPhjHa4xla-XNbJsvMcoWFVYgDIXQ8NdD1tmYcnBIRSsuS14yyxBAhhofEwPzha29obpAjY7~8TKlUuPUm6Ejjgp-tkZyEy9Qq5S5-LBqdJaqsxIVGxZww__">
                        </Box>

                        {/* 作者 */}
                        <Box ml="3" display="flex" alignItems="center">
                            <Image w="38px" h="38px" borderRadius="72px" src='https://s3-alpha-sig.figma.com/img/adb3/20df/d35339554bf448c93afddbd85b368084?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P8xFDfDbr6ergluAlIvz6YofVU31XhJzzDab4L5tmdfxGLDSNTq2U6OjcC7OXYtoPCJqlMNPFBZpp3fdI70vGXcP3EuejRjykk7wwxvD-7oUEPYDrer~JNHM0DneQxSomu8WEZykDN8N7JehFa2Ij9paovOXMVZyseuwCTZS3lxynY55wz62LsEU10OIRQl2gqreUIJZQhv7g8xbYx5hAegeZNomhOsBqt3x2ofIZc9H5-FW6-YGJuFu8WX~MrRx4XDk2S8IT4o6H6vD5oIdDvj~AU~XkyPndzzKEpEcMgmh~3KCxwqs4d0u-DUJDIzF0vQuTOxTfWTro0F6bUMIhw__'></Image>
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

                    {/* Card2 */}
                    <Hide below='md'>
                        <Box w={{ base:"90%" }} h="350px" mt="3" borderRadius="8px"
                            border="1px solid #e5e5e5" boxShadow="0 1 8 0 rgba(0,0,0,0.3)" 
                            position="relative" transform="translate(-50%, 0%)" left="50%" 
                            display="flex" flexDirection="column" justifyContent="space-between"
                            fontFamily="Roboto">
                            

                            {/* 圖片 */}
                            <Box w="100%" h="160px" 
                                borderRadius="8px 8px 0 0" 
                                bgPosition="center"
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                bgImage="https://s3-alpha-sig.figma.com/img/36ee/e77c/2a58f64dc666adb5d512cbec7df5b779?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBviZ6uCMNvVJyQuPBJqDCRccHBGC-Q662J8KI~i655p-BLZRBqsc~NtAYpp8GDnWYVeggCpfUAKzI0IngsTE4zMKLifjiMeAWO58dCfGDfpoLQCQU7ghmsavLS~DVl~SU0v3mIj5B-dnmtUMkNqY0hiMrcEotrsxLmwu4TDDIQ8yVdSGkfmBviCizquW9OLQ25-Y1i1VZY42u--8EDIger1Y4LLAUcYsPhjHa4xla-XNbJsvMcoWFVYgDIXQ8NdD1tmYcnBIRSsuS14yyxBAhhofEwPzha29obpAjY7~8TKlUuPUm6Ejjgp-tkZyEy9Qq5S5-LBqdJaqsxIVGxZww__">
                            </Box>

                            {/* 作者 */}
                            <Box ml="3" display="flex" alignItems="center">
                                <Image w="38px" h="38px" borderRadius="72px" src='https://s3-alpha-sig.figma.com/img/adb3/20df/d35339554bf448c93afddbd85b368084?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P8xFDfDbr6ergluAlIvz6YofVU31XhJzzDab4L5tmdfxGLDSNTq2U6OjcC7OXYtoPCJqlMNPFBZpp3fdI70vGXcP3EuejRjykk7wwxvD-7oUEPYDrer~JNHM0DneQxSomu8WEZykDN8N7JehFa2Ij9paovOXMVZyseuwCTZS3lxynY55wz62LsEU10OIRQl2gqreUIJZQhv7g8xbYx5hAegeZNomhOsBqt3x2ofIZc9H5-FW6-YGJuFu8WX~MrRx4XDk2S8IT4o6H6vD5oIdDvj~AU~XkyPndzzKEpEcMgmh~3KCxwqs4d0u-DUJDIzF0vQuTOxTfWTro0F6bUMIhw__'></Image>
                                <Box ml="3" fontSize="15px" fontWeight="700" lineHeight="26px">
                                    <p>Dobby Potter</p>
                                </Box>
                            </Box>


                            {/* Tag */}
                            <Box ml="3" display="flex" flexWrap="wrap">
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">TOCEL</Grid>
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Grid>
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Grid>
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Grid>
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Grid>
                            </Box>   

                            {/* Point */}
                            <Box ml="3" mt="5px" mb="5px" display="flex" alignItems="center" verticalAlign="bottom">
                                <Box color="#929292" fontSize="14px" fontWeight="600" lineHeight="22px"><p>Trial from</p></Box>
                                <Box ml="5" color="#313030" fontSize="18px" fontWeight="700" lineHeight="28px"><p>33Points</p></Box>
                            </Box>
                        </Box>
                    </Hide>

                    {/* Card3 */}
                    <Hide below='md'>
                        <Box w={{ base:"90%" }} h="350px" mt="3" borderRadius="8px"
                            border="1px solid #e5e5e5" boxShadow="0 1 8 0 rgba(0,0,0,0.3)" 
                            position="relative" transform="translate(-50%, 0%)" left="50%" 
                            display="flex" flexDirection="column" justifyContent="space-between"
                            fontFamily="Roboto">
                            

                            {/* 圖片 */}
                            <Box w="100%" h="160px" 
                                borderRadius="8px 8px 0 0" 
                                bgPosition="center"
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                bgImage="https://s3-alpha-sig.figma.com/img/36ee/e77c/2a58f64dc666adb5d512cbec7df5b779?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBviZ6uCMNvVJyQuPBJqDCRccHBGC-Q662J8KI~i655p-BLZRBqsc~NtAYpp8GDnWYVeggCpfUAKzI0IngsTE4zMKLifjiMeAWO58dCfGDfpoLQCQU7ghmsavLS~DVl~SU0v3mIj5B-dnmtUMkNqY0hiMrcEotrsxLmwu4TDDIQ8yVdSGkfmBviCizquW9OLQ25-Y1i1VZY42u--8EDIger1Y4LLAUcYsPhjHa4xla-XNbJsvMcoWFVYgDIXQ8NdD1tmYcnBIRSsuS14yyxBAhhofEwPzha29obpAjY7~8TKlUuPUm6Ejjgp-tkZyEy9Qq5S5-LBqdJaqsxIVGxZww__">
                            </Box>

                            {/* 作者 */}
                            <Box ml="3" display="flex" alignItems="center">
                                <Image w="38px" h="38px" borderRadius="72px" src='https://s3-alpha-sig.figma.com/img/adb3/20df/d35339554bf448c93afddbd85b368084?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P8xFDfDbr6ergluAlIvz6YofVU31XhJzzDab4L5tmdfxGLDSNTq2U6OjcC7OXYtoPCJqlMNPFBZpp3fdI70vGXcP3EuejRjykk7wwxvD-7oUEPYDrer~JNHM0DneQxSomu8WEZykDN8N7JehFa2Ij9paovOXMVZyseuwCTZS3lxynY55wz62LsEU10OIRQl2gqreUIJZQhv7g8xbYx5hAegeZNomhOsBqt3x2ofIZc9H5-FW6-YGJuFu8WX~MrRx4XDk2S8IT4o6H6vD5oIdDvj~AU~XkyPndzzKEpEcMgmh~3KCxwqs4d0u-DUJDIzF0vQuTOxTfWTro0F6bUMIhw__'></Image>
                                <Box ml="3" fontSize="15px" fontWeight="700" lineHeight="26px">
                                    <p>Dobby Potter</p>
                                </Box>
                            </Box>


                            {/* Tag */}
                            <Box ml="3" display="flex" flexWrap="wrap">
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">TOCEL</Grid>
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Grid>
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Grid>
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Grid>
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Grid>
                            </Box>   

                            {/* Point */}
                            <Box ml="3" mt="5px" mb="5px" display="flex" alignItems="center" verticalAlign="bottom">
                                <Box color="#929292" fontSize="14px" fontWeight="600" lineHeight="22px"><p>Trial from</p></Box>
                                <Box ml="5" color="#313030" fontSize="18px" fontWeight="700" lineHeight="28px"><p>33Points</p></Box>
                            </Box>
                        </Box>
                    </Hide>

                    {/* Card4 */}
                    <Hide below='md'>
                        <Box w={{ base:"90%" }} h="350px" mt="3" borderRadius="8px"
                            border="1px solid #e5e5e5" boxShadow="0 1 8 0 rgba(0,0,0,0.3)" 
                            position="relative" transform="translate(-50%, 0%)" left="50%" 
                            display="flex" flexDirection="column" justifyContent="space-between"
                            fontFamily="Roboto">
                            

                            {/* 圖片 */}
                            <Box w="100%" h="160px" 
                                borderRadius="8px 8px 0 0" 
                                bgPosition="center"
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                bgImage="https://s3-alpha-sig.figma.com/img/36ee/e77c/2a58f64dc666adb5d512cbec7df5b779?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBviZ6uCMNvVJyQuPBJqDCRccHBGC-Q662J8KI~i655p-BLZRBqsc~NtAYpp8GDnWYVeggCpfUAKzI0IngsTE4zMKLifjiMeAWO58dCfGDfpoLQCQU7ghmsavLS~DVl~SU0v3mIj5B-dnmtUMkNqY0hiMrcEotrsxLmwu4TDDIQ8yVdSGkfmBviCizquW9OLQ25-Y1i1VZY42u--8EDIger1Y4LLAUcYsPhjHa4xla-XNbJsvMcoWFVYgDIXQ8NdD1tmYcnBIRSsuS14yyxBAhhofEwPzha29obpAjY7~8TKlUuPUm6Ejjgp-tkZyEy9Qq5S5-LBqdJaqsxIVGxZww__">
                            </Box>

                            {/* 作者 */}
                            <Box ml="3" display="flex" alignItems="center">
                                <Image w="38px" h="38px" borderRadius="72px" src='https://s3-alpha-sig.figma.com/img/adb3/20df/d35339554bf448c93afddbd85b368084?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P8xFDfDbr6ergluAlIvz6YofVU31XhJzzDab4L5tmdfxGLDSNTq2U6OjcC7OXYtoPCJqlMNPFBZpp3fdI70vGXcP3EuejRjykk7wwxvD-7oUEPYDrer~JNHM0DneQxSomu8WEZykDN8N7JehFa2Ij9paovOXMVZyseuwCTZS3lxynY55wz62LsEU10OIRQl2gqreUIJZQhv7g8xbYx5hAegeZNomhOsBqt3x2ofIZc9H5-FW6-YGJuFu8WX~MrRx4XDk2S8IT4o6H6vD5oIdDvj~AU~XkyPndzzKEpEcMgmh~3KCxwqs4d0u-DUJDIzF0vQuTOxTfWTro0F6bUMIhw__'></Image>
                                <Box ml="3" fontSize="15px" fontWeight="700" lineHeight="26px">
                                    <p>Dobby Potter</p>
                                </Box>
                            </Box>


                            {/* Tag */}
                            <Box ml="3" display="flex" flexWrap="wrap">
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">TOCEL</Grid>
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Grid>
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Grid>
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Grid>
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Grid>
                            </Box>   

                            {/* Point */}
                            <Box ml="3" mt="5px" mb="5px" display="flex" alignItems="center" verticalAlign="bottom">
                                <Box color="#929292" fontSize="14px" fontWeight="600" lineHeight="22px"><p>Trial from</p></Box>
                                <Box ml="5" color="#313030" fontSize="18px" fontWeight="700" lineHeight="28px"><p>33Points</p></Box>
                            </Box>
                        </Box>
                    </Hide>

                    {/* Card5 */}
                    <Hide below='md'>
                        <Box w={{ base:"90%" }} h="350px" mt="3" borderRadius="8px"
                            border="1px solid #e5e5e5" boxShadow="0 1 8 0 rgba(0,0,0,0.3)" 
                            position="relative" transform="translate(-50%, 0%)" left="50%" 
                            display="flex" flexDirection="column" justifyContent="space-between"
                            fontFamily="Roboto">
                            

                            {/* 圖片 */}
                            <Box w="100%" h="160px" 
                                borderRadius="8px 8px 0 0" 
                                bgPosition="center"
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                bgImage="https://s3-alpha-sig.figma.com/img/36ee/e77c/2a58f64dc666adb5d512cbec7df5b779?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBviZ6uCMNvVJyQuPBJqDCRccHBGC-Q662J8KI~i655p-BLZRBqsc~NtAYpp8GDnWYVeggCpfUAKzI0IngsTE4zMKLifjiMeAWO58dCfGDfpoLQCQU7ghmsavLS~DVl~SU0v3mIj5B-dnmtUMkNqY0hiMrcEotrsxLmwu4TDDIQ8yVdSGkfmBviCizquW9OLQ25-Y1i1VZY42u--8EDIger1Y4LLAUcYsPhjHa4xla-XNbJsvMcoWFVYgDIXQ8NdD1tmYcnBIRSsuS14yyxBAhhofEwPzha29obpAjY7~8TKlUuPUm6Ejjgp-tkZyEy9Qq5S5-LBqdJaqsxIVGxZww__">
                            </Box>

                            {/* 作者 */}
                            <Box ml="3" display="flex" alignItems="center">
                                <Image w="38px" h="38px" borderRadius="72px" src='https://s3-alpha-sig.figma.com/img/adb3/20df/d35339554bf448c93afddbd85b368084?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P8xFDfDbr6ergluAlIvz6YofVU31XhJzzDab4L5tmdfxGLDSNTq2U6OjcC7OXYtoPCJqlMNPFBZpp3fdI70vGXcP3EuejRjykk7wwxvD-7oUEPYDrer~JNHM0DneQxSomu8WEZykDN8N7JehFa2Ij9paovOXMVZyseuwCTZS3lxynY55wz62LsEU10OIRQl2gqreUIJZQhv7g8xbYx5hAegeZNomhOsBqt3x2ofIZc9H5-FW6-YGJuFu8WX~MrRx4XDk2S8IT4o6H6vD5oIdDvj~AU~XkyPndzzKEpEcMgmh~3KCxwqs4d0u-DUJDIzF0vQuTOxTfWTro0F6bUMIhw__'></Image>
                                <Box ml="3" fontSize="15px" fontWeight="700" lineHeight="26px">
                                    <p>Dobby Potter</p>
                                </Box>
                            </Box>


                            {/* Tag */}
                            <Box ml="3" display="flex" flexWrap="wrap">
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">TOCEL</Grid>
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Grid>
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Grid>
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Business</Grid>
                                <Grid m={{ base:"5px", md:"3px"}} p="4px 16px" alignItems="center" borderRadius="4px" bgColor="#f5f6f9" fontSize="14px" fontWeight="600" lineHeight="22px">Travel</Grid>
                            </Box>   

                            {/* Point */}
                            <Box ml="3" mt="5px" mb="5px" display="flex" alignItems="center" verticalAlign="bottom">
                                <Box color="#929292" fontSize="14px" fontWeight="600" lineHeight="22px"><p>Trial from</p></Box>
                                <Box ml="5" color="#313030" fontSize="18px" fontWeight="700" lineHeight="28px"><p>33Points</p></Box>
                            </Box>
                        </Box>
                    </Hide>
                </Grid>
            </Box>
            

            {/* Find Tutor Btn */}
            <Box mt="3">    
                <chakra.button
                    width={{ base:"95%", md:"305px" }}
                    mb="5"
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