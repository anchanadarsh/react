import React from 'react';
import CourseData from './../data/course'

const courseItemWrap = CourseData.map(function(){
 return 
})

function CourseItem(props) {
 return (
  <div className="course_item">
   <img src={props.courseImgSrc} />
   <h2>{props.courseTitle}</h2>
   <p>{props.courseDesc}</p>
  </div >
 )
}

export default CourseItem