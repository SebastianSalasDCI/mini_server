import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h1>HEy... you are lost, pleas go back home</h1>
      <Link to="/" >Go back</Link>
    </div>
  )
}
