import { Outlet } from "react-router";
import { Navbar } from "../../common/components/navbar/navbar";
import { useState } from "react";
import { TutorialOverlay } from "../components/overlay/tutorial-overlay";

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
