import React from 'react'

const Part = ({name,exercises}) => {
  return (
    <tr>
        <td>
            {name}
        </td>
        <td>
            {exercises}
        </td>
    </tr>
  )
}

export default Part