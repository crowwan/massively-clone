import React from 'react'
import IconList from './IconList'
import InfoBox from './InfoBox'
const infoData = [{
  name : 'ADDRESS',
  content: '1234 Somewhere Road #87257 Nashville, TN 00000-0000',
  isLink: false
},
{
  name : 'PHONE',
  content: '(000) 000-0000',
  isLink: true
},
{
  name : 'EMAIL',
  content: 'info@untitled.tld',
  isLink: true
},
{
  name : 'SOCIAL',
  content: <IconList border='border'/>,
  isLink: false
},
]

const ContractInfo = () => {
  return (
    <div className='row col-md-6'>
      {
        infoData.map((e)=> <InfoBox title={e.name} content={e.content} isLink={e.isLink} />)
      }
    </div>
  )
}

export default ContractInfo