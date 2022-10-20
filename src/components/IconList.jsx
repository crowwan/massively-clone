const icons = [
  <i className="fa-brands fa-twitter"></i>,
  <i className="fa-brands fa-facebook"></i>,
  <i className="fa-brands fa-instagram"></i>,
  <i className="fa-brands fa-github"></i>
]
const IconList = ({type, border}) => {

  return (
    <ul className='flex'>
      {
        icons.map((icon,i)=>{
          return <div key={`${type}${i}`}className={`icon ${type} ${border} transition`}>{icon}</div>
          }
        )
      }
    </ul>
  )
}

export default IconList