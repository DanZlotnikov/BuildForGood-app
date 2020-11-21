import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components'
import consts from '../consts'

const HobbyBox1 = (image, color) => {
    return (
        <HobbyBox style={{backgroundColor: color}}>
            <Image 
                style={{
                        height: consts.BOX_IMAGE_SIZE,
                        width: consts.BOX_IMAGE_SIZE,
                }}
                resizeMode="contain"
                source={image} 
            />
        </HobbyBox>
    )
}

export default HobbyBox1

const HobbyBox = styled.TouchableOpacity`
    height: 100%;
    width: 47%;
    border: 2px solid;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`