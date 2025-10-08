const Boton = ({ onClick, children, ...props }) => {
  return (
    <button
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Boton;
