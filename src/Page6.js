import { Box } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';

function Page6 () {
    return(
        <Box 
        w="100%"
        h="482px"
        pos="relative"
        display="flex"                
        bgPosition="80% 0%"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgImage="url('https://s3-alpha-sig.figma.com/img/a3a8/bff3/15f8538ded6de55b744f1fd6260a9f1f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ij~OTCQZWl1tzp-HzMFXmFrjr40QtnYezi0Qj0WPAr2puJgcQNtlhn0OIUDXNerEI57fl1U7S2W-LLdheCkM-rb2Wdw9~mRhJR-oJaYTPTwylx08ZXmvaLNcautG43AJmp-mE9dU0U7TpNj3jhzzpY7RQgh8aOy9g8tHcbgRqf9syxgQEdwciycyBY565CLG8RkVRfNykB0b9GuOhfqUAoMwHbSsMnYRthZwlgtv8xgwjA9ACPhR~u3ml8Cg6ujQToiOQ43JDlduV7cb00pzbxxbpXfmZEsPHZtG4Sk8DMW4GxurTz9NaYG1AQFhJCFO6SIxty4wbCRnseDq3XTuOA__')"
        >
            <Box w="95%" h="450px" p="4" gap="11px" borderRadius="8px" 
            bgColor="rgba(255, 255, 255, 0.95)" 
            display="flex"
            flexDirection="column" 
            justifyContent="space-between"
            position="absolute"
            transform="translate(-50%,-50%)"
            top="50%" 
            left="50%"
            >
                <Box mt="1" color="#313030" fontFamily="Poppins" fontSize="20px" fontWeight="700" lineHeight="30px">
                    <chakra.h5>About BaoDao Talk</chakra.h5>
                </Box>

                <Box mt="1" color="#313030" fontFamily="Roboto" fontSize="16px" fontWeight="400" lineHeight="24px">
                    <p>"寶島 BaoDao" means "beautiful and rich island" which is another name represents Taiwan. </p><br/>
                    <p>We promote Taiwanese culture and Mandarin, offering professional Mandarin learning services to help people know more about Taiwan, and experience its unique culture.</p><br/>
                    <p>Join us in embracing the beauty of Taiwan and sharing the spirit of "BaoDao" with the world.</p>
                </Box>

                <Box p="8px 24px" 
                justifyContent="center" 
                alignItems="center" 
                borderRadius="4px" 
                bgColor="#7156E5"
                color="#fff" 
                fontFamily="Roboto" 
                fontSize="13px" 
                fontWeight="700" 
                lineHeight="22px"
                textAlign="center"   
                >
                    <chakra.button
                    
                    >Get Started</chakra.button>
                </Box>
            </Box>
        </Box>
    )
}

export default Page6;