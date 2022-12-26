import { useState } from "react";

const ExportPannel = ({ header, children }) => {
  const [expand, setExpand] = useState(false);

  const handleChange = () => {
    setExpand(!expand);
  };
  return (
    <div style={{ width: "70%", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "lightgray",
            height: "80px",
            borderRadius: "0px",
          }}
        >
          {header}
        </div>
        <button
          style={{
            backgroundColor: "lightgray",
            textAlign: "center",
            height: "80px",
            cursor: "pointer",
          }}
          onClick={handleChange}
        >
          {expand ? "Colapse" : "Expand"}
        </button>
      </div>
      {expand && (
        <div
          style={{
            width: "100%",
            backgroundColor: "lightgray",
            height: "60px",
            borderRadius: "0px",
            border: "2px solid gray",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
export default ExportPannel;
