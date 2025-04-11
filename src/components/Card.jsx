import React from 'react'

const Card = ({title, image, desc, cookTime, dietType}) => {
  return (
    <div className='card'>
        <img src = {image} alt = {title} className='card-image'/>
        <div className='card-content'>
            <h3>{title}</h3>
            <p>{desc}</p>
            <p>Cooking Time: {cookTime} mins</p>
            <p>Diet Type: {dietType}</p>
        </div>
    </div>
  )
}

export default Card