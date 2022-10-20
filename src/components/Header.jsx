const Header = ({visible}) => {
  return (
    <header className={`header ${visible}`}>
      <h1>THIS IS MASSIVELY</h1>
      <p> A free, fully responsive HTML5 + CSS3 site template designed by @ajlkn for HTML5 UP and released for free under the Creative Commons license.</p>
      <button className='down-btn transition' >
        <i className="fa-solid fa-arrow-down"></i>
      </button>
    </header>
  )
}

export default Header