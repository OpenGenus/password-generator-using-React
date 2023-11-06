import React, {useState} from 'react'
import Checkbox from "./Checkbox"
import {createPassword} from './password_generator'
import './index.css'

const initCriteria = [
  {id: 0, name: "Upper-case letters", checked: true},
  {id: 1, name: "Lower-case letters", checked: true},
  {id: 2, name: "Numbers", checked: true},
  {id: 3, name: "Symbols", checked: true},
]
const min_len = 4, max_len = 10
let check_count = initCriteria.length

const PswdGen = ({criterion}) => {
  const [len, setLen] = useState(7)
  const [criteria, setCriteria] = useState(initCriteria)
  const [pswd, setPswd] = useState()

  const handleLen = (evt) => {
    const val = evt.target.value
    if (val >= min_len && val <= max_len) 
      setLen(val)
  }

  const handleCheckbox = (evt, ndx, elem) => {
    const new_criteria = criteria.map((c, i) => {
      if (ndx === i) {
        console.log("elem:", elem)
        // Old values of this elem bc setCriteria() is not called yet
        if (c['checked'] === true) {
          if (check_count - 1 === 0) {
            alert("Please select at least 1 criterionon.")
            return c
          }
          else {
            check_count -= 1
            return {...c, checked: !c['checked']} 
          }
        } 
        else { // elem['checked'] === false
          check_count += 1
          return {...c, checked: !c['checked']} 
        }
      } else {
        return c
      }
    })
    setCriteria(new_criteria)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setPswd(createPassword(len, criteria))
  }

  return (
    <div className="container-sm" id="pswd_gen_container">
      <h1>Password Generator</h1>
      <form id="criteria_tbl" onSubmit={handleSubmit}>
        <label>Length (4~10 chars):</label>
        <input type="number" name="pswd_len" value={len} onChange={handleLen} />

        {criteria.map((elem, ndx) => 
          <Checkbox 
            criterion={elem} 
            key={ndx} 
            handleCheckbox={(evt) => handleCheckbox(evt, ndx, elem)}  
          />
        )}       

        <input type="submit" value="Generate"/>

        {/* 
        Warning, a component is changing an uncontrolled input to be controlled
        - https://react.dev/reference/react-dom/components/input#im-getting-an-error-a-component-is-changing-an-uncontrolled-input-to-be-controlled
        - If your value is coming from an API or a state variable, it might be initialized to null or undefined. In that case, either set it to an empty string ('') initially, or pass value={someValue ?? ''} to ensure value is a string. 
        */}
        <input id="result_box" name="pswd" value={pswd ?? ''} readOnly={true} />
      </form>
    </div>
  )
}

export default PswdGen