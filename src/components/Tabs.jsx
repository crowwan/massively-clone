import { useCallback, memo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import IconList from './IconList';

const Tabs = memo(() => {
  const {tabsContent} = useSelector(state=>state);
  const navigation = useNavigate();
  const onClickTabs = useCallback((path) => ()=>{
    navigation(path);
  },[]);
  return (
    <div className='container tabs show-animation'>
      <div>
        {tabsContent.map((element)=>{
          if(element.show){
            return <div key={element.title}className='tabs-element transition show' onClick={onClickTabs(element.path)}>{element.title}</div>
          }else{
            return <div key={element.title}className='tabs-element transition' onClick={onClickTabs(element.path)}>{element.title}</div>
          }
        })}
      </div>
      <IconList type='icon-tabs'/>
    </div>
  )
})

export default Tabs