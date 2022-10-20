import data from "../data/contentData";
import PostCard from "./PostCard";
import PostHead from "./PostHead";

const Content = () => {
  return (
    <div className="container">
      <div className="row">
        <PostHead post={data[0]}/>
        <PostCard post={data[1]} isLeft='left'/>
        <PostCard post={data[1]} />
      </div>
    </div>
  )
}

export default Content