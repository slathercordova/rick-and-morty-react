import { Outlet } from "react-router";
import { Navbar } from "../../common/components/navbar/navbar";

export function MainLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
