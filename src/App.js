import './App.css';
import PersonCard from './components/PersonCard';;

function App() {
  return (
    <div className="App">
     <PersonCard 
     tittle={ "Doe, Jane" }
     age={ 45 }
     desc={ "Hair Color: Black" }/>
     <PersonCard 
     tittle={ "Smith, John" }
     age={ 88 }
     desc={ "Hair Color: Brown" }/>
     <PersonCard 
     tittle={ "Fillmore, Millard" }
     age={ 50 }
     desc={ "Hair Color: Brown" }/>
      <PersonCard 
     tittle={ "Smith, Maria" }
     age={ 62 }
     desc={ "Hair Color: Brown" }/>
    </div>
  );
}

export default App;
