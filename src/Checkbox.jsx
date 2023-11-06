import React from 'react'

const Checkbox = ({criterion, handleCheckbox}) => {

  
  return (
    <div>
      <input 
        type="checkbox" 
        name={criterion['name']} 
        checked={criterion['checked']}
        onChange={handleCheckbox}
      />
      <label htmlFor="criterion">{criterion['name']}</label>
    </div>
  )
}

export default Checkbox