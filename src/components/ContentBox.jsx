import { useEffect, useState } from "react";
import Content from './Content'
import Pagination from './Pagination'
import data from "../data/contentData";
const ContentBox = () => {
  const [contentPage, setContentPage] = useState(1);
  const [contentData, setContentData] = useState([]);
  useEffect(()=>{
    const currentData = data.filter((e,i)=>{
      return i >=(contentPage-1)*7 && i <= (contentPage*7-1)
    })
    
    setContentData(currentData);
  },[contentPage]);
  console.log(Math.ceil(data.length/7));
  return (
    <div className='container content-box'>
      <Content contentData={contentData} contentPage = {contentPage}/>
      <Pagination pageLength={Math.ceil(data.length/7)} contentPage={contentPage} setContentPage={setContentPage}/>
    </div>
  )
}

export default ContentBox