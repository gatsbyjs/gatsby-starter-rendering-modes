import * as React from 'react'
import fetch from 'node-fetch'

export default function DynamicRoute (props) {
  const { image } = props.serverData

  return (
    <>
      <a href='/'>Home</a><br />
      <h1>Dynamic Route</h1>
      <pre>id: {props.breed}</pre>
      <pre>serverData.breed: {props.serverData?.breed}</pre>
      <img
        alt={`${props.breed} doggo`}
        src={image}
      />
    </>
  )
}

export async function getServerData ({ params }) {
  const data = await fetch(`https://dog.ceo/api/breed/${params.breed}/images/random`)
    .then(res => res.json())

  return {
    props: {
      breed: params.breed,
      image: data.message,
    }
  }
}
