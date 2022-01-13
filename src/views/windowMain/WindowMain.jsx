import React from 'react'
//import { CardLogin } from '../../components/CardLogin/CardLogin'
import { CardRegister } from '../../components/CardRegister/CardRegister'
import './index.scss'

export const WindowMain = () =>{
  return (
    <>
      <main className='window-main'>

        <CardRegister></CardRegister>

      </main>
    </>
  )
}
