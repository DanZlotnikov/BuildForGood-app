import React from 'react'
import styled from 'styled-components'
import consts from '../consts'

const ProgressionDots = ({amount, markedIndex}) => {
    var dots = []
    i = 0
    while (i < amount) {
        dots.push(i)
        i++
    }
    return (
        <Container>
             {dots.map(dot => {
                return ( 
                    <Dot key={Math.random()} style={{borderColor: 'black', borderWidth: dot == markedIndex ? 0 : 2, backgroundColor: dot == markedIndex ? consts.DOT_ORANGE : 'white'}} />
            )})}
        </Container>
    )
}

export default ProgressionDots

const Container = styled.View`
    flex-direction: row;
`

const Dot = styled.View`
    margin-right: 5px;
    height: 12px;
    width: 12px;

    border-radius: 150px;
`