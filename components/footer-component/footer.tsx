import Link from "next/link"
export default function Footer(){
  return(
    <div>
    <div className="flex justify-around bg-slate-600 pb-4">
      <div className="flex flex-col w-[25%] ml-7">
        <h6 className="text-xl font-semibold underline mt-6 text-yellow-50">Company Name</h6>
        <p className="w-[80%] mt-2 text-slate-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla natus, distinctio nobis porro.</p>
      </div>
      <div className="w-[25%]"> 
        <h6 className="text-xl font-semibold underline mt-6 text-yellow-50">Products</h6>
        <ul>
          <li className="mt-1 text-slate-200">Loremdsa</li>
          <li className="mt-1 text-slate-200">Ipsumdas</li>
          <li className="mt-1 text-slate-200">Dolordad</li>
          <li className="mt-1 text-slate-200">SItdadad</li>
        </ul>
      </div>
      <div className="w-[25%]">
        <h6 className="text-xl font-semibold underline mt-6 text-yellow-50">Useful Links</h6>
        <ul>
          <li className=" mt-1 text-slate-200"><Link href={'./'} >Home</Link></li>
          <li className="mt-1 text-slate-200"><Link href={'./About'} >About US</Link></li>
          <li className="mt-1 text-slate-200"><Link href={'./Portfolio'} >Portfolio</Link></li>
        </ul>
      </div>
    </div>
    <div className=" bg-slate-700"><p className="text-center text-slate-200">© 2024 Copyright: Lorem Ipsum</p></div>
    </div>
  )
}