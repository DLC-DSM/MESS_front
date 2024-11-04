import styled from "styled-components"
import Colors from "../../style/colors"
import Logo from "../../assets/logo"
import { IoMdPerson } from "react-icons/io"
import { BsBellFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate()

    const homeHandler = () => {
        navigate("/home")
    }

    const alarmHandler = () => {
        navigate("/alarm")
    }

    return (
        <>
            <Background>
                <Container>
                    <ButtonContainer>
                        <LogoWrapper onClick={homeHandler}>
                            <Logo />
                        </LogoWrapper>

                        <Button>스트레칭</Button>
                        <Button>방 찾기</Button>
                        <Button>상점</Button>
                    </ButtonContainer>

                    <IconContainer>
                        <Alarm onClick={alarmHandler}>
                            <BsBellFill />
                        </Alarm>
                        <Person>
                            <IoMdPerson />
                        </Person>
                    </IconContainer>
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
    width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LogoWrapper = styled.div`
    height: 25px;
    cursor: pointer;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

const Button = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    color: ${Colors.Black};
    font-size: 18px;
    font-weight: 550;
`

const IconContainer = styled.div`
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`

const Person = styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: ${Colors.Gray200};
    color: ${Colors.Gray500};
`

const Alarm = styled.div`
    cursor: pointer;
    width: 30px;
    height: 30px;
    font-size: 24px;
    display: flex;
    justify-items: center;
    align-items: center;
    color: ${Colors.Gray500};
`
