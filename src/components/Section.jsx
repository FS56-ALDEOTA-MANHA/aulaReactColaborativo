
const Section = (props) => {

  return (
    <>
    <h1 style={{color: "#d71111"}}>{props.titulo}</h1>
    <div>{props.children}</div>
    </>
  )
}

export default Section