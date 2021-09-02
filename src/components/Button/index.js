import React from 'react'

import './styles.css'

export default function Button({ children, col = 1, color, bg, ...rest }) {
    return (
        <button
            className={`button-calculator text-${color} bg-${bg} col-${col}`}
            {...rest}
            >
                {children}
        </button>
    )
}