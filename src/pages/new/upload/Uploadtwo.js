


import { useEffect } from "react";
import { Overlay } from "react-bootstrap";
import plus from "../../../svg/plus.png";
const Uploadtwo = ({ viewFiles,setViewFiles,file, setFile }) => {
    useEffect(()=>{
      if(file){
        console.log("got files",file);
        setViewFiles(true)
      }
    },[file])
    return (
       <div className="formInput">
       <label style={{width:"100%",maxWidth:"100px"}}  htmlFor="file2">
         <img
           src={
             file
               ? URL.createObjectURL(file)
               : plus
           }
           alt=""
           style={{
            width: "100%",
       
            borderRadius: "0%",
            objectFit: "fit",
            overflow: "hidden"
          }}
         />
       
       </label>
       <input
         type="file"
         id="file2"
         onChange={(e) => {console.log("file two");setFile(e.target.files[0])}}
         style={{ display: "none" }}
       />
     </div>
     );
   };
  export default Uploadtwo;
