import { Box, Container, keyframes, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
  0% { transform: scale(2) rotate(0); border-radius: 20%; }
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 20%; }
  75% { transform: scale(2) rotate(270deg); border-radius: 20%; }
  100% { transform: scale(2) rotate(0); border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;
  
export default function Loading() {
  return (
    <Container h="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box
        as={motion.div}
        animation={animation}
        // not work: transition={{ ... }}
        padding="2"
        // @ts-ignore - "Does not exist" Type Error against Motion
         bgGradient="linear(to-l, #7928CA, #FF0080)"
        width="12"
        height="12"
        display="flex"
      >
        {/* <Image  src={'https://cdn-icons-png.flaticon.com/512/8133/8133826.png'} /> */}
      </Box>
    </Container>
  )
};