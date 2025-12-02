// next image
import Image from "next/image";


const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/avatar.png'} width={500} height={500} />
  </div>;
};

export default Avatar;