import './index.scss'


export const CButton = ({text}) => {
  return (
    <>
      <input 
        className='c-button'
        value={text}
      ></input>
    </>
  )
}
