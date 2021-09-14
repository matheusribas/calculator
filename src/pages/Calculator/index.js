import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { round, evaluate } from 'mathjs'
import Button from '../../components/Button'

import { useDispatch } from 'react-redux'
import { addEquation } from '../../store/History/History.action'

import './styles.css'

export default function Calculator() {

    const dispatch = useDispatch()

    let displayResult
    const operators = ['/', 'x', '*', '-', '+']

    const [display, setDisplay] = useState('0')
    const [displayError, setDisplayError] = useState(false)

    const [fontSize, setFontSize] = useState('3rem')

    useEffect(() => {
        if(display.length >= 10) setFontSize('2rem')
        else setFontSize('3rem')
    }, [display])

    function handleAC() {
        setDisplay('0')
        setDisplayError(false)
    }

    function handleInputReverse() {
        setDisplay(prev => {
            if(prev[0] === '-') displayResult = prev.substr(1)
            else if (prev === '0') displayResult = prev
            else displayResult = `-${prev}`

            return displayResult
        })
    }

    function handleInputPorcent() {
        setDisplay(prev => {
            const valueReplace = Number(prev.toString().replaceAll(',', '.'))
            if(valueReplace) displayResult = ((valueReplace / 100).toString().replace('.', ','))
            else displayResult = prev

            return displayResult
        })
    }

    function handleInputNumber(number) {
        setDisplay(prev => {
            if((prev === 'Erro')) {
                displayResult = number
                setDisplayError(false)
            }
            else if(prev === '0' && number !== '0') displayResult = number
            else if(prev === '0' && number === '0') displayResult = prev
            else if(number === '0') {
                let existOperatorMoreZero
                operators.map((op) => (prev.substr(-2).indexOf(`${op}0`) !== -1) ? existOperatorMoreZero = true : null)

                if(existOperatorMoreZero) displayResult = prev
                else displayResult = prev.concat(number)
            }
            else displayResult = prev.concat(number)

            return displayResult
        })
    }

    function handleInputComma() {
        setDisplay(prev => {
            if (operators.indexOf(prev.substr(-1)) !== -1) displayResult = prev
            else if (prev.indexOf(',') !== -1) {
                const existOperator = []
                operators.map(op => (prev.indexOf(op) !== -1) ? existOperator.push(prev.indexOf(op)) : null)
                
                const lastNumber = prev.substr(existOperator).replace(',', '').concat(',')

                displayResult = prev.substr(0, existOperator).concat(lastNumber)
            }
            else if (prev.substr(-1) === ',') displayResult = prev
            else displayResult = prev.concat(',')

            return displayResult
        })
    }

    function handleInputOperator(operator) {
        setDisplay(prev => {
            if (prev.substr(-1) === operator) displayResult = prev
            else if (operators.indexOf(prev.substr(-1)) !== -1) displayResult = prev.substr(0, (prev.length - 1)).concat(operator)
            else displayResult = prev.concat(operator)

            return displayResult
        })
    }

    function handleInputResult() {
        setDisplay(prev => {
            const valueReplace = prev.replaceAll('x', '*').replaceAll(',', '.')

            if (operators.indexOf(valueReplace.substr(-1)) !== -1) displayResult = prev
            else if (prev === '0') displayResult = prev
            else {
                displayResult = round(evaluate(valueReplace), 3).toString().replaceAll('.', ',')
                dispatch(addEquation(`${prev}=${displayResult}`))
            }

            displayResult = (displayResult.includes('NaN') || displayResult.includes('Infinity')) ? 'Erro' : displayResult
            return displayResult
        })
        setDisplayError((displayResult === 'Erro'))
    }

    function handleKeyDown(e) {
        if(
            (e.keyCode >= 96 && e.keyCode <= 105) || 
            (e.keyCode >= 48 && e.keyCode <= 57 && !e.shiftKey)
        ) handleInputNumber(e.key)
        else if (e.keyCode === 46) handleAC()
        else if (
            e.keyCode === 53 && e.shiftKey && 
            !displayError
        ) handleInputPorcent()
        else if (
            (e.keyCode === 110 || e.keyCode === 188) && 
            !displayError
        ) handleInputComma()
        else if (
            (e.keyCode === 13 || (e.keyCode === 187 && !e.shiftKey)) && 
            !displayError
        ) handleInputResult()
        else if (
            (e.keyCode === 106 || (e.keyCode === 189 && !e.shiftKey) ||
            e.keyCode === 107 || (e.keyCode === 187 && e.shiftKey) ||
            e.keyCode === 109 || (e.keyCode === 56 && e.shiftKey) ||
            e.keyCode === 111 || (e.keyCode === 193  && !e.shiftKey)) && 
            !displayError
        ) handleInputOperator(e.key === '*' ? 'x' : e.key)
    }

    return (
        <div 
            className='container'
            onKeyDown={handleKeyDown}
            tabIndex='0'
        >
            <div className='nav-menu'>
                <Link to='/history'>Histórico</Link>
            </div>
            <div className='calculator'>
                <div className='calculator-header' style={{ fontSize }}>
                    {display}
                </div>
                <div className='calculator-body'>
                    <div className='row-ac'>
                        <Button onClick={handleAC} color='dark' bg='gray'>AC</Button>
                        <Button onClick={handleInputReverse} color='dark' bg='gray' disabled={displayError}>+/-</Button>
                        <Button onClick={handleInputPorcent} color='dark' bg='gray' disabled={displayError}>%</Button>
                    </div>
                    <div className='grid-numbers'>
                        <Button onClick={_ => handleInputNumber('7')} color='white' bg='dark'>7</Button>
                        <Button onClick={_ => handleInputNumber('8')} color='white' bg='dark'>8</Button>
                        <Button onClick={_ => handleInputNumber('9')} color='white' bg='dark'>9</Button>
                        <Button onClick={_ => handleInputNumber('4')} color='white' bg='dark'>4</Button>
                        <Button onClick={_ => handleInputNumber('5')} color='white' bg='dark'>5</Button>
                        <Button onClick={_ => handleInputNumber('6')} color='white' bg='dark'>6</Button>
                        <Button onClick={_ => handleInputNumber('1')} color='white' bg='dark'>1</Button>
                        <Button onClick={_ => handleInputNumber('2')} color='white' bg='dark'>2</Button>
                        <Button onClick={_ => handleInputNumber('3')} color='white' bg='dark'>3</Button>
                        <Button onClick={_ => handleInputNumber('0')} color='white' bg='dark' col={2}>0</Button>
                        <Button onClick={handleInputComma} color='white' bg='dark' disabled={displayError}>,</Button>
                    </div>
                    <div className='col-operators'>
                        <Button onClick={_ => handleInputOperator('/')} color='dark' bg='warning' disabled={displayError}>/</Button>
                        <Button onClick={_ => handleInputOperator('x')} color='dark' bg='warning' disabled={displayError}>x</Button>
                        <Button onClick={_ => handleInputOperator('-')} color='dark' bg='warning' disabled={displayError}>-</Button>
                        <Button onClick={_ => handleInputOperator('+')} color='dark' bg='warning' disabled={displayError}>+</Button>
                        <Button onClick={handleInputResult} color='dark' bg='warning' disabled={displayError}>=</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}