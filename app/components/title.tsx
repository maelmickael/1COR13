
import React from 'react'

const title = ( { bef = 'nos', after = 'réalisations', textColor = '#0B253C' } ) => {

  return (
    
    <div>

        <h1 className='uppercase text-[60px] leading-[60px] font-[600]' style={{ color: textColor }}>
            {bef} <br /> {after}
        </h1>
        <div className='trait h-[10px] w-[70px] bg-[#FE0466] mt-0.5'></div>
        
    </div>

  )
}

export default title