import styled from "styled-components"
import Colors from "../style/colors"
import Header from "../components/common/Header"
import Input from "../components/common/Input"
import Logo from "../assets/logo"
import { useNavigate } from "react-router-dom"

function Signup() {
    const navigate = useNavigate()

    const loginHandler = () => {
        navigate("/login")
    }

    return (
        <>
            <Background>
                <Header />

                <LogoContainer>
                    <Logo />
                    회원가입
                </LogoContainer>

                <Form>
                    <Input
                        placeholder="닉네임 입력해주세요"
                        label="닉네임"
                        type="text"
                        width={450}
                    />
                    <Input
                        placeholder="아이디를 입력해주세요"
                        label="아이디"
                        type="text"
                        width={450}
                    />
                    <Input
                        placeholder="비밀번호를 입력해주세요"
                        label="비밀번호"
                        type="password"
                        width={450}
                    />
                    <Input
                        placeholder="비밀번호를 다시 입력해주세요"
                        label="비밀번호 확인"
                        type="password"
                        width={450}
                    />

                    <SubmitButton>회원가입</SubmitButton>
                    <Ask>
                        이미 회원이신가요?{" "}
                        <Accent onClick={loginHandler}>로그인</Accent>
                    </Ask>
                </Form>
            </Background>
        </>
    )
}

export default Signup

const Background = styled.div`
    width: 100%;

    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`

const LogoContainer = styled.div`
    width: 125px;
    color: ${Colors.Gray500};
    font-size: 30px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

const Form = styled.form`
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
`

const SubmitButton = styled.button`
    margin-top: 10px;
    cursor: pointer;
    width: 450px;
    height: 50px;
    background: ${Colors.Orange300};
    border: none;
    border-radius: 25px;
    color: ${Colors.White};
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Ask = styled.p`
    font-size: 16px;
    color: ${Colors.Black};
`

const Accent = styled.span`
    font-size: 16px;
    color: ${Colors.Orange300};
    cursor: pointer;
`
