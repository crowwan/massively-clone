import React from 'react'

const InfoBox = ({title, content, isLink}) => {
  return (
    <div className='row info'>
      <div className='contract-title'>
        {title}
      </div>
      {
        isLink ? 
        <div className='contract-content transition link'>
          {content}
        </div> :
        <div className='contract-content'>
          {content}
        </div>
      }
      
    </div>
  )
}

export default InfoBox