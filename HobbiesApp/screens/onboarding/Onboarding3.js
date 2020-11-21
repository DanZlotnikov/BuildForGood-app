import React from 'react'
import  { Image } from 'react-native'
import styled from 'styled-components'
import ProgressionDots from '../../components/ProgressionDots'
import consts from '../../consts'

const Onboarding2 = ({navigation}) => {
    return (
        <Container>
             <DotsContainer>
                    <ProgressionDots amount={4} markedIndex={2} />
                </DotsContainer>
              <Image 
                style={{
                        height: 250,
                        width: 250
                }}
                resizeMode="contain"
                source={require('../../assets/images/onboarding-image-2.png')} 
                />

            <HeaderText>
                Don't Worry!{'\n'}
                Its easy :) 
            </HeaderText>
            <BodyText>
                Inside these rooms you will have other people like you, and an influencer that manages the room!
            </BodyText>
                <Button onPress={() => navigation.navigate('Onboarding4')}>
                    <ButtonText>
                        mmm... interesting...
                    </ButtonText>
                </Button>
        </Container>
    )
}

export default Onboarding2

const Container = styled.View`
    align-items: center;
    padding: 20px;
    height: 100%;
    background-color: ${consts.CIRCLE_GREEN};
`

const HeaderText = styled.Text`
    margin-top: 20px;
    font-size: 45px;
    font-weight: bold;
    text-align: center;
`

const BodyText = styled.Text`
    margin-top: 10px;
    text-align: center;
    font-size: 25px;
` 

const Button = styled.TouchableOpacity`
    margin-top: 25px; 
    width: 90%;
    height: 10%;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    background-color: black;
`

const ButtonText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: white;
`

const DotsContainer = styled.View`
    width: 100%;
    position: absolute;
    top: 20px;
`