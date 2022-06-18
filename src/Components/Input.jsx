import React from "react";
import styled from "styled-components";
const Div = styled.div`
  color: white;
`;
const Input = () => {
  const [textdata, setTextdata] = React.useState("");
  const [display, setDisplay] = React.useState(false);
  const [gifsearch, setGifsearch] = React.useState("");
  const handleChange = (e) => {
    setTextdata(e.target.value);
  };
  const handleAdd = () => {
    console.log(textdata);
  };
  const handlegif = () => {
    display ? setDisplay(false) : setDisplay(true);
  };
  const handlegifchange = (e) => {
    console.log(e.target.value);
    setGifsearch(e.target.value);
  };
  return (
    <Div>
      <button onClick={handlegif}>GIF</button>

      <input type="text" onChange={handleChange} value={textdata} />
      <button onClick={handleAdd}>Send</button>
      {display ? (
        <div
          style={{
            margin: "auto",
            border: "1px solid red",
            height: "400px",
            maxHeight: "400px",
            maxWidth: "300px",
            backgroundColor: "white",
            overflowy: "scroll",
          }}
        >
          <input onChange={handlegifchange} value={gifsearch} />
        </div>
      ) : null}
    </Div>
  );
};

export default Input;
