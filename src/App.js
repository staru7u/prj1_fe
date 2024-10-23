import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import ListBoardComponent from './components/ListBoardComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div> 
        <HeaderComponent/>
          <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path = "/"  element = {<ListBoardComponent/>}></Route>
              <Route path = "/board" element = {<ListBoardComponent/>}></Route>
            </Routes>
            </BrowserRouter>
          </div>
        <FooterComponent/>
    </div>
  );
}

export default App;
