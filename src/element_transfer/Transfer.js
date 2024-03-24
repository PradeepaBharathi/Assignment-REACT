import React, { useState } from "react";
import "./transfer.css";
function Transfer() {
  const [bucket1, setBucket1] = useState(["item1", "item2", "item3", "item4"]);
  const [bucket2, setBucket2] = useState(["item7", "item5", "item6"]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedIndices, setSelectedIndices] = useState([]);

    
  
  const handleIndex1 = (i) => {
    if (selectedIndices.includes(i)) {
      setSelectedItems((prevItems) =>
        prevItems.filter((item) => item !== bucket1[i])
      );
      setSelectedIndices((prev) =>
        prev.filter((index) => index !== bucket1[i])
      );
    } else {
      setSelectedIndices((prevIndices) => [...prevIndices, i]);
      setSelectedItems((prevItem) => [...prevItem, bucket1[i]]);
    }
  };

  const addFunction = () => {
    if (selectedIndices.length > 0) {
      const addItems = selectedIndices.map((val) => bucket1[val]);
      setBucket2((prevItem2) => [...prevItem2, ...addItems]);
      setBucket1((prev1) =>
        prev1.filter((i, index) => !selectedIndices.includes(index))
      );
      setSelectedItems([]);
      setSelectedIndices([]);
    }
  };
const removeFunction = () => {
  if (selectedIndices.length > 0) {
    const itemsToMove = selectedIndices.map(
      (selectedIndex) => bucket2[selectedIndex]
    );
    setBucket1((prevBucket1) => [...prevBucket1, ...itemsToMove]);

    setBucket2((prevBucket2) =>
      prevBucket2.filter((item, index) => !selectedIndices.includes(index))
    );
    setSelectedItems([]);
    setSelectedIndices([]);
  }
};
  const addAllFunction = () => {
    setBucket2((prevBucket2) => [...prevBucket2, ...bucket1]);
    setBucket1([]);
  };

  const removeAllFunction = () => {
    setBucket1((prevBucket1) => [...prevBucket1, ...bucket2]);
    setBucket2([]);
  };

  return (
    <>
      <h1>Element Transfer</h1>
      <div className="buckets">
        <div className="bucket1">
          {bucket1.map((val, index) => {
            return (
              <button className="btn1" onClick={() => handleIndex1(index)}>
                {val}
              </button>
            );
          })}
        </div>
        <div className="btn-list">
          <button onClick={addFunction}>Add</button>
          <button onClick={removeFunction}>Remove</button>
          <button onClick={addAllFunction}>Add All</button>
          <button onClick={removeAllFunction}>Remove All</button>
        </div>
        <div className="bucket2">
          {bucket2.map((val, index) => {
            return <button className="btn2" onClick={()=>handleIndex1(index)}>{val}</button>;
          })}
        </div>
      </div>
    </>
  );
}

export default Transfer;
