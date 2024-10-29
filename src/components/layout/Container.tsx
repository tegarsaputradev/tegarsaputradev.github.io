type TContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<TContainerProps> = ({ children }) => {
  return <div className="max-w-screen-lg mx-auto px-4">{children}</div>;
};

export default Container;
