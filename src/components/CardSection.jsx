import React, { useEffect, useState } from "react";
import DataCard from "./DataCard";

const CardSection = () => {
  const [count, setCount] = useState(0);
  const CardInfo = [
    {
      data: "+25%",
      text: "Increase in User Feedback Ratings",
      cardNo: 1,
    },
    {
      data: "+100",
      text: "New Users",
      cardNo: 2,
    },
    {
      data: "500+",
      text: "Project Downloads",
      cardNo: 3,
    },
    {
      data: "+50%",
      text: "Increase in Engagement",
      cardNo: 4,
    },
    {
      data: "+20%",
      text: "Increase in Retention",
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
