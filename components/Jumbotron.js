import styled from 'styled-components'
import Card from './Card'

const Background = styled.div`
  background-image: url(${props=>props.image});
`

const Jumbotron = ({ image, ...rest }) => {
  return (
    <Background image={ image }>
      <Card { ...rest }/>
    </Background>
  )
}

export default Jumbotron
