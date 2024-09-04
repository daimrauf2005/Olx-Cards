import React from 'react'

function Card({price , description , url}) {
  return (
    <>
    <img
      src={url}/>

    <h2 className="card-title"></h2>
    <p>{description}</p>
    <p>Rs {price}</p>
  </>
  )
}

export default Card