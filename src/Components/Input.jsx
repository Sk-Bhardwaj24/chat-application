import React from "react";
import styled from "styled-components";
const Div = styled.div`
  color: white;
`;
const Input = () => {
  const [textdata, setTextdata] = React.useState("");
  const handleChange = (e) => {
    setTextdata(e.target.value);
  };
  const handleAdd = () => {
    console.log(textdata);
  };
  return (
    <Div>
      <input type="text" value={textdata} onChange={handleChange} />
      <button onClick={handleAdd}>Send</button>
    </Div>
  );
};

export default Input;
