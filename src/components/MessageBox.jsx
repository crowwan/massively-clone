import React from 'react'

const MessageBox = () => {
  return (
    <div className='message-box col-md-6 left'>
      <div className='message-box-title'>NAME</div>
      <input className='message-box-input'/>
      <div className='message-box-title'>EMAIL</div>
      <input className='message-box-input'/>
      <div className='message-box-title'>MESSAGE</div>
      <textarea rows={5}className='message-box-textarea'/>
      <div className='send-btn transition border-hover'>SEND MESSAGE</div>
    </div>
  )
}

export default MessageBox