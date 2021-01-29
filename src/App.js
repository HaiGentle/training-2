import './App.css';
import Hobby from './components/index'

function App() {
  return (
    <Hobby 
      Title={'Hobby'}
      TitleDesc={'All the bassics for the starting bussiness'}
      TitlePrice={12}
      Buy={'Buy Hobby'}
      BodyDesc={"WHAT'S INCLUDE"}
      Detail={['Potenti feils, in cars at  ligula nunc.','Orci neque eget pellentesque']}
    />
  );
}

export default App;
