import styled from "styled-components"
import Colors from "../../style/colors"
import { useState } from "react"
import { IoMdEyeOff } from "react-icons/io"
import { IoEye } from "react-icons/io5"

interface props {
    label?: string
    type?: string
    placeholder?: string
    width?: number
}

function Input({ label, type = "text", placeholder, width = 300 }: props) {
    const [show, setShow] = useState<Boolean>(false)

    const toggleHandler = () => {
        setShow(!show)
    }

    return (
        <>
            <Container>
                <Label>{label}</Label>
                <InputWrapper width={width}>
                    <InputContainer
                        placeholder={placeholder}
                        type={
                            type == "password"
                                ? show
                                    ? "text"
                                    : "password"
                                : type
                        }
                    />

                    {type == "password" &&
                        (show ? (
                            <Icon onClick={toggleHandler}>
                                <IoEye />
                            </Icon>
                        ) : (
                            <Icon onClick={toggleHandler}>
                                <IoMdEyeOff />
                            </Icon>
                        ))}
                </InputWrapper>
            </Container>
        </>
    )
}

export default Input

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 5px;
`

const Label = styled.label`
    font-size: 18px;
    font-weight: 500;
    color: ${Colors.Black};
    margin: 0 5px;
`

const InputWrapper = styled.div`
    width: ${({ width }) => `${width}px`};
    background: ${Colors.Gray50};
    border: 2px solid ${Colors.Gray300};
    border-radius: 10px;
    display: flex;
    justify-content: start;
    align-items: center;
`

const InputContainer = styled.input`
    width: 85%;
    height: 30px;
    padding: 5px;
    color: ${Colors.Black};
    background: none;
    border: none;
    font-size: 16px;
    outline: none;

    &::placeholder {
        color: ${Colors.Gray500};
    }
`

const Icon = styled.p`
    margin-left: auto;
    width: 30px;
    height: 30px;
    margin: 0 5px 0 auto;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${Colors.Gray500};
`
