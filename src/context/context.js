import { createContext, useContext, useEffect, useState } from "react";


const MyContext = createContext()

 const API_URL = 'https://www.omdbapi.com/?apikey=76de1b9c'

function MyStateProvider({children})  {
    const [movie, setMovie] = useState([]);
    const [loding, setLoding] = useState(true);
    const [query, setQuery] = useState("titanic");
    const [error, setError] = useState({show : "false", msj : ""});

    const getMovies = async (url) =>{
      setLoding(true)
      try{
        const res = await fetch(url)
        const data = await res.json()

        if(data.Response === "True"){
          setLoding(false)
          setMovie(data.Search)
          setError({
            show : false,
            msg : data.Error
          })
        }
        else{
          setError({
            show : true,
            msg : data.Error
          })
        }
      }
      catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
      var timeOut = setTimeout(() =>{
        getMovies(`${API_URL}&s=${query}`)
      },800)
      return() => clearTimeout(timeOut)
    },[query])

  return (
    <>
    <MyContext.Provider value={{movie, query, setQuery, loding, error, setError}}>
        {children}
    </MyContext.Provider>
    </>
  )
}


const useGlobalContext = () => {
  return  useContext(MyContext)
};

export {MyStateProvider, MyContext, useGlobalContext}





// https://www.omdbapi.com/?apikey=76de1b9c&stitanic