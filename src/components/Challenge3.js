/**
 * Challenge
In AnimalContainer:
When a User clicks the button "Hungry Animals", display only the hungry animals
When a User clicks the button "Full Animals", display only the animals who are not hungry
The display should include the animal name and whether or not they are hungry. For example, "Andy is hungry"
Also be mindful of not having two sources of truth. If I later want to add create or delete functionality, I shouldn't have to update state in two places
 * 
 */


/**
 * <button> "Hungry Animals"<button> [{},{}] animals that are hungry
 * <button> "Full Animals" <button> => [{},{}] full animals
 * 
 * "animal's name" is "hungry"
 * or 
 * "animals name" is "full"
 * 
 * 
 */

import React, { useState } from "react"

const hungryObj = {true: " is hungry", false: " is not hungry", null: ""} 

function Challenge3({ animals }) {
    const [isHungry, setIsHungry] = useState(null)

   
    function handleClick(e) {
        e.preventDefault()
        setIsHungry(e.target.value)
       console.log(e.target.value)
    }


    const filteredAnimals = animals.filter((a) => {
        if(isHungry === null) return true
        
       return a.hungry.toString() === isHungry 
    })

    const animalList = filteredAnimals.map((a) => (
        <li
        key={a.id}
        >{a.name + hungryObj[isHungry] }</li>
    ))

    return (
        <div>
            <button 
            onClick={handleClick}
            value={true}
            className="bg-white">Hungry Animals</button>
            <br></br>
            <button 
            onClick={handleClick}
            value={false}
            className="bg-white">Full Animals</button>
            <h3 className=" text-white">Animals go below</h3>
            <ul className=" text-white">
             {animalList}
            </ul>
        </div>
    )
}
export default Challenge3