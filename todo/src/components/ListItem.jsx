import React from 'react'

const ListItem = (props) => {
     const {
          item,
          completed,
          id,
          toggleComplete,
     } = props
     return (
          <div
          >
              
          <h4
               onClick={toggleComplete}
               id={id}
               className={`item${completed ? ' completed': ''}`}>
              {item}
          </h4>
               
               
          </div>
     )
}

export default ListItem