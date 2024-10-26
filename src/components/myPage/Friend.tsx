import styled from "styled-components"
import Colors from "../../style/colors"
import { MdPerson } from "react-icons/md"

interface props {
    nickname: string
    introduce: string
    type?: string
}

function Friend({ nickname, introduce, type = "friendlist" }: props) {
    let introduceEdit = introduce
        .split("")
        .map((v, i) => (i > 0 && i % 30 == 0 ? v + " " : v))
        .join("")
    return (
        <>
            <Container>
                <ProfileImg>
                    <MdPerson />
                </ProfileImg>

                <TextContainer>
                    <NickName>{nickname}</NickName>
                    <Introduce>{introduceEdit}</Introduce>
                </TextContainer>

                <ButtonContainer>
                    {type == "friendlist" && (
                        <>
                            <Invite>방 추가</Invite>
                            <Delete>삭제</Delete>
                        </>
                    )}

                    {type == "addfriend" && (
                        <>
                            <Invite>수락하기</Invite>
                            <Delete>거절</Delete>
                        </>
                    )}

                    {type == "room" && (
                        <>
                            <Invite>들어가기</Invite>
                        </>
                    )}
                </ButtonContainer>
            </Container>
        </>
    )
}

export default Friend

const Container = styled.div`
    width: 800px;
    padding: 20px 15px;
    border-bottom: 1px solid ${Colors.Gray500};
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 10px;
`

const ProfileImg = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    font-size: 48px;
    background: ${Colors.Gray200};
    color: ${Colors.Gray500};
    display: flex;
    justify-content: center;
    align-items: center;
`

const TextContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    margin-top: 10px;
`

const NickName = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.Black};
`

const Introduce = styled.p`
    width: 400px;
    margin-top: 5px;
    font-size: 18px;
    color: ${Colors.Gray500};
    display: flex;
    justify-content: start;
    align-items: start;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-left: auto;
    margin-top: auto;
`

const Invite = styled.button`
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 20px;
    font-weight: 400;
    color: ${Colors.Orange400};
    border: 3px solid ${Colors.Orange400};
    background: none;
    cursor: pointer;

    &:hover {
        color: ${Colors.White};
        background: ${Colors.Orange400};
        transition: 200ms;
    }
`

const Delete = styled.button`
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 20px;
    font-weight: 400;
    color: ${Colors.Critical};
    border: 3px solid ${Colors.Critical};
    background: none;
    cursor: pointer;

    &:hover {
        background: ${Colors.Critical};
        color: ${Colors.White};
        transition: 200ms;
    }
`
