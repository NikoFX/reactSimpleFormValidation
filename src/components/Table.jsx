import React from 'react'

function Table({ table }) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {table.map(row =>
            <tr className={!row.isActive ? 'passive' : null} key={row.id}>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.password}</td>
              {row.isActive ? <td className='gr-text'>Active</td> : <td className='rd-text'>Deactive</td>}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Table