import { Box,Image } from 'native-base';
import React from 'react';

// import { Container } from './styles';

const Storys = ({data}) => {
  return(
    <Box flex={1} marginBottom={4} padding={2} borderRadius={4}>
      <Box
      padding={'0.5'} 
      borderRadius={37}
      bg={{
        LinearGradient:{
          colors: ["lightBlue.300","violet.800"]
        }
      }}>
      <Image
      source={{uri: data.avatarUrl}}
      width={16}
      height={16}
      borderRadius={32}
      alt={'Imagem de Perfil'}
      />
      </Box>
    </Box>
  )
}

export default Storys;