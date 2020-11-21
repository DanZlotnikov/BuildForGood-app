import React from 'react'
import  { Image } from 'react-native'
import styled from 'styled-components'
import ProgressionDots from '../../components/ProgressionDots'

const Onboarding1 = ({navigation}) => {
    return (
        <Container>
            <DotsContainer>
                <ProgressionDots amount={4} markedIndex={0} />
            </DotsContainer>
              <Image 
                style={{
                        height: 250,
                        width: 250
                }}
                resizeMode="contain"
                source={require('../../assets/images/onboarding-image.png')} 
                />

            <HeaderText>
                Wait! {'\n'}
                What is Valuu?
            </HeaderText>
            <BodyText>
                Valuu Is an app offering you a world full of high quality content in a push of a button
            </BodyText>
            <ButtonsContainer>
                <Button onPress={() => navigation.navigate('Onboarding2')}>
                    <ButtonText style={{color: 'black'}}>
                        I'm a button!
                    </ButtonText>
                </Button>
                     <Button onPress={() => navigation.navigate('Onboarding2')} style={{backgroundColor: 'black'}}>
                    <ButtonText style={{color: 'white'}}>
                        Me too!
                    </ButtonText>
                </Button>
            </ButtonsContainer>

        </Container>
    )
}

export default Onboarding1

const Container = styled.View`
    align-items: center;
    padding: 20px;
    height: 100%;
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

const ButtonsContainer = styled.View`
    position: absolute;
    bottom: 30px;
    flex-direction: row;
    width: 100%;
    height: 12%;
    justify-content: space-between;
`

const Button = styled.TouchableOpacity`
    width: 48%;
    border: 2px solid;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`

const ButtonText = styled.Text`
    font-size: 25px;
    font-weight: bold;
`

const DotsContainer = styled.View`
    width: 100%;
    position: absolute;
    top: 20px;
`