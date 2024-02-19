import { Box, Hide, Show,Image,Grid } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';

function Footer() {
    return(
        <Box bgColor="#F5F6F9">
            <Box
                w={{ base:"90%", md:"95%" }}
                pos="relative"
                transform="translate(-50%, 0%)"
                left="50%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                
            >
                <Box mt={{ md:"35px" }} display={{ md:"flex" }}>
                    <Box w={{ md:"40%"}}>
                        <Image w="146px" h="53px" m="16px 0" src="/image/BaoDaoTalk_LOGO.png" alt="BaoDaoTalk"></Image>
                    </Box>

                    <Box w={{ md:"60%" }} display={{ md:"flex" }} justifyContent={{ md:"end" }}>
                        <Grid gridTemplateColumns={{ md:"auto auto auto" }}  gap={{ md:"60px"}}>
                            <Box m="8px 0">
                                <p style={{ color:"#313030", fontFamily:"Roboto", fontSize:"16px", fontWeight:"600", lineHeight:"24px" }}>Learn More</p>
                                <p style={{ margin:"2px 0", color:"#313030",  opacity:"0.8", fontFamily:"Roboto", fontSize:"14px", fontWeight:"400", lineHeight:"22px" }}>About us</p>
                                <p style={{ margin:"2px 0", color:"#313030",  opacity:"0.8", fontFamily:"Roboto", fontSize:"14px", fontWeight:"400", lineHeight:"22px" }}>FAQs</p>
                            </Box>
                            <Box m="8px 0">
                                <p style={{ color:"#313030", fontFamily:"Roboto", fontSize:"16px", fontWeight:"600", lineHeight:"24px" }}>Legal</p>
                                <p style={{ margin:"2px 0", color:"#313030",  opacity:"0.8", fontFamily:"Roboto", fontSize:"14px", fontWeight:"400", lineHeight:"22px" }}>Terms of Use</p>
                                <p style={{ margin:"2px 0", color:"#313030",  opacity:"0.8", fontFamily:"Roboto", fontSize:"14px", fontWeight:"400", lineHeight:"22px" }}>Privacy Policy</p>
                            </Box>
                            <Box m="8px 0">
                                <p style={{ color:"#313030", fontFamily:"Roboto", fontSize:"16px", fontWeight:"600", lineHeight:"24px" }}>Contacts</p>
                                <p style={{ margin:"2px 0", color:"#313030",  opacity:"0.8", fontFamily:"Roboto", fontSize:"14px", fontWeight:"400", lineHeight:"22px" }}>Shang Chin Education and Training Co., Ltd.</p>
                                <p style={{ margin:"2px 0", color:"#313030",  opacity:"0.8", fontFamily:"Roboto", fontSize:"14px", fontWeight:"400", lineHeight:"22px" }}>2 F., No. 250, Zhishan Rd., Xiping Vil., Xitun Dist., Taichung City 407036, Taiwan (R.O.C.)</p>
                                <p style={{ margin:"2px 0 20px 0", color:"#313030",  opacity:"0.8", fontFamily:"Roboto", fontSize:"14px", fontWeight:"400", lineHeight:"22px" }}>Email us</p>
                            </Box>
                        </Grid>
                    </Box>
                </Box>
                <hr />
                <Box m={{ base:"20px 0", md:"24px 0 56px 0" }}display={{ md:"flex" }} justifyContent={{ md:"space-between" }}>
                    <p style={{ color:"#313030",  opacity:"0.65", fontFamily:"Roboto", fontSize:"14px", fontWeight:"400"}}>© 2024 BaoDao Talk company Limited</p>
                    <Image w="32px" h="32px" m={{ base:"15px 0", md:"auto 0px"}} src='/image/Social.svg' alt="Facebook"></Image>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;