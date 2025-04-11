import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const RecipeDetail = () => {

    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)
    const apiKey = import.meta.env.VITE_APP_API_KEY 

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
                const data = await response.json()
                console.log(data)
                setRecipe(data)
            } catch (error) {
                console.error("Error fetching Recipe details: ", error)
            }
        }
        fetchRecipeDetails();
    }, [id])

    if (!recipe) return <p>Loading...</p>

    return (
        <div className="detail-view">
            <h2>{recipe.title}</h2>
            <img src = {recipe.image} alt = {recipe.title}/>
            <div>{recipe.summary}</div>
            <h3>Ingredients:</h3>
            <ul>
                {recipe.extendedIngredients?.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <ul>
                {recipe.analyzedInstructions[0].steps?.map((step) => (
                    <li>{step.number} : {step.step}</li>
                ))}
            </ul>
        </div>
    )
}

export default RecipeDetail