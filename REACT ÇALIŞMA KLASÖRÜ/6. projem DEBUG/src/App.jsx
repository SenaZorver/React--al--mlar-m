import { useState } from 'react'
import './App.css'

function App() {

  const [vize1, setvize1] = useState(0);
  const [vize2, setvize2] = useState(0);

  const ortalamaBul = () => {
    const toplamSonuc = topla() / 2;
    yazdir(toplamSonuc);
    debugger
  }

  const topla = () => {
    const toplam = vize1 + vize2;
    debugger
    return toplam;
  }

  const yazdir = (sonuc) => {
    console.log("Ortalama : " + sonuc)
    debugger
  }

  return (
    <div>
      <div>
        <input type="number" value={vize1} onChange={(e) => setvize1(Number(e.target.value))} />
      </div>
      <div>
        <input type="number" value={vize2} onChange={(e) => setvize2(Number(e.target.value))} />
      </div>
      <div>
        <button onClick={ortalamaBul}>ortalama Bul</button>
      </div>
    </div >
  )
}

export default App
