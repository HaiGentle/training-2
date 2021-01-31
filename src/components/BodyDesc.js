import styled from "styled-components";

const BodyDesc = styled.h2`
    margin-top: unset;
`

const WrapperBodyDesc = (props) => {
    return (
        <BodyDesc>{props.bodyDesc}</BodyDesc>
    )
}

export default WrapperBodyDesc;