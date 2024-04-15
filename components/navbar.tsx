import Image from 'next/image';

let navbarTitles: string[] = [
  "Stream",
  "Monitoring",
  "Extra",
  "Management",
  "Reputation",
  "Social CRM"
]

export default function Navbar() {
  return (
    <aside id="sidebar" className="m-3 col-span-2 h-screen">
      <ul className="bg-gray-900 flex flex-col h-full rounded">
        <Image
          src="/next.svg"
          width={150}
          height={20}
          className="relative invert dark:invert px-3 py-5 mb-3"
          alt="Next.js Logo"
          priority
        />
        {navbarTitles.map((title, index) => (
          <li key={index} className="px-3 py-3 my-1 capitalize cursor-pointer bg-gray-900 hover:bg-gray-800">{title}</li>

        ))}
        {/* <li className="p-3 my-1 capitalize bg-blue-500 hover:bg-blue-400 hover:cursor-pointer">monitoring</li>
        <li className="p-3 my-1 capitalize bg-blue-500 hover:bg-blue-400 hover:cursor-pointer">extra</li>
        <li className="p-3 my-1 capitalize bg-blue-500 hover:bg-blue-400 hover:cursor-pointer">Management</li>
        <li className="p-3 my-1 capitalize bg-blue-500 hover:bg-blue-400 hover:cursor-pointer">Reputation</li>
        <li className="p-3 my-1 capitalize bg-blue-500 hover:bg-blue-400 hover:cursor-pointer">Social CRM</li> */}
      </ul>
    </aside>
  )
}
