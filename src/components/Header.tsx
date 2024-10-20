import styled from "styled-components"
import Colors from "../style/colors"
import Logo from "../assets/logo"

function Header() {
    return (
        <>
            <Background>
                <Container>
                    <LogoWrapper>
                        <Logo />
                    </LogoWrapper>
                </Container>
            </Background>
        </>
    )
}

export default Header

const Background = styled.div`
    width: 100%;
    height: 50px;
    background: ${Colors.White};
    border-bottom: 1px;
    border-style: solid;
    border-color: ${Colors.Gray300};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    height: 100%;
    width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LogoWrapper = styled.div`
    height: 30px;
`
