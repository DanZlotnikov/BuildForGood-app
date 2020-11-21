import React from 'react'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'
import styled from 'styled-components'
import consts from '../consts'
import { connect } from 'react-redux'

const Profile = ({state, navigation}) => {
    var profile
    if (state.usersReducer.profileLoaded) {
        profile = state.usersReducer.profile
    }
    else {
        profile = {
            user: {
                name: 'Lotker',
            }
        }
    }
    console.log("profile", profile)
    const rooms = [
        {
            theme: 'bike',
            color: consts.BOX_YELLOW,
            image: require('../assets/images/bicycle.png'),
        },
        {
            theme: 'bike',
            color: consts.BOX_PINK,
            image: require('../assets/images/boxing.png'),
        },
        {
            theme: 'bike',
            color: consts.BOX_DARK_GREY,
            image: require('../assets/images/racing-helmet.png'),
        }
    ]
    return (
        <ScrollView>
            <Container>
                <TopView>
                    <ProfileImageView>
                        <Image 
                            style={{
                                    height: 150,
                                    width: 150,
                            }}
                            resizeMode="contain"
                            source={require('../assets/images/room-avatar.png')} 
                        />
                    </ProfileImageView>
                    <UsernameView>
                        <UsernameText>
                            {profile.user.name}
                        </UsernameText>
                        <TagnameText>
                            @{profile.user.name.replace(' ', '_')}_theFirst
                        </TagnameText>
                    </UsernameView>
                    <UserTypeCreatorView>
                        <UserTypeView onPress = {() => navigation.navigate('Rewards')}>
                            <UserTypeText>
                                Creator
                            </UserTypeText>
                        </UserTypeView>
                        <CreateRoomView>
                            <CreateRoomText>
                                +
                            </CreateRoomText>
                        </CreateRoomView>
                    </UserTypeCreatorView>
                    <StatsView>
                        <StatView>
                            <StatText>
                                276
                            </StatText>
                            <StatBottomText>
                                Rooms
                            </StatBottomText>
                        </StatView>
                        <StatView>
                            <StatText>
                                62k
                            </StatText>
                            <StatBottomText>
                                Followers
                            </StatBottomText>
                        </StatView>
                        <StatView>
                            <StatText>
                                23
                            </StatText>
                            <StatBottomText>
                                Following
                            </StatBottomText>
                        </StatView>
                    </StatsView>    
                </TopView>
                <BottomView>
                    <SectionHeaderText>
                        Your Rooms
                    </SectionHeaderText>
                    <RoomsRow>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                            {rooms.map(room =>
                                    <RoomBox onPress = {() => navigation.navigate('Room')}  
                                    key={Math.random()} 
                                    style={{backgroundColor: room.color}}>
                                        <Image 
                                            style={{
                                                    height: consts.BOX_IMAGE_SIZE,
                                                    width: consts.BOX_IMAGE_SIZE,
                                            }}
                                            resizeMode="contain"
                                            source={room.image} 
                                        />
                                    </RoomBox>
                            )}
                           
                        </ScrollView>
                    </RoomsRow>
                    <SectionHeaderText>
                        Tags
                    </SectionHeaderText>
                    <TagsRow>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                            <TagView>
                                <TagText>
                                    Bike
                                </TagText>
                            </TagView>
                            <TagView style={{backgroundColor: consts.TAG_YELLOW}}>
                                <TagText>
                                    Boxing
                                </TagText>
                            </TagView>
                            <TagView style={{backgroundColor: consts.TAG_GREEN}}>
                                <TagText>
                                    Muay Thai
                                </TagText>
                            </TagView>
                        </ScrollView>
                    </TagsRow>
                </BottomView>
            </Container>
        </ScrollView>
    )
}
const mapStateToProps = state => ({
    state: state
  })
  
export default connect(mapStateToProps)(Profile);

const Container = styled.View`
    height: 100%;
`

const TopView = styled.View`
    width: 100%;
    height: 500px;
    align-items: center;
    padding: 20px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: ${consts.BOX_PEACH};
`

const ProfileImageView = styled.View`
    margin-top: 20px;
    border: 2px solid;
    border-radius: 100px;
`

const UsernameView = styled.View`

`

const UsernameText = styled.Text`
    margin-top: 10px;
    font-size: 40px;
    color: white;
    font-weight: bold;
`

const TagnameText = styled.Text`
    text-align: center;
    font-size: 20px;
    color: white;
`

const UserTypeCreatorView = styled.View`
    margin-top: 20px;
    width: 80%;
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 15%;
`

const UserTypeView = styled.TouchableOpacity`
    background-color: white;
    width: 70%;
    height: 60px;
    padding: 10px;
    border: 2px solid;
    border-bottom-width: 4px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`

const UserTypeText = styled.Text`
    color: black;
    font-size: 25px;
    font-weight: bold;
`

const CreateRoomView = styled.View`
    background-color: white;
    width: 60px;
    height: 60px;
    padding: 10px;
    border: 2px solid;
    border-bottom-width: 6px;
    border-radius: 60px;
    justify-content: center;
    align-items: center;
`

const CreateRoomText = styled.Text`
    color: black;
    font-size: 40px;
`

const StatsView = styled.View`
    margin-top: 30px;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
`

const StatView = styled.View`
    align-items: center;
`

const StatText = styled.Text`
    font-size: 35px;
    font-weight: bold;
    color: white;
`

const StatBottomText = styled.Text`
    font-size: 16px;
    color: white;
`

const BottomView = styled.View`
    width: 100%;
    padding: 20px;
    padding-top: 10px;
`

const SectionHeaderText = styled.Text`
    margin-top: 20px;
    color: black;
    font-size: 25px;
    font-weight: bold;
`

const RoomsRow = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: flex-start;
`

const RoomBox = styled.TouchableOpacity`
    margin-right: 15px;
    height: 150px;
    width: 150px;
    border: 2px solid;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`

const TagsRow = styled.View`
    margin-top: 20px;
    flex-direction: row;
    justify-content: flex-start;
`

const TagView = styled.View`
    border: 2px solid;
    border-radius: 30px;
    padding: 10px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 15px;
`

const TagText = styled.Text`
    color: black;
    font-size: 15px;
    font-weight: bold;
`