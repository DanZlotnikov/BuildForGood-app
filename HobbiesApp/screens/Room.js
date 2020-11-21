import React from 'react'
import styled from 'styled-components'
import consts from '../consts'
import Video from 'react-native-video'
import { StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Room = ({navigation}) => {
    return (
        <Container>
            <MainContainer>
                {/* <Video source={{uri: '../videos/video.mp4'}}
                    ref={(ref) => {
                        this.player = ref
                    }}
                    onBuffer={null}
                    onError={null}
                    style={styles.backgroundVideo} 
                /> */}
                <ImageContainer>
                    <Image 
                    style={{
                            height: '100%',
                            width: '100%',
                            zIndex: 0
                    }}
                    source={require('../assets/images/video-woman.jpg')} 
                    />
                </ImageContainer>
                <HeaderContainer>
                    <HeaderLeftContainer>
                        <Image 
                            style={{
                                    height: 70,
                                    width: 70,
                                    borderRadius: 50
                            }}
                            source={require('../assets/images/onboarding-image-2.png')} 
                        />
                        <NameCatStarsContainer>
                            <NameText>
                                Alisa Chimy
                            </NameText>
                            <CategoryText>
                                Sport
                            </CategoryText>
                            <StarsContainer>
                                <Icon name="star" solid size={20} color='gold' />
                                <Icon name="star" solid size={20} color='gold' />
                                <Icon name="star" solid size={20} color='gold' />
                                <Icon name="star" solid size={20} color='gold' />
                                <Icon name="star" size={20} color='black' />
                            </StarsContainer>
                        </NameCatStarsContainer>
                    </HeaderLeftContainer>
                    <HeaderRightContainer>
                        <FollowersContainer>
                            <FollowersNumber>
                                67K
                            </FollowersNumber>
                            <FollowersText>
                                Followers
                            </FollowersText>
                        </FollowersContainer>
                    </HeaderRightContainer>
                </HeaderContainer>            
                <SocialMediaContainer>
                    <FollowText>
                        Follow
                    </FollowText>
                    <SocialMediaIcons>
                        <IconContainer>
                            <Icon name="instagram" size={25} color='black' />
                        </IconContainer>
                        <IconContainer>
                            <Icon name="facebook-square" size={25} color='black' />
                        </IconContainer>
                        <IconContainer>
                            <Icon name="twitter" size={25} color='black' />
                        </IconContainer>
                    </SocialMediaIcons>
                </SocialMediaContainer>
            </MainContainer>
                <Bottom>
                    <BottomButton onPress={() => navigation.navigate('HobbiesPicker')}>
                        <Icon name="arrow-left" size={25} color='black' />       
                    </BottomButton>
                    <BottomButton>
                        <Icon name="window-close" size={25} color='black' /> 
                    </BottomButton>
                    <BottomButton>
                        <Icon name="comment" size={25} color='black' />
                    </BottomButton>
                    <BottomButton>
                        <Icon name="star" size={25} color='black' /> 
                    </BottomButton>
                </Bottom>
        </Container>
    )
}

export default Room

const Container = styled.View`
    height: 100%;
`

const MainContainer = styled.View`
    height: 90%;
    width: 100%; 
    z-index: 2;
`
const ImageContainer = styled.View`
    width: 100%;
    height: 100%;
`

const HeaderContainer = styled.View`
    position: absolute;
    top: 0;
    flex-direction: row;
    opacity: 0.5;
    padding: 20px;
    width: 100%;
    justify-content: space-between;
`

const HeaderLeftContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

const HeaderRightContainer = styled.View`
    align-items: center;
    justify-content: center;
    margin-right: 30px;
`

const NameCatStarsContainer = styled.View`
    padding-left: 15px;
    justify-content: center;
`

const NameText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`

const CategoryText = styled.Text`
    font-size: 12px;
`

const StarsContainer = styled.View`
    flex-direction: row;
`

const FollowersContainer = styled.View`
    font-size: 20px;
    font-weight: bold;
    align-self: flex-end;
    align-items: center;
` 

const FollowersNumber = styled.Text`
    font-size: 20px;
    font-weight: bold;
`

const FollowersText = styled.Text`    
    font-size: 12px;
    font-weight: bold;

`

const SocialMediaContainer = styled.View`
    /* position: absolute; */
    bottom: 14%;
    padding: 10px;
    padding-bottom: 20px;
`

const FollowText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${consts.TEXT_GRAY};
`

const SocialMediaIcons = styled.View`
    padding-top: 10px;
    flex-direction: row;
`

const IconContainer = styled.View`
    padding-right: 15px;
`

const Bottom = styled.View`
    position: absolute;
    bottom: 0;
    height: 10%;
    width: 100%;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    border-top-width: 2px;
`

const BottomButton = styled.TouchableOpacity`
    height: 100%;
    width: 25%;
    align-items: center;
    justify-content: center;
`