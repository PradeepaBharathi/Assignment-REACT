import React, { useState } from "react";
import "./transfer.css";

function Transfer() {
  const [bucket1, setBucket1] = useState(["item1", "item2", "item3", "item4"]);
  const [bucket2, setBucket2] = useState(["item7", "item5", "item6"]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([]);
  const [selectedIndices, setSelectedIndices] = useState([]);
  const [selectedIndices2, setSelectedIndices2] = useState([]);

  const [source, setSource] = useState("bucket1");

  const handleIndex1 = (i) => {
    setSource("bucket1");
    if (selectedIndices.includes(i)) {
      setSelectedItems((prevItems) =>
        prevItems.filter((item) => item !== bucket1[i])
      );
      setSelectedIndices((prev) =>
        prev.filter((index) => index !== i)
      );
    } else {
      setSelectedIndices((prevIndices) => [...prevIndices, i]);
      setSelectedItems((prevItem) => [...prevItem, bucket1[i]]);
    }
  };

  const handleIndex2 = (i) => {
    setSource("bucket2");
    if (selectedIndices2.includes(i)) {
      setSelectedItems2((prevItems) =>
        prevItems.filter((item) => item !== bucket2[i])
      );
      setSelectedIndices2((prev) =>
        prev.filter((index) => index !== i)
      );
    } else {
      setSelectedIndices2((prevIndices) => [...prevIndices, i]);
      setSelectedItems2((prevItem) => [...prevItem, bucket2[i]]);
    }
  };

  const addFunction = () => {
    if (source === 'bucket1') {
      if (selectedIndices.length > 0) {
        const addItems = selectedIndices.map((val) => bucket1[val]);
        setBucket2((prevItem2) => [...prevItem2, ...addItems]);
        setBucket1((prev1) =>
          prev1.filter((i, index) => !selectedIndices.includes(index))
        );
        setSelectedItems([]);
        setSelectedIndices([]);
      }
    } else {
      if (selectedIndices2.length > 0) {
        const addItems = selectedIndices2.map((val) => bucket2[val]);
        setBucket1((prevItem1) => [...prevItem1, ...addItems]);
        setBucket2((prev2) =>
          prev2.filter((i, index) => !selectedIndices2.includes(index))
        );
        setSelectedItems2([]);
        setSelectedIndices2([]);
      }
    }
  };

  const removeFunction = () => {
    if (source === 'bucket1' && selectedIndices.length > 0) {
      
      const itemsToMove = selectedIndices.map((selectedIndex) => bucket1[selectedIndex]);
      setBucket2((prevBucket2) => [...prevBucket2, ...itemsToMove]);
  
      setBucket1((prevBucket1) =>
        prevBucket1.filter((item, index) => !selectedIndices.includes(index))
      );
      setSelectedItems([]);
      setSelectedIndices([]);
    } else if (source === 'bucket2' && selectedIndices2.length > 0) {
      
      const itemsToMove = selectedIndices2.map((selectedIndex) => bucket2[selectedIndex]);
      setBucket1((prevBucket1) => [...prevBucket1, ...itemsToMove]);
  
      setBucket2((prevBucket2) =>
        prevBucket2.filter((item, index) => !selectedIndices2.includes(index))
      );
      setSelectedItems2([]);
      setSelectedIndices2([]);
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
              <button
                className="btn1"
                onClick={() => handleIndex1(index)}
                style={{
                  backgroundColor: selectedItems.includes(bucket1[index]) ? "green" : "transparent",
                }}
              >
                {val}
              </button>
            );
          })}
        </div>
        <div className="btn-list">
          <button onClick={addFunction} disabled={selectedIndices.length === 0 && selectedIndices2.length === 0}>Add</button>
          <button onClick={removeFunction} disabled={selectedIndices.length === 0 && selectedIndices2.length === 0}>Remove</button>
          <button onClick={addAllFunction} disabled={bucket1.length === 0}>Add All</button>
          <button onClick={removeAllFunction} disabled={bucket2.length === 0}>Remove All</button>
        </div>
        <div className="bucket2">
          {bucket2.map((val, index) => {
            return (
              <button
                className="btn2"
                onClick={() => handleIndex2(index)}
                style={{
                  backgroundColor: selectedItems2.includes(bucket2[index]) ? "green" : "transparent",
                }}
              >
                {val}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Transfer;
