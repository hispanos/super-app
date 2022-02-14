import React from 'react'

const ModalAction = ({data= {}}) => {
  return (
    <div id="menu-heart" className="menu menu-box-modal rounded-m menu-active" data-menu-hide="800" data-menu-width="250" data-menu-height="170" style={{display: 'block', width: '250px', height: '170px'}}>
                        
        <h1 className="text-center mt-3 pt-2">
            <i className={`fa ${data?.icon} color-${data?.color}-dark fa-3x`}></i>
        </h1>
        <h3 className="text-center pt-2">{data?.text}</h3>
    </div>
  )
}

export default ModalAction