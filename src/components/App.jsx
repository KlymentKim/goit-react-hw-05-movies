import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header/Header';

export const App = () => {
  return (
    <div>
      < Routes>
        <Route path='/' element ={<Header />}>
       
          <Route style path="/" element={<Home />} />
          

          </Route>
      </Routes>
    </div>
  );
};
