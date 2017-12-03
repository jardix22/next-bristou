import styled from 'styled-components'
import Card from './Card'

const Background = styled.div`
  align-items: center;
  background-image: url(${props=>props.image});
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: center;
`

const Jumbotron = ({ image, ...rest }) => {
  return (
    <Background image={ image }>
      <Card { ...rest }/>
    </Background>
  )
}

export default Jumbotron
