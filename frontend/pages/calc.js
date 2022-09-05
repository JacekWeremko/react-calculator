import Calculator from '../components/Calculator/Calculator'
import Screen from '../components/Screen/Screen'
import ButtonBox from '../components/ButtonBox/ButtonBox'
import Button from '../components/Button/Button'


export default function Calc () {
  return (
    <Calculator>
      <Screen value={0} />
      <ButtonBox>
        <Button className=""value="" onClick={
            (e) => { 
              console.log(e); 
            }
          }
        />
      </ButtonBox>
    </Calculator>
  )
}
