import React from "react";
import "./style.css";

export default function MedicalTreatment(Props) {
  return(
  <div>
    {props.name} {props.id} {props.courseid} {props.type} {props.category} {props.StartDate}
    </div>
    )
}