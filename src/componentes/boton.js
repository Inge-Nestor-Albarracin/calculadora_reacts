const Boton = ({ onClick, children, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className="bg-gray-800 text-white px-4 py-2 rounded-lg m-2 hover:bg-gray-600"
    >
      {children}
    </button>
  );
};

export default Boton;
