import React, { useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'

function App() {

  let [table, setTable] = useState([])

  return (
    <div className="wrapper">
      <h1>User form</h1>
      <Form table={table} setTable={setTable} />
      <hr />
      {table.length ? <Table table={table} /> : <h3>User empty</h3>}
    </div>
  )
}

export default App