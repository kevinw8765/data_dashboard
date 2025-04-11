import React from 'react'
import { Pie } from 'react-chartjs-2';

const DietDistributionChart = ({recipes}) => {

    const dietCounts = recipes.reduce((acc, recipe) => {
        recipe.diets?.forEach(diet => {
            acc[diet] = (acc[diet] || 0) + 1
        })
        return acc
    }, {})

    const data = {
        labels: Object.keys(dietCounts),
        datasets: [{
            data: Object.values(dietCounts),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    }
    return (
        <Pie data = {data} width={400} height={300} options={{ responsive: true }}/>
    )
}

export default DietDistributionChart