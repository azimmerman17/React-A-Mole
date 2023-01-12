import { useEffect } from "react"
import moleImg from '../mole.png'

const Mole = ( {setScore, toggle, handleClick,}) => {
  useEffect(() => {
    let randSecs = Math.ceil(Math.random() * 5000)
    let timer = setTimeout(() => {
      toggle(false)
    }, randSecs)
    return () => clearTimeout(timer)
  })
  return (
    <div>
      <img style= {{'width': '30vw'}}
      src={moleImg}
      onClick={handleClick} />
    </div>
  )
}

export default Mole