import styled from 'styled-components'

const Content = styled.header`
  padding: 2.5rem 0;
`

const H1 = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0;
`

const Link = styled.a`
  color: black;
  text-decoration: none;
  border-bottom: 1px solid #c49b5f;
`

const Header = ({ title, subtitle }) => {
  return (
    <Content>
      <H1>
        <Link href="/">{ title }</Link>
      </H1>
    </Content>
  )
}

export default Header
