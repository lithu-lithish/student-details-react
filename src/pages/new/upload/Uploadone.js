

import { useEffect } from "react";
import plus from "../../../svg/plus.png";
const Uploadone = ({ viewFiles,setViewFiles,file, setFile }) => {
    useEffect(()=>{
      if(file){
        console.log("got files",file);
        setViewFiles(true)
      }
    },[file])

 return (
    <div  className="formInput">
    <label style={{width:"100%",maxWidth:"100px"}} htmlFor="file1">
      <img
        src={
          (file) ?
              URL.createObjectURL(file)
              : plus
        }
        alt=""
        style={{
          width: "100%",
          borderRadius: "0%",
          objectFit: "cover",
          
        }}
      />
  
    </label>
    <input
      type="file"
      id="file1"
  
      onChange={(e) => {console.log("file one");setFile(e.target.files[0])}}
      style={{ display: "none"}}
    />
    
  </div>
  );
};
  export default Uploadone;
