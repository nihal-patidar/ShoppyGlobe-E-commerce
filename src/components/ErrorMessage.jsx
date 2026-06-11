function ErrorMessage({
  message = "Something went wrong.",
  onRetry,
}) {
  return (
    <div
      className="
        card
        max-w-lg
        mx-auto
        text-center
        py-10
      "
      role="alert"
    >
      {/* Icon */}
      <div
        className="
          mx-auto
          mb-4
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-[var(--primary)]
          to-[var(--secondary)]
          text-3xl
          text-white
        "
      >
        !
      </div>

      {/* Heading */}
      <h2
        className="
          text-2xl
          font-bold
          text-[var(--text-primary)]
        "
      >
        Oops!
      </h2>

      {/* Message */}
      <p
        className="
          mt-3
          text-sm
          md:text-base
          text-[var(--text-secondary)]
        "
      >
        {message}
      </p>

      {/* Retry Button */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="
            btn-primary
            mt-6
          "
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;