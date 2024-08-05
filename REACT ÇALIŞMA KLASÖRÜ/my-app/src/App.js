import logo from './logo.svg';
import './App.css';

function App() {



  let isimler = [
    "Enes",
    "Ayşenur",
    "Kübra",
    "Adem"
  ]
  return (
    <div>
      {
        isimler.map((isim, index) => (
          <div style={{
            backgroundColor: 'pink',
            border: '1px solid yellow'

          }} key={index}>{isim}</div>
        ))
      }


    </div>

  )
}



export default App;
