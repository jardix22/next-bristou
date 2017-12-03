import styled from 'styled-components'
import { Tag, Meta } from './Card'

const Wrapper = styled.div`
  margin: 6rem 0;
`

const Img = styled.img`
  outline: 1px solid yellow;
  width: 100%;
  margin-bottom: 1.5rem;
`

const H3 = styled.h3`
  text-align: center;
  text-transform: uppercase;
`

const Event = ({tag, title, image, comments, published, summary, callToAction}) => {
  return (
    <Wrapper>
      <Img src={ image } />
      <Tag>{ tag }</Tag>
      <H3>{ title }</H3>
      <Meta>
        <span>{ comments } Comments</span>
        <span>{ published }</span>
      </Meta>
      <p>{ summary }</p>
      <a href={ callToAction }>continue reading</a>
    </Wrapper>
  )
}

export default Event
