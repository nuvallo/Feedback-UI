import React, { createContext, useState } from "react"
import FeedbackData from "../data/FeedbackData"
import { v4 as uuidv4 } from "uuid"

const FeedbackContext = createContext()

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const addFeedback = (newFeedback) => {
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

  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) => {
        return item.id === id ? { ...item, ...updatedItem } : item
      })
    )
  }

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        updateFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
