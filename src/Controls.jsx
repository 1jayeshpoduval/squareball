import React from 'react'
import ArrowIcon from './ArrowIcon'

const Controls = (props) => {

    const moveUp = () => {
        props.setPosition((prevPosition) => ({
            x: prevPosition.x,
            y: prevPosition.y - 100,
            rotate: prevPosition.rotate - 90
        })
        )
    }

    const moveDown = () => {
        props.setPosition((prevPosition) => ({
            x: prevPosition.x,
            y: prevPosition.y + 100,
            rotate: prevPosition.rotate + 90
        })
        )
    
    }
    
    const moveLeft = () => {
        
        props.setPosition((prevPosition) => ({
            x: prevPosition.x - 100,
            y: prevPosition.y,
            rotate: prevPosition.rotate - 90
        })
        )
    }
    
    const moveRight = () => {
        props.setPosition((prevPosition) => ({
            x: prevPosition.x + 100,
            y: prevPosition.y,
            rotate: prevPosition.rotate + 90
        })
        )

    }
    

  return (
    <div>
        <div className='controls-wrapper u-mt-3'>
            <div className='controls-top'>
                <button className='control' onClick={moveUp}>
                    <ArrowIcon />
                </button>
            </div>
            <div className='controls-bottom u-d-flex u-flex-horizontal'>
                <button className='control' onClick={moveLeft}>
                    <ArrowIcon rotation = {'-90deg'}/>
                </button>
                <button className='control' onClick={moveDown}>
                    <ArrowIcon rotation = {'180deg'} />
                </button>
                <button className='control' onClick={moveRight}>
                    <ArrowIcon rotation = {'90deg'}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Controls