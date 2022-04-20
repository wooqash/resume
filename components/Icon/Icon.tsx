import { IconType } from "../../types/icon";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiPhone,
  FiShare2,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

type IconProps = {
  type: IconType;
};

const Icon: React.FC<IconProps> = ({ type }) => {
  switch (type) {
    case IconType.HOME:
      return <FiHome />;
    case IconType.ABOUT:
      return <FiUser />;
    case IconType.PORTFOLIO:
      return <FiBriefcase />;
    case IconType.CONTACT:
      return <FiPhone />;
    case IconType.SOCIAL:
      return <FiShare2 />;
    case IconType.FACEBOOK:
      return <FiFacebook />;
    case IconType.INSTAGRAM:
      return <FiInstagram />;
    case IconType.TWITTER:
      return <FiTwitter />;
    case IconType.LINKEDIN:
      return <FiLinkedin />;
    default:
      let x: never = type;
      return x;
  }
};

export default Icon;
