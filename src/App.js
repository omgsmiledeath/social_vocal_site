
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/SideBars/Header';
import Footer from './Components/SideBars/Footer';
import About from './Components/Main/About/About';
import Blog from './Components/Main/Blog/Blog';
import Lessons from './Components/Main/Lessons/Lessons';
import RecordingContainer from './Components/Main/Recording/RecordingContainer';
import CourseContainer from './Components/Main/Course/CourseContainer';

function App() {
  return (
   <div >
    <div className='header'>   
       <Header /> 
       </div>
    <div>
      <Routes>
      <Route path='about' element={<About />} />
      <Route path='blog' element={<Blog />} />
      <Route path='course' element={<CourseContainer />} />
      <Route path='recording' element={<RecordingContainer />} />
      <Route path='lessons' element={<Lessons />} />
      <Route path='/' element={<About />} />
      </Routes>
      </div>
      <div > 
       <Footer />
    </div>
   </div>
  );
}

export default App;
