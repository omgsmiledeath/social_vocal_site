
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/SideBars/Header';
import Footer from './Components/SideBars/Footer';
import About from './Components/Main/About/About';
import Blog from './Components/Main/Blog/Blog';
import Lessons from './Components/Main/Lessons/Lessons';
import RecordingContainer from './Components/Main/Recording/RecordingContainer';
import CoursesContainer from './Components/Main/Courses/CoursesContainer';
import { AdminContainer } from './Components/Main/Admin/AdminContainer';

function App() {
  return (
   <div >
    <div className='header'>   
       <Header /> 
       </div>
    <div className='main'>
      <Routes>
      <Route path='about' element={<About />} />
      <Route path='blog' element={<Blog />} />
      <Route path='course' element={<CoursesContainer />} />
      <Route path='recording' element={<RecordingContainer />} />
      <Route path='lessons' element={<Lessons />} />
      <Route path='/' element={<About />} />
      <Route path='/admin' element={<AdminContainer />} />
      </Routes>
      </div>
      <div className='footer'> 
       <Footer />
    </div>
   </div>
  );
}

export default App;
