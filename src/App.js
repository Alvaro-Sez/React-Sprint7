import Presupost from "./pages/Presupost";
import NavBar from "./components/NavBar";
import Home from './pages/Home'
import {
  Wrapper,
 } from "./components/style";
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Wrapper>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/presupuestos' component={Presupost}></Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
    </>
  );
}

export default App;
