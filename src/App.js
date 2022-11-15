import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Austen"
        firstName="Jane"
        gender="female"
        height={165}
        birth={new Date("1775-12-16")}
        picture="http://c.files.bbci.co.uk/100EA/production/_116807756_jane-austen.jpg"
        />
        <IdCard
        lastName="Brönte"
        firstName="Charlotte"
        gender="female"
        height={172}
        birth={new Date("1816-04-21")}
        picture="https://s3.abcstatics.com/media/cultura/2018/03/29/Charlotte_Bronte-2-U10107476060sVB-U30160959972RKI-620x600@abc.jpg"
        />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">Francois</Greetings>
    </div>
    
  );
}

export default App;
