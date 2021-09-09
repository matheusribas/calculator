import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './styles.css'

export default function History() {

    const equations = useSelector(state => state.history)

    return (
        <div className='container'>
            <div className='nav-menu'>
                <Link to='/'>Calculadora</Link>
            </div>
            <div className='history'>
                <div className='history-header'>Histórico</div>
                <div className='history-body'>
                    {
                        equations.length ? (
                            equations.map(eq => {
                                return (
                                    <div className='history-equation' key={eq.id}>
                                        <span>
                                            <div>{eq.created_at.split(' ')[0]}</div>
                                            <div>{eq.created_at.split(' ')[1]}</div>
                                        </span>
                                        <span>{eq.equation}</span>
                                    </div>
                                )
                            })
                        ) : (
                            <h1>Sem histórico</h1>
                        )
                    }
                </div>
            </div>
        </div>
    )
}