import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div
      className="
        min-h-screen
        bg-[var(--bg-main)]
        text-[var(--text-primary)]
        transition-colors
        duration-300
      "
    >
      {/* Decorative Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="
            absolute
            top-[-150px]
            left-[-100px]
            h-96
            w-96
            rounded-full
            blur-3xl
            opacity-20
            bg-[var(--primary)]
          "
        />

        <div
          className="
            absolute
            bottom-[-150px]
            right-[-100px]
            h-96
            w-96
            rounded-full
            blur-3xl
            opacity-20
            bg-[var(--accent)]
          "
        />
      </div>

      <Header />

      <main
        className="
          page-container
          pt-6
          pb-12
        "
      >
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;