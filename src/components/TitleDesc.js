import styled from "styled-components";

const TitleDes = styled.p`
    color: gray;
`
const WrapperTitleDesc = (props) => {
    return (
        <TitleDes>{props.titleDesc}</TitleDes>
    )
}

export default WrapperTitleDesc;