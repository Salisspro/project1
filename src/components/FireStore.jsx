import { useEffect, useRef, useState } from "react"
import { db } from "../config/FireBase"
import { addDoc, collection, getDocs } from "firebase/firestore"

function FireStore() {
const inputRef = useRef(null)

  const [movie, setMovie] = useState([])

  // new movie collection
  const [newMovieTitle, setMovieTitle] = useState('')
  const [newReleaseDate, setNewReleaseDate] = useState(0)
  const [newIsMovieWar, setIsMovieWar] = useState(false)


  const movieCollection = collection(db, 'movies')

  useEffect(() => {

    const handleFirestore = async () => {
      try {
        const data = await getDocs(movieCollection)
        // map to an array of objects with id and data properties

        const movieList = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }))

        // console.log(movieList)
        setMovie(movieList)

      } catch (err) {
        console.error(err);
      }
    }
    handleFirestore()
  })


  const handleNewMovie = async () => {
    inputRef.current.value = ''
    try {
      await addDoc(movieCollection, {
        title: newMovieTitle,
        releaseDate: newReleaseDate,
        receive: newIsMovieWar
      })
      console.log(addDoc);
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <div className="font-mono text-slate-50 rounded-lg p-10 h-[30%px] border shadow-[0_0_5px_]">
      <h1 className="text-3xl">
        <span>FireStore</span>
      </h1>
      <div className=" text-2xl mt-5">
        {movie.map((moviesCollection) => (
          <div key={moviesCollection} className="border m-5 rounded-lg p-5">

            <h1 style={{ color: moviesCollection.title ? 'gray' : 'red' }}>MovieTitle: {moviesCollection.title}</h1>
            <p title="releaseDate..."> Date: {moviesCollection.releaseDate}</p>
            <button className="m-3 bg-slate-900 p-2 rounded-lg">Delete Movie</button>
          </div>
        ))}

        <div className="grid  flex-wrap">
          <input
            onChange={(e) => setMovieTitle(e.target.value)}
            ref={inputRef}
            type="text" placeholder="New movie title" />

          <input
            onChange={(e) => setNewReleaseDate(Number(e.target.value))}
            ref={inputRef}

            type="number" />

          <div className="flex">
            <input
              onChange={(e) => setIsMovieWar(e.target.checked)}
              type={"checkbox"}
              //  checked={newIsMovieWar} 
               />
            <label htmlFor="">is movie war?</label>
          </div>
          <button onClick={handleNewMovie} className="bg-black p-2 rounded-lg">submit movies</button>

        </div>
      </div>
    </div>
  )
}

export default FireStore




// const data;

// const filteredData = data.docs.map((doc)=> ({
//   ...doc.data(),
//   id: doc.id
  
// }))
// console.log(filteredData)