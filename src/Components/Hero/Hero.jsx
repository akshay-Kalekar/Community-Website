import React from "react";
import Card from "./Card";

const Hero = () => {
  return (
    <div>
      <div>
        {/*Left Side*/}
        <div>
          <div>Let’s Connect with people in tech</div>
          <div>A group for peer learning which keeps the community engaged</div>
          <button> Join Discord </button>
        </div>
        {/*Right Side */}
        <div>
          <img src=""/>
        </div>
      </div>

  { /*Two Big Card*/}
      <div>
      <Card Title={"Why DevMatrix"} Description={"A group of individuals with similar interests and goals join forces to support and develop each other through shared knowledge, experiences, and resources. "} />
      <Card Title={"Our Concept"} Description={"Our emphasis is on quality rather than quantity. Your commitment to consistent growth is our primary requirement. Persistence and hard work are crucial to achieving success."}/>
      </div>
    </div>
  );
};

export default Hero;
