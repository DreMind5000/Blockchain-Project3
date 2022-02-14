import React from "react";
import InfographicPic from "../public/images/Infographic.jpg";
import Image from "next/image";

function Infographic() {
  return (
    <>
      <Image src={InfographicPic} />
    </>
  );
}
export default Infographic;
