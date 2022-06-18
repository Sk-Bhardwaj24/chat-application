import React from "react";

const Output = ({ text, gifoutput }) => {
  // console.log(text, gifoutput);
  return (
    <div>
      {text !== undefined
        ? text.map((eachtext, idx) => <p key={idx}>{eachtext}</p>)
        : null}
      {gifoutput !== undefined
        ? gifoutput.map((each, idx) => (
            <div key={idx}>
              <img src={each} alt="Gif.." width="250px" height="250px" />
            </div>
          ))
        : null}
    </div>
  );
};

export default Output;
