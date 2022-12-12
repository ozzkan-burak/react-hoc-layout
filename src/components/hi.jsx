import React from 'react';
import WithLayout from './hoc/withLayout';

const Hi = () => {
  return (
    <div>
      Hi
    </div>
  )
}

export default WithLayout(Hi)
