import styled from 'styled-components'

const Content = styled.header`
  text-transform: uppercase;
  text-align: center;
  padding: 2rem 0;
`

const Header = ({ title, subtitle }) => {
  return (
    <Content>
      <h1>
        { title }
      </h1>
    </Content>
  )
}

export default Header
