import * as motion from "motion/react-client";

function Feedback({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "success" | "error";
  onClose?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={[
        "w-1/4 z-99 px-4 py-3 rounded absolute top-5 left-1/4 transform -translate-x-1/2 mb-4",
        type === "success"
          ? "bg-green-100 border border-green-400 text-green-700"
          : "bg-red-100 border border-red-400 text-red-700",
      ].join(" ")}
      role="alert"
    >
      <strong className="font-bold">{message}</strong>
      <button
        type="button"
        onClick={onClose}
        className="cursor-pointer absolute top-3 right-2 text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">Dismiss</span>
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </motion.div>
  );
}

export default Feedback;
