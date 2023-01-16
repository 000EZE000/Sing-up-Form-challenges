import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {


  return (
    <div className="App">
      <section>
        <header> <h1>Learn to code by watching others</h1></header>
        <article>
          <p>
            See how experienced developers solve problems in real-time.
            Watching scripted tutorials is great, but understanding how developers
            think is invaluable.
          </p>
        </article>
      </section>
      <div>
        <button> Try it free 7 days then $20/mo. thereafter </button>
      </div>
      <form action="">
        <input
          placeholder=' First Name'
          type="text" />
        <input
          placeholder=' Last Name'
          type="text" />
        <input
          placeholder=' Email'
          type="text" />
        <input
          placeholder=' Address'
          type="text" />
        <input
          placeholder='Password'
          type="submit" value="Claim your free trial" />
      </form>
      <p>
        By clicking the button, you are agreeing to our Terms and Services
      </p>
    </div >
  )
}

export default App
