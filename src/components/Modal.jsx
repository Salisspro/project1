import { IoSettingsOutline } from "react-icons/io5";
// import { Link } from "@react-email/link";
export default function Modal() {
   return (
      <div className=" p-4 text-blue-100">
         <div className="flex gap-5 items-center">
            <b className="font-thin text-blue-500"></b>
            <IoSettingsOutline className="animate-spin  text-3xl"/>
            <a href="mailto:salisspro@gmail.com">salisspro@gmail.com</a>
            {/* <a href="tel:+2349125303045">call</a> */}
         </div>
      </div>
   )
}
