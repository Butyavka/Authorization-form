import React from 'react'
import './styles/root.scss'
import AuthorizationForm from './components/forms/AuthorizationForm'
import FeedbackForm from './components/forms/FeedbackForm'

function App() {
  return (
    <>
      <AuthorizationForm/>
      <FeedbackForm/>
    </>
  )
}

export default App
