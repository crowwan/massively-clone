const Logo = ({visible}) => {
  return (
    <div className={visible?`logo-box main ${visible}`:'logo-box  show-animation'}>
      <div className='logo transition'>
        MASSIVELY
      </div>
    </div>
  )
}

export default Logo