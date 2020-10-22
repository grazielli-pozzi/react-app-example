import React from 'react';

const user = {
  firstName: 'Henrique',
  lastName: 'Mendes',
  age: 32,
}

const App = () => {
  const displayName = () => {

    if (user.lastName) {
      return <h1>Hi, my name is {user.firstName} {user.lastName} and I have {user.age} years old :-)</h1>;
    }

    return <h1>Hi, my name is {user.firstName}, I have {user.age} years old and I don't have a second name :-(</h1>
  };

  return (
    <div>
      <h1 className="app">Hello World!</h1>
      <h2>{displayName()}</h2>
    </div>
  );
};

export default App;
