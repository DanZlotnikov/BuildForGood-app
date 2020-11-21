import React from 'react'
import  { Image } from 'react-native'
import styled from 'styled-components'
import ProgressionDots from '../../components/ProgressionDots'
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
                source={require('../../assets/images/onboarding-image-1.png')} 
                />

            <HeaderText>
                Valuu offers you {'\n'}
                real time content!
            </HeaderText>
            <BodyText>
                You pick a niche, and Valuu 
                will add you automatically to 
                an available room that provides
                the wanted content
            </BodyText>
            <ButtonDotsContainer>
                <DotsContainer>
                    <ProgressionDots amount={4} markedIndex={1} />
                </DotsContainer>
                <Button onPress={() => navigation.navigate('Onboarding3')}>
                    <ButtonText>
                        {'>'}
                    </ButtonText>
                </Button>
            </ButtonDotsContainer>
        </Container>
    )
}

export default Onboarding2

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

const ButtonDotsContainer = styled.View`
    position: absolute;
    padding-right: 40px;
    bottom: 30px;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    align-items: center;
`

const Button = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    border: 2px solid;
    border-bottom-width: 5px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    background-color: ${consts.CIRCLE_ORANGE};
    padding-bottom: 7px;
`

const ButtonText = styled.Text`
    font-size: 60px;
    text-align: center;
    font-weight: bold;
`

const DotsContainer = styled.View`
    width: 100%;
`