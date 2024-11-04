import styled from "styled-components"
import Colors from "../style/colors"
import Header from "../components/common/Header"
import Friend from "../components/myPage/Friend"

function Alarm() {
    const alarms = [
        {
            name: '"서지유"(이)가 친구 요청을 보냈습니다',
        },
        {
            name: '"서지유"(이)가 "리액트 방에 어서오세요!" 방에 초대를 보냈습니다',
        },
        {
            name: '서지유(이)가 "와 샌즈" 방에 오려합니다',
        },
    ]

    return (
        <>
            <Background>
                <Header />

                <TextContainer>
                    <AlarmText>알림</AlarmText>
                    <AlarmSubText>온 알람들을 확인하세요!</AlarmSubText>
                </TextContainer>

                <BarContainer>
                    <BarText>3건</BarText>
                    <PointerBarText>모두 거절</PointerBarText>
                </BarContainer>

                <Wrapper>
                    {alarms.map((v) => {
                        return (
                            <>
                                <Friend
                                    type="ask"
                                    nickname={v.name}
                                    introduce=""
                                />
                            </>
                        )
                    })}
                </Wrapper>
            </Background>
        </>
    )
}

export default Alarm

const Background = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`

const TextContainer = styled.div`
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
`

const AlarmText = styled.p`
    width: 800px;
    font-size: 36px;
    font-weight: 500;
    color: ${Colors.Black};
`

const AlarmSubText = styled.p`
    width: 800px;
    font-size: 24px;
    font-weight: 500;
    color: ${Colors.Gray500};
`

const BarContainer = styled.div`
    width: 790px;
    padding: 0 5px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${Colors.Gray500};
`

const BarText = styled.p`
    font-size: 16px;
    font-weight: 300;
    color: ${Colors.Gray500};
`

const PointerBarText = styled.p`
    margin-left: auto;
    font-size: 16px;
    font-weight: 300;
    color: ${Colors.Gray500};
    cursor: pointer;

    &:hover {
        color: ${Colors.Critical};
        transition: 200ms;
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
`
