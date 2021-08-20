import React from 'react'

export default (props) => {
    return (
        <rect
            className="rect"
            width={props.width}
            height={props.height}
            x={props.x}
            y={props.y}
            fill={props.fill}
            data-count={props.count}
            data={props.data}
        ></rect>
    )
}
