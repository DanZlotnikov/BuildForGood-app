import React from 'react'
import { TextInput } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome5'
import consts from '../consts'

const Signup = ({navigation}) => {
  return (
      <Container>
        <SignupText>Sign Up</SignupText>
        <InputContainer>
          <Icon name="user" size={20} color='black' />
          <TextInput 
                      style={{ 
                        color: 'black', 
                        backgroundColor: 'white', 
                        height: 50, 
                        width: '90%', 
                        borderRadius: 20,
                        fontSize: 20
                      }}
                      placeholder='Full Name'
                      placeholderTextColor='black'
                      // onChangeText={text => data.emailOrPhone = text}
                      > 
          </TextInput>
        </InputContainer>
        <InputContainer>
          <Icon name="envelope" size={20} color='black' />
          <TextInput 
                      style={{ 
                        color: 'black', 
                        backgroundColor: 'white', 
                        height: 50, 
                        width: '90%', 
                        borderRadius: 20,
                        fontSize: 20
                      }}
                      placeholder='Email Address'
                      placeholderTextColor='black'
                      // onChangeText={text => data.emailOrPhone = text}
                      > 
          </TextInput>
        </InputContainer>
        <InputContainer>
          <Icon name="lock" size={20} color='black' />
          <TextInput 
                      style={{ 
                        color: 'black', 
                        backgroundColor: 'white', 
                        height: 50, 
                        width: '90%', 
                        borderRadius: 20,
                        fontSize: 20,
                        fontFamily: 'OpenSans-Regular'
                      }}
                      placeholder='Password'
                      placeholderTextColor='black'
                      secureTextEntry={true}
                      // onChangeText={text => data.emailOrPhone = text}
                      > 
          </TextInput>
        </InputContainer>
        <SignupButton>
          <SignupButtonText>
            Sign up
            </SignupButtonText>
        </SignupButton>
        <ExistingUserContainer onPress={() => navigation.navigate('Login')}>
          <ExistingUserBlackText>
            Have an account? 
          </ExistingUserBlackText>
          <ExistingUserOrangeText>
             Go Here
          </ExistingUserOrangeText>
        </ExistingUserContainer>
      </Container>
      )
    }
export default Signup

const Container = styled.View`
    padding: 20px;
    align-items: center;
`

const SignupText = styled.Text`
    margin-top: 10%;
    font-size: 40px;
    font-family: fontisto;
    font-weight: bold;
`
const InputContainer = styled.View`
    width: 100%;
    margin-top: 4%;
    padding-left: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border: 2px solid;
    border-radius: 15px;
    font-size: 20px;
`

const SignupButton = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    margin-top: 10%;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${consts.BUTTON_ORANGE};
    border: 2px solid;
    border-bottom-width: 5px;
    border-radius: 15px;
`

const SignupButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`

const ExistingUserContainer = styled.TouchableOpacity`
    margin-top: 5%;
    flex-direction: row;
`

const ExistingUserBlackText = styled.Text`
    font-size: 15px;
`

const ExistingUserOrangeText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    margin-left: 5px;
    color: ${consts.TEXT_ORANGE};
`