import React from 'react'
import styled from 'styled-components'

export const Wrapper = styled.div`
  background: rgba(243, 243, 241, 0.9);
  padding: 1.5rem 1rem;
  width: 30%;
  box-sizing: border-box;
  box-shadow: 0 0 0 8px rgba(255, 255, 255, .5);
  text-align: center;
`
export const Tag = styled.div`
  color: #c49b5f;
  font-style: italic;
  font-size: 14px;
  font-weight: 500;
  padding: 1rem 0;
  text-align: center;
`

export const H2 = styled.h2`
  text-transform: uppercase;
  margin: 0;
`

export const Meta = styled.div`
  display: flex;
  justify-content: center;
  color: #aeadac;
  font-size: 13px;
  padding: 1rem 0;

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
