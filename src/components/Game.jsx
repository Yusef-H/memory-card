import React from 'react'
import {useState, useEffect} from 'react'
import animals from '../animals'
import '../assets/styles/game.css'

function Game() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [animalsState, setAnimals] = useState(animals);
  
    useEffect(() => {
        // Load the best score from local storage when the component mounts
        const storedBestScore = localStorage.getItem('bestScore');
        if (storedBestScore) {
        setBestScore(parseInt(storedBestScore));
        }
    }, []);
  
    const handleAnimalClick = (clickedAnimal) => {
        console.log(clickedAnimal);
        // If the clicked animal was previously clicked (isClicked is true), reset the score
        if (clickedAnimal.isClicked) {
            setScore(0);
            // Check if the current score is greater than the best score and update the best score
            if (score > bestScore) {
                setBestScore(score);
                // Save the new best score in local storage
                localStorage.setItem('bestScore', score.toString());
            }
        }
        setScore((prevScore) => prevScore + 1);
        // Find the clicked animal in the animals array and check if it was previously clicked
        const updatedAnimals = animalsState.map((animal) =>
            animal.id === clickedAnimal.id ? { ...animal, isClicked: true } : animal
        );

        // Update the animals state with the updatedAnimals array
        setAnimals(updatedAnimals);
    };
  
    return (
        <div>
            <h2>Score: {score}</h2>
            <h2>Best Score: {bestScore}</h2>
            <div className="animals-container">
            {
                animalsState.map((animal) => (
                    <div className="card-img-container" key={animal.id}>
                        <img
                            className="animal-image"
                            src={animal.img}
                            alt={`Animal ${animal.name}`}
                            onClick={() => handleAnimalClick(animal)}
                        />
                        <h3 className="img-title">
                            {animal.name}
                        </h3>
                    </div>
                    
                ))
            }
            </div>
        </div>
    );
}
  
export default Game;
