import React from 'react'
import Card from './Card'

const List = ({items}) => {
  return (
    <div className='list'>
        {items.map((item) => (
            <Card
                key = {item.id}
                title = {item.title}
                image = {item.image}
                desc = {item.desc}
                cookTime = {`Cook Time: ${item.readyInMinutes} minutes`}
                dietType={`Diet: ${item.diets}`}
            />
        ))}
    </div>
  )
}

export default List