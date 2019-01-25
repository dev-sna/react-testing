import React from 'react'
import { getDate } from '../../utils/utils'

const ListItem = ({ id, name, onPressDelete }) => {
  return (
    <div className="list-item-container">
      <div className="list-item">
        <p className="task-name">{name}</p>
        <p className="task-date">{getDate(id)}</p>
      </div>
      <button onClick={onPressDelete} className="delete">
        &diams;
      </button>
    </div>
  )
}

export default ListItem
