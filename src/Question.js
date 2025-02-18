import React from 'react'

export default function Question(props) {
  return (
    <div>
    <h2>{props.que}</h2>
    <input type="radio" name={props.qnum} value={props.opA} ></input>A.{props.opA}<br></br>
    <input type="radio" name={props.qnum} value={props.opB} ></input>B.{props.opB}<br></br>
    <input type="radio" name={props.qnum} value={props.opC} ></input>C.{props.opC}<br></br>
    <input type="radio" name={props.qnum} value={props.opD} ></input>D.{props.opD}<br></br>
    
    </div>
  )
}
