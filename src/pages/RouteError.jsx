import { useRouteError, Link } from "react-router-dom";

function RouteError() {
  const error = useRouteError();

  console.error(error);

  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-4
      "
    >
      <div
        className="
          card
          max-w-xl
          w-full
          text-center
          p-8
        "
      >
        <div
          className="
            mx-auto
            mb-6
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-[var(--primary)]
            to-[var(--secondary)]
            text-4xl
            text-white
          "
        >
          ⚠️
        </div>

        <h1
          className="
            text-3xl
            md:text-4xl
            font-bold
            text-[var(--text-primary)]
          "
        >
          Something Went Wrong
        </h1>

        <p
          className="
            mt-4
            text-[var(--text-secondary)]
          "
        >
          We couldn't load this page.
        </p>

        {error?.message && (
          <p
            className="
              mt-3
              text-sm
              text-[var(--text-secondary)]
              break-words
            "
          >
            {error.message}
          </p>
        )}

        <Link
          to="/"
          className="
            btn-primary
            inline-flex
            mt-8
          "
        >
          Back To Home
        </Link>
      </div>
    </section>
  );
}

export default RouteError;