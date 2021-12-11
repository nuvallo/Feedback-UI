import React, { useState } from "react"
import Header from "./components/Header.js"
import FeedbackList from "./components/FeedbackList.js"
import FeedbackData from "./data/FeedbackData.js"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
