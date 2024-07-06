'use client'

const Input = ({style, idName}) => {
  console.log("this is called")
  return <input style={style} className={idName} type="text" />
}
export default Input
