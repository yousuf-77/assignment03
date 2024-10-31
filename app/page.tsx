import Image from "next/image"
import AboutUs from "@/components/about-component/about"
import Portfolio from "@/components/portfolio-component/portfolio"
const HomePage=()=>{
  return(
    <main>
    <div className="bg-[url(/images/purple-bgc.jpg)] bg-no-repeat bg-cover h-[75vh]">
    <div className="flex pt-[80px] items-center justify-around">
    <div className="w-[50%] px-[40px] ml-9">
      <h1 className="text-5xl font-bold mb-[16px] text-yellow-100">Lorem ipsum dolor sit </h1>
      <h3 className="text-xl font-medium mb-[12px] w-[90%] text-yellow-100" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quam vitae veritatis odio consectetur Magnam quis officiis voluptates quia?</h3>
    </div>
    <div className="w-[50%]"><Image className=" rounded-[16px]" src="/images/man-computer.jpg" alt="" width={600} height={400}/></div>
    </div>
    </div>
    <AboutUs></AboutUs>
    <Portfolio></Portfolio>
    </main>
  )
}
export default HomePage