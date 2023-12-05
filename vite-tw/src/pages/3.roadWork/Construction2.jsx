import React from 'react'

const Construction2 = ({ conList }) => {
    return (
        <div>
            
            {conList.map((shop, index) => (
                
                    <div className='container'>
                        <div className='title'>{shop.where} </div>
                        <p> {shop.description}</p>
                        <div className='underline'/>
                    </div>
               
            ))
            }
        </div >
    )
}

export default Construction2