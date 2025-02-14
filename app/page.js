import Link from 'next/link';
// import HeroImg from '../public/certification/mgbp.jpg';
export default function Home() {
  return (
    <div className="h-screen flex flex-wrap pt-28">
      <div className='binary-code z-0'></div>
      
      {/* <div className='flex flex-wrap md:flex-row flex-row-reverse'> */}
      <div className='flex flex-wrap-reverse'>
        <div className='md:w-1/2 w-full flex flex-col justify-center items-start p-10 z-10'>
        <h1 className='text-7xl my-4 title'>Jaya Chandra Naidu</h1>
        <h2 className='text-3xl my-2 title2'>Cybersecurity enthusiast</h2>
        <p className='text-base my-2'>With a deep-rooted passion for cybersecurity, I specialize in identifying vulnerabilities, implementing effective defenses, and developing strategies to combat the ever-growing landscape of cyber threats. As a cybersecurity enthusiast, I focus on ethical hacking, penetration testing, and security architecture, always staying ahead of the curve in securing digital assets. My goal is to empower businesses and individuals with the knowledge and tools necessary to protect their data and infrastructure, ensuring a safer digital world for everyone.</p>

        <div className='flex flex-wrap justify-start items-center w-full my-1'>
          <Link href="/Contact" className='m-4 text-xl border p-3 rounded-xl button'>Contact Me</Link>
          <Link href="/Experience" className='m-4 text-xl border p-3 rounded-xl button2'>Experience</Link>
        </div>
        </div>

        <div className='md:w-1/2 w-full flex justify-center items-center z-10'>
          <img src="https://media.licdn.com/dms/image/v2/D5635AQGLAWPolzRnHg/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1731271433846?e=1740128400&v=beta&t=yQ2dYjW1fnpwdPtF6F0JXhVXuAYyfNBEeQ9eDRcLwTY" alt="Profile Image" className='h-[400px] w-[400px] rounded-full transform transition-transform duration-300 hover:scale-110'/>
        </div>
      </div>
    </div>
  );
}
