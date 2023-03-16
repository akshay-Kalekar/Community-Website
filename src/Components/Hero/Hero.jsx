import React from "react";
import {FaDiscord} from "react-icons/fa";
import Card from "./Card";

const Hero = () => {
  return (
    <div className="h-[100vh] mb-10">
      <div className="flex h-[50vh] justify-center items-end">
        {/*Left Side*/}
        <div className="flex gap-5 flex-col w-[48vw] h-[50vh] justify-center pl-20 text-left ">
          <div className="text-7xl  ">Let’s Connect <br/>with people in tech</div>
          <div className="text-xl">A group for peer learning which keeps the community engaged</div>
          <button className="bg-black text-white w-fit px-4 py-4 rounded-md flex justify-center items-center gap-4"> <FaDiscord/> Join Discord </button>
        </div>
        {/*Right Side */}
          <div className="w-[40vw] h-[50vh]">
          <img src="Community.png" className="w-4/5"/>
        </div>
      </div>

  { /*Two Big Card*/}
      <div className="h-[45vh] flex justify-center gap-10">
      <Card Color={0} Title={"Why DevMatrix"} Description={"A group of individuals with similar interests and goals join forces to support and develop each other through shared knowledge, experiences, and resources. "} />
      <Card Color={1} Title={"Our Concept"} Description={"Our emphasis is on quality rather than quantity. Your commitment to consistent growth is our primary requirement. Persistence and hard work are crucial to achieving success."}/>
      </div>
    </div>
  );
};

export default Hero;
