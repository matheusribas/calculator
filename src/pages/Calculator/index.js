import React, { useEffect, useState } from 'react'
import { round, evaluate } from 'mathjs'
import Button from '../../components/Button'

import './styles.css'

export default function Calculator() {

    let displayResult
    const operators = ['/', 'x', '*', '-', '+']
    const [display, setDisplay] = useState('0')
    const [fontSize, setFontSize] = useState('3rem')

    useEffect(() => {
        if(display.length >= 10) setFontSize('2rem')
        else setFontSize('3rem')
    }, [display])

    function handleInputReverse(e) {
        e.preventDefault()
        setDisplay(prev => {
            if(prev[0] === '-') displayResult = prev.substr(1)
            else if (prev === '0') displayResult = prev
            else displayResult = `-${prev}`

            return displayResult
        })
    }

    function handleInputPorcent(e) {
        e.preventDefault()
        setDisplay(prev => {
            const valueReplace = Number(prev.toString().replaceAll(',', '.'))
            if(valueReplace) displayResult = ((valueReplace / 100).toString().replace('.', ','))
            else displayResult = prev

            return displayResult
        })
    }

    function handleInputNumber(e) {
        e.preventDefault()
        setDisplay(prev => {
            if(prev === '0' && e.target.innerHTML !== '0') displayResult = e.target.innerHTML
            else if(prev === '0' && e.target.innerHTML === '0') displayResult = prev
            else displayResult = prev.concat(e.target.innerHTML)

            return displayResult
        } 
        )
    }

    function handleInputComma(e) {
        e.preventDefault()
        setDisplay(prev => {
            if (operators.indexOf(prev.substr(-1)) !== -1) displayResult = prev
            else if (prev.indexOf(',') !== -1) {
                const existOperator = []
                operators.map(op => (prev.indexOf(op) !== -1) ? existOperator.push(prev.indexOf(op)) : null)
                
                const lastNumber = prev.substr(existOperator).replace(',', '').concat(',')

                displayResult = prev.substr(0, existOperator).concat(lastNumber)
            }
            else if (prev.substr(-1) === ',') displayResult = prev
            else displayResult = prev.concat(e.target.innerHTML)

            return displayResult
        })
    }

    function handleInputOperator(e) {
        e.preventDefault()
        setDisplay(prev => {
            if (prev.substr(-1) === e.target.innerHTML) displayResult = prev
            else if (operators.indexOf(prev.substr(-1)) !== -1) displayResult = prev.substr(0, (prev.length - 1)).concat(e.target.innerHTML)
            else displayResult = prev.concat(e.target.innerHTML)

            return displayResult
        })
    }

    function handleInputResult(e) {
        e.preventDefault()
        setDisplay(prev => {
            const valueReplace = prev.replaceAll('x', '*').replaceAll(',', '.')

            if (operators.indexOf(valueReplace.substr(-1)) !== -1) displayResult = prev
            else if (prev === '0') displayResult = prev
            else displayResult = round(evaluate(valueReplace),  3).toString().replaceAll('.', ',')

            return displayResult
        })
    }

    return (
        <div className='container'>
            <div className='calculator'>
                <div 
                    className='calculator-header' 
                    style={{
                        fontSize: fontSize
                    }}
                >
                    {display}
                </div>
                <div className='calculator-body'>
                    <div className='row-ac'>
                        <Button onClick={_ => setDisplay('0')} color='dark' bg='gray'>AC</Button>
                        <Button onClick={handleInputReverse} color='dark' bg='gray'>+/-</Button>
                        <Button onClick={handleInputPorcent} color='dark' bg='gray'>%</Button>
                    </div>
                    <div className='grid-numbers'>
                        <Button onClick={handleInputNumber} color='white' bg='dark'>7</Button>
                        <Button onClick={handleInputNumber} color='white' bg='dark'>8</Button>
                        <Button onClick={handleInputNumber} color='white' bg='dark'>9</Button>
                        <Button onClick={handleInputNumber} color='white' bg='dark'>4</Button>
                        <Button onClick={handleInputNumber} color='white' bg='dark'>5</Button>
                        <Button onClick={handleInputNumber} color='white' bg='dark'>6</Button>
                        <Button onClick={handleInputNumber} color='white' bg='dark'>1</Button>
                        <Button onClick={handleInputNumber} color='white' bg='dark'>2</Button>
                        <Button onClick={handleInputNumber} color='white' bg='dark'>3</Button>
                        <Button onClick={handleInputNumber} color='white' bg='dark' col={2}>0</Button>
                        <Button onClick={handleInputComma} color='white' bg='dark'>,</Button>
                    </div>
                    <div className='col-operators'>
                        <Button onClick={handleInputOperator} color='dark' bg='warning'>/</Button>
                        <Button onClick={handleInputOperator} color='dark' bg='warning'>x</Button>
                        <Button onClick={handleInputOperator} color='dark' bg='warning'>-</Button>
                        <Button onClick={handleInputOperator} color='dark' bg='warning'>+</Button>
                        <Button onClick={handleInputResult} color='dark' bg='warning'>=</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}