import { useEffect } from "react"
import { db } from "../config/FireBase"
import { collection,  getDocs } from "firebase/firestore"

function FireStore() {
  const movieCollection = collection(db, 'movie')
  useEffect(() => {
    const handleFirestore = async () => {

      try {
      const data =   await getDocs(movieCollection)
      console.log(filteredData)
      // map to an array of objects with id and data properties

      const filteredData = data.docs.map((docs)=> ({
        ...docs.data(),
        id: docs.id
      }))
      } catch (err) {
        console.error('err ', err);
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