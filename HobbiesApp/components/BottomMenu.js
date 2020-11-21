import React from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome5'

const BottomMenu = ({navigation}) => {
    return (
        <Container>
            <MenuOption onPress={() => navigation.navigate('HobbiesPicker')}>
                <Icon name="search" size={20} color='black' />
                <OptionText>Explorer</OptionText>
            </MenuOption>
            <MenuOption onPress={() => navigation.navigate('History')}>
                <Icon name="history" size={20} color='black' />
                <OptionText>History</OptionText>
            </MenuOption>
            <MenuOption onPress={() => navigation.navigate('Profile')}>
                <Icon name="user" size={20} color='black' />
                <OptionText>Profile</OptionText>
            </MenuOption>
            <MenuOption onPress={() => navigation.navigate('Settings')}>
                <Icon name="cog" size={20} color='black' />
                <OptionText>Settings</OptionText>
            </MenuOption>
        </Container>
    )
}

export default BottomMenu

const Container = styled.View`
    height: 10%;
    width: 100%;
    position: absolute;
    bottom: 0;
    flex-direction: row;
    justify-content: space-between;
`

const MenuOption = styled.TouchableOpacity`
    width: 25%;
    align-items: center;
    justify-content: center;
`

const OptionText = styled.Text`
    margin-top: 5px;
    font-size: 15px;
    font-weight: bold;
`