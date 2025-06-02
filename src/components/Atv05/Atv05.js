import { Link } from "react-router-dom";
import FormQuiz from "./components/FormQuiz";
import FormTicket from "./components/FormTicket";
import Accordion from "./components/Accordion";
import Messenger from "./components/Messenger";



export default function Atv04() {
    return (
        <>
            <h1>Atividade 5</h1>
            <FormQuiz />
            <FormTicket />
            <Accordion />
            <Messenger />
            <br/>
            <Link to="/" className="voltar">voltar</Link>
        </>
    )
}