import React from 'react'
import { ScrollView, Image } from 'react-native'
import styled from 'styled-components'
import consts from '../consts'
import Icon from 'react-native-vector-icons/FontAwesome5'

const History = () => {
    return (
        <ScrollView>
            <Container>
                <HeaderText>
                    History
                </HeaderText>
                <HistoryBox style={{backgroundColor: consts.HISTORY_BOX_PINK}}>
                    <ImageContainer>
                        <Image 
                            style={{
                                    height: 60,
                                    width: 60,
                            }}
                            resizeMode="contain"
                            source={require('../assets/images/room-avatar.png')} 
                        />
                    </ImageContainer>
                    <BoxText>
                        Best Sushi lessons ever!
                    </BoxText>
                    <BoxBottomView>
                        <NameDateView>
                            <NameText>
                                Alisa Red  
                            </NameText>
                            <DateText>
                                21 November, 20
                            </DateText>
                        </NameDateView>
                        <JoinButton>
                            <JoinText>
                                Join
                            </JoinText>
                        </JoinButton>
                    </BoxBottomView>
                </HistoryBox>
                <HistoryBox style={{backgroundColor: consts.HISTORY_BOX_GREEN}}>
                    <ImageContainer>
                        <Image 
                            style={{
                                    height: 60,
                                    width: 60,
                                    borderRadius: 200
                            }}
                            resizeMode="contain"
                            source={require('../assets/images/potker.jpeg')} 
                        />
                    </ImageContainer>
                    <BoxText>
                        Singing lessons for adults :)
                    </BoxText>
                    <BoxBottomView>
                        <NameDateView>
                            <NameText>
                                Lotker The King
                            </NameText>
                            <DateText>
                                15 March, 20
                            </DateText>
                        </NameDateView>
                       
                    </BoxBottomView>
                </HistoryBox>
            </Container>
        </ScrollView>
    )
}

export default History

const Container = styled.View`
    padding: 20px;
    height: 100%;
`

const HeaderText = styled.Text`
    font-size: 40px;
    font-weight: bold;
`

const HistoryBox = styled.View`
    height: 350px;
    padding: 20px;
    margin-top: 20px;
    border: 2px solid;
    border-bottom-width: 7px;
    border-radius: 25px;
    justify-content: space-between;
    margin-bottom: 10px;
`

const ImageContainer = styled.TouchableOpacity`
`

const BoxText = styled.Text`
    font-size: 40px;
    font-weight: bold;
`

const BoxBottomView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const NameDateView = styled.View`
`


const NameText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`

const DateText = styled.Text`
    font-size: 15px;
    margin-top: 5px;
`

const JoinButton = styled.TouchableOpacity`
    background-color: ${consts.CIRCLE_ORANGE};
    border: 2px solid;
    border-bottom-width: 5px;
    width: 30%;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
`

const JoinText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`