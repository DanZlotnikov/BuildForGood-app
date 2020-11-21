import React from 'react'
import styled from 'styled-components'
import { ScrollView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import BottomMenu from '../components/BottomMenu'
import consts from '../consts'

const Rewards = ({navigation}) => {
    return(
        <Container>
            <HeaderText>
                Welcome
            </HeaderText>
            <NameText>
                Daniel Lotker
            </NameText>
            <SummaryBox>
                <AvgTimeView>
                    <AvgTimeText>
                        Avg Time
                    </AvgTimeText>
                    <InTheRoomText>
                        In the Room
                    </InTheRoomText>
                </AvgTimeView>
                <TimeTextView>
                    <TimeText>
                        13:07
                    </TimeText>
                    <MinText>
                        MIN
                    </MinText>
                </TimeTextView>
            </SummaryBox>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                <StarsView>
                    <StarAndNameView>
                    <StarView style={{backgroundColor: '#FFF4CC'}}>
                        <Icon name="star" solid size={25} color='#FFBD12'/>
                    </StarView>
                    <StarName>
                        Moshe{'\n'}Edi
                    </StarName>
                    </StarAndNameView>
                    <StarAndNameView>
                    <StarView style={{backgroundColor: '#FFE8E8'}}>
                    <   Icon name="star" solid size={25} color='#F95A2C'/>
                    </StarView>
                    <StarName>
                        Alex {'\n'}Malik
                    </StarName>
                    </StarAndNameView>
                    <StarAndNameView>
                    <StarView style={{backgroundColor: '#D6FCF7'}}>
                        <Icon name="star" solid size={25} color='#00C6AE'/>
                    </StarView>
                    <StarName>
                        Bibi {'\n'}Neta
                    </StarName>
                    </StarAndNameView>
                    <StarAndNameView>
                    <StarView style={{backgroundColor: '#FFF4CC'}}>
                        <Icon name="star" solid size={25} color='#FFBD12'/>
                    </StarView>
                    <StarName>
                        Double {'\n'}World
                    </StarName>
                    </StarAndNameView>
                </StarsView>
            </ScrollView>
            <RoomBox>
                <Image 
                    style={{
                        flex: 1,
                        width: '100%',
                        height: null,
                        resizeMode: 'repeat',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20
                    }}
                    resizeMode="cover"
                    source={require('../assets/images/gucci-gang.png')} 
                />
                <RoomBottomView>
                    <RoomDataView>
                        <RoomHeaderText>
                            Fight The Lot
                        </RoomHeaderText>
                        <LocationView>
                            <Icon name="map-marker-alt" size={15} color='black' />
                            <LocationText>
                                Herzliya
                            </LocationText>
                        </LocationView>
                        <DateView>
                            <Icon name="calendar-alt" size={15} color='black' />
                            <DateText>
                                12 March, 2020
                            </DateText>
                        </DateView>
                    </RoomDataView>
                    <StarCircleView>
                    <Icon name="star" size={25} color='black'/>
                    </StarCircleView>
                </RoomBottomView>
            </RoomBox>
            <BottomMenu navigation={navigation}/>
        </Container>
    )
}

export default Rewards

const Container = styled.View`
    height: 100%;
    width: 100%;
    padding: 20px;
    align-items: center;
`

const HeaderText = styled.Text`
    font-size: 30px;
    align-self: flex-start;
`

const NameText = styled.Text`
    font-size: 35px;
    font-weight: bold;
    align-self: flex-start;
`

const SummaryBox = styled.View`
    margin-top: 20px;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border: 2px solid;
    border-bottom-width: 5px;
    border-radius: 20px;
    width: 90%;
`

const AvgTimeView = styled.View`
    justify-content: center;
    align-items: center;
`

const AvgTimeText = styled.Text`
    font-size: 30px;
    font-weight: bold;
`

const InTheRoomText = styled.Text`
    font-size: 18px;
`

const TimeTextView = styled.View`
    flex-direction: row;
    align-items: flex-end;
    margin-right: 10px;
`

const TimeText = styled.Text`
    font-size: 40px;
    font-weight: bold;
`

const MinText = styled.Text`
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 7px;
`

const StarsView = styled.View`
    flex-direction: row;
`

const StarView = styled.View`
    align-self: flex-end;
    padding: 15px;
    margin-right: 20px;
    border: 2px solid;
    border-bottom-width: 4px;
    border-radius: 20px;
`

const StarAndNameView = styled.View`
    align-items: center;
    width: 100px;
`

const StarName = styled.Text`
    font-size: 15px;
    font-weight: bold;
    text-align: center;
`

const RoomBox = styled.View`
    bottom: 8%;
    height: 37%;
    width: 100%;
    border: 2px solid;
    border-bottom-width: 7px;
    border-radius: 20px;
    justify-content: flex-end;
`

const RoomBottomView = styled.View`
    height: 40%;
    width: 100%;
    background-color: white;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    flex-direction: row;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    z-index: -1;
`

const RoomDataView = styled.View`
    padding-left: 20px;
    justify-content: space-between;
    align-items: flex-start;
`

const RoomHeaderText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`

const LocationView = styled.View`
    flex-direction: row;
    align-items: center;
`

const LocationText = styled.Text`
    font-size: 12px;
    margin-left: 10px;
    margin-top: 5px;
`

const DateView = styled.View`
    flex-direction: row;
    align-items: center;
`

const DateText = styled.Text`
    margin-left: 10px;
    margin-top: 5px;
    font-size: 12px;
`

const StarCircleView = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    border: 2px solid;
    border-bottom-width: 4px;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`