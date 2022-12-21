import React from "react";
import { useSelector } from "react-redux";

const AddNum = () => {
  const data = useSelector((state) => {
    return state.show;
  });

  return (
    <>
      {/* Answer*/}
      <div className="form-group mb-4">
        <label htmlFor="ans">Answer</label>
        <input
          type="number"
          className="form-control"
          placeholder="Your answer"
          name="ans"
          disabled
          value={Number(data.first + data.second)}
        />
      </div>
    </>
  );
};

export default AddNum;
