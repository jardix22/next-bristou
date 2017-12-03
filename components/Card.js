import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: rgba(243, 243, 241, 0.9);
  padding: 1.5rem 1rem;
  width: 30%;
  box-sizing: border-box;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, .5);
  text-align: center;
`
const Tag = styled.div`
  font-style: italic;
  color: #c49b5f;
  font-size: 14px;
  font-weight: 500;
`

const H2 = styled.h2`
  text-transform: uppercase;
`

const Meta = styled.div`
  display: flex;
  justify-content: center;
  color: #aeadac;
  font-size: 13px;

  & > span {
    margin: 0 .5rem;
  }
`

const Card = ({ tag, title, comments, published }) => {
  return (
    <Wrapper>
      <Tag>{ tag }</Tag>
      <H2>{ title }</H2>
      <Meta>
        <span>{ comments } Comments</span>
        <span>{ published }</span>
      </Meta>
    </Wrapper>
  )
}

export default Card
