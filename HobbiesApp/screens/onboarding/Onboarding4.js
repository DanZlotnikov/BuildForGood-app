import React from 'react'
import  { Image } from 'react-native'
import styled from 'styled-components'
import consts from '../../consts'

const Onboarding2 = ({navigation}) => {
    return (
        <Container>
              <Image 
                style={{
                        height: 250,
                        width: 250
                }}
                resizeMode="contain"
                source={require('../../assets/images/onboarding-image-3.png')} 
                />

            <HeaderText>
                ONE LAST THING,
            </HeaderText>
            <BodyText>
                You need to quickly sign up.
            </BodyText>   
                <Button>
                    <ButtonText onPress={() => navigation.navigate('Signup')}>
                        Yeah sure
                    </ButtonText>
                </Button>
        </Container>
    )
}

export default Onboarding2

const Container = styled.View`
    align-items: center;
    padding: 30px;
    height: 100%;
    background-color: ${consts.CIRCLE_ORANGE};
`

const HeaderText = styled.Text`
    margin-top: 20px;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    align-self: flex-start;
    color: ${consts.TEXT_LIGHT_GRAY};
`

const BodyText = styled.Text`
    margin-top: 10px;
    font-size: 50px;
    font-weight: bold;
`

const Button = styled.TouchableOpacity`
    margin-top: 40px; 
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
