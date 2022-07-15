import React, {useState} from "react";


function TrafficLight () {
  const [colorRojo, setColorR] = useState("rojo")
  const [colorAmarillo, setColorA] = useState("amarillo")
  const [colorVerde, setColorV] = useState("verde")
    
       return (
       <div className="semaforo">
            <div className={colorRojo} role="button"  onClick={ () => {if (colorRojo === "rojo"){setColorR("rojo glow-red")}
        else{ setColorR("rojo")}}} ></div> 
            <div className={colorAmarillo} role="button" onClick={ () => {if (colorAmarillo === "amarillo"){setColorA("amarillo glow-yellow")}
        else{ setColorA("amarillo")}}}></div> 
          <div className={colorVerde} role="button"  onClick={ () => {if (colorVerde === "verde"){setColorV("verde glow-green")}
        else{ setColorV("verde")}}}></div>
        </div>
         
        );

    };

export default TrafficLight;
    