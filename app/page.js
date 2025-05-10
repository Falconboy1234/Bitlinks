import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[50vh]">
      <div className="bg-indigo-300 flex flex-col gap-4 items-center justify-center">
        <p className="font-bold text-2xl">
          The best URL shortener
        </p>
        <p>
          Shorten your links and share them with the world.
        </p>
        
          <Link className='bg-indigo-500 rounded-xs p-1' href="/Shorten">Try now</Link>
        
      </div>
      <div className=" flex justify-evenly ">
        <Image className="mix-blend-plus-darker relative"
          src={"/icon1.svg"}
         alt='shortener'
          height={700}
          width={700}
         
        />
      </div >
      </section>
    </main>
  );
}
