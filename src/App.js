import logo from "./logo.svg";
import "./App.css";
import AnimalsList from "./AnimalsList";

import { useState, useEffect } from "react";

function App() {
  //States
  const [sortKey, setSortKey] = useState("name");
  const [filterKey, setFilterKey] = useState("cat");
  //Viser datatype, best practice
  const [animalsArr, setAnimalsArr] = useState([]);

  //METHODS
  //GET LIST
  const json = "./animals.json";
  useEffect(() => {
    console.log("hello");
    fetch(json)
      .then((res) => res.json())
      .then(setAnimalsArr);
  }, []);

  //Eventhandlers
  // e= event
  const onSorting = (sortString) => {
    console.log(sortString);
    console.log(animalsArr);
    const sortedArray = animalsArr.sort((a, b) => {
      if (a[sortString] < b[sortString]) {
        return -1;
      }
      if (a[sortString] > b[sortString]) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
    // console.log(sortedArray);
    console.dir(sortedArray);
    setAnimalsArr(sortedArray);
  };
  // const copyJson = [...animals];

  // copyJson.sort((a, b) => {
  //   if (a[sortKey] < b[sortKey]) {
  //     return -1;
  //   }
  //   if (a[sortKey] > b[sortKey]) {
  //     return 1;
  //   }
  //   // a must be equal to b
  //   return 0;
  // });

  //filtering

  // copyJson.filter((listItem) => listItem.type === filterKey);

  return (
    <div className="App">
      <h1>Animals</h1>
      <div className="filter">
        <button>Only Cats</button>
        <button>Only Dogs</button>
        <button>All</button>
      </div>

      <table>
        <thead>
          <tr>
            <th className="table-header">Star</th>
            <th className="table-header" onClick={() => onSorting("name")}>
              Name
            </th>
            <th className="table-header" onClick={() => onSorting("type")}>
              Type
            </th>
            <th className="table-header" onClick={() => onSorting("desc")}>
              Description
            </th>
            <th className="table-header" onClick={() => onSorting("age")}>
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          <AnimalsList animals={animalsArr} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
