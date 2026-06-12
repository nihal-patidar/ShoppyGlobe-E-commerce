function PageLoader() {
  return (
    <div
      className="
        min-h-[50vh]
        flex
        items-center
        justify-center
      "
    >
      <div
        className="
          h-12
          w-12
          rounded-full
          border-4
          border-[var(--border-color)]
          border-t-[var(--primary)]
          animate-spin
        "
      />
    </div>
  );
}

export default PageLoader;