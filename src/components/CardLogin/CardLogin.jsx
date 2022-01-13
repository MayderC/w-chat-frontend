import { CButton } from "../CButton/CButton"
import { InputForm } from "../InputForms/InputForm"
import { useState } from "react"
import './index.scss'

export const CardLogin = () => {

  const [inputsValue, setInputsValue] = useState({username : '', password: ''});

  const handleSetInputValue = (propertie, value) => {
    if(Object.keys(inputsValue).includes(propertie)){
      inputsValue[propertie] = value
      setInputsValue(inputsValue)
    }
  }

  return (
    <>
      <section>
        <form className="card-login">
          <h2>Iniciar Sesion</h2>

          <InputForm props={{
            placeholder: "Username",
            type: "text",
            propInState : "username",
            handleSetInputValue
          }}></InputForm>

          <InputForm props={{
            placeholder: "Contraseña",
            type: "password",
            propInState : "password",
            handleSetInputValue
          }}></InputForm>

          <CButton text="Login" ></CButton>

        </form>
      </section>
    </>
  )
}
