import { useEffect } from "react"
import { db } from "../config/FireBase"
import { collection, getDocs } from "firebase/firestore"

function FireStore() {
  const movieCollection = collection(db, 'movies')
  useEffect(() => {
    const handleFirestore = async () => {

      try {
        const data = await getDocs(movieCollection)
        // map to an array of objects with id and data properties

        const newData = data.docs.map((docs) => ({
          ...docs.data(),
          id: docs.id
        }))

        console.log(newData)
      } catch (err) {
        console.error(err);
      }
    }
    handleFirestore()
  })
  return (
    <div className="font-mono text-slate-50 rounded-lg p-10 h-[30%px] border shadow-[0_0_5px_]">
      <h1 className="text-3xl">
        <span>FireStore</span>
      </h1>
    </div>
  )
}

export default FireStore