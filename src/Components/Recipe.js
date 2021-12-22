import React from 'react'
import "../App.css"

export default function Recipe1({ recipe }) {
    const openImg = (src) => {
        window.open(src)
    }
    return (
        <div >
            <div className="card">
                <img src={recipe["image"]} className="card-img-top" alt="" onClick={() => {
                    openImg(recipe["shareAs"])
                }} />
                <div className="card-body">
                    <h5 className="card-title">{recipe["label"]}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Number of Calories: {recipe["calories"]}</li>
                    <li className="list-group-item">Meal type: {recipe["mealType"][0]}</li>
                    <li className="list-group-item">Ingredients:
                        {
                            recipe["ingredientLines"].map((ele) => {
                                return <p>{ele}</p>
                            })
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}
