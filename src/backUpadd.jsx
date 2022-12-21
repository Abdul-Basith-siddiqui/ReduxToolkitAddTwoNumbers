import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showData } from "../features/showSlice";
// import { useSelector } from "react-redux";
import AddNum from "./addNum";

const Add = () => {
  const [num, setNum] = useState({
    num1: 0,
    num2: 0,
    ans: 0,
  });
  console.log(num);

  const dispatch = useDispatch();
  //   const data = useSelector((state) => {
  //     return state.show;
  //   });

  //   console.log(data);

  const handleChange = (e) => {
    e.preventDefault();
  };

  const handleReset = () => {
    setNum((prevValue) => {
      return {
        ...prevValue,
        num1: "",
        num2: "",
        ans: "",
      };
    });
  };

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setNum((prevValue) => {
      return {
        ...prevValue,
        [name]: parseInt(value),
      };
    });
  };

  return (
    <div className=" marginTop h-100 d-flex align-items-center justify-content-center">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">
            <h2>ADD TWO NUMBERS</h2>
          </div>
          <div className="card-body">
            <form className="form-inline" onSubmit={handleChange}>
              {/* first Input */}
              <div className="form-group mb-4">
                <label htmlFor="num1">first Input</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter first number"
                  name="num1"
                  value={num.num1}
                  onChange={changeHandle}
                />
              </div>

              {/* second Input */}
              <div className="form-group mb-4">
                <label htmlFor="num2">second Input</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Second number"
                  name="num2"
                  value={num.num2}
                  onChange={changeHandle}
                />
              </div>

              <AddNum />

              {/* Answer */}
              {/* <div className="form-group mb-4">
                <label htmlFor="ans">Answer</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Your answer"
                  name="ans"
                  disabled
                  value={Number(data.first + data.second)}
                />
              </div> */}

              {/* Submit and reset Button */}
              <button
                onClick={handleReset}
                className="btn btn-secondary btn-sm"
              >
                RESET
              </button>
              <button
                type="submit"
                className="btn btn-success btn-sm"
                onClick={() =>
                  dispatch(
                    showData({
                      first: num.num1,
                      second: num.num2,
                    })
                  )
                }
              >
                ADD
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default Add;
