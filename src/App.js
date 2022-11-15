import './App.css';
import IdCard from './components/IdCard';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Austen"
        firstName="Jane"
        gender="female"
        height={165}
        birth={new Date("1992-07-14")}
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
    </div>
    
  );
}

export default App;
