import { useEffect, useState } from "react";

function OrderProcessing() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= 4) {
          clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const steps = [
    {
      title: "Order Confirmed",
      icon: "✅",
      description: "We've received your order.",
    },
    {
      title: "Packaging Products",
      icon: "📦",
      description: "Carefully preparing your items.",
    },
    {
      title: "Assigning Delivery Partner",
      icon: "🛵",
      description: "Finding the fastest delivery route.",
    },
    {
      title: "Out For Dispatch",
      icon: "🚚",
      description: "Your package is leaving our warehouse.",
    },
    {
      title: "Order Dispatched",
      icon: "🎉",
      description: "Your package is on the way!",
    },
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-black/70
        backdrop-blur-xl
        p-4
      "
    >
      <div
        className="
          card
          w-full
          max-w-5xl
          min-h-[75vh]
          flex
          flex-col
          justify-center
          items-center
          px-6
          md:px-12
          py-10
        "
      >
        {/* Main Animation */}
        <div className="relative w-full max-w-3xl mb-12">
          <div
            className="
              flex
              justify-between
              items-center
              text-5xl
              md:text-7xl
            "
          >
            <span>📦</span>

            <div
              className="
                flex-1
                h-1
                mx-4
                rounded-full
                bg-white/10
                relative
                overflow-hidden
              "
            >
              <div
                className="
                  absolute
                  inset-y-0
                  left-0
                  rounded-full
                  bg-gradient-to-r
                  from-[var(--primary)]
                  via-[var(--secondary)]
                  to-[var(--accent)]
                  transition-all
                  duration-700
                "
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <span>🏠</span>
          </div>

          {/* Moving Truck */}
          <div
            className="
              absolute
              top-1/2
              -translate-y-1/2
              text-4xl
              md:text-6xl
              transition-all
              duration-700
            "
            style={{
              left: `calc(${progress}% - 25px)`,
            }}
          >
            🚚
          </div>
        </div>

        {/* Active Step */}
        <div
          key={currentStep}
          className="
            text-center
            animate-[fadeIn_0.5s_ease]
          "
        >
          <div
            className="
              text-7xl
              md:text-9xl
              mb-6
              animate-bounce
            "
          >
            {steps[currentStep].icon}
          </div>

          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              text-[var(--text-primary)]
            "
          >
            {steps[currentStep].title}
          </h2>

          <p
            className="
              mt-4
              text-lg
              md:text-xl
              text-[var(--text-secondary)]
            "
          >
            {steps[currentStep].description}
          </p>
        </div>

        {/* Timeline */}
        <div
          className="
            mt-12
            grid
            grid-cols-2
            md:grid-cols-5
            gap-4
            w-full
          "
        >
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`
                rounded-2xl
                p-4
                text-center
                transition-all
                duration-500

                ${
                  index < currentStep
                    ? `
                    bg-[var(--primary)]/20
                    border
                    border-[var(--primary)]
                  `
                    : index === currentStep
                      ? `
                    scale-105
                    border
                    border-[var(--accent)]
                    shadow-lg
                  `
                      : `
                    border
                    border-[var(--border-color)]
                  `
                }
              `}
            >
              <div className="text-2xl mb-2">{step.icon}</div>

              <div
                className="
                  text-xs
                  md:text-sm
                  font-medium
                "
              >
                {step.title}
              </div>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div
          className="
            mt-8
            w-full
            max-w-xl
          "
        >
          <div
            className="
              h-3
              overflow-hidden
              rounded-full
              bg-white/10
            "
          >
            <div
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-[var(--primary)]
                via-[var(--secondary)]
                to-[var(--accent)]
                transition-all
                duration-700
              "
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderProcessing;
