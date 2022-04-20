// import style from "./skip-link.module.scss";

type SkipLinkProps = {
  label: string;
  sectionId: string;
};

const SkipLink: React.FC<SkipLinkProps> = ({ label, sectionId }) => {
  return (
    <a className={`visible-hidden`} href={`#${sectionId}`}>
      {label}
    </a>
  );
};

export default SkipLink;
