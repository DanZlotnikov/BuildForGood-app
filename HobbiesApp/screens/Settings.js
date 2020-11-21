import React from 'react'
import { Image, ScrollView } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome5'
import consts from '../consts'

const Settings = () => {
    return (
        <ScrollView>
            <Container>
                <HeaderButtonView>
                        {/* <BackButtonView>
                        <Image 
                            style={{
                                height: 50,
                                width: 50,
                            }}
                            resizeMode="contain"
                            source={require('../assets/images/x-button.png')} 
                        />
                        </BackButtonView> */}
                    <HeaderView>
                        <HeaderText>
                                Settings
                            </HeaderText>
                    </HeaderView>
                </HeaderButtonView>
                <MenuHeaderView>
                    <MenuHeaderText>
                        General
                    </MenuHeaderText>
                </MenuHeaderView>
                <MenuView>
                    <MenuItemView>
                        <CircleTextView>
                            <MenuItemCircle style={{backgroundColor: consts.CIRCLE_ORANGE }}/>
                            <MenuItemText>
                                Display and sound
                            </MenuItemText>
                        </CircleTextView>
                        <MenuItemArrowText>
                            {'>'}
                        </MenuItemArrowText>
                    </MenuItemView>
                    <MenuItemView>
                        <CircleTextView>
                            <MenuItemCircle style={{backgroundColor: consts.CIRCLE_ORANGE }}/>
                            <MenuItemText>
                                Data Usage
                            </MenuItemText>
                        </CircleTextView>
                        <MenuItemArrowText>
                            {'>'}
                        </MenuItemArrowText>
                    </MenuItemView>
                    <MenuItemView>
                        <CircleTextView>
                            <MenuItemCircle style={{backgroundColor: consts.CIRCLE_ORANGE }}/>
                            <MenuItemText>
                                Accessibility
                            </MenuItemText>
                        </CircleTextView>
                        <MenuItemArrowText>
                            {'>'}
                        </MenuItemArrowText>
                    </MenuItemView>
                </MenuView>
                <MenuHeaderView>
                    <MenuHeaderText>
                        Security and Privacy
                    </MenuHeaderText>
                </MenuHeaderView>
                <MenuView>
                    <MenuItemView>
                        <CircleTextView>
                            <MenuItemCircle style={{backgroundColor: consts.CIRCLE_ORANGE }}/>
                            <MenuItemText>
                                Account
                            </MenuItemText>
                        </CircleTextView>
                        <MenuItemArrowText>
                            {'>'}
                        </MenuItemArrowText>
                    </MenuItemView>
                    <MenuItemView>
                        <CircleTextView>
                            <MenuItemCircle style={{backgroundColor: consts.CIRCLE_GREEN }}/>
                            <MenuItemText>
                                Password
                            </MenuItemText>
                        </CircleTextView>
                        <MenuItemArrowText>
                            {'>'}
                        </MenuItemArrowText>
                    </MenuItemView>
                    <MenuItemView>
                        <CircleTextView>
                            <MenuItemCircle style={{backgroundColor: consts.CIRCLE_PINK }}/>
                            <MenuItemText>
                                Privacy
                            </MenuItemText>
                        </CircleTextView>
                        <MenuItemArrowText>
                            {'>'}
                        </MenuItemArrowText>
                    </MenuItemView>
                </MenuView>
            </Container>
        </ScrollView>
    )
}

export default Settings

const Container = styled.View`
    padding: 20px;
    align-items: center;
`

const HeaderButtonView = styled.View`
    width: 100%;
    justify-content: flex-start;
    flex-direction: row;
`

const HeaderView = styled.View`
    justify-content: center;
`

const HeaderText = styled.Text`
    font-size: 35px;
    font-weight: bold;
`

const BackButtonView = styled.View`
    margin-right: 50px;
    align-items: center;
    justify-content: center;
`

const MenuHeaderView = styled.View`
    width: 100%;
    align-items: flex-start;
    margin-top: 30px;
`

const MenuHeaderText = styled.Text`
    color: ${consts.TEXT_GRAY};
    font-size: 25px;
    font-weight: bold;
`

const MenuView = styled.View`
    margin-top: 20px;
    width: 100%;
    border: 2px solid;
    border-bottom-width: 7px;
    border-radius: 15px; 
`

const MenuItemView = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`

const CircleTextView = styled.View`
    flex-direction: row;
`

const MenuItemCircle = styled.View`
    width: 25px;
    height: 25px;
    border: 2px solid;
    border-radius: 40px;
`

const MenuItemText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px;
`

const MenuItemArrowText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    margin-right: 5px;
`