import React from 'react';

interface MyComponentProps {
  label: string;
}

const MyComponent = ({ label }: MyComponentProps) => {
  return (
    <div>
      <button>{label}</button>
    </div>
  );
};

export default MyComponent;
