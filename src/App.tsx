import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/logo.jpeg'

function App() {

  const LOCAL_STORE_KEY = "lastClick"

  const [alreadyClicked, setAlreadtClicked] = useState(0)

  const [resetClicks, setResetClicks] = useState(0)

  const getToday = () => {
    let today = new Date();
    return today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  }

  const clicked = () => {
    if (!alreadyClicked) {
      localStorage.setItem(LOCAL_STORE_KEY, getToday())
      setAlreadtClicked(1)
    }else {
      if (resetClicks == 10) {
        setResetClicks(0)
        localStorage.setItem(LOCAL_STORE_KEY, "")
      setAlreadtClicked(0)
      } else {
        setResetClicks(resetClicks + 1)
      }
    }
  }

  useEffect(() => {
    let localStore = localStorage.getItem(LOCAL_STORE_KEY) ?? ""
    
    if (localStore == getToday()) { 
      setAlreadtClicked(2)
    }

  }, [])

  



  return (
    <div className="App">
      <div id="mainFrame" style={{
        width: '100vw',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          textAlign: 'center',
          alignItems: 'center',
          direction: 'rtl'
        }}>
          {
          alreadyClicked == 2 ? (
            
      <h1>כבר הודית על הזכות היום! בוא שוב להודות מחר
      <br></br>
      <br></br>
      </h1>
          ) :
          alreadyClicked == 1 ?
          (
            
            <h1>תודה שהודית על הזכות היוום! יום נעים☺️
            <br></br>
            <br></br>
            </h1>
                ) : (
            
            <h1>כבר הודית על הזכות היום?
            <br></br>
            <br></br>
              לחץ כאן כדי להודות על הזכות
            <br></br>
            <br></br>
      
            </h1>
                )
        }
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>

        <div id="Button" onClick={clicked} style={{
          height: '250px',
          width: '250px',
          backgroundColor: 'white',
          borderRadius: '50%',
          cursor: 'pointer',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <img src={logo} style={{
            width: '175px'
          }}></img>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
