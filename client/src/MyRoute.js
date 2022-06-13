import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from "./App";
import FormComponent from "./components/FormComponent";
import PostComponent from './components/PostComponent';

const MyRoute =()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/create" exact element={<FormComponent />} />
                <Route path="/post/:slug" exact element={<PostComponent />} />
            </Routes>
        </Router>
    )
}

export default MyRoute;