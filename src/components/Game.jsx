import React from 'react'
import {useState, useEffect} from 'react'
import {animals, shuffleArray} from '../animals'
import Card from './Card';
import '../assets/styles/game.css'
import jungleMusic from '../assets/sound/jungle.mp3';

function Game() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [animalsState, setAnimals] = useState(animals);
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);

    useEffect(() => {
        //shuffle animals
        setAnimals(shuffleArray(animals));
        // Load the best score from local storage when the component mounts
        const storedBestScore = localStorage.getItem('bestScore');
        if (storedBestScore) {
            setBestScore(parseInt(storedBestScore));
        } else {
            // If no best score is found in local storage, set it to 0
            setBestScore(0);
        }
    }, []);

    useEffect(() => {
        // When the component mounts, play the jungle background music
        const audioElement = new Audio(jungleMusic);
        audioElement.loop = true; // Make the audio loop continuously
    
        // Check if music should start playing when the component mounts
        if (isMusicPlaying) {
          audioElement.play();
        }
    
        return () => {
          audioElement.pause();
        };
    }, [isMusicPlaying]);

    const toggleMusic = () => {
        setIsMusicPlaying((prevIsPlaying) => !prevIsPlaying);
    };
  
    const handleAnimalClick = (clickedAnimal) => {

        // If the clicked animal was previously clicked (isClicked is true), reset the score
        if (clickedAnimal.isClicked) {
            setScore(0);
            // Check if the current score is greater than the best score and update the best score
            if (score > bestScore) {
                setBestScore(score);
                // Save the new best score in local storage
                localStorage.setItem('bestScore', score.toString());
            }
            restartGame();
            return;
        }
        setScore((prevScore) => prevScore + 1);
        // Find the clicked animal in the animals array and check if it was previously clicked
        const updatedAnimals = animalsState.map((animal) =>
            animal.id === clickedAnimal.id ? { ...animal, isClicked: true } : animal
        );
        const shuffledAnimals = shuffleArray(updatedAnimals);

        // Update the animals state with the updatedAnimals array
        setAnimals(shuffledAnimals);
    };

    const restartGame = () => {
        const updatedAnimals = animalsState.map((animal) => ({
          ...animal,
          isClicked: false,
        }));
      
        setAnimals(updatedAnimals);
        setScore(0);
    };

    const resetBestScore = () => {
        localStorage.clear();
        setBestScore(0);
        restartGame();
    }
      
  
    return (
        <div>
            <h2>Score: {score}</h2>
            <h2>Best Score: {bestScore}</h2>
            <div className="animals-container">
            {
                animalsState.map((animal) => (
                    <Card 
                        animal = {animal}
                        handleAnimalClick = {handleAnimalClick}
                        key={animal.id}
                    />
                ))
            }
            </div>
            <button className="score-btn"
                onClick={resetBestScore}>Reset Best Score
            </button >
            <button onClick={toggleMusic} className="music-btn">
                {isMusicPlaying ? 'Pause Music' : 'Play Music'}
            </button>
        </div>
    );
}
  
export default Game;
