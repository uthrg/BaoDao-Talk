import { Box } from '@chakra-ui/react';
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
            <Box m="3" color="#313030" fontFamily="Poppins" fontSize="20px" fontWeight="700" lineHeight="30px">
                <chakra.h5>Book your lesson in 3 easy steps with BaoDao Talk</chakra.h5>
            </Box>

            <Box h="200px" bgRepeat="no-repeat" bgSize="contain" bgPos="center"
            bgImage="https://s3-alpha-sig.figma.com/img/c85a/9a06/2f2c2eab8ec84a1d85ef9376360a1b74?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=megciYxt7k9xFWqIT9m3stuSR8toTWU9MCGCU9EKn4kdetCOXDSOiOA-NCs-IG-SGf9PHE8bgDRSyYnGYKz2yJHZdGFp6NsbUBFpbZaDkFFQkrmbuk2fWHljS5G~9f3fEIL67w17-X0EmhNk5zPRhVAEiYx9c1mMB2wczd4o-TQG12yCORL1uLYC8xwEJuqwjxI41w99Xa7nb4P~-Dpp-MoYS8AkmIwTMoxTVIQIT67da9jEG9-d0IakLGc8SGs3c~r9Tpz3lz-xSr2kbmBU3YW84AXAB78bJHE1Br-6z1EtKM6FGxaUMAF62SSQkpjNFuyL9qFO8WSkmFVuTaM-ng__">
                {/* <Image m="5" w="247px" h="200px" alt='老師打招呼照片' pos="center"
                src='https://s3-alpha-sig.figma.com/img/c85a/9a06/2f2c2eab8ec84a1d85ef9376360a1b74?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=megciYxt7k9xFWqIT9m3stuSR8toTWU9MCGCU9EKn4kdetCOXDSOiOA-NCs-IG-SGf9PHE8bgDRSyYnGYKz2yJHZdGFp6NsbUBFpbZaDkFFQkrmbuk2fWHljS5G~9f3fEIL67w17-X0EmhNk5zPRhVAEiYx9c1mMB2wczd4o-TQG12yCORL1uLYC8xwEJuqwjxI41w99Xa7nb4P~-Dpp-MoYS8AkmIwTMoxTVIQIT67da9jEG9-d0IakLGc8SGs3c~r9Tpz3lz-xSr2kbmBU3YW84AXAB78bJHE1Br-6z1EtKM6FGxaUMAF62SSQkpjNFuyL9qFO8WSkmFVuTaM-ng__'></Image> */}
            </Box>

            <Box mt="3" display="flex">
                <Box borderRadius="50%" w="42px" h="42px" bgColor="#" position="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#C5BAF4"/>
                    </svg>
                    <Box position="absolute"  transform="translate(-60%, -60%)" top="50%" left="50%"
                        w="6.72px" h="25.28px" color="#7156E5" fontFamily="Poppins" fontSize="20px" fontWeight="700" lineHeight="30px">
                        <chakra.h5>1</chakra.h5>
                    </Box>
                </Box>
                <Box ml="5px">
                    <Box color="#121212" fontFamily="Poppins" fontSize="20px" fontWeight="500" lineHeight="30px">
                        <p>Choose a tutor</p>
                    </Box>
                    <Box color="313030" fontFamily="Roboto" fontSize="12px" fontWeight="400" lineHeight="18px">
                        <p>Explore tutors and review their background, expertise and experience. You can also message a tutor to personalize your lessons and communicate your specific needs.</p>
                    </Box>
                </Box>
            </Box>
            <Box mt="3" display="flex">
                <Box borderRadius="50%" w="42px" h="42px" bgColor="#" position="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#C5BAF4"/>
                    </svg>
                    <Box position="absolute"  transform="translate(-70%, -60%)" top="50%" left="50%"
                        w="6.72px" h="25.28px" color="#7156E5" fontFamily="Poppins" fontSize="20px" fontWeight="700" lineHeight="30px">
                        <chakra.h5>2</chakra.h5>
                    </Box>
                </Box>
                <Box ml="5px">
                    <Box color="#121212" fontFamily="Poppins" fontSize="20px" fontWeight="500" lineHeight="30px">
                        <p>Select a time and schedule a class</p>
                    </Box>
                    <Box color="313030" fontFamily="Roboto" fontSize="12px" fontWeight="400" lineHeight="18px">
                        <p>Select a time slot and schedule a one-on-one lesson. You have the flexibility to cancel or reschedule up to 12 hours before your class.</p>
                    </Box>
                </Box>
            </Box>
            <Box mt="3" display="flex">
                <Box borderRadius="50%" w="42px" h="42px" bgColor="#" position="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z" fill="#C5BAF4"/>
                    </svg>
                    <Box position="absolute"  transform="translate(-70%, -60%)" top="50%" left="50%"
                        w="6.72px" h="25.28px" color="#7156E5" fontFamily="Poppins" fontSize="20px" fontWeight="700" lineHeight="30px">
                        <chakra.h5>3</chakra.h5>
                    </Box>
                </Box>
                <Box ml="5px">
                    <Box color="#121212" fontFamily="Poppins" fontSize="20px" fontWeight="500" lineHeight="30px">
                        <p>Top-up your points</p>
                    </Box>
                    <Box color="313030" fontFamily="Roboto" fontSize="12px" fontWeight="400" lineHeight="18px">
                        <p>Add points to your account for instant checkout.</p>
                    </Box>
                </Box>
            </Box>

                <Box
                mt="5" mb="5" p="8px 24px" justifyContent="center" 
                alignContent="center" 
                borderRadius="4px" 
                bgColor="#7156E5"
                color="#ffffff"
                fontFamily="Roboto"
                fontSize="13px"
                fontWeight="700"
                lineHeight="22px"
                textAlign="center">
                    <chakra.button>Book your lesson now</chakra.button>
                </Box>
            
        </Box>
    )
}

export default Page4;