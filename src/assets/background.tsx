import styled, { keyframes } from "styled-components"

function BackgroundItems() {
    return (
        <Container>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 1920 1080"
                fill="none"
            >
                <circle cx="1920" cy="1439" r="699" fill="#FAD38C" />
                <circle
                    cx="1919.5"
                    cy="1438.5"
                    r="833.5"
                    stroke="#FAD38C"
                    strokeWidth="10"
                />
                <circle cx="1820.5" cy="68.5" r="199.5" fill="#FAD38C" />
                <circle cx="1572.5" cy="316.5" r="48.5" fill="#FAD38C" />
                <circle cx="1820.5" cy="373.5" r="15.5" fill="#FAD38C" />
                <circle cx="1557.5" cy="68.5" r="15.5" fill="#FAD38C" />
                <circle cx="-229" cy="-356" r="699" fill="#FAD38C" />
                <circle cx="363.5" cy="199.5" r="15.5" fill="#FAD38C" />
            </Svg>
        </Container>
    )
}

export default BackgroundItems

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
`

const FadeIn = keyframes`
    0%{
        transform: translateY(-10px) scale(1.01);
        opacity: 0;
    }
    100%{
        transform: translateY(0) scale(1);
        opacity: 1;
    }
`

const Svg = styled.svg`
    animation: ${FadeIn} 2.5s;
`
