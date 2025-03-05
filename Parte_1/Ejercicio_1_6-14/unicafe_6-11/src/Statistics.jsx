import React, { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const sumPondered = good - bad
    const average = all !== 0 ? (sumPondered / all).toFixed(2) : 0;
    const positive = good !== 0 ? ((good / all) * 100).toFixed(2) : 0;
    return (
        <div>
            <h1>Statistics</h1>
            { all === 0 ? <p>No feedback given</p> : (
                <table>
                    <tbody>
                        <tr>
                            <td>Good:</td>
                            <td>{ good }</td>
                        </tr>
                        <tr>
                            <td>Neutral:</td>
                            <td>{ neutral }</td>
                        </tr>
                        <tr>
                            <td>Bad:</td>
                            <td>{ bad }</td>
                        </tr>
                        <tr>
                            <td>All:</td>
                            <td>{ all }</td>
                        </tr>
                        <tr>
                            <td>Average:</td>
                            <td>{ average }</td>
                        </tr>
                        <tr>
                            <td>Positive:</td>
                            <td>{ positive }%</td>
                        </tr>
                    </tbody>
                </table>
            ) }
        </div>
    )
}

export default Statistics