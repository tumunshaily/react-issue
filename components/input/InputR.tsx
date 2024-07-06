'use client'

const InputRerendered = ({style, idName}) => {
  console.log("this is called")
  return <input style={style} key={idName} className={idName} type="text" />
}
export default InputRerendered
