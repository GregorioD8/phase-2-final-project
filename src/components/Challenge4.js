import React, {useState} from "react"

// <button> shows cheap items < $5
// search   works at the same time as filter
// <button> all prices 

function Challenge4({ items }){

const [isCheap, setIsCheap] = useState(null)
const [search, setSearch] = useState("")

function handleClick(e) {
e.preventDefault()
setIsCheap(e.target.value)
}

//filtering name or category included in search input
const filteredItems = items.filter((item) =>  item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()))

//filtering if cheap selected
const filteredSearch = filteredItems.filter((item) => {
    if(isCheap === "true") return item.price < 5
    return item 
}) 

const itemList = filteredSearch.map((s) => (
    <li
    key={s.id}
    >
    {"$ " + s.price + " " + s.name}
    </li>
))


    return(
        <div className="px-4 py-4">
            
            <input 
            className="my-2"
            placeholder="search by name or cat..."
            onChange={(e) => setSearch(e.target.value)}
            >
            </input>
            <br></br>
            <button 
            onClick={handleClick}
            value={true}
            className="bg-white my-2">
                Cheap
            </button>
           
            <br></br>
            
            <button 
            onClick={handleClick}
            value={false}
            className="bg-white my-2"> 
                All items
            </button>
         
            <h3 className="text-white">Items go here:</h3>
             <ul className="text-white">
                {itemList}
             </ul>
        </div>
    )
}
export default Challenge4