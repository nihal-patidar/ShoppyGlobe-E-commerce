import { toast } from "react-toastify";

export const notify = {
  added: () =>
    toast.success("Added to cart", {
      icon: "🛒",
    }),

  removed: () =>
    toast.error("Removed from cart", {
      icon: "🗑️",
    }),

  increased: () =>
    toast("Quantity increased", {
      icon: "⬆️",
    }),

  decreased: () =>
    toast("Quantity decreased", {
      icon: "⬇️",
    }),
};