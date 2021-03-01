import './App.css';
import { Router } from '@reach/router';
import PetAll from './components/PetAll';
import PetEdit from './components/PetEdit';
import PetNew from './components/PetNew';
import PetOne from './components/PetOne';

function App() {
  const NotFound = () => {
    return <div>Route Not Found</div>;
  };
  return (
    <div className="App">
      <Router>
        <PetAll path="/" />
        <PetOne path="/pets/:id" />
        <PetNew path="/pets/new" />
        <PetEdit path="/pets/:petId/edit" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
