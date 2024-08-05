import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  useEffect(() => {
    console.log("her zaman çalışır");

  })
  useEffect(() => {
    console.log("ilk render edildiğinde çalışır")

  }, [])
  useEffect(() => {
    console.log("ilk render edildiğinde ve FIRSTNAME satate değeri değiştiğinde çalışır")

  }, [firstname])

  useEffect(() => {
    console.log("ilk render edildiğinde ve LASTNAME satate değeri değiştiğinde çalışır")

  }, [lastname])

  return (
    <div>
      <div><button onClick={() => setFirstname("sena")}>Adı Değiştir </button></div>
      <div><button onClick={() => setLastname("zorver")}>Soyismi Değiştir </button></div>
    </div>
  )
}

export default App
