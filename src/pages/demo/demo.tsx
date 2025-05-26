import { useState } from "react"
import {
  Menu,
  Home,
  User,
  Settings,
  X,
} from "lucide-react"

type NavItem = {
  icon: React.ReactNode
  label: string
  href: string
}

const navItems: NavItem[] = [
  { icon: <Home size={20} />, label: "Home", href: "#" },
  { icon: <User size={20} />, label: "Users", href: "#" },
  { icon: <Settings size={20} />, label: "Settings", href: "#" },
]

export function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Hamburger toggle */}
      <button
        onClick={() => setOpen(true)}
        className="p-2 m-2 fixed z-50 bg-white dark:bg-gray-800 rounded-md shadow md:hidden"
      >
        <Menu />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-lg
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:w-16 hover:md:w-64 group
        `}
      >
        {/* Close button (mobile only) */}
        <div className="md:hidden flex justify-end p-3">
          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4 flex flex-col gap-2 px-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <span>{item.icon}</span>
              <span
                className="hidden md:group-hover:inline text-sm transition duration-300"
              >
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}



export default Sidebar
