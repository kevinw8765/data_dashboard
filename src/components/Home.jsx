import React from 'react'
import {useState, useEffect} from 'react'
import List from './List'

const Home = () => {
    const [recipes, setRecipes] = useState([])
    const apiKey = import.meta.env.VITE_APP_API_KEY

    useEffect(() => {
        const fetchRecipes = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`)
            const data = await response.json()
            setRecipes(data.recipes)
        } catch (error) {
            console.error("Error fetching recipes:", error)
        }
        }
        fetchRecipes()
    }, [])  
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');

    const totalRecipes = recipes.length
    const avgCookingTime = recipes.reduce((sum, recipe) => sum + (recipe.readyInMinutes || 0), 0) / totalRecipes || 0;
    const dietTypes = [...new Set(recipes.flatMap(recipe => recipe.diets))];

    // Filter
    const filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.title?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = !categoryFilter || recipe.diets?.includes(categoryFilter);
        return matchesSearch && matchesCategory;
    });

    return (
        <div>
            <main>
                {/* Search and Filter Section */}
                <div className="controls">
                <input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                
                <select 
                    value={categoryFilter} 
                    onChange={(e) => setCategoryFilter(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {dietTypes.map(diet => (
                    <option key={diet} value={diet}>{diet}</option>
                    ))}
                </select>
                </div>

                {/* Summary Statistics */}
                <div className="stats">
                <div className="stat-card">
                    <h3>Total Recipes</h3>
                    <p>{totalRecipes}</p>
                </div>
                <div className="stat-card">
                    <h3>Avg. Cook Time</h3>
                    <p>{avgCookingTime.toFixed(1)} mins</p>
                </div>
                <div className="stat-card">
                    <h3>Diet Types</h3>
                    <p>{dietTypes.length}</p>
                </div>
                </div>

                {/* Recipe List */}
                <h2>Random Recipes</h2>
                <List items={filteredRecipes} />
            </main>
        </div>
    ) 
}

export default Home