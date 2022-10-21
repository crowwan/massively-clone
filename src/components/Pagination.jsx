import React, { useCallback, useEffect, useState } from 'react'

const Pagination = ({pageLength, contentPage, setContentPage}) => {
  const [startPage, setStartPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  useEffect(()=>{
    console.log(pageLength);
    setStartPage((prevPage)=>contentPage+2 <= pageLength ? contentPage : prevPage);
    setLastPage(contentPage+2 <= pageLength ? contentPage+2 : pageLength);
  },[contentPage]);
  const onClickPage = useCallback((i)=>()=>{
    if(i === 'prev'){
      setContentPage((prevPage)=>prevPage - 1);
    }else if(i === 'next'){
      setContentPage((prevPage)=>prevPage + 1);
    }else{
      setContentPage(i);
    }
  })
  return (
    <div className='container page-btn-list'>
      {startPage !== 1 ? <div className='page-btn prev transition border-hover' onClick={onClickPage('prev')}>PREV</div> : null}
      {
        ((start,last)=>{
          const pages = []
          for(let i = start; i<=last;i++){
            pages.push(<div key={'page'+i} className={i===contentPage?'page-btn transition border-hover current-page':'page-btn transition border-hover'} onClick={onClickPage(i)}>{i}</div>);
          }
          return pages;
        })(startPage,lastPage)
      }
      {lastPage !== pageLength ?
        <div className='page-btn next transition border-hover' onClick={onClickPage('next')}>NEXT</div>:
        null
      }
    </div>
  )
}

export default Pagination