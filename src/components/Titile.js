import styled from "styled-components";

const Title = styled.h2`
    margin-top: unset;
`

const WrapperTitile = (props) => {
    return (
        <Title>{props.title}</Title>
    )
}

export default WrapperTitile;