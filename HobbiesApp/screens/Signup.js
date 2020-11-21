import React, { useState } from 'react'
import { TextInput, ScrollView } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { RadioButton } from 'react-native-paper'
import consts from '../consts'
import { auth } from '../api/api'
import { showBottomMenu, getProfile } from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      passWarningDisplay: 'none',
      emailWarningDisplay: 'none',
      passLenWarningDisplay: 'none',
      nameWarningDisplay: 'none',
      checked: 'fan',
      fullname: '',
      email: '',
      password: '',
      passwordConfirm: '',
      signupDisabled: false,
      signupOpacity: 1,
      signupColor: consts.BUTTON_ORANGE
    }
  }
  
  render() {
    const { navigation } = this.props
    var validUser = true

    const signup = async () => {
      this.setState({nameWarningDisplay: 'none'})
      this.setState({passLenWarningDisplay: 'none'})
      this.setState({passWarningDisplay: 'none'})
      this.setState({emailWarningDisplay: 'none'})

      if (this.state.fullname.length < 2) {
        this.setState({nameWarningDisplay: 'flex'})
        validUser = false
    }

      if (this.state.password.length < 6) {
          this.setState({passLenWarningDisplay: 'flex'})
          validUser = false
      }
      if ((this.state.password != this.state.passwordConfirm)) {
        this.setState({passWarningDisplay: 'flex'})
        validUser = false
      }
      if (!this.state.email.includes('@') || !this.state.email.includes('.')) {
        this.setState({emailWarningDisplay: 'flex'})
        validUser = false
      }
      if (validUser) {
        this.setState({signupDisabled: true})
        this.setState({signupOpacity: 0.5})
        this.setState({signupColor: 'gray'})
        console.log('valid')
        console.log(this.state.fullname, this.state.email, this.state.password, this.state.passwordConfirm, this.state.checked)
        await auth.signup({
          name: this.state.fullname,
          email: this.state.email,
          password: this.state.password,
          passwordConfirm: this.state.passwordConfirm,
        },
        this.props.getProfile)
        navigation.navigate('HobbiesPicker')
      }
    } 
    return ( 
      <ScrollView>
        <Container>
          <SignupText>Sign Up</SignupText>
          <InputContainer style={{backgroundColor: this.state.nameWarningDisplay == 'none' ? 'white' : consts.WARNING_BOX_RED}}>
            <Icon name="user" size={20} color='black' />
            <TextInput 
                        style={{ 
                          color: 'black', 
                          backgroundColor: this.state.nameWarningDisplay == 'none' ? 'white' : consts.WARNING_BOX_RED, 
                          height: 50, 
                          width: '90%', 
                          borderRadius: 20,
                          fontSize: 20
                        }}
                        onChangeText={text => this.state.fullname = text}
                        placeholder='Full Name'
                        placeholderTextColor='black'
                        > 
            </TextInput>
          </InputContainer>
           <WarningText style={{display: this.state.nameWarningDisplay}}>
            Name invalid
          </WarningText>
          <InputContainer style={{backgroundColor: this.state.emailWarningDisplay == 'none' ? 'white' : consts.WARNING_BOX_RED}}>
            <Icon name="envelope" size={20} color='black' />
            <TextInput 
                        style={{ 
                          color: 'black', 
                          backgroundColor: this.state.emailWarningDisplay == 'none' ? 'white' : consts.WARNING_BOX_RED, 
                          height: 50, 
                          width: '90%', 
                          borderRadius: 20,
                          fontSize: 20
                        }}
                        onChangeText={text => this.state.email = text}
                        placeholder='Email Address'
                        placeholderTextColor='black'
                        > 
            </TextInput>
          </InputContainer>
          <WarningText style={{display: this.state.emailWarningDisplay}}>
            Email invalid
          </WarningText>
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
                        onChangeText={text => this.state.password = text}
                        placeholder='Password'
                        placeholderTextColor='black'
                        secureTextEntry={true}
                        > 
            </TextInput>
          </InputContainer>
          <InputContainer style={{backgroundColor: this.state.passLenWarningDisplay == 'none' ? 'white' : consts.WARNING_BOX_RED}}>
            <Icon name="lock" size={20} color='black' />
            <TextInput 
                        style={{ 
                          color: 'black', 
                          backgroundColor: this.state.passLenWarningDisplay == 'none' ? 'white' : consts.WARNING_BOX_RED, 
                          height: 50, 
                          width: '90%', 
                          borderRadius: 20,
                          fontSize: 20,
                          fontFamily: 'OpenSans-Regular'
                        }}
                        onChangeText={text => this.state.passwordConfirm = text}
                        placeholder='Confirm Password'
                        placeholderTextColor='black'
                        secureTextEntry={true}
                        > 
            </TextInput>
          </InputContainer>
          <WarningText style={{display: this.state.passWarningDisplay}}>
            Passwords don't match
          </WarningText>
          <WarningText style={{display: this.state.passLenWarningDisplay}}>
            Password too weak
          </WarningText>
          <RadioContainer>
            <RadioQuestionText>I am gonna be a</RadioQuestionText>
            <BothRadios>
              <RadioButtonTextContainer>
                <RadioText>Fan</RadioText>
                <RadioButton
                  value="fan"
                  status={ this.state.checked == 'fan' ? 'checked' : 'unchecked' }
                  onPress={() => this.setState({checked: 'fan'})}
                />
              </RadioButtonTextContainer>
              <RadioButtonTextContainer>
                <RadioText>Creator</RadioText>
                  <RadioButton
                    value="creator"
                    status={ this.state.checked == 'creator' ? 'checked' : 'unchecked' }
                    onPress={() => this.setState({checked: 'creator'})}
                  />
              </RadioButtonTextContainer>
            </BothRadios>
          </RadioContainer>
          <SignupButton 
            style={{
              opacity: this.state.signupOpacity,
              backgroundColor: this.state.signupColor,
            }} 
            disabled={this.state.signupDisabled} onPress={signup}>
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
      </ScrollView>
    )}
  }

  
const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    showBottomMenu,
    getProfile
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

const Container = styled.View`
    padding: 20px;
    padding-top: 0px;
    align-items: center;
`

const SignupText = styled.Text`
    margin-top: 10%;
    margin-bottom: 20px;
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

const WarningText = styled.Text`
    margin-top: 10px;
    font-size: 20px;
    color: ${consts.WARNING_RED};
`
const RadioContainer = styled.View`
    width: 100%;
    margin-top: 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const RadioQuestionText = styled.Text`
    font-size: 20px;
    margin-right: 40px;
`

const BothRadios = styled.View`
`

const RadioButtonTextContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const RadioText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
    text-align: center;
`