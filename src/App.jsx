import React from 'react'
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import About from './components/About';
import Contect from './components/Contect';
import StudentRegistration from './components/student/StudentRegistration';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StudentLogin from './components/student/StudentLogin';
import StudentProfile from './components/student/StudentProfile';
import StudentResult from './components/student/StudentResult';
import CollegeRegistration from './components/university/CollegeRegistration';
import CollegeLogin from './components/university/CollegeLogin';
import ResutlUpdate from './components/university/ResultUpdate';
import CollegeProfile from './components/university/CollegeProfile';


const App = () => {
  return (
    <>
      <div className='nav-router'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Herosection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contect" element={<Contect />} />
            <Route path="/studentregistration" element={<StudentRegistration />} />
            <Route path="/studentlogin" element={<StudentLogin/>}/>
            <Route path="/studentprofile" element={<StudentProfile/>}/>
            <Route path="/studentresult" element={<StudentResult/>}/>
            <Route path="/collegeregistration" element={<CollegeRegistration/>} />
            <Route path="/collegeLogin" element={<CollegeLogin/>} />
            <Route path="/resultupdate/:id" element={<ResutlUpdate/>} />
            <Route path="/collegeprofile" element={<CollegeProfile/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
