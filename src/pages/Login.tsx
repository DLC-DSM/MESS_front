import styled from "styled-components"
import Colors from "../style/colors"
import Header from "../components/common/Header"
import Input from "../components/common/Input"

function Login() {
    return (
        <>
            <Background>
                <Header />

                <Input
                    placeholder="아이디를 입력해주세요"
                    label="아이디"
                    type="text"
                />
                <Input
                    placeholder="비밀번호를 입력해주세요"
                    label="비밀번호"
                    type="password"
                />
            </Background>
        </>
    )
}

export default Login

const Background = styled.div`
    width: 100%;
    height: 100vh;
`
