import React from 'react'

const Total = ({course}) => {
    const exercises1 = course.parts[ 0 ].exercises
    const exercises2 = course.parts[ 1 ].exercises
    const exercises3 = course.parts[ 2 ].exercises
    return (
        <div>
            <p>Number of exercises { exercises1 + exercises2 + exercises3 }</p>
        </div>
    )
}

export default Total