import { useLangContext } from "context/lang.context";

type VisuallyHiddenProps = {
  label: string;
};

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ label }) => {
  const { lang } = useLangContext();

  return <span className="visible-hidden">{label}</span>;
};

export default VisuallyHidden;
