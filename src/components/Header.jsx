import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const items = useSelector((state) => state.cart.items);

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-[var(--border-color)]
        backdrop-blur-xl
        bg-[var(--bg-card)]
      "
    >
      <div
        className="
          page-container
          h-18
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="
            group
            flex
            items-center
            gap-2
          "
        >
          <div
            className="
              h-10
              w-10
              rounded-2xl
              flex
              items-center
              justify-center
              text-white
              font-bold
              bg-gradient-to-r
              from-[var(--primary)]
              to-[var(--secondary)]
              transition-transform
              duration-300
              group-hover:rotate-6
            "
          >
            S
          </div>

          <h1
            className="
              text-xl
              md:text-2xl
              font-bold
              tracking-tight
              bg-gradient-to-r
              from-[var(--primary)]
              via-[var(--secondary)]
              to-[var(--accent)]
              bg-clip-text
              text-transparent
            "
          >
            ShoppyGlobe
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-3 md:gap-5">
          <Link
            to="/"
            className="
              px-4
              py-2
              rounded-xl
              font-medium
              text-[var(--text-primary)]
              transition-all
              duration-300
              hover:bg-white/10
              hover:scale-105
            "
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="
              relative
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              font-medium
              text-white
              bg-gradient-to-r
              from-[var(--primary)]
              to-[var(--secondary)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            Cart

            <span
              className="
                min-w-6
                h-6
                px-1.5
                flex
                items-center
                justify-center
                rounded-full
                text-xs
                font-bold
                text-slate-900
                bg-[var(--highlight)]
              "
            >
              {items.length}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;