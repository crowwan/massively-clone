const PostCard = ({post,isLeft}) => {
  return (
    <div className={`post-card col-md-6 bor-bottom ${isLeft}`}>
      <div className='post-date'>{post.date}</div>
      <div className='post-title transition'>{post.title}</div>
      <div className='post-img'>
        <img src={post.imgUrl}/>
      </div>
      <div className='post-para'>{post.paragraph}</div>
      <div className='post-btn transition'>FULL STORY</div>
    </div>
  )
}

export default PostCard