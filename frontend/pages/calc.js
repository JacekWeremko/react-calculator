import React, {useState} from "react"

import Calculator from '../components/Calculator/Calculator'
import Screen from '../components/Screen/Screen'
import ButtonBox from '../components/ButtonBox/ButtonBox'
import Button from '../components/Button/Button'


const buttonsDesc = [
    ["AC", "+/-", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]
]

export default function Calc () {
    let [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0
    })

    function buttonEventHandler(btn) {
        function numClickHandler(btn) {
            setCalc({
                ...calc,
                num: btn,
            })
        }

        function resetClickHandler(btn) {
            setCalc({
                sign: "",
                num: 0,
                res: 0
            })
        }

        function invertClickHandler(btn) {
            setCalc({
                ...calc,
                sign: "",
                num: calc.num ? -calc.num : 0,
                res: calc.res ? -calc.res : 0
            })
        }

        switch (btn) {
            case "AC":
                resetClickHandler(btn)
                break
            case "+/-":
                invertClickHandler(btn)
                break
            // case "%":
            //     moduloClickHandler
            //     break
            default:
                numClickHandler(btn)
        }
    }

    return (
    <Calculator>
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
          {
              buttonsDesc.flat().map((desc, key) => (
                      <Button
                          key={Math.random()}
                          value={desc}
                          onClick={e => buttonEventHandler(desc) }
                      />
                  )
              )
          }
      </ButtonBox>
    </Calculator>
  )
}
