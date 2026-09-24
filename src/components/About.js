import React, { useState } from "react";

export default function About(props) {

  const myStyle = {
    color: props.mode === 'light' ? 'black' : 'white',
    backgroundColor: props.mode === 'light' ? 'white' : 'black'
  };

 

  return (
    <>
      <div className="container" style={{color : props.mode === 'light' ? 'black' : 'white',}}>
        <h2>About Us</h2>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>

            <div id="collapseOne" className="accordion-collapse collapse">
              <div className="accordion-body" style={myStyle} >
                This is first item.
              </div>
            </div>

            
          </div>
        </div>
      </div>

      {/* <div className="container my-3">
        <button className="btn btn-primary mx-2" onClick={Dark}>
          {btnText}
        </button>
      </div> */}
    </>
  );
}
