import React from 'react'

const Form = ({newPerson, handleChange, handleSubmit}) => {
  return (
    <form onSubmit={ handleSubmit }>
        <div>
          name: <input type="text" value={ newPerson.name } name="name" onChange={ handleChange } required />
        </div>
        <div>
          number: <input type='text' value={ newPerson.number } maxLength={ 11 } name="number" onChange={ handleChange } required />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default Form