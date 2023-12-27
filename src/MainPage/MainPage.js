import React from "react";
import "./MainPage.css";
import { Paper } from "@mui/material";

const MainPage = () => {
  return (
    <div className="body">
      <div className="container">
        <h2 className="mt-3 p-1">File Upload</h2>
        <form>
          <div>
            <label for="videoFile" className="button">
              Select Video File:{" "}
            </label>
            <input
              type="file"
              id="videoFile"
              accept="video/*"
              required
              className="ml-2 p-2"
            />
          </div>

          <div>
            <label for="jsonFile" className="button">
              Select JSON File:{" "}
            </label>
            <input
              type="file"
              id="jsonFile"
              accept=".json"
              required
              className="ml-2 p-2"
            />
          </div>

          <button className="btn btn-secondary m-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MainPage;
