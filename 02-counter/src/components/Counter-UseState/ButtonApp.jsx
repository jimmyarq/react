
export const ButtonApp = ( {children, onClick}) => {
  return (
    <>
      <button onClick={onClick}> {children} </button>
    </>
  )
}

export default ButtonApp
