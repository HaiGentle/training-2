import './App.css';
import Hobby from './components/index'

function App() {
  return (
    <Hobby 
      title='Hobby'
      titleDesc='All the bassics for the starting bussiness'
      price={12}
      buy='Buy Hobby'
      bodyDesc="WHAT'S INCLUDE"
      detail={['Potenti feils, in cars at  ligula nunc.','Orci neque eget pellentesque']}
    />
  );
}

export default App;
