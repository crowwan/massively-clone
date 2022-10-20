const PostHead = ({post}) => {
  return (
    <div className='post-head col-md-12 bor-bottom'>
      <div className='post-date'>{post.date}</div>
      <div className='post-title transition'>{post.title}</div>
      <div className='post-para'>{post.paragraph}</div>
      <div className='post-img'>
        <img src={process.env.PUBLIC_URL + post.imgUrl}/>
      </div>
      <div className='post-btn transition'>FULL STORY</div>
    </div>
  )
}

export default PostHead