import { useState} from "react";

const ToggleChallenge = () => {
  const [toggle, setIsToggle] = useState(false)
  // const toggleAlert = () =>{
  //     if(toggle){
  //       setIsToggle(false)
  //       return
  //     }
  //     setIsToggle(true)
  // }
  return (
    <div>
      <button className="btn" onClick={()=>(setIsToggle(!toggle))}>
        toggle
      </button>
      {toggle && <Alert />}
    </div>
  )
};

const Alert = () => {
  return <div className="alert alert-danger">hello world</div>
}

export default ToggleChallenge;
