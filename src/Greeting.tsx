import React from "react";

interface GreetingProps {
  name: string;
}

const Greeting = ({ name }: GreetingProps) => {
  return (
    <div>
      <p>hello {name}</p>
    </div>
  );
};

export default Greeting;
