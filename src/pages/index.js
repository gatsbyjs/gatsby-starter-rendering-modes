import * as React from 'react'
import { Link } from 'gatsby'

export default function Home (props) {
  return (
    <>
      <h1>Rendering Modes Starter</h1>
      <ul>
        <li>
          <Link to='/dsg'>DSG page</Link>
        </li>
        <li>
          <Link to='/ssr'>SSR page</Link>
        </li>
      </ul>
    </>
  )
}
