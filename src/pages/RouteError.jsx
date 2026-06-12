import { useRouteError, Link } from "react-router-dom";

function RouteError() {
  // Retrieve route error information
  const error = useRouteError();

  // Log errors only during development
  if (import.meta.env.DEV) {
    console.error(error);
  }

  // Extract the most useful error information available
  const errorMessage =
    error?.message ||
    error?.statusText ||
    "An unexpected error occurred.";

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
        {/* Error icon */}
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

        {/* Error title */}
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

        {/* HTTP status code if available */}
        {error?.status && (
          <p
            className="
              mt-4
              font-semibold
              text-red-500
            "
          >
            Error {error.status}
          </p>
        )}

        {/* Error description */}
        <p
          className="
            mt-4
            text-[var(--text-secondary)]
            break-words
          "
        >
          {errorMessage}
        </p>

        {/* Navigate user back to home */}
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