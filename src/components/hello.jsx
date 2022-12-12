import React from 'react';
import WithLayout from './hoc/withLayout';

const Hello = (props) => {
  const {sayHello} = props
  return (
    <div onClick={()=> sayHello()}>
      Hello
    </div>
  )
}

export default WithLayout(Hello)
