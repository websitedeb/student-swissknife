import { Header } from "@/components/ui/header";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="text-white text-6xl font-bold font-sans text-center p-[300] shadow-lg mx-auto grid max-h-screen border-l-0 border-r-0 border-t-0 border-b-0 place-items-center -mt-[96px]">
        <div className="flex justify-center items-center">  
            &nbsp;
            <Image
                src="/icon.png"
                alt="Site Logo"
                width={200}
                height={200}
                className="h-[200] w-[200]"
            />
        </div>
        <h1>Student Swiss Knife</h1>
        <p className="text-2xl p-3 font-mono text-red-300">A Toolbox for Stressed Students</p>
      </div>
    </>
  );
}
