import React from "react"
import NewsCard from "./NewsCard"

function Home({ news }) {

if (!news) return <div></div>
const myNews = news.map((s) => (
  <div key={s.id} className="px-5 flex align-items-stretch"
  >
  <NewsCard 
  news={s}/>
    </div>
))

console.log(news)
    return (
      <div >
      <div style={{  
        backgroundImage: "url(/DM.png)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '1000px'
      }}>
        </div>
        
      <div className=" flex -mx-4 py-4 justify-center" 
     >
       <div className="flex align-items-stretch"
       
       >
        {myNews.slice(0,4)}
       </div>
        </div>
     
        </div>

    )
}
export default Home