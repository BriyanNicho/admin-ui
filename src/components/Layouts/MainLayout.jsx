import React, { useContext } from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Icon from "../Elements/Icon";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";

function MainLayout(props) {
  const { children } = props;
  const { theme, setTheme } = useContext(ThemeContext);

  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];

  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
    { id: 3, name: "Transaction", icon: <Icon.Transaction />, link: "/transaction" },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

  return (
    // 1. KONTINER UTAMA: Mengunci layar penuh (h-screen) & menjaga Theme
    <div className={`flex h-screen w-full bg-special-mainBg overflow-hidden ${theme.name}`}>
      
      {/* 2. SIDEBAR: Diam (Fixed), tapi bisa di-scroll mandiri jika daftar tema/menu terlalu panjang */}
      <aside className="bg-defaultBlack w-20 sm:w-64 text-special-bg2 flex flex-col justify-between px-4 sm:px-7 py-8 sm:py-12 overflow-y-auto">
        <div>
          <div className="mb-10 flex justify-center sm:justify-start">
            <Logo variant="secondary" />
          </div>
          <nav className="flex flex-col gap-2">
            {menu.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-md transition-all duration-300 hover:text-white hover:scale-105 ${
                    isActive
                      ? "bg-primary text-white font-bold"
                      : "hover:bg-special-bg3"
                  }`
                }
              >
                <div className="flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">{item.icon}</div>
                <div className="ms-3 hidden sm:block whitespace-nowrap">{item.name}</div>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="mt-8">
          {/* Pilihan Tema (Tetap utuh, dengan tambahan sedikit animasi hover) */}
          <div className="mb-8 flex flex-col items-center sm:items-start">
            <div className="text-sm mb-3 hidden sm:block text-gray-03 font-medium">Themes</div>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center flex-wrap">
              {themes.map((t) => (
                <div
                  key={t.name}
                  className={`${t.bgcolor} w-6 h-6 rounded-md cursor-pointer hover:scale-125 transition-transform shadow-sm`}
                  onClick={() => setTheme(t)}
                  title={t.name}
                ></div>
              ))}
            </div>
          </div>
          
          <NavLink to="/signin" className="block mb-6 sm:mb-10">
            <div className="flex items-center justify-center sm:justify-start bg-special-bg3 text-white px-4 py-3 rounded-md transition-colors hover:bg-special-red cursor-pointer">
              <div className="flex-shrink-0 flex items-center justify-center text-primary hover:text-white transition-colors">
                <Icon.Logout />
              </div>
              <div className="ms-3 hidden sm:block">Logout</div>
            </div>
          </NavLink>
          
          <div className="border-t border-special-bg my-6 w-full"></div>
          
          {/* Avatar Area */}
          <div className="flex justify-center sm:justify-between items-center cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-gray-03 flex items-center justify-center text-white font-bold flex-shrink-0">
              A
            </div>
            <div className="hidden sm:block text-sm ms-3">
              <span className="font-bold text-white">Username</span>
              <br />
              <span className="text-xs text-gray-03">View Profile</span>
            </div>
            <div className="hidden sm:block ms-auto">
              <Icon.Detail />
            </div>
          </div>
        </div>
      </aside>

      {/* 3. AREA KONTEN: Header Tetap, Isi bisa di-scroll */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Header */}
        <header className="border-b border-gray-05 px-6 py-5 flex justify-between items-center bg-transparent backdrop-blur-sm z-10">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <h1 className="font-bold text-2xl text-defaultBlack sm:me-6">Hello, Username!</h1>
            <div className="text-gray-03 text-sm hidden sm:block">May 19, 2023</div>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <button className="relative p-2 rounded-full hover:bg-gray-06 transition-colors">
              {/* Notifikasi tetap memakai text-primary sesuai kode Anda */}
              <NotificationsIcon className="text-primary scale-110" />
              <span className="absolute top-1 right-2 w-2 h-2 bg-special-red rounded-full"></span>
            </button>
            <div className="hidden sm:block">
              <Input backgroundColor="bg-white" border="border-gray-05" placeholder="Search..." />
            </div>
          </div>
        </header>

        {/* 4. AREA MAIN: Di sinilah letak konten dashboard yang di-scroll */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 sm:p-8">
          {children}
        </main>
        
      </div>
    </div>
  );
}

export default MainLayout;