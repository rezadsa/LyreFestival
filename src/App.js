import {Route,Routes} from 'react-router-dom';
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from './pages/articlePage/ArticlePage';
import CreateNew from './pages/createNew/CreateNew';
import NotFound from './pages/notfound/NotFound';
function App() {
  return (
    <div>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Home/>}  />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/article/:id' element={<ArticlePage/>} />
        <Route path='/create' element={<CreateNew />} />
        
      </Routes>
    </div>
  );
}

export default App;
