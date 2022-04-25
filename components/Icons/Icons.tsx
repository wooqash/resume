import { Icon } from "@chakra-ui/react";
import { IconType } from "@/types/icon.enum";
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

type IconsProps = {
  type: IconType;
};

const Icons: React.FC<IconsProps> = ({ type }) => {
  switch (type) {
    case IconType.HOME:
      return <Icon as={FiHome} />;
    case IconType.ABOUT:
      return <Icon as={FiUser} />;
    case IconType.PORTFOLIO:
      return <Icon as={FiBriefcase} />;
    case IconType.CONTACT:
      return <Icon as={FiPhone} />;
    case IconType.SOCIAL:
      return <Icon as={FiShare2} />;
    case IconType.FACEBOOK:
      return <Icon as={FiFacebook} />;
    case IconType.INSTAGRAM:
      return <Icon as={FiInstagram} />;
    case IconType.TWITTER:
      return <Icon as={FiTwitter} />;
    case IconType.LINKEDIN:
      return <Icon as={FiLinkedin} />;
    default:
      let x: never = type;
      return x;
  }
};

export default Icons;
