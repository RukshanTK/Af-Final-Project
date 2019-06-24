import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import addCourse from './components/admin/addCourse';
import addInstructor from './components/admin/addInstructor';
import addAdmin from './components/admin/addAdmin';
import adminHome from './components/admin/adminHome';
import editCourse from './components/admin/editCourse';
import editAdmin from './components/admin/editAdmin';
import editInstructor from './components/admin/editInstructor';
import viewAll from './components/instructor/viewAll';
import instructorHome from './components/instructor/instructorHome';
import assManager from './components/instructor/assManager';
import update from './components/instructor/updateMarks';
import view from './components/instructor/viewMarks';
import courses from './components/student/courses';
import StudentHome from './components/student/studentHome';
import LoginDetails from './components/LoginDetails';
import ViewStudent from './components/student/viewStudent';
import CoursesEnrolled from './components/student/coursesEnrolled';
import deleteCourse from './components/student/deleteCourses';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/signUp' exact component={SignUp} />
        <Route path='/adminHome' exact component={adminHome} />
        <Route path='/addAdmin' exact component={addAdmin} />
        <Route path='/editCourse' exact component={editCourse} />
        <Route path='/editAdmin' exact component={editAdmin} />
        <Route path='/editInstructor' exact component={editInstructor} />
        <Route path='/addInstructor' exact component={addInstructor} />
        <Route path='/addCourse' exact component={addCourse} />
        <Route path='/viewAll' exact component={viewAll} />
        <Route path='/instructorHome' exact component={instructorHome} />
        <Route path='/assManager' exact component={assManager} />
        <Route path='/update' exact component={update} />
        <Route path='/view' exact component={view} />
        <Route path='/courses' exact component={courses} />
        <Route path='/StudentHome' exact component={StudentHome}/>
        <Route path='/LoginDetails' exact component={LoginDetails}/>
        <Route path='/ViewStudent' exact component={ViewStudent}/>
        <Route path='/CoursesEnrolled' exact component={CoursesEnrolled}/>
        <Route path='/delete/:id' exact component={deleteCourse}/>

      </Switch>
    </Router>
    </div>
  );
}

export default App;
