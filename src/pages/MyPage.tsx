import styled from "styled-components"
import Colors from "../style/colors"
import Header from "../components/common/Header"
import { MdPerson } from "react-icons/md"
import { RiPencilFill } from "react-icons/ri"
import { CiSearch } from "react-icons/ci"
import { ChangeEvent, useState } from "react"
import RUReady from "../assets/RUReady"
import Friend from "../components/myPage/Friend"
import NotFound from "../assets/NotFound"

function MyPage() {
    const [friendList, setFriendList] = useState<Boolean>(false)
    const [addFriend, setAddFriend] = useState<Boolean>(false)
    const [roomList, setRoomList] = useState<Boolean>(false)
    const [addRoom, setAddRoom] = useState<Boolean>(false)
    const [search, setSearch] = useState<String>("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const friendListHandler = () => {
        if (!friendList) {
            setFriendList(true)
            setAddFriend(false)
            setRoomList(false)
            setAddRoom(false)
        } else {
            setFriendList(false)
        }
    }

    const addFriendHandler = () => {
        if (!addFriend) {
            setFriendList(false)
            setAddFriend(true)
            setRoomList(false)
            setAddRoom(false)
        } else {
            setAddFriend(false)
        }
    }

    const roomListHandler = () => {
        if (!roomList) {
            setFriendList(false)
            setAddFriend(false)
            setRoomList(true)
            setAddRoom(false)
        } else {
            setRoomList(false)
        }
    }

    const addRoomHandler = () => {
        if (!addRoom) {
            setFriendList(false)
            setAddFriend(false)
            setRoomList(false)
            setAddRoom(true)
        } else {
            setAddRoom(!addRoom)
        }
    }

    let all = [friendList, addFriend, roomList, addRoom]

    const friends = [
        {
            nickname: "서지유",
            introduce: "HelloWorld!",
        },
        {
            nickname: "이현규",
            introduce: "HelloWorld!",
        },
        {
            nickname: "최정우",
            introduce: "HelloWorld",
        },
        {
            nickname: "김문지",
            introduce: "HelloWorld!",
        },
        {
            nickname: "양병건",
            introduce: "HelloWorld!",
        },
        {
            nickname: "감귤",
            introduce: "ㅇㅅㅇ",
        },
    ]

    const addFriends = [
        {
            nickname: "서지호",
            introduce: "닉변했습니다",
        },
        {
            nickname: "고양이",
            introduce: "고양이는 귀여웡",
        },
        {
            nickname: "강아지",
            introduce: "강아지도 귀여웡",
        },
    ]

    const rooms = [
        {
            name: "리액트 방에 어서오세요!",
            introduce: "서지유",
        },
        {
            name: "리액트 방에 어서오세요!",
            introduce: "서지유",
        },
        {
            name: "리액트 방에 어서오세요!",
            introduce: "서지유",
        },
        {
            name: "리액트 방에 어서오세요!",
            introduce: "서지유",
        },
        {
            name: "리액트 방에 어서오세요!",
            introduce: "서지유",
        },
        {
            name: "리액트 방에 어서오세요!",
            introduce: "서지유",
        },
        {
            name: "리액트 방에 어서오세요!",
            introduce: "서지유",
        },
    ]

    return (
        <>
            <Background>
                <Header />
                <ProfileBg />

                <ProfileContainer>
                    <ProfileWrapper>
                        <Profile>
                            <MdPerson />
                        </Profile>

                        <EditButton>
                            <RiPencilFill />
                        </EditButton>
                    </ProfileWrapper>

                    <TextContainer>
                        <NickName>서지유</NickName>
                        <Introduce>front-end 개발자입니다</Introduce>
                    </TextContainer>
                </ProfileContainer>

                <MenuBar>
                    <MenuTitle focus={friendList} onClick={friendListHandler}>
                        친구 목록
                    </MenuTitle>
                    <MenuTitle focus={addFriend} onClick={addFriendHandler}>
                        친구 추가
                    </MenuTitle>
                    <MenuTitle focus={roomList} onClick={roomListHandler}>
                        방 목록
                    </MenuTitle>
                    <MenuTitle focus={addRoom} onClick={addRoomHandler}>
                        방 만들기
                    </MenuTitle>
                </MenuBar>

                {all.every((v) => !v) && (
                    <ItemContainer>
                        <RUReady />
                    </ItemContainer>
                )}

                {friendList && (
                    <>
                        {friends.map((v) => {
                            return (
                                <Friend
                                    nickname={v.nickname}
                                    introduce={v.introduce}
                                />
                            )
                        })}
                        <FriendNum>친구 - {friends.length}명</FriendNum>
                    </>
                )}

                {addFriend && (
                    <>
                        <FriendSearch>친구추가</FriendSearch>
                        <SearchContainer>
                            <SearchInput
                                type="text"
                                placeholder="친구 닉네임을 검색하세요"
                                onChange={onChange}
                            />
                            <Icon>
                                <CiSearch />
                            </Icon>
                        </SearchContainer>

                        <NotFoundContainer>
                            <NotFound />

                            <NotFoundText>
                                다 찾아봤지만... "{search}"라는 이름은 없네요..
                            </NotFoundText>
                        </NotFoundContainer>

                        <FriendSearch>
                            친구 추가를 보낸 친구 - {addFriends.length}명
                        </FriendSearch>
                        {addFriends.map((v) => {
                            return (
                                <Friend
                                    type="addfriend"
                                    introduce={v.introduce}
                                    nickname={v.nickname}
                                />
                            )
                        })}
                    </>
                )}

                {roomList && (
                    <>
                        {rooms.map((v) => {
                            return (
                                <Friend
                                    type="room"
                                    nickname={v.name}
                                    introduce={v.introduce}
                                />
                            )
                        })}
                        <FriendNum>방 목록 - {rooms.length}명</FriendNum>
                    </>
                )}
            </Background>
        </>
    )
}

export default MyPage

const Background = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ProfileBg = styled.div`
    width: 100%;
    height: 200px;
    background: ${Colors.Orange100};
    border-radius: 0 0 20px 20px;
    position: relative;
`

const ProfileContainer = styled.div`
    width: 800px;
    height: 150px;
    display: flex;
    justify-content: left;
    align-items: center;
    position: absolute;
    top: 175px;
    gap: 20px;
`

const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
`

const Profile = styled.div`
    font-size: 100px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: ${Colors.Gray200};
    color: ${Colors.Gray500};
    display: flex;
    justify-content: center;
    align-items: center;
`

const EditButton = styled.div`
    position: absolute;
    bottom: 8px;
    font-size: 20px;
    color: ${Colors.Black};
    cursor: pointer;
`

const TextContainer = styled.div`
    margin: 30px 0;
    height: 100px;
    display: flex;
    justify-content: start;
    align-items: left;
    flex-direction: column;
    gap: 5px;
`

const NickName = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.Black};
`

const Introduce = styled.p`
    font-size: 20px;
    color: ${Colors.Gray500};
`

const MenuBar = styled.div`
    width: 800px;
    height: 40px;
    padding: 0 50px;
    background: ${Colors.Orange300};
    border-radius: 12px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 50px;
    margin-top: 100px;
`

const MenuTitle = styled.p`
    font-size: 16px;
    color: ${({ focus }) => (focus ? `${Colors.Black}` : `${Colors.White}`)};
    cursor: pointer;
    user-select: none;
`

const ItemContainer = styled.div`
    width: 900px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const FriendNum = styled.div`
    width: 800px;
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.Gray500};
    text-align: center;
    margin: 20px 0;
`

const FriendSearch = styled.div`
    margin-top: 50px;
    width: 900px;
    height: 50px;
    border-bottom: 1px solid ${Colors.Orange400};
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.Black};
`

const SearchContainer = styled.div`
    width: 900px;
    height: 75px;
    border-bottom: 1px solid ${Colors.Orange400};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

const SearchInput = styled.input`
    width: 600px;
    height: 50px;
    text-align: center;
    background: none;
    border: none;
    font-size: 20px;
    color: ${Colors.Black};
    outline: none;

    &::placeholder {
        color: ${Colors.Gray500};
    }
`

const Icon = styled.div`
    position: absolute;
    right: 50px;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    color: ${Colors.Orange400};
    font-size: 45px;
    cursor: pointer;
`

const NotFoundContainer = styled.div`
    width: 800px;
    margin: 50px;
    position: relative;
`

const NotFoundText = styled.p`
    width: 800px;
    text-align: center;
    position: absolute;
    bottom: 20px;
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.Gray500};
`
