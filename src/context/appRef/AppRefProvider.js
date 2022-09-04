import React from 'react'
import {Context} from './appRefContext'
import { useState } from 'react';


export const AppRefProvider = ({children}) => {
  const [myRef, setRef] = useState({})

  return (
    <Context.Provider value={{myRef, setRef}}>
      {children}
    </Context.Provider>
  )
}
