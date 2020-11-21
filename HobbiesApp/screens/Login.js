import React from 'react'
import { TextInput, Image } from 'react-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome5'
import consts from '../consts'
import { showBottomMenu, getProfile } from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { auth } from '../api/api'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      invalidUserDisplay: 'none',
    }
  }
  render() {
    const { navigation } = this.props
    var email
    var password
    const login = () => {
      auth.login({email: email, password: password}, this.props.getProfile).then((json) => {
        if (!json.msg) {
          this.setState({invalidUserDisplay: 'none'})
          console.log(json._id)
          this.props.getProfile(json)
          console.log('success')
          navigation.navigate('HobbiesPicker')
        }
        else {
          console.log("invalid user")
          this.setState({invalidUserDisplay: 'flex'})
        }
      })
      
    }
    return (
        <Container>
          <LoginText>
            Login
          </LoginText>
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
                        onChangeText={text => email = text}
                        placeholder='Email Address'
                        placeholderTextColor='black'
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
                        onChangeText={text => password = text}
                        placeholder='Password'
                        placeholderTextColor='black'
                        secureTextEntry={true}
                        > 
            </TextInput>
          </InputContainer>
          <WarningText style={{display: this.state.invalidUserDisplay}}>
            Invalid User
          </WarningText>
          <LoginButton onPress={login}>
            <LoginButtonText>
              Sign in {">"}
              </LoginButtonText>
          </LoginButton>
          <NewUserContainer onPress={() => navigation.navigate('Signup')}>
            <NewUserBlackText>
              Oh, you're new? 
            </NewUserBlackText>
            <NewUserOrangeText>
              Come Here
            </NewUserOrangeText>
          </NewUserContainer>
          <ImageContainer>
            <Image 
              style={{
                      height: '25%',
                      width: '60%',
                      position: 'relative',
                      bottom: 0,
              }}
              source={require('../assets/images/sitting-gever.png')} 
              />
          </ImageContainer>
        </Container>

      )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const Container = styled.View`
    padding: 20px;
    align-items: center;
`

const LoginText = styled.Text`
    margin-top: 30px;
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
`

const LoginButton = styled.TouchableOpacity`
    width: 100%;
    height: 60px;
    margin-top: 10%;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${consts.BUTTON_GREEN};
    border: 2px solid;
    border-bottom-width: 5px;
    border-radius: 15px;
`

const LoginButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`

const NewUserContainer = styled.TouchableOpacity`
    margin-top: 5%;
    flex-direction: row;
`

const NewUserBlackText = styled.Text`
    font-size: 15px;
`

const NewUserOrangeText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    margin-left: 5px;
    color: ${consts.TEXT_ORANGE};
`

const ImageContainer = styled.View`
    margin-top: 3%;
    width: 100%;
    height: 100%;
    align-items: center;
`

const WarningText = styled.Text`
    margin-top: 10px;
    font-size: 20px;
    color: ${consts.WARNING_RED};
`