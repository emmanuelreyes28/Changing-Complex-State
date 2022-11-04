import React, { useState } from "react";

function App() {
  //useState here uses an object that hold both first and last name
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    // const newValue = event.target.value; //grabs value entered in input
    // const inputName = event.target.name; //grabs element name from input tag

    //use object destructuiring to make code above more simple
    const { value, name } = event.target;

    //prevValue keeps the previous value of a key when another is being changed
    //so it does not get removed. Note: DO NOT USE EVENT INSIDE OF SET STATE
    setFullName((prevValue) => {
      //check what input was changed and update values accordingly
      if (name === "fName") {
        return {
          fName: value, //update with new value
          lName: prevValue.lName, //reuse prev value
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName} //when we assign the value with useState it becomes controlled
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
