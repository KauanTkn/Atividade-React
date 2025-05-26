import { Link } from "react-router-dom";
import ToolBar from "./components/Toolbar";
import SculptureGallery from "./components/Gallery";
import Gallery from "./components/CreateRoot";
import ClockApp from "./components/ClockApp";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Counter from "./components/Counter";
import MovingDot from "./components/MovingDot";
import List from "./components/List";
import List2 from "./components/List2";
import ShapeEditor from "./components/ShapeEditor";
import CounterList from "./components/CounterList";
import List3 from "./components/List3";
import List4 from "./components/List4";
import BucketList from "./components/BucketList";


export default function Atv04() {
    return (
        <>
            <h1>Atividade 4</h1>
            <ToolBar/>
            <SculptureGallery/>
            <Gallery/>
            <ClockApp/>
            <Form/>
            <Form2/>
            <Form3/>
            <Counter/>
            <MovingDot/>
            <List/>
            <List2/>
            <List3/>
            <List4/>
            <ShapeEditor/>
            <CounterList/>
            <BucketList/>
            <br/>
            <Link to="/" className="voltar">voltar</Link>
        </>
    )
}