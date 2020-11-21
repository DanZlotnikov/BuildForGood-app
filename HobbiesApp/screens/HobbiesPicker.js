import React from 'react'
import { Image, ScrollView } from 'react-native'
import styled from 'styled-components'
import consts from '../consts'
import BottomMenu from '../components/BottomMenu'

const HobbiesPicker = ({navigation}) => {
    var hobbies = ['bicycle', 'chess', 'biking', 'boxing']
    const sendHobby = (hobby) => {
        navigation.navigate('Room')
        console.log(hobby)
    }
    return (
        <Container>
            <HeaderContainer>
                <ImageTextContainer>
                    <SmallHeaderTextContainer>
                        <SmallHeaderText>
                            Are you ready?
                        </SmallHeaderText>
                    </SmallHeaderTextContainer>
                    <Image 
                        style={{
                                height: 140,
                                width: 120,
                        }}
                        resizeMode="contain"
                        source={require('../assets/images/tlv-virgin-hipster.png')} 
                    />
                </ImageTextContainer>
            </HeaderContainer>
            <HeaderText>
                Pick your hobby of the day!
            </HeaderText>
            <HobbyBoxesContainer>
                <HobbyBoxRow>
                    <HobbyBox 
                        style={{backgroundColor: consts.BOX_YELLOW}} 
                        onPress={() => {sendHobby(hobbies[0])}}
                    >
                        <Image 
                            style={{
                                    height: consts.BOX_IMAGE_SIZE + 10,
                                    width: consts.BOX_IMAGE_SIZE + 10,
                            }}
                            resizeMode="contain"
                            source={require('../assets/images/bicycle.png')} 
                        />
                    </HobbyBox>
                    <HobbyBox 
                        style={{backgroundColor: consts.BOX_PEACH}}
                        onPress={() => {sendHobby(hobbies[1])}}
                    >
                        <Image 
                            style={{
                                    height: consts.BOX_IMAGE_SIZE,
                                    width: consts.BOX_IMAGE_SIZE,
                            }}
                            resizeMode="contain"
                            source={require('../assets/images/chess.png')} 
                        />
                    </HobbyBox>
                </HobbyBoxRow>
                <HobbyBoxRow>
                    <HobbyBox 
                        style={{backgroundColor: consts.BOX_DARK_GREY}}
                        onPress={() => {sendHobby(hobbies[2])}}
                    >
                        <Image 
                            style={{
                                    height: consts.BOX_IMAGE_SIZE,
                                    width: consts.BOX_IMAGE_SIZE,
                            }}
                            resizeMode="contain"
                            source={require('../assets/images/racing-helmet.png')} 
                        />
                    </HobbyBox>
                    <HobbyBox 
                        style={{backgroundColor: consts.BOX_PINK}}
                        onPress={() => {sendHobby(hobbies[3])}}
                    >
                        <Image 
                            style={{
                                    height: consts.BOX_IMAGE_SIZE,
                                    width: consts.BOX_IMAGE_SIZE,
                            }}
                            resizeMode="contain"
                            source={require('../assets/images/boxing.png')} 
                        />
                    </HobbyBox>
                </HobbyBoxRow>
                {/* <LetsGoButton>
                    <LetsGoButtonText>
                        LET'S GO!!!
                    </LetsGoButtonText>
                </LetsGoButton> */}
            </HobbyBoxesContainer>
            <BottomMenu navigation={navigation}/>
        </Container>
    )
}

export default HobbiesPicker

const Container = styled.View`
    padding: 10px;
    padding-top: 20px;
    align-items: center;
    height: 100%;
    top: 0;
`

const HeaderContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;    
`
const ImageTextContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`

const SmallHeaderTextContainer = styled.View`
    justify-content: flex-end;
    margin-bottom: 20px;
`

const SmallHeaderText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`

const HeaderText = styled.Text`
    font-size: 35px;
    font-weight: bold;
    text-align: center;
`

const HobbyBoxesContainer = styled.View`
    margin-top: 20px;
    height: 60%;
`

const HobbyBoxRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    height: 35%;
`

const HobbyBox = styled.TouchableOpacity`
    height: 100%;
    width: 47%;
    border: 2px solid;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`

const LetsGoButton = styled.TouchableOpacity`
    margin-top: 10%;
    height: 60px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${consts.BUTTON_GREEN};
    border: 2px solid;
    border-bottom-width: 5px;
    border-radius: 15px;
`

const LetsGoButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`