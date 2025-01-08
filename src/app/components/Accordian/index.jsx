import React from "react";
import data from "./data";

const Accordian = () => {
    console.log(data)
    return(
        <div>
            {
                data.map((item, index) => {
                    console.log("item", item)
                    return(
                        <div key={index}>
                            {item.title}
                        </div>    
                    )
                })
            }
        </div>
    )
}

export default Accordian;