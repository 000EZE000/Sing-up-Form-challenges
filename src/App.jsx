import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Form from './components/form/Form'

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
      <Form />
    </div >
  )
}

export default App
