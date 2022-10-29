import React from 'react'
import ContractInfo from './ContractInfo'
import MessageBox from './MessageBox'

const ContractBox = () => {
  return (
    <div className='contract-box row'>
      <MessageBox />
      <ContractInfo/>
    </div>
  )
}

export default ContractBox