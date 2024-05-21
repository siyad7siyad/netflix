
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { orginals,action,comedy } from './Components/urls';

function App() {
  return (
   <div>
    <NavBar />
    <Banner />
    <RowPost url={orginals} title='Netflix Orginals' />
    <RowPost url={action} title='Action' isSmall />
    <RowPost url={comedy} title='comedy' isSmall />
   </div>
  );
}

export default App;
