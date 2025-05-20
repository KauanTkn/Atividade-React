import { Link } from "react-router-dom";
import Avatar from "./Components/Avatar";
import Gallery from "./Components/Gallery";
import TodoList from "./Components/TodoList";
import Profile from "./Components/Profile";
import PackingList from "./Components/PackingList";
import List from "./Components/List";
import PrepareMode from "./Components/Recipe";
import TeaSet from "./Components/Tea";

export default function Atv03() {
    return (
        <>
            <h1>Atividade 3</h1>
            <Gallery />
            <Avatar />
            <TodoList />
            <Profile />
            <PackingList />
            <List />
            <PrepareMode />
            <TeaSet />

            <Link to="/">Voltar</Link>
        </>
    );
}