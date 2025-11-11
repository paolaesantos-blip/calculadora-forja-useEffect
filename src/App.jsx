import { useState, useEffect } from 'react'
import styles from './App.module.css'

function App() {

  const [n1, setN1] = useState()
  const [n2, setN2] = useState()
  const [respSoma, setRespSoma] = useState()
  const [respSub, setRespSub] = useState()
  const [respMult, setRespMulti] = useState()
  const [respDiv, setRespDiv] = useState()


    useEffect(() => {
      if (n1 !== undefined && n2 !== undefined && !isNaN(n1) && !isNaN(n2)) {
        setRespSub(parseFloat(n1) - parseFloat(n2))
        setRespSoma(parseFloat(n1) + parseFloat(n2))
        setRespMulti(parseFloat(n1) * parseFloat(n2))
        setRespDiv(parseFloat(n1) / parseFloat(n2))



      } else {


      }
    }), [n1, n2]


  return (

    <>
      <h1 className={styles.title}>calculadora</h1>
      <div className={styles.wrap}>
        <input type="number" onChange={(e) => setN1(e.target.value)} value={n1} placeholder="insira um numero" />
        <input type="number" onChange={(e) => setN2(e.target.value)} value={n2} placeholder="insira outro número" />
      </div>
      <div>
        <h2>Resultado da soma</h2>
        <h3>{respSoma}</h3>
      </div>

      <div>
        <h2>Resultado da sub</h2>
        <h3>{respSub}</h3>
      </div>

      <div>
        <h2>Resultado da mult</h2>
        <h3>{respMult}</h3>
      </div>

      <div>
        <h2>Resultado da div</h2>
        <h3>{respDiv}</h3>
      </div>



    </>
  )
}

export default App
