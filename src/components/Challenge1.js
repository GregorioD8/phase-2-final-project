import React, { useState } from "react"

function Challenge1() {
const [input1, setInput1] = useState("")
const [input2, setInput2] = useState("")
const [message, setMessage] = useState(null)


function handleSubmit(e){
    e.preventDefault()
if(input2 === "America") {  
   setMessage("Delicious!")

}
else if (input2 === "Italy") {  
    setMessage("Delizioso!")
 
 }
 else if(input2 === "Mexico") {  
    setMessage("Deliciouso!")
 
 }
 else{
    setMessage("yummy")
 }

console.log("input1: " + input1)
console.log("input2: " + input2)

setInput1("")
setInput2("")

}

    return (
        <div className="mx-4">
            <form onSubmit={handleSubmit}>
                <input
                className="my-4"
                placeholder="favorite food..."
                value={input1}
                onChange={input1.length < 10?  (e) => setInput1(e.target.value) : setInput1("")}
                ></input>
                <br></br>
                <input
                placeholder="country of origin..."
                value={input2}
                onChange={input2.length < 10?  (e) => setInput2(e.target.value) : setInput2("")}
                ></input>
                <br></br>
                <button
                className=" my-4 bg-white">
                    Submit
                </button>
                <h1 className=" text-white">{message}</h1>
            </form>
        </div>
    )
}

export default Challenge1