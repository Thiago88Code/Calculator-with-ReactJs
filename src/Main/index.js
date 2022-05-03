
import"./main.css"
import Button from "../components/Button"
import Display from "../components/Display"
import {useState} from "react"

export default function Main(){

    

    const[display, setDisplay] = useState(0)
    
    //const[operator, setOperator] = useState(null)
    //const[flag, setFlag] = useState(false)
   

    function clearMemory(){
        setDisplay(0)
        
    }
    
    
    function addOperation(op){
        if ( display === 0){
            return
        }
       
       let result;
       let list = ["+","-","*","/"]
       
       list.map((i)=>{
            
           if (op === i && display.includes(i)){
                op = ""
                eval(display)
               }
           result = eval(display)
           setDisplay(result + op)
       })
    }

    
    function addDigit(e){
        if (e === "." && display.includes(".")){
            return
        }
        
        const displayZero = display === 0 
        let currentValue = displayZero? "" : display ;
        setDisplay(currentValue + e)
}
        
    
    function getResult(){
       
        let result = eval(display)
       setDisplay(result)
       console.log(result)
    

    }

    return(
        <div className = "container" >
            <Display valor={display}/> 
            <Button triple label ="AC" click={clearMemory}/>
            <Button operation label ="/" click = {addOperation}/>
            <Button label ="7" click = {addDigit}/>
            <Button label ="8" click = {addDigit}/>
            <Button label ="9" click = {addDigit}/>
            <Button operation label ="*" click = {addOperation}/>
            <Button label ="4" click = {addDigit}/>
            <Button label ="5" click = {addDigit}/>
            <Button label ="6" click = {addDigit}/>
            <Button operation label ="-" click = {addOperation}/>
            <Button label ="1" click = {addDigit}/>
            <Button label ="2" click = {addDigit}/>
            <Button label ="3" click = {addDigit}/>
            <Button operation label ="+" click = {addOperation}/>
            <Button double label ="0" click = {addDigit}/>
            <Button label ="." click = {addDigit}/>
            <Button operation label ="=" click = {getResult}/>
        </div>
    )
}