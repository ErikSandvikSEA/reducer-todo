import React, { useState, useReducer } from 'react'



const reducer = (state, action) => {   
     switch (action.type) {
          case "CHANGE_INPUT_VALUE":
          return {
               ...state,
               formValue: action.payload
          }
          case "ADD_ITEM":
               const newItem = {
                    item: state.formValue,
                    completed: false,
                    id: Date.now()
          }
               return{
                    ...state,
                    listItems: [...state.listItems, newItem ],
                    formValue: ''
          }
          case "TOGGLE_COMPLETED":
               return {
                    ...state,
                    listItems: [...state.listItems.map(item =>  item.id === Number(action.payload) ? { ...item, completed: !item.completed } : item)]
               }
               case "CLEAR_COMPLETED":
                    return {
                         ...state,
                         listItems: [...state.listItems.filter(listItem => !listItem.completed)]
                    }                    
          default:
          return state;
}
}

        // handle updating state based on the action
     // if (action.type === "UPDATE_TITLE") {
     //   return {
     //     ...state,
     //     title: action.payload,
     //     editing: false
     //   };
     // }
     // if (action.type === "TOGGLE_EDITING") {
     //   return {
     //     ...state,
     //     editing: !state.editing
     //   };
     // }
     // return state;

export { reducer }
const initialState = {
     listItems: [
     {
          item: 'Learn about reducers',
          completed: false,
          id: 3892987589
        },
        {
          item: 'Bake Cookies',
          completed: false,
          id: 666666666,
        },
     ],

     formValue: "",
}

export { initialState }