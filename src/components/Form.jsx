import React, { useState } from 'react'

function Form({ table, setTable }) {
  const emptyForm = {
    name: '', password: '', email: '', isActive: false
  }
  const [formData, setFormData] = useState(emptyForm)
  const [passMessage, setPassMessage] = useState('')
  const [emailMessage, setEmailMessage] = useState('')

  const onChangeHandle = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const formSubmit = (e) => {
    e.preventDefault()

    // Validation
    if (formData.password.length > 4) {
      if (!table.find(item => item.email === formData.email)) {
        setFormData(emptyForm)
        setPassMessage('')
        setEmailMessage('')
        setTable(table => {
          let newTable = [...table]
          newTable.push({
            id: (newTable.length > 0 ? newTable[newTable.length - 1].id + 1 : 0),
            name: formData.name,
            password: formData.password,
            email: formData.email,
            isActive: formData.isActive
          })
          return newTable
        })
      }
    } else {
      setPassMessage('password must be min. 5')
    }
    if (table.find(item => item.email === formData.email)) {
      setEmailMessage('the email already exist, try another')
    }
  }

  return (
    <form onSubmit={(e) => formSubmit(e)}>
      <input type="text" onChange={onChangeHandle} name='name' value={formData.name} placeholder='Name' required />
      <div style={{ 'position': 'relative' }}>
        <input type="password" onChange={onChangeHandle} name='password' value={formData.password} placeholder='Password' required />
        <p className="errMessage">{passMessage}</p>
      </div>
      <div style={{ 'position': 'relative' }}>
        <input type="email" onChange={onChangeHandle} name='email' value={formData.email} placeholder='email' required />
        <p className="errMessage">{emailMessage}</p>
      </div>
      isActive<input type="checkbox" onChange={onChangeHandle} name='isActive' value={formData.isActive} id='checkbox' />
      <button type="submit">ENTER</button>
    </form>
  )
}

export default Form