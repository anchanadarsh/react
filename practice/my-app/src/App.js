import React from 'react';
import CourseItem from './components/courseItem'
import './App.css';
import CourseData from './data/course'

function App() {
  return (
    <div className="course_wrap">
      <CourseItem
        courseImgSrc="https://unionegroup.in/dist/img/home/banners/empowers.jpg" 
        courseTitle="Title1" 
        courseDesc="description1"
      ></CourseItem>
      
      <CourseItem
        courseImgSrc="https://unionegroup.in/dist/img/home/banners/empowers.jpg" 
        courseTitle="Title2" 
        courseDesc="description2"
      ></CourseItem>
      
      <CourseItem
        courseImgSrc="https://unionegroup.in/dist/img/home/banners/empowers.jpg" 
        courseTitle="Title3" 
        courseDesc="description3"
      ></CourseItem>
    </div>
  )
}

export default App;
