import React from "react";
import "./style.css";
import MedicalTreatment from "./MedicalTreatment";

const name1 = "Sapana";
const Id1 = "21436534";
const CourseId1 = "CP5CS93E";
const Type1 = "Curative";
const Category1 = "Preventative";
const StartDate1 = "5/4/21";

//function MedicalTreatment(props){
  //return(
  //  <div>
     // {props.name} {props.id} {props.CourseId} {props.Type} {Props.Category} {props.StartDate}
     // </div>
 // )

//}

function toString(name,id,courseid,type,category,startdate){
  return name + " , " + id + " , " +courseid + " , " + Type + " , " + category + " , " + startDate;
}

function clickHandler(){
  window.alert(toString(name1,id1,courseType1,Type1,Category1,Startdate1))  
}
export default function App() {
  return (
    <div>
      <MedicalTreatment name ={name1} id={id1} courseId = {CourseId1} Type={Type1} Category = {Category1} StartDate= {StartDate1}/>
      <button onClick = {clickHandler}>
        Show MedicalTreatment
        </button>

        </div>
  )
}