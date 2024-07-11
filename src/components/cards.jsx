import React from 'react';
import Card from './card';
import { useState } from 'react';


const Cards = (props) => { 
    console.log( " cards courses : ",props.courses);
    let courses = props.courses;
    const category=props.category;

const [likedCourses,setLikedCourses]=useState([]);
    // returns a list of all courses received from api result 

    function getCourses(){
        
        if(category === "All"){
            let allCourses = [];

            Object.values(props.courses).forEach( (array) => {
                array.forEach( (courseData) => { 
                        allCourses.push(courseData);
                });
            });
        console.log(allCourses);
            return allCourses;  
        }
        else{
            // sirf specific category ka data pass karenge 

            return courses[category];
        }
         
    }
     
    return(
          <div className='flex flex-wrap justify-center gap-4 mb-4'>{
            getCourses().map( (course) => {
                return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>;
         })}
          </div>
    );

};

export default Cards; 