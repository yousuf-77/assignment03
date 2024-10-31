import Image from "next/image"
const Portfolio=()=>{
return (
<div className="bg-[url(/images/stars-image.png)] h-[640px] pt-10">
<div className="text-white text-[52px] font-bold text-center backdrop-blur-sm ">Portfolio</div>
      <div className="flex items-center justify-around backdrop-blur-sm h-[450px] pt-[20px]">
        <div className="w-[60%] p-[40px] ml-16">
          <h1 className="text-white text-5xl font-bold mb-[16px]">I am Muhammad Yousuf</h1>
          <h2 className="text-white text-4xl font-semibold mb-[16px]">Front End Developer</h2>
          <h3 className="text-white text-xl font-medium mb-[12px] w-[95%]">I am currently expanding my skill set in full-stack development and artificial intelligence at GIAIC. Passionate and excited about these fields, I look forward to applying my knowledge to create innovative solutions and drive impactful projects.</h3>
        </div>
        <div className="w-[40%]"><Image className="rounded-[50%]" src="/images/boy-image.png" alt="" height={340} width={340}></Image></div>
      </div>
        <h1>My Projects</h1>
      </div>
)
}
export default Portfolio