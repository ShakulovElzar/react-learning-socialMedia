import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <Content state={props.state}/>
            </div>
        </BrowserRouter>
    );
}

export default App;