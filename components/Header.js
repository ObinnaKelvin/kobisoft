import Image from "next/image";

export default function Header () {
  return (
    
    <header className="flex flex-col gap-3 items-center justify-center w-[100%] absolute mt-4">
      <div className="w-[80%]">
        <Image className='cursor-pointer' src="/logoheader.png" alt="social media links" width={50} height={30} />
      </div>
    </header>

  )
};
