import Relogio from './Relogio';
import Letreiro from './Letreiro';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
        <Relogio/>
        <Letreiro/>
        <Link to="/">Voltar</Link>
    </>
  );
}

export default App;
