import React from "react";

const DataCard=({data="numerical data",text="text here",cardNo=1, key=``})=>{
    return(
        <div className="p-5 bg-[#EAF0F1] shadow rounded-md justify-self-stretch hover:bg-slate-200 ">
            <p className="text-5xl font-bold text-black">{data}</p>
            <p className="text-md my-6 text-black">{text}</p>
            <p className="text-black">{cardNo}</p>
        </div>
    )
}

export default DataCard