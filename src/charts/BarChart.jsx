import React from 'react'
import { Bar } from 'react-chartjs-2'

const CookingTimeChart = ({recipes}) => {

    const data = {
        labels: recipes.map(r => r.title),
        datasets: [{
            label: 'Cooking Time (mins)',
            data: recipes.map(r => r.readyInMinutes),
            backgroundColor: '#70CAD1'
        }]
    }

    return (
        <Bar data = {data} width = {400} height = {300} options={{responsive: true}}/>
    )
}

export default CookingTimeChart