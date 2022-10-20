import Header from './Header'
import Logo from './Logo';

const Title = ({header}) => {
  return (
    <div className='title-box'>
      <Header visible={header === 'fade' ? 'fade-animation':'show-animation'}/>
      <Logo visible={header==='fade'?'show-animation':'fade-animation'}/>
    </div>
  )
}

export default Title