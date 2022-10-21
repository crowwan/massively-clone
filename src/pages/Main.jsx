import { useEffect, useRef, useState } from 'react'
import Tabs from '../components/Tabs'
import Title from '../components/Title'
import ContentBox from '../components/ContentBox';
const Main = () => {
  const [title,setTitle] = useState('header');
  window.addEventListener('scroll',(e)=>{
    if(title === 'header' && window.scrollY > 400){
      setTitle('fade');
    }else if(title === 'fade' && window.scrollY < 200){
      setTitle('show');
    }
  })

  
  return (
    <div className='main-page'>
      <Title header={title}/>
      <Tabs />
      <ContentBox />
    </div>
  )
}

export default Main