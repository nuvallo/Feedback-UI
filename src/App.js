import React, { useState } from "react"
import Header from "./components/Header.js"
import FeedbackList from "./components/FeedbackList.js"
import FeedbackStats from "./components/FeedbackStats.js"
import FeedbackData from "./data/FeedbackData.js"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id
        })
      )
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
