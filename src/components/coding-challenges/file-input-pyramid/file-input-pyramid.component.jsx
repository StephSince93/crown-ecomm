import "./file-input-pyramid.styles.scss";
import { useState } from "react";
const FileInputPyramid = () => {
  const [fileData, setFileData] = useState("");
  function handleChange(event) {
    event.preventDefault();

    const reader = new FileReader();

    reader.onload = async (e) => {
      const text = e.target.result;
      let split = text.split("\n");
      let hash = {};
      for (let i = 0; i < split.length; i++) {
        let spl = split[i].split(" ");
        hash[spl[0]] = spl[1].replace("\r", "");
      }

      let count = 1;
      let pyrCount = 3;
      let resStr = "";

      while (count < Object.keys(hash).length) {
        if (count === 1) {
          resStr += hash[count];
          count++;
        } else if (count === 2) {
          resStr += " " + hash[count + 1];
          count += 2;
        } else {
          let subCount = 0;
          let sampArr = [];
          while (subCount < pyrCount) {
            sampArr.push(hash[count]);
            count++;
            subCount++;
          }
          if (!sampArr[pyrCount - 1]) break;
          resStr += " " + sampArr[pyrCount - 1];
          pyrCount += 2;
        }
      }
      setFileData(resStr);
    };
    reader.readAsText(event.target.files[0]);
  }
  return (
    <div className="pyramid-challange">
      <h1 className="pyramid-title">File Input Pyramid Challenge</h1>
      <input
        className="pyramid-input"
        type="file"
        onChange={handleChange}
      ></input>
      <p className="pyramid-text">{fileData || "No Output"}</p>
    </div>
  );
};

export default FileInputPyramid;
