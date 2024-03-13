import React from "react";

// const Greeter: React.FC = () => {
//   return <div>Hello!</div>;
// };

interface GreeterProps {
  person: string;
}

export default function Greeter({ person }: GreeterProps): JSX.Element {
  console.log(person);
  return <div>Hello!{person}</div>;
}
