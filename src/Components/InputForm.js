import React from 'react'
import "../App.css"
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Recipe from './Recipe'

export default function InputForm() {

    const [recipename, setrecipename] = useState()
    const [recipes, setrecipes] = useState([])
    const [free, setfree] = useState("")
    

    const YOUR_APP_ID = "763e31bd"
    const YOUR_APP_KEY = "8dae149e90f714f677686361e1bb19e3"
    var api = `https://api.edamam.com/search?q=${recipename}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    

        async function getRecipe() {
            const res = await axios.get(api)
            setrecipes(res.data.hits)
            console.log("sjdhbsj")
            console.log(res.data)
            // console.log(Recipe.hits[0].label)
            // console.log(Recipe)
            // console.log(Recipe["recipe"]["label"])
        }

        const onSubmit = (e) => {
            e.preventDefault();
            getRecipe();
            // console.log(free)

        }

    return (
        <div className='container'>
            <h1 className='main my-5'>Recipe App</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" value={recipename} placeholder="Enter the Ingredient"
                     onChange={(e) => {setrecipename(e.target.value)}}/>
                    <br />
                    <select className="form-control"  onChange={(e) => {setfree(e.target.value)}}>
                        <option defaultValue>Open this select menu</option>
                        <option value="Dairy-Free">Dairy-Free</option>
                        <option value="Gluten-Free">Gluten-Free</option>
                        <option value="Wheat-Free">Wheat-Free</option>
                        <option value="Egg-Free">Egg-Free</option>
                        <option value="Peanut-Free">Peanut-Free</option>
                        <option value="Tree-Nut-Free">Tree-Nut-Free</option>
                        <option value="Soy-Free">Soy-Free</option>
                        <option value="Fish-Free">Fish-Free</option>
                        <option value="Alcohol-Free">Alcohol-Free</option>
                    </select>
                    <br />
                    <input className='main btn btn-success' type="submit" placeholder="Get me my Recipe"/>
                </div>

            </form>
            <br />
            <br />
           <div className='recipeCard'>
               {
                   recipes.map((reci) => {
                    if(reci["recipe"]["healthLabels"].includes(free))
                    return <Recipe recipe={reci["recipe"]} key={reci["label"]}/>
                   
                   }
                   )
               }
           </div>

        </div>
    )
        
}
