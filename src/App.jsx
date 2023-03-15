import { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleChange = (event) => {
    setCount(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let amount = parseInt(count)
    if (amount <= 0) {
      amount = 1
    }

    if (amount > data.length) {
      amount = data.length
    }
    setText(data.slice(0, amount))
  }

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={handleChange}
        ></input>
        <button type="submit" className="btn">
          Generate
        </button>
      </form>

      {text.map((item, index) => {
        return (
          <article key={index} className="lorem-text">
            {item}
          </article>
        )
      })}
    </section>
  )
}

export default App
