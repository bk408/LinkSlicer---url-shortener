import Header from "@/components/Header"
import { Outlet } from "react-router-dom"


const AppLayout = () => {
  return (
      <div>
          <main className="min-h-screen container">
              <Header />
             <Outlet />
          </main>
          {/* Footer */}
          <div className="bg-gray-800 p-10 text-center mt-10">
              Made with 💖 by Bhavya Khatri
          </div>

    </div>
  )
}

export default AppLayout