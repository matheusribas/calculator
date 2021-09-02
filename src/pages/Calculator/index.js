import React, { useState } from 'react'
import { evaluate } from 'mathjs'
import Button from '../../components/Button'

import './styles.css'

export default function Calculator() {

    const [display, setDisplay] = useState(0)

    function handleInput(e) {
        e.preventDefault()
        const value = e.target.innerHTML

        switch (value) {
            case '0':
                return (
                    setDisplay(prev => {
                        if(prev !== 0) return (`${prev}${value}`)
                        else return prev
                    })
                )
            case ',':
                return (
                    setDisplay(prev => {
                        if (prev.toString().indexOf(',') !== -1) { 
                            return prev.replace(',', '').concat(',')
                        }
                        else if (prev.toString().substr(-1) === ',') { return prev }
                        else return (`${prev}${value}`)
                    })
                )
            case 'AC':
                return setDisplay(0)
            case '+/-':
                return (
                    setDisplay(prev => {
                        if(isNaN(prev[0]) && prev) return prev.substr(1)
                        else if (prev === 0) return prev
                        else return (`-${prev}`)
                    })
                )
            case '%':
                return (
                    setDisplay(prev => {
                        const valueReplace = Number(prev.toString().replaceAll(',', '.'))
                        if(valueReplace) return ((valueReplace / 100).toString().replace('.', ','))
                        else return prev
                    })
                )
            case '=':
                return (
                    setDisplay(prev => {
                        const valueReplace = prev.toString().replaceAll('x', '*').replaceAll(',', '.')
                        const valResult = evaluate(valueReplace).toString().replace('.', ',')

                        return valResult
                    })
                )
            default:
                return (
                    setDisplay(prev => {
                        if(prev === 0) return value
                        else return (`${prev}${value}`)
                    })
                )
        }
    }

    return (
        <div className='container'>
            <div className='calculator'>
                <div className='calculator-header'>{display}</div>
                <div className='calculator-body'>
                    <div className='row-ac'>
                        <Button onClick={handleInput} color='dark' bg='gray'>AC</Button>
                        <Button onClick={handleInput} color='dark' bg='gray'>+/-</Button>
                        <Button onClick={handleInput} color='dark' bg='gray'>%</Button>
                    </div>
                    <div className='grid-numbers'>
                        <Button onClick={handleInput} color='white' bg='dark'>7</Button>
                        <Button onClick={handleInput} color='white' bg='dark'>8</Button>
                        <Button onClick={handleInput} color='white' bg='dark'>9</Button>
                        <Button onClick={handleInput} color='white' bg='dark'>4</Button>
                        <Button onClick={handleInput} color='white' bg='dark'>5</Button>
                        <Button onClick={handleInput} color='white' bg='dark'>6</Button>
                        <Button onClick={handleInput} color='white' bg='dark'>1</Button>
                        <Button onClick={handleInput} color='white' bg='dark'>2</Button>
                        <Button onClick={handleInput} color='white' bg='dark'>3</Button>
                        <Button onClick={handleInput} color='white' bg='dark' col={2}>0</Button>
                        <Button onClick={handleInput} color='white' bg='dark'>,</Button>
                    </div>
                    <div className='col-operators'>
                        <Button onClick={handleInput} color='dark' bg='warning'>/</Button>
                        <Button onClick={handleInput} color='dark' bg='warning'>x</Button>
                        <Button onClick={handleInput} color='dark' bg='warning'>-</Button>
                        <Button onClick={handleInput} color='dark' bg='warning'>+</Button>
                        <Button onClick={handleInput} color='dark' bg='warning'>=</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}