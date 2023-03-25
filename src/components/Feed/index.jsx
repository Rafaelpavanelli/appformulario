import { Box,Image,Text,Heading } from 'native-base';
import React from 'react';
import {Feather} from '@expo/vector-icons'

// import { Container } from './styles';

const Feed = ({data}) => {
  return(
    <Box flex={1} flexDirection={'column'} paddig={2} marginBottom={4}
     backgroundColor={'#fff'} borderRadius={4}>
     <Box>
      <Image
      source={{uri:data.avatarUrl}}
      alt={"Post feed "}
      w={"100%"}
      h={120}
      />
     </Box>
     <Box marginY={3}>
      <Heading size={'sm'}>
        Aprendendo com Sujeito Programador
      </Heading>
      <Text numberOfLines={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos possimus iste voluptatem at esse, tempora repellat dolorum accusamus doloribus reiciendis quos praesentium itaque! Expedita, similique. Quis corporis quas nesciunt.</Text>
     </Box>
    </Box>
  );
}

export default Feed;