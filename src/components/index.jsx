import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCheck } from '@fortawesome/free-solid-svg-icons'
import Body from './Body'
import BodyDesc from './BodyDesc'
import BodyDetail from './BodyDetail'
import Buy from './Buy'
import Header from './Header'
import Title from './Titile'
import TitleDesc from './TitleDesc'
import TitlePrice from './TitlePrice'
import Wrapper from './Wrapper'

const Hobby = (props) => {
    const Detail  = props.Detail;
    return (
        <Wrapper>
            <Header>
                <Title> {props.Title} </Title>
                <TitleDesc> {props.TitleDesc} </TitleDesc>
                <TitlePrice>
                    <FontAwesomeIcon icon={faDollarSign} />
                    {props.TitlePrice}
                    /mo
                </TitlePrice>
                <Buy> {props.Buy} </Buy>
            </Header>
            <Body>
                <BodyDesc> {props.BodyDesc} </BodyDesc>
                {
                    Detail.map( (detail,i) => (
                        <BodyDetail key={i}>
                            <FontAwesomeIcon icon={faCheck} color="green"/>
                            {detail}
                        </BodyDetail>
                    ))
                }
            </Body>
        </Wrapper>
    )
}

export default Hobby;