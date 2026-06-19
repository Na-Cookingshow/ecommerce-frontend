export default function Toast({ message, type }) {
  if (!message) return null;

  return (
    <div className={`fixed top-5 right-5 px-4 py-2 rounded-lg text-white shadow-lg z-50
      ${type === "success" ? "bg-green-500" : "bg-red-500"}
    `}>
      {message}
    </div>
  );
}