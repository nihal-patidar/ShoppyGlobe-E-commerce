function Loader({
  text = "Loading..."
}) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        gap-4
        py-20
      "
      role="status"
      aria-live="polite"
    >
      {/* Spinner */}
      <div className="relative h-14 w-14">
        <div
          className="
            absolute
            inset-0
            rounded-full
            border-4
            border-transparent
            border-t-[var(--primary)]
            border-r-[var(--accent)]
            animate-spin
          "
        />

        <div
          className="
            absolute
            inset-2
            rounded-full
            bg-[var(--bg-main)]
          "
        />
      </div>

      {/* Text */}
      <p
        className="
          text-sm
          md:text-base
          font-medium
          text-[var(--text-secondary)]
          animate-pulse
        "
      >
        {text}
      </p>
    </div>
  );
}

export default Loader;