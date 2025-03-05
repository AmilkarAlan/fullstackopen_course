import React from 'react'

const Filter = ({filter, handleFilter}) => {
  return (

    <form>
      <div>
        filter shown with <input type='text' name='filter' value={filter} onChange={handleFilter} />
      </div>
    </form>

  )
}

export default Filter