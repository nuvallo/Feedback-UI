import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header.js"
import FeedbackList from "./components/FeedbackList.js"
import FeedbackStats from "./components/FeedbackStats.js"
import FeedbackData from "./data/FeedbackData.js"
import FeedbackForm from "./components/FeedbackForm.js"
import AboutPage from "./pages/AboutPage.js"
import AboutIconLink from "./components/AboutIconLink.js"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedBack = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

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
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedBack} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </>
  )
}

export default App
