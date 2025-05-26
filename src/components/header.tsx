// import { MenuIcon } from '@/icons'

// src/components/Header.tsx
export default function Header() {

  return (
    <header className="bg-white shadow px-4 py-2
		border-b border-slate-200
		">

		{/* <button 
			// onClick={onClick}
			className="flex-1 p-1.5 rounded-full text-black hover:bg-slate-200 transition-colors duration-150 cursor-pointer " 
		>
			<MenuIcon fontSize={30} />
		</button> */}

      <h1 className="text-xl font-bold
			">Admin Dashboard</h1>
    </header>
  );
}
