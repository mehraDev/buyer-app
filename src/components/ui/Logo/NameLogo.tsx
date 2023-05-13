import styled from 'styled-components'
import Logo from './Logo'
interface NameLogoProps {
  hideName?: boolean
}

const NameLogo: React.FC<NameLogoProps> = ({hideName}) => {
  return (
    <LogoWrapper>
      <Logo />
      {!hideName && <LogoText>DigiBhoomi</LogoText>}
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  padding: 10px 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  color: white;
  border-bottom: 1px solid #9f9f9f;
`

const LogoText = styled.div`
  padding: 0px 10px;
  font-size: larger;
  font-weight: 600;
  font-family: 'Raleway', sans-serif;
`

export default NameLogo
