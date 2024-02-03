import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './Pages/SignUp';
import Login from './Pages/LogIn';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import FavPage from "./Pages/FavPage";
import NotFound from "./Pages/NotFound";
import MovieData from "./Components/MovieData";
import { LanguageProvider } from './Context/LangContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <LanguageProvider>
        <Navbar/>
        <Switch>
          <Route path="/movie/:movieId" component={MovieData} />
          <Route exact path={"/Home"} component={Home}/>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/SignUp"} component={SignUp} />
          <Route exact path={"/LogIn"} component={Login} />
          <Route exact path={"/FavPage"} component={FavPage} />
          <Route exact path={"*"} component={NotFound} />
        </Switch> 
        </LanguageProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
