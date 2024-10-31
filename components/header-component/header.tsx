import Link from "next/link";
const Header=()=>{
  return(
    <header>
      <nav className="bg-indigo-900 h-[60px]">
        <ul className=" flex justify-around items-center">
          <li className="text-white bg-violet-500 text-[26px] mt-[10px] px-[4px] rounded-[6px] "><Link href={'./'}> Home</Link></li>
          <li className="text-white  bg-violet-500 text-[26px] mt-[10px] px-[4px] rounded-[6px] "><Link href={'./Portfolio'}> Portfolio</Link></li>
          <li className="text-white  bg-violet-500 text-[26px] mt-[10px] px-[4px] rounded-[6px] "><Link href={'./About'}>About </Link></li>
          <li className="text-white  bg-violet-500 text-[26px] mt-[10px] px-[4px] rounded-[6px] ">Contact</li>
        </ul>
      </nav>
    </header>
  )
}
export default Header