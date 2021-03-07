import React from 'react';

interface CodeProps {
  value: any;
}

function Code({ value }: CodeProps) {
  return <pre>{JSON.stringify(value, null, 2)}</pre>;
}

export default Code;
