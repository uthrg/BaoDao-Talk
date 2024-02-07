import { Box } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import { Show, Hide } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

function Page1() {
  return (
    <Box flexDirection={{ base:"column" }} justifyContent={{ base:"center" }}>
      {/* 開頭 */}
      <Box
        h={{ base:"76px", md:"80px" }}
        p="3"
        // gap="145.417"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >

        {/* 寶島圖片 */}
        <Box 
        w={{ base:"118px", md:"160px" }} 
        h={{ base:"42px", md:"58px"}}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/e05f/1365/7704c2257c5dfe118d8210a07062946e?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gp8wM8xDGBJ9DqyKsVBkPSZygeQ~xYqia8X9QNXP8hmRvXeI5gHkSmM0TKTla8jESEvMx0Ut7J5IMjqiNdxiJ-2nYMNUGtqA2Xyk~dX8qt9d-HdhrJj2qf2Uk9NRPDDodiuYtZ~fgGnu7ek-3VQgqQcWgJSt8IECRZirXqQmyKwzxkcmn6s~2OKLNn2RxEHDneAZm210bt4dwhexmHy1yKg7xo5~ZCUSymtacgnKnje49HC4QvSAayg8wRzG8tLPfrgldmIttRpd9MeVsOkBcABn9KOm1jI7y~vtEVYcGMF6uus08WgY7vUimOG5UOKuttFDb7LSb6k8Kd7WLW6EIw__"
            alt="BaoDaoTalkLogo"
          ></img>
        </Box>

        {/* 手機Menu */}
        <Hide above="md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="19px"
            viewBox="0 0 18 19"
            fill="none"
          >
            <rect x="0.416992" width="17.5828" height="4" rx="2" fill="#6248B6" />
            <rect
              x="0.416992"
              y="7.5"
              width="17.5828"
              height="4"
              rx="2"
              fill="#6248B6"
            />
            <rect
              x="0.416992"
              y="15"
              width="17.5828"
              height="4"
              rx="2"
              fill="#6248B6"
            />
          </svg>
        </Hide>

        {/* 電腦Menu */}
        <Show above="md">
          <Box p="3"
            display="flex"
            color="#313030"
            fontFamily="Roboto"
            fontSize="16px"
            fontWeight="500"
            lineHeight="24px"
            justifyContent="center"
            alignItems="center"
          >
            <Box><p>Find tutors</p></Box>
            <Box ml="15px"><p>Become a tutor</p></Box>
            <Select variant="fill" placeholder='English' size="md" width="30">
              <option value='option1'>Chinese</option>
            </Select>

            <chakra.button
              ml="15px"
              p="8px 37px 6px 37px"
              borderRadius={"4px"}
              bgColor={"#7156E5"}
              color="#FFF"
              fontWeight="600"
            >
              Log in
            </chakra.button>
          </Box>
        </Show>
      </Box>


      {/* 手機Content */}
      <Hide above="md">
        <Box w="95%"
          color="#313030"
          fontFamily="Roboto"
          position="relative"
          transform="translate(-50%, 0%)"
          left="50%"
          >
          <Box fontSize="16px" fontWeight="700" lineHeight="24px">
            <p mt="5px">Online Mandarin Learning</p>
          </Box>
          <Box mt="2" fontSize="24px" fontWeight="700" lineHeight="36px">
            <chakra.h4>Learn Once,</chakra.h4>
            <chakra.h4>Use Anywhere</chakra.h4>
          </Box>
          <Box mt="2" fontSize="14px" fontWeight="400" lineHeight="22px">
            <p>
              Join BaoDao Talk today to immerse yourself in the language and
              culture simultaneously
            </p>
          </Box>

          <chakra.button
            w="100%"
            mt="5"
            mb="5"
            p="8px"
            justifyContent="center"
            alignItems="center"
            borderRadius="4px"
            bgColor="#7156E5"
            color="#fff"
            fontFamily="Roboto"
            fontSize="13px"
            fontWeight="700"
            lineHeight="22px"
          >
            Get Started
          </chakra.button>
        </Box>
      </Hide>

      {/* 手機圖片 */}
      <Hide above="md">
        <Box
          w="100%"
          h="197px"
          bgPos="center"
          backgroundSize='cover'
          backgroundRepeat="no-repeat"
          bgImage="/image/hero.png"
          alt="picture"
        ></Box>
      </Hide>


      <Show above="md">
        {/* 電腦Content */}
        <Box p="20px" bgColor="#F5F6F9" display="flex">
          <Box 
            w="50%"
            // bgColor="#fff"
            p="40px 27px"
          >
            <Box
                color="#313030"
                fontFamily="Roboto"
                position="relative"
                transform="translate(-50%, 0%)"
                left="50%"
                >
                <Box fontSize="24px" fontWeight="700" lineHeight="36px">
                  <p mt="5px">Online Mandarin Learning</p>
                </Box>
                <Box mt="2" fontSize="48px" fontWeight="700" lineHeight="64px">
                  <chakra.h2>Learn Once,Use Anywhere</chakra.h2>
                </Box>
                <Box mt="2" fontSize="16px" fontWeight="400" lineHeight="24px">
                  <p>
                    Join BaoDao Talk today to immerse yourself in the language and
                    culture simultaneously
                  </p>
                </Box>

                <chakra.button
                  h="48px"
                  mt="5"
                  mr="5"
                  mb="5"
                  p="12px 24px"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="4px"
                  bgColor="#7156E5"
                  color="#fff"
                  fontFamily="Roboto"
                  fontSize="15px"
                  fontWeight="700"
                  lineHeight="26px"
                >
                  Get Started
                </chakra.button>

                <chakra.button
                  h="48px"
                  mt="5"
                  mb="5"
                  p="12px 24px"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="4px"
                  border="1px solid #313030"
                  bgColor="#F5F6F9"
                  color="#313030"
                  fontFamily="Roboto"
                  fontSize="15px"
                  fontWeight="700"
                  lineHeight="26px"
                  display="inline-flex"
                >
                  How it works
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="#313030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </chakra.button>
            </Box>
          </Box>

          {/* 電腦圖片 */}
          <Box 
            w="50%"
            h="368px"
            bgPos="right"
            backgroundSize='contain'
            backgroundRepeat="no-repeat"
            bgImage="/image/hero_v4.png"
            alt="picture"
          />
        </Box>
      </Show>

    </Box>
  );
}

export default Page1;
