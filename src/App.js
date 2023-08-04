
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/SideBars/Header';
import Footer from './Components/SideBars/Footer';
import About from './Components/Main/About/About';
import Blog from './Components/Main/Blog/Blog';
import Course from './Components/Main/Course/Course';
import Lessons from './Components/Main/Lessons/Lessons';
import Recording from './Components/Main/Recording/Recording';

function App() {
  return (
   <div>
    <Header />
      <Routes>
      <Route path='about' element={<About />} />
      <Route path='blog' element={<Blog />} />
      <Route path='course' element={<Course />} />
      <Route path='recording' element={<Recording />} />
      <Route path='lessons' element={<Lessons />} />
      </Routes>
    <Footer />
   </div>
  );
}

export default App;
