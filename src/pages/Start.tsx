import styled, { keyframes } from "styled-components"
import Colors from "../style/colors"
import BackgroundItems from "../assets/background"
import Logo from "../assets/logo"
import { useNavigate } from "react-router-dom"

function Start() {
    const navigate = useNavigate()

    const loginHandler = () => {
        navigate("/login")
    }

    const signupHandler = () => {
        navigate("/signup")
    }

    return (
        <>
            <Background>
                <BackgroundSvg>
                    <Container>
                        <LogoContainer>
                            <LogoWrapper>
                                <Logo />
                            </LogoWrapper>
                            <MainExplain>
                                다함께 재미있게 스트레스 해소
                            </MainExplain>
                            <SubExplain>편리하고 재밌게</SubExplain>
                        </LogoContainer>

                        <ButtonContainer>
                            <ToSignupButton onClick={signupHandler}>
                                회원가입
                            </ToSignupButton>
                            <Line />
                            <ToLoginButton onClick={loginHandler}>
                                로그인
                            </ToLoginButton>
                        </ButtonContainer>
                    </Container>
                    <BackgroundItems />
                </BackgroundSvg>
            </Background>
        </>
    )
}

export default Start

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(${Colors.White}, 80%, ${Colors.Orange100});
    z-index: 1;
`

const FadeIn = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`

const Slide = keyframes`
    0%{
        transform: translateY(50px);
    }
    100%{
        transform: translateY(0);
    }
`

const BackgroundSvg = styled.div`
    width: 100%;
    height: 100vh;
    animation: ${FadeIn} 3s;
`

const Container = styled.div`
    top: 20%;
    left: 25%;
    position: fixed;
    z-index: 2;
    width: 65%;
    height: 70%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
`

const LogoWrapper = styled.div`
    width: 20%;
    margin-bottom: 10px;
`

const LogoContainer = styled.div`
    animation: ${Slide} 1.5s;
    width: 100%;
    height: 50%;
    display: flex;
    justify-items: start;
    align-items: start;
    flex-direction: column;
    gap: 10px;
`

const MainExplain = styled.p`
    color: ${Colors.Black};
    font-size: 2rem;
    font-weight: bold;
`

const SubExplain = styled.p`
    color: ${Colors.Gray500};
    font-size: 1.75rem;
    font-weight: bold;
`

const ButtonContainer = styled.div`
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
`

const ToSignupButton = styled.button`
    width: 200px;
    height: 50px;
    background: ${Colors.Black};
    cursor: pointer;
    color: ${Colors.White};
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`

const Line = styled.div`
    height: 60px;
    border: 2px solid ${Colors.White};
`

const ToLoginButton = styled.button`
    width: 200px;
    height: 50px;
    background: none;
    cursor: pointer;
    color: ${Colors.Black};
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${Colors.Black};
`
