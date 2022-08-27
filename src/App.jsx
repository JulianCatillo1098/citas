import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import datos from './assets/datos.json'


function App() {
  const [count, setCount] = useState(0)
  const colores=['#70d6ff', '#ff70a6', '#ff9770', '#ffd670','#e9ff70', '#f6aa1c', '#7c6a0a']

    const crearUnNumeroAleatorio= (array) =>{
      return Math.floor(Math.random()*array.length);
    }
    const capturarElementoAleatorio =(array) =>{
      const indice = crearUnNumeroAleatorio(array)
      return array[indice]
    }

    const [color, setColor] = useState(capturarElementoAleatorio(colores))
    const [citas, setCitas] = useState(capturarElementoAleatorio(datos))

    const cambio = ()=>{
      setColor(capturarElementoAleatorio(colores))
      setCitas(capturarElementoAleatorio(datos))
    }
  return (
      <div className="App" style = {{height:'100vh', width:'100vw', backgroundColor:`${color}`}}>
         <div className = 'contenedorCitas'>
            <div>
            <div className = 'contenedor'>
              <div>
                  <div style= {{color:`${color}`}} className= "comillas">
                    <i className="ri-double-quotes-l"></i>
                    <h4 style={{color:`${color}`}}>{citas.quote} </h4>
                    <i className="ri-double-quotes-r"></i>
                  </div>
              </div>
                    <div className="botonautor">
                      <h2 style= {{color:`${color}`}}>{citas.author}</h2>
                      <div className ="claseBoton" style= {{color:`${color}`, borderColor:`${color}` }} onClick={cambio}>
                      <i className="ri-refresh-line"></i>
                      </div>
                      </div>
              
              </div>   
              <h4 class = "colorNombre">julian castillo</h4>
                  </div>          
            </div>
           
        </div>
  )
}
export default App
