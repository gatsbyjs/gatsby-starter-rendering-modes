import * as React from 'react'

export default function Home (props) {
  return (
    <>
      <h1>Rendering Modes Starter</h1>
      <ul>
        <li>
          <a href='/dsg'>DSG page</a>
        </li>
        <li>
          <a href='/ssr'>SSR page</a>
        </li>
        <li>
          <a href='/breed/pug'>Dynamic route page</a>
          <ul>
            <li>
              <a href='/breed/pug'>Pug</a>
            </li>
            <li>
              <a href='/breed/boxer'>Boxer</a>
            </li>
            <li>
              <a href='/breed/chow'>Chow</a>
            </li>
            <li>
              <a href='/breed/husky'>Husky</a>
            </li>
            <li>
              <a href='/breed/shiba'>Shiba</a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}
