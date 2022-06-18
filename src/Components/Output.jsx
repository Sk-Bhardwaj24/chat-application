import React from "react";

const Output = ({ output }) => {
  // console.log(text, gifoutput);
  return (
    <div>
      {output.map((each, idx) => (
        <div key={idx}>
          {each.text !== undefined ? <p>{each.text}</p> : null}
          {each.gifmessage !== "" ? (
            <img
              src={each.gifmessage}
              alt="Gif.."
              width="250px"
              height="250px"
            />
          ) : null}
        </div>
      ))}

      {/* {text !== undefined
        ? text.map((eachtext, idx) => <p key={idx}>{eachtext}</p>)
        : null}
      {gifoutput !== undefined
        ? gifoutput.map((each, idx) => (
            <div key={idx}>
              <img src={each} alt="Gif.." width="250px" height="250px" />
            </div>
          ))
        : null} */}
    </div>
  );
};

export default Output;
