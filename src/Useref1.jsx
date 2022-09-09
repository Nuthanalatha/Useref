import React, { useEffect, useRef, useState } from "react";

const Useref1 = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, []); // if we didn't give [] this it renders every time
  console.log(count);
  return (
    <>
      {/* <React.Fragment>  or <div> div stores space in dom thats why we go for Fragments */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <h1>{count.current}</h1>
    </>
    // </React.Fragment> or </div>
  );
};

export default Useref1;
