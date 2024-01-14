import React from "react";

const Legend = ({ legendItems }) => {
  console.log(legendItems);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {legendItems.map((item) => { return(
        <div
        key={item.title}
        style={{
            backgroundColor:item.color,
            flex:1,
            display:"flex",
            alignItems:'center',//vertical
            justifyContent:'center', //horizontal
            color: item.textColor,
            height:"10vh",
            fontWeight:"bold",
            fontSize:'1.5em'
        }}
        >
          <span>{item.title}</span>
        </div>
      )
        
      })}
    </div>
  );
};

export default Legend;
