import React from 'react'
import CompC from './CompC'

export default function CompB(props) {
  return (
    <>
    <div>
      CompB ,{props.p1}
      <hr />
      <CompC p2={props.p1} />
    </div>
    </>
  )
}
