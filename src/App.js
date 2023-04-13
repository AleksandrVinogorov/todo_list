import './styles/style.css'
import React from "react";
import Home from './Db';

function App () {
  return (
    <div className="App">
      <header className='header'>
        <img className='header__logo' alt=''/>
        <h2 className='header_title'>Список дел</h2>
      </header>
      <main className='list'>
        <section className='list-wrapper'>
          <div className='list-container'>
            <Home/>
          </div>
        </section>
      </main>
      <footer className='footer'>
      </footer>
    </div>
  )
}


export default App;
