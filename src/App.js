import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';

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
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <BoxColor r={5} g={200} b={0} />
      <BoxColor r={0} g={155} b={100} />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
      />
    
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
    
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
      />
      {/* Iteration 6 */}
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
    </div>
    
  );
}

export default App;
