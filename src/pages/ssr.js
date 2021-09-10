import * as React from 'react'
import fetch from 'node-fetch'

export default function SSR (props) {
  const { image } = props.serverData

  return (
    <>
      <a href='/'>Home</a><br />
      <h1>SSR: Server Side Rendering</h1>
      <img
        alt='doggo'
        src={image}
      />
    </>
  )
}

export async function getServerData ({ params }) {
  const data = await fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(res => res.json())

  return {
    props: {
     // data has the shape of "message", "status" where message is the image src
      image: data.message
    }
  }
}
