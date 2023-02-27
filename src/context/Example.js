import React, { useState, createContext, useContext } from "react";
import { Sample2 } from "./Sample2";
//create context
export const NameContext = createContext();

function Example() {
  //   const name = "John";
  const List = [
    "jaideep",
    "monica",
    "abeer",
    "ari",
    "mahathi",
    "nishitha",
    "arjun",
    "jack",
  ];

  const [name, setName] = useState("jack");
  const [nameList, setNameList] = useState(List);
  return (
    <NameContext.Provider value={name}>
      <div>
        <Sample />
        <Sample1 />
        <Sample2 />
        {/* {nameList.map((nm, index) => (
          <Sample key={index} nameValue={nm} />
        ))} */}
        {/* <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        //copy namelist and add new name
        <button onClick={() => setNameList([...nameList, name])}>
          Add Name
        </button> */}

        {/* <Sample nameValue={name} /> */}
        {/* <Sample1 name={name} /> */}
      </div>
    </NameContext.Provider>
  );
}

export default Example;

function Sample() {
  const name = useContext(NameContext);

  return <p>Hi {name}🥳🥳</p>;
}

function Sample1() {
  const name = useContext(NameContext);
  return (
    <div>
      <h2>welcome {name}</h2>
    </div>
  );
}
