interface SeparatorProps {
  height: number;
}

const Separator = (props: SeparatorProps) => {
  const { height } = props;

  return <div style={{ height }}></div>;
};

export default Separator;
