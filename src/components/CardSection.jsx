import React, { useEffect, useState } from "react";
import DataCard from "./DataCard";

const CardSection = () => {
  const [count, setCount] = useState(0);
  const CardInfo = [
    {
      data: "$500M",
      text: "In funding secured owning to our designs",
      cardNo: 1,
    },
    {
      data: "+1 million",
      text: "Increase in customer base",
      cardNo: 2,
    },
    {
      data: "1 000 000+",
      text: "Of active marketplace users",
      cardNo: 3,
    },
    {
      data: "25 million",
      text: "Monthly E-commerce visits",
      cardNo: 4,
    },
    {
      data: "+300%",
      text: "Increase in sign-up conversion rate",
      cardNo: 5,
    },
    {
      data: "+42%",
      text: "Increase in the app’s retention rate",
      cardNo: 6,
    },
  ];
  useEffect(() => {
    setCount(CardInfo.length);
    console.log(count);
  }, [CardInfo]);

  return (
    <div 
      className=" 
        grid p-5 w-[80vw] mx-auto rounded-md h-auto md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 lg:gap-x-5 gap-y-5 content-evenly justify-center justify-items-center bg-[#DAE0E2] my-10">
          {CardInfo.map(({data,text,cardNo},index)=>(
            <DataCard key={index} data={data} text={text} cardNo={cardNo}/>
        ))}   
    </div>
  );
};

export default CardSection;
