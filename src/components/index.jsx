import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCheck } from '@fortawesome/free-solid-svg-icons'
import Body from './Body'
import BodyDesc from './BodyDesc'
import BodyDetail from './BodyDetail'
import Buy from './Buy'
import Header from './Header'
import Title from './Titile'
import TitleDesc from './TitleDesc'
import Price from './Price'
import Wrapper from './Wrapper'

const Hobby = (props) => {
    const { detail, title, titleDesc, price, buy, bodyDesc } = props;
    return (
        <Wrapper>
            <Header>
                <Title title={title} />
                <TitleDesc titleDesc={titleDesc} />
                <Price>
                    <FontAwesomeIcon icon={faDollarSign} />
                    {price}
                    /mo
                </Price>
                <Buy buy={buy} />
            </Header>
            <Body>
                <BodyDesc bodyDesc={bodyDesc} />
                {
                    detail.map((item, i) => (
                        <BodyDetail key={i}>
                            <FontAwesomeIcon icon={faCheck} color="green" />
                            {item}
                        </BodyDetail>
                    ))
                }
            </Body>
        </Wrapper>
    )
}

export default Hobby;