import React from 'react'

import './styles.css'

export default function Button({ children, color, bg, ...rest }) {
    return (
        <button
            className={`button-calculator text-${color} bg-${bg}`}
            {...rest}
            >
                {children}
        </button>
    )
}