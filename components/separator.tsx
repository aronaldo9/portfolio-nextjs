interface SeparatorProps {
  height: number;
  className?: string; // Opcional: para añadir clases adicionales
}

const Separator = (props: SeparatorProps) => {
  const { height, className } = props;

  return <div className={`${className}`} style={{ height }}></div>;
};

export default Separator;
