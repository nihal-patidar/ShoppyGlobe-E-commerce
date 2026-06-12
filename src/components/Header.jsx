import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header() {
  // Retrieve cart items from Redux store
  // Used to display the total number of products in cart
  const items = useSelector((state) => state.cart.items);

  // Dynamic styling for active and inactive navigation links
  const navLinkStyles = ({ isActive }) =>
    `
    relative
    px-4
    py-2
    rounded-xl
    font-medium
    transition-all
    duration-300
    active:scale-95
    ${
      isActive
        ? `
          text-white
          bg-gradient-to-r
          from-[var(--primary)]
          to-[var(--secondary)]
          shadow-lg
        `
        : `
          text-[var(--text-primary)]
          hover:bg-white/10
          hover:scale-105
        `
    }
  `;

  return (
    <header
      className="
        sticky
        top-0
        z-50
        backdrop-blur-xl
        bg-[var(--bg-card)]
        border-b
        border-[var(--border-color)]
      "
    >
      <div
        className="
          page-container
          py-4
        "
      >
        {/* Header content wrapper */}
        <div
          className="
            flex
            items-center
            justify-between
            gap-4
            flex-wrap
          "
        >
          {/* Brand logo and application title */}
          <Link
            to="/"
            className="
              flex
              items-center
              gap-3
              shrink-0
            "
          >
            {/* Brand icon */}
            <div
              className="
                h-11
                w-11
                rounded-2xl
                flex
                items-center
                justify-center
                text-white
                font-bold
                text-lg
                bg-gradient-to-r
                from-[var(--primary)]
                to-[var(--secondary)]
              "
            >
              S
            </div>

            {/* Brand name */}
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

          {/* Product search component */}
          <SearchBar />

          {/* Main navigation menu */}
          <nav
            className="
              order-2
              flex
              items-center
              gap-2
              md:order-3
            "
          >
            <NavLink to="/" className={navLinkStyles}>
              Home
            </NavLink>

            <NavLink to="/checkout" className={navLinkStyles}>
              Checkout
            </NavLink>

            <NavLink to="/cart" className={navLinkStyles}>
              <span className="flex items-center gap-2">
                Cart

                {/* Cart item count badge */}
                <span
                  className="
                    min-w-6
                    h-6
                    px-2
                    flex
                    items-center
                    justify-center
                    rounded-full
                    text-xs
                    font-bold
                    bg-[var(--highlight)]
                    text-slate-900
                  "
                >
                  {items.length}
                </span>
              </span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;