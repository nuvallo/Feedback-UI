import React, { useState } from "react"
import Header from "./components/Header.js"
import FeedbackItem from "./components/FeedbackItem.js"
import FeedbackData from "./data/feedbackData.js"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
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
