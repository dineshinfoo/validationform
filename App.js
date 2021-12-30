import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [store, setStore] = useState([]);

  const [add, setAdd] = useState({
    tamil: {
      value: "",
      error: false,
    },
    english: {
      value: "",
      error: false,
    },
    maths: {
      value: "",
      error: false,
    },
    science: {
      value: "",
      error: false,
    },
    social: {
      value: "",
      error: false,
    },
  });

  const errorMsg = "Enter Number && Two Digits only";

  const [show,setshow] = useState (false);

  // const errorNumber='two digits number';

  const changer = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newlist = { ...add };
    newlist[fieldName].value = fieldValue;

    //// regax validation ////
    const regax = /^[1-9][0-9]?$|^100$/;
    if (e.target.value !== "" && regax.test(e.target.value)) {
      newlist[fieldName].error = false;
    } else {
      newlist[fieldName].error = true;
    }

    // const regaxs = /^[1-9][0-9]?$|^100$/;
    // if (e.target.value !== '' && regaxs.test(e.target.value)) {
    //   newlist[fieldName].errorNumbers=false;
    // }else{
    //   newlist[fieldName].errorNumbers=true;
    // }
    // // \b(0*(?:[1-9][0-9]?|100))\b

    // <div className= {(staus==="pass" && "pass") || (staus==="fail" && "fail") }> <b>
    // {staus}
    // </b>

    setAdd(newlist);

    console.log(newlist, "newlist");
  };

  const submit = (e) => {
    e.preventDefault();
    if (
      add.tamil.error ||
      add.english.error ||
      add.maths.error ||
      add.science.error ||
      add.social.error
    ) {
      e.preventDefault();
      return;
    }

    const Success = [
      {
        name: "Tamil",
        value: add.tamil.value,
        status: add.tamil.value >= 35 ? "Pass" : "Fail",
      },
      {
        name: "english",
        value: add.english.value,
        status: add.english.value >= 35 ? "Pass" : "Fail",
      },
      {
        name: "maths",
        value: add.maths.value,
        status: add.english.value >= 35 ? "Pass" : "Fail",
      },
      {
        name: "science",
        value: add.science.value,
        status: add.science.value >= 35 ? "Pass" : "Fail",
      },
      {
        name: "social",
        value: add.social.value,
        status: add.social.value >= 35 ? "Pass" : "Fail",
      },
    ];

    setStore(Success);

    add.tamil.value = "";
    add.english.value = "";
    add.maths.value = "";
    add.science.value = "";
    add.social.value = "";
  };
  console.log(Error.tamil ? "error" : "noerror", "Error.tamil");
  return (
    <div className="parent">
      <div className="wrapper">
        <h2>MarkList</h2>

        <form onSubmit={submit} className="details-form">
          <div className="input-box">
            <br></br>
            <input
              type="text"
              name="tamil"
              required="required"
              placeholder="Tamil"
              value={add.tamil.value}
              onChange={changer}
            />
            <br></br>
            {add.tamil.error && <span className="error">{errorMsg}</span>}
            {/* {add.tamil.errorNumbers&&<span className='error'>{errorNumber}</span>} */}
          </div>
          <div className="input-box">
            <br></br>
            <input
              type="text"
              name="english"
              required="required"
              placeholder="English"
              value={add.english.value}
              onChange={changer}
            />
            <br></br>

            {add.english.error && <span className="error">{errorMsg}</span>}
          </div>
          <div className="input-box">
            <br></br>
            <input
              type="text"
              name="maths"
              required="required"
              placeholder="maths"
              value={add.maths.value}
              onChange={changer}
            />
            <br></br>
            {add.maths.error && <span className="error">{errorMsg}</span>}
          </div>
          <div className="input-box">
            <br></br>
            <input
              type="text"
              name="science"
              required="required"
              placeholder="science"
              value={add.science.value}
              onChange={changer}
            />
            <br></br>
            {add.science.error && <span className="error">{errorMsg}</span>}
          </div>
          <div className="input-box">
            <br></br>

            <input
              type="text"
              name="social"
              required="required"
              placeholder="social"
              value={add.social.value}
              onChange={changer}
            />
            <br></br>
            {add.social.error && <span className="errors">{errorMsg}</span>}
          </div>
          <br></br>

          <div className="input-box button">
            <button type="submit" class="btn">
              Submit
            </button>
          </div>
        </form>

        <div></div>
      </div>
      {store.length>0&&<div className="map">
        <div className="box-tittle">
          <div className="bx">Subject</div>
          <div className="bx2">Mark</div>
          <div className="bx3">Status</div>
        </div>
        {store.map((data) => (
          <div  >
            <div className="mapping">
              <div className="name">{data.name}</div>

              <div className="value">{data.value} </div>
              <div
                className={`status ${data.status === "Fail" && "statusRed"}`}
              >
                {data.status}
              </div>

            </div>
          </div>
        ))}
      </div> }
    </div>
  );
};

export default App;
