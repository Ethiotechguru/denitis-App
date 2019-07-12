import React from 'react'

const Procedures = props => (
    <ul>
            {props.procedures.map((procedure, i)=> <li key={i}>{procedure}</li>)}
    </ul>
)
export default Procedures;