import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row, Column } from "./styles";
import { useState } from "react";

const App = () => {
    const [currentNumber, setCurrentNumber] = useState('0')
    const [firstNumber, setFirstNumber] = useState('0')
    const [operation, setOperation] = useState('')
    
    
    const handOnClear = () => {
      setCurrentNumber('0')
      setFirstNumber('0')
      setOperation('')
    }
    const handleAddNumber = (number) => {
      setCurrentNumber(prev => `${prev === '0'? '' : prev}${number}`)
    }
    const handSumNumbers = () => {
      if(firstNumber === '0') {
        setFirstNumber(String(currentNumber))
        setCurrentNumber('0')
        setOperation('+')
      } else {
        const sum = Number(firstNumber) + Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation('')
      }
    }
    const handMinusNumbers = () => {
      if(firstNumber === '0') {
        setFirstNumber(String(currentNumber))
        setCurrentNumber('0')
        setOperation('-')
      } else {
        const sum = Number(firstNumber) - Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation('')
      }
    }
    const handDivisionNumbers = () => {
      if(firstNumber === '0'){
        setFirstNumber(String(currentNumber))
        setCurrentNumber('0')
        setOperation('/')
      } else {
        const sum = Number(firstNumber) / Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation('/')
      }
    }
    const handMultiplicationNumber = () => {
      if (firstNumber === '0'){
        setFirstNumber(String(currentNumber))
        setCurrentNumber('0')
        setOperation('*')
      } else {
        const sum = Number(firstNumber) * Number(currentNumber)
        setCurrentNumber(String(sum))
        setOperation('*')
      }
    }
    const handEquals = () => {
      if(firstNumber !== '0' &&  operation !== '' &&  currentNumber !== '0') {
        switch (operation) {
          case '+':
            handSumNumbers()
            break;
          case '-':
            handMinusNumbers()
            break;
          case '/':
            handDivisionNumbers()
            break;
          case '*':
            handMultiplicationNumber()
            break;
        
          default:
            break;
        }
      }
    }
    return (
      <Container>
        <Content>
          <Input value={currentNumber}/>
          <Row>
            <Button label="*" onClick={handMultiplicationNumber}/>
            <Button label="/" onClick={handDivisionNumbers}/>
            <Button label="C" onClick={handOnClear}/>
            <Button label="."/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="-" onClick={handMinusNumbers}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="+" onClick={handSumNumbers}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="=" onClick={handEquals}/>
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
          </Row>
        </Content>
      </Container>
    );
  }

export default App;
