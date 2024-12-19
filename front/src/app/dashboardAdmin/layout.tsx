// import Sidebar from "@/components/SideBar";
// import React from "react";

// export default function Dashboard({ children }: { children: React.ReactNode }) {
//   return (
// <div className="bg-white text-black">
//       <header className="p-4 bg-black text-white text-center">
//         <h1 className="text-2xl font-bold">Dashboard de Administrador</h1>
//       </header>
//       <div className="flex-1 p-1 bg-gray-100">
//       <Sidebar />

//       </div>
//       <main className="flex-1 bg-gray-100 overflow-y-auto">{children}</main>
//     </div>
//   );
// }

import Sidebar from "@/components/SideBar";
import React from "react";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="p-4 bg-black text-white text-center fixed top-6 left-0 w-full z-20">
        <h1 className="text-2xl font-bold">Dashboard de Administrador</h1>
      </header>
      <div className="bg-white text-black flex flex-col h-screen pt-16">
        <div className="flex flex-1 bg-gray-100">
          <Sidebar />
          <main className="flex-1 p-4 bg-gray-100 overflow-y-auto ml-5">
            {children}
          </main>
        </div>
      </div>
      
    </>
  );
}
