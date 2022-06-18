import React from "react";
import Output from "./Output";
import styled from "styled-components";
const Div = styled.div`
  color: white;
`;
const Input = () => {
  const [textdata, setTextdata] = React.useState("");
  const [output, setOutput] = React.useState([]);
  const [display, setDisplay] = React.useState(false);
  const [gifsearch, setGifsearch] = React.useState("");
  const [gif, setGif] = React.useState([]);
  const [gifoutput, setGifoutput] = React.useState([]);
  const handleChange = (e) => {
    setTextdata(e.target.value);
  };
  const handleAdd = () => {
    const payload = {
      text: textdata,
      gifmessage: "",
    };
    setOutput([...output, payload]);
  };
  const handlegif = () => {
    display ? setDisplay(false) : setDisplay(true);
  };
  const handlegifchange = (e) => {
    // console.log(e.target.value);
    setGifsearch(e.target.value);
  };
  const getgif = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=wHbnWRoiesIzNZyKdJcTK1C6V39RpCc7&q=${gifsearch}&limit=25&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((res) => setGif(res.data));
  };
  const addGif = (url) => {
    setGifoutput([...gifoutput, url]);
    console.log(url);
  };
  const handlegifmessage = () => {
    getgif();
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
            overflowY: "scroll",
          }}
        >
          <input onChange={handlegifchange} value={gifsearch} />
          <button onClick={handlegifmessage}>Search</button>
          {/* {console.log(gif[0].images.downsized_still.url)} */}
          {gif.map((each, idx) => (
            <div key={idx}>
              <img
                src={each.images.downsized_still.url}
                width="250px"
                height="250px"
                alt="GIF"
                onClick={() => addGif(each.images.downsized_still.url)}
              />
            </div>
          ))}
        </div>
      ) : null}
      <Output text={output} gifoutput={gifoutput} />
    </Div>
  );
};

export default Input;
