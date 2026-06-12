function OrderProcessing() {
  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/60
        backdrop-blur-md
      "
    >
      <div
        className="
          card
          w-full
          max-w-md
          text-center
          p-8
        "
      >
        {/* Animated Circle */}
        <div
          className="
            mx-auto
            mb-6
            relative
            h-24
            w-24
          "
        >
          <div
            className="
              absolute
              inset-0
              rounded-full
              border-4
              border-[var(--primary)]
              animate-ping
              opacity-30
            "
          />

          <div
            className="
              absolute
              inset-2
              rounded-full
              bg-gradient-to-r
              from-[var(--primary)]
              to-[var(--secondary)]
              flex
              items-center
              justify-center
              text-4xl
            "
          >
            📦
          </div>
        </div>

        <h2
          className="
            text-2xl
            font-bold
            text-[var(--text-primary)]
          "
        >
          Order Dispatched
        </h2>

        <p
          className="
            mt-3
            text-[var(--text-secondary)]
          "
        >
          Your package is being prepared for shipment.
        </p>

        {/* Animated Status */}
        <div
          className="
            mt-8
            space-y-3
            text-left
          "
        >
          <div className="animate-pulse">
            ✅ Order Confirmed
          </div>

          <div
            className="
              animate-pulse
              [animation-delay:500ms]
            "
          >
            📦 Packaging Product
          </div>

          <div
            className="
              animate-pulse
              [animation-delay:1000ms]
            "
          >
            🚚 Assigning Delivery Partner
          </div>

          <div
            className="
              animate-pulse
              [animation-delay:1500ms]
            "
          >
            🎉 Ready To Ship
          </div>
        </div>

        {/* Progress */}
        <div
          className="
            mt-8
            h-2
            overflow-hidden
            rounded-full
            bg-white/10
          "
        >
          <div
            className="
              h-full
              w-full
              animate-[loading_5s_linear]
              bg-gradient-to-r
              from-[var(--primary)]
              via-[var(--secondary)]
              to-[var(--accent)]
            "
          />
        </div>
      </div>
    </div>
  );
}

export default OrderProcessing;