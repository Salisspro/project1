
import { useState } from "react"
import { FcGoogle } from "react-icons/fc";
import { auth, googleAuth, } from "../config/FireBase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"




console.log(auth?.currentUser?.email)

function Home() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const handleSignIn = async () => {
      try {
         await createUserWithEmailAndPassword(auth, email, password)
      } catch (err) {
         console.error(err);
      }
   }


   const handleSignWithGoogle = async () => {
      try {
         await signInWithPopup(auth, googleAuth)
      } catch (err) {
         console.error(err);
      }
   }


   const handleSignOut = async () => {
      try {
         await signOut(auth)
      } catch (err) {
         console.error(err);
      }
   }
   return (
      <div className="shadow-[0_0_5px_black] transition-all duration-1000 ease-in-out  border rounded-lg text-center p-5 grid grid-cols-1 ">

         <h1 className="text-3xl m-5 text-slate-300"><span>Authentication</span>
         </h1>

         <input
            className="w-full "
            onChange={(e) => setEmail(e.target.value)}
            type="text" name="" id="" placeholder="Email" />
         <input
            className="w-full"
            onChange={(e) => setPassword(e.target.value)}
            type="password" name="" id="" placeholder="Password" />


         <button
            title=""
            onClick={handleSignIn} className="w-full border p-2 ml-2 rounded-lg  transition-all duration-1000 ease-in-out text-slate-100 bg-neutral-800 hover:bg-slate-950">Sign In</button>
         <button title="Continue with google for free"
            onClick={handleSignWithGoogle}
            className="border p-2 ml-2 rounded-lg hover:bg-slate-950 transition-all duration-1000 ease-in-out flex items-center justify-center gap-2 bg-neutral-800 text-slate-300 w-full m-2 ">Continue with Google
            <FcGoogle className="text-2xl" />
         </button>
         <button
            onClick={handleSignOut}
            className="w-full h-full border p-2 ml-2 rounded-lg hover:bg-amber-950 transition-all duration-1000 ease-in-out cursor-pointer bg-amber-900 text-slate-100">Sign out</button>

      </div>
   )
}

export default Home

// import { GoIssueClosed } from "react-icons/go";
{/* <GoIssueClosed /> */}