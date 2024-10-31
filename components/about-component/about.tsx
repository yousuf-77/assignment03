export default function AboutUs(){
return(
  <div className="bg-[url(/images/about-us-bg.jpeg)] h-[580px] pt-[72px]">
    <h1 className="text-center text-5xl font-bold text-white">About Us</h1>
    <div className="flex mt-20 items-center justify-around">
    <div className="w-[30%] flex flex-col items-center bg-[#A1D4E9] rounded-3xl py-[18px]">
      <h3 className="text-2xl font-semibold mb-2">Lorem Ipsum</h3>
    <p className="w-[90%] text-center text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor distinctio laborum, aliquid voluptatem veritatis magni tenetur voluptate nam sapiente rerum at quos temporibus necessitatibus qui possimus recusandae? Accusamus, veritatis!</p>
    </div>
    <div className="w-[30%] flex flex-col items-center bg-[#A8EAA3] rounded-3xl py-[18px]">
      <h3 className="text-2xl font-semibold mb-2 ">Ipsum Dolor</h3>
    <p className="w-[90%] text-center text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor distinctio laborum, aliquid voluptatem veritatis magni tenetur voluptate nam sapiente rerum at quos temporibus necessitatibus qui possimus recusandae? Accusamus, veritatis!</p>
    </div>
    <div className="w-[30%] flex flex-col items-center bg-[#ECA3CE] rounded-3xl py-[18px]">
      <h3 className="text-2xl font-semibold mb-2">Dolor Sit</h3>
    <p className="w-[90%] text-center text-[18px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor distinctio laborum, aliquid voluptatem veritatis magni tenetur voluptate nam sapiente rerum at quos temporibus necessitatibus qui possimus recusandae? Accusamus, veritatis!</p>
    </div>
    </div>
  </div>
)
}