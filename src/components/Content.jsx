
import { memo } from "react";
import PostCard from "./PostCard";
import PostHead from "./PostHead";

const Content = memo(({contentData,contentPage}) => {
  return (
      <div className="container">
        <div className="row">
          {contentData.map((e,i)=>{
            if(i === 0)
              return <PostHead key ={e.title+i} post={e}/>
            else if(i%2 !==0){
              return <PostCard key = {e.title+i} post={e} isLeft='left'/>
            } else{
              return <PostCard key = {e.title+i} post={e} />
            }
            
          })}
        </div>
      </div>
  )
})

export default Content