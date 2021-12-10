import React from "react"
import Header from "./components/Header.js"
import FeedbackItem from "./components/FeedbackItem.js"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  )
}

export default App
