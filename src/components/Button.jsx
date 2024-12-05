export default function Button(props) {
  const { className = "bg-red-600 text-white hover:bg-red-500 transition duration-300 py-3 px-6 rounded-lg", text, children } = props;
  return (
      <button {...props} className={`${className}`}>
          {text || children}
      </button>
  );
}
