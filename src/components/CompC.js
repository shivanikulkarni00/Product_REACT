import React, { useContext } from 'react'
import ContextAPI from '../contextAPI'

export default function CompC(props) {
    var record =useContext(ContextAPI)
  return (
    <div>
      CompC,{props.p2}
      <p>Data from context API: {record}</p>
    </div>
  )
}
