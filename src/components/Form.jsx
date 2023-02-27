import React, { useState } from 'react'

function Form({ table, setTable }) {
  let [nameInput, setNameInput] = useState('')
  let [passwordInput, setPasswordInput] = useState('')
  let [emailInput, setEmailInput] = useState('')
  let [checkboxInput, setCheckboxInput] = useState('')


  let [passMessage, setPassMessage] = useState('')
  let [emailMessage, setEmailMessage] = useState('')

  const formSubmit = (e) => {
    e.preventDefault()
    console.log('render')
    // Validation
    if (passwordInput.length > 4) {
      if (!table.find(item => item.email === emailInput)) {
        setNameInput('')
        setPasswordInput('')
        setEmailInput('')
        setCheckboxInput(false)
        setPassMessage('')
        setEmailMessage('')
        setTable(table => {
          let newTable = [...table]
          newTable.push({
            id: (newTable.length>0 ? newTable[newTable.length - 1].id + 1 : 0),
            name: nameInput,
            password: passwordInput,
            email: emailInput,
            isActive: checkboxInput
          })
          return newTable
        })
      }
    } else {
      setPassMessage('password must be min. 5')
    }
    if (table.find(item => item.email === emailInput)) {
      setEmailMessage('the email already exist, try another')
    }
  }

  return (
    <form onSubmit={(e) => formSubmit(e)}>
      <input type="text" onInput={(e) => setNameInput(e.target.value)} value={nameInput} placeholder='Name' required />
      <div style={{ 'position': 'relative' }}>
        <input type="password" onInput={(e) => setPasswordInput(e.target.value)} value={passwordInput} placeholder='Password' required />
        <p className="errMessage">{passMessage}</p>
      </div>
      <div style={{ 'position': 'relative' }}>
        <input type="email" onInput={(e) => setEmailInput(e.target.value)} value={emailInput} placeholder='email' required />
        <p className="errMessage">{emailMessage}</p>
      </div>
      isActive<input type="checkbox" onInput={(e) => setCheckboxInput(e.target.checked)} value={checkboxInput} id='checkbox' />
      <button type="submit">ENTER</button>
    </form>
  )
}

export default Form