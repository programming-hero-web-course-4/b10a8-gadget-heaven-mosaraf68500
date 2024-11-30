import Navbar from "../Navbar/Navbar";
import image from "../../assets/banner.jpg"

const Banner = () => {
    return (
        <div className="relativ">
        <div className=" pt-10 bg-[#9538E2]   rounded-xl text-white min-h-screen">
        {/* <Navbar></Navbar> */}
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-2xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className=" py-2 px-3 font-semibold rounded-3xl bg-white text-[#9538E2]">Shop Now</button>
    </div>
  </div>

 
</div>
 
<div className="absolute top-[450px] text-center">
<img className="w-2/5  rounded-2xl boder border-gray-200 mx-auto" src={image} alt="" />
</div>
            
        </div>
    );
};

export default Banner;