import ContadorDePessoas from "./ContadorDePessoas";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <ContadorDePessoas/>
      <Link to="/">Voltar</Link>
    </>
  );
}

export default App;