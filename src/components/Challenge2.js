/**
 * <form> 
 * <input> name with character limit of 15  
 * <button>

add the name to a list of "contestants" and clear form


    if not 2 characters 
    do not add to list
    do not clear form 

    <button> select one of the names as a winner and render winner to the page
    all caps
    if one name or less {render message: please add more contestants}
    if user clicks button again winner should update
*/

import React, { useState } from "react"

function Challenge2( { onNameSubmit, names }) {
const [input, setInput] = useState("")
const [winner, setWinner] = useState("")

function handleSubmit(e) {
    e.preventDefault()
    if (input.length < 2){
        return 
    }
    console.log(input)
    onNameSubmit(input)
    setInput("")
}

function handleClick() {
   console.log(names)
   console.log(names.length)
    if(names.length <= 1 ){
        setWinner("Add More Contestants to play")
    } else {
        const winner = names[Math.floor(Math.random() * names.length)]
        setWinner(winner)
}
console.log(winner)
}
    return (
        <div
        className="px-4 py-4"
        >
            <form
            onSubmit={handleSubmit}
            >
                <input
                placeholder="Enter a name..."
                value={input}
                onChange={input.length < 15 ? (e) => setInput(e.target.value): setInput("")}
                >

                </input>

                <br></br>
                
                <button className="bg-white outline-black my-2"> 
                 Submit   
                </button>
            </form>

            <button
            className="bg-white"
            onClick={handleClick}
            >Select A Winner!</button>

            <h1 className=" text-sky-400">
            {winner.toUpperCase()}</h1>

        </div>
    )
}
export default Challenge2