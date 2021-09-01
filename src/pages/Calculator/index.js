import React from 'react'
import Button from '../../components/Button'

import './styles.css'

export default function Calculator() {

    return (
        <div className='calculator'>
            <div className="calculator-header">
                Display
            </div>
            <div className='calculator-body'>
                <div className="ac">
                    <Button color='dark' bg='gray'>AC</Button>
                    <Button color='dark' bg='gray'>+/-</Button>
                    <Button color='dark' bg='gray'>%</Button>
                </div>
                <div className='numbers'>
                    <Button color='white' bg='dark'>1</Button>
                    <Button color='white' bg='dark'>2</Button>
                    <Button color='white' bg='dark'>3</Button>
                    <Button color='white' bg='dark'>4</Button>
                    <Button color='white' bg='dark'>5</Button>
                    <Button color='white' bg='dark'>6</Button>
                    <Button color='white' bg='dark'>7</Button>
                    <Button color='white' bg='dark'>8</Button>
                    <Button color='white' bg='dark'>9</Button>
                    <Button color='white' bg='dark'>0</Button>
                    <Button color='white' bg='dark'>,</Button>
                </div>
                <div className='operators'>
                    <Button color='dark' bg='warning'>/</Button>
                    <Button color='dark' bg='warning'>x</Button>
                    <Button color='dark' bg='warning'>-</Button>
                    <Button color='dark' bg='warning'>+</Button>
                    <Button color='dark' bg='warning'>=</Button>
                </div>
            </div>
        </div>
        )
}