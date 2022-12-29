import React, {useState} from 'react';
import WithLayout from './hoc/withLayout';

const Hello = (props) => {

  const [test, setTest] = useState(false)

  useState(()=>{
    setTest((currentState)=> {
     return currentState = true 
    });
  },[])

  const {sayHello} = props
  return (
    <div className="bg-blue" onClick={()=> sayHello()}>
      Hello 
    </div>
  )
}

export default WithLayout(Hello)
