import styles from "./App.module.css";
import Display from "./assets/components/Display";
import Button from "./assets/components/Button"

import { useState } from "react";

function App() {
    const[calVal , setCalVal]=useState("");
    const onButtonClick = (buttonText)=>{
      if(buttonText==="C"){
        setCalVal("");
      }
      else if(buttonText === "="){
        const result =eval(calVal);
        setCalVal(result);
      }
      else{
        const newDisplayValue=calVal+buttonText;
        setCalVal(newDisplayValue);
      }
    };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
     <Button onButtonClick={onButtonClick}></Button>
     
    
    </div>
    
  );
}

export default App
