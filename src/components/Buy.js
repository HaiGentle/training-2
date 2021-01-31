import styled from "styled-components";

const Buy = styled.button`
    width: 100%;
    height: 3em;
    color: white;
    background-color: black;
    border-radius: 7px;
    text-align: center;
    margin-top: 2em;
`
const WapperBuy = (props) => {
    return (
        <Buy>{props.buy}</Buy>
    )
}

export default WapperBuy;