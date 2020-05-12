import React, { useState, useReducer } from 'react'
import ListItem from './ListItem'
import { initialState, reducer } from '../reducers/reducers'


const ToDoList = () => {
     const [state, dispatch] = useReducer(reducer, initialState)
  
     // const handleChange = (e) => {
     //      setTextFormValue(e.target.value)
     // }



     // const addItem = (e) => {
     //      e.preventDefault()
     //      dispatch({type: 'ADD_ITEM', payload: state.formValue})
     // }

     // const toggleCompleted = e => {
     //      dispatch({type: 'TOGGLE_COMPLETED', payload: state.id})
     //      console.log('toggling')
     // }

     const toggleComplete = (e) => {
          console.log(e.target.id)
          dispatch({ type: "TOGGLE_COMPLETED", payload: e.target.id })
     }

     const clearCompleted = e => {
          console.log('clearing')
          dispatch({type: 'CLEAR_COMPLETED'})
     }

     return (
          <div>
               To Do List Here
               <form>
                    <input 
                         type='text'
                         // onChange={handleChange}
                         value={state.formValue}
                         onChange={(e) => dispatch({type: 'CHANGE_INPUT_VALUE', payload: e.target.value })}
                    />
                    <button

                    onClick={(e) => {
                    e.preventDefault()
                    dispatch({type: 'ADD_ITEM' })}
                    }
                    >Add List Item</button>
                    <button
                    type='button'
                    onClick={clearCompleted}
               >Clear Completed Items</button>
               </form>
               
               {
                    state.listItems.map(listItem => {
                         return (
                              <ListItem 
                                   toggleComplete={toggleComplete}
                                   key={listItem.id}
                                   id={listItem.id}
                                   item={listItem.item}
                                   completed={listItem.completed}
                              />
                         )
                    })
               }

          </div>
     )
}

export default ToDoList