import React from "react";
import Output from "./Output";
import styled from "styled-components";
const Div = styled.div`
  color: white;
  margin: 40vw;
  margin-top: 80px;
  .input-box {
    display: flex;
    margin: auto;
  }
  textarea {
    width: 300px;
    height: 40px;
    border-radius: 40px;
    box-sizing: border-box;
    padding-left: 25px;
    padding-right: 25px;
    outline: none;
    background-color: rgb(36, 37, 38);
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    color: white;
  }
  .scroll::-webkit-scrollbar {
    display: none;
  }
  .button:focus {
    outline: none;
  }

  .gif-input-box {
    margin-top: 20px;
  }
`;
const Input = styled.input`
  height: 40px;
  width: 150px;
  border-radius: 40px;
  outline: none;
  background-color: rgb(36, 37, 38);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  color: white;
  padding: 5px;
`;
const Button = styled.button`
  box-sizing: border-box;
  width: 80px;
  height: 46px;
  border-radius: 40px;
  background-color: rgb(33, 48, 169);
  color: white;
  /* border-color: rgb(33, 48, 169); */
`;
const InputBox = () => {
  const [textdata, setTextdata] = React.useState("");
  const [output, setOutput] = React.useState([]);
  const [display, setDisplay] = React.useState(false);
  const [gifsearch, setGifsearch] = React.useState("");
  const [gif, setGif] = React.useState([]);

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
    const payload = {
      text: "",
      gifmessage: url,
    };
    setOutput([...output, payload]);
    setDisplay(false);
  };
  const handlegifmessage = () => {
    getgif();
  };

  return (
    <Div>
      <div className="input-box">
        <div>
          {" "}
          <Button onClick={handlegif}>GIF</Button>
        </div>
        <div>
          {" "}
          <textarea
            className="scroll"
            type="text"
            onChange={handleChange}
            value={textdata}
          ></textarea>
        </div>

        <div>
          {" "}
          <Button onClick={handleAdd}>Send</Button>
        </div>
      </div>

      {display ? (
        <div
          style={{
            margin: "auto",

            height: "400px",
            maxHeight: "400px",
            maxWidth: "300px",

            backgroundColor: "rgb(36, 37, 38)",
            overflowY: "scroll",
            boxShadow: " 0 20px 40px rgba(0, 0, 0, 0.9)",
          }}
        >
          <div className="gif-input-box">
            <Input onChange={handlegifchange} value={gifsearch} />
            <Button onClick={handlegifmessage}>Search</Button>
          </div>

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
      <Output output={output} />
    </Div>
  );
};

export default InputBox;
