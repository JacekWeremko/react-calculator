import React, {useReducer, useState} from "react"

import Calculator from '../components/Calculator/Calculator'
import Screen from '../components/Screen/Screen'
import ButtonBox from '../components/ButtonBox/ButtonBox'
import Button from '../components/Button/Button'
import Mexp from "math-expression-evaluator";


const buttonsDesc = [
    ["AC", "+/-", "Mod", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]
]

export default function Calc () {
    const initialState = {
        number: "0",
        result: "0"
    }

    function reducer(state, action) {
        console.log(state)
        switch(action.type) {
            case "AC":
                return initialState
            case "+/-":
                return {...state,
                    result: state.result.startsWith("-") ? state.result.substring(1) : "-" + state.result}
            case ".":
                return {...state,
                    number: state.number.includes(".") ? state.number :  state.number + ".",
                    result: state.number.includes(".") ? state.result :  state.result + "."}
            case "=":
                return {...state,
                    number: "0",
                    result: Mexp.eval(state.result).toString()}
            case "Mod":
            case "/":
            case "*":
            case "-":
            case "+":
                return{...state,
                    number: "0",
                    result: state.result ? state.result + " " + action.type + " " : action.type }
            default:
                return {...state,
                    number: state.number !== "0" ? state.number + action.type : action.type,
                    result: state.result !== "0" ? state.result + action.type : action.type }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
    <Calculator>
      <Screen value={state.result ? state.result : state.number} />
      <ButtonBox>
          {
              buttonsDesc.flat().map((btn, key) => (
                      <Button
                          key={Math.random()}
                          value={btn}
                          onClick={() => dispatch({type: btn}) }
                      />
                  )
              )
          }
      </ButtonBox>
    </Calculator>
  )
}
