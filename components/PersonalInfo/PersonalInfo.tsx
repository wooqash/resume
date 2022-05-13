import { PersonalInfoType } from "@/types/personal-info.interface";
import {
  Avatar,
  Box,
  Icon,
  List,
  ListItem,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { useLanguageContext } from "contexts/language";
import { isIPersonalInfo } from "helpers/type-guards.helpers";
import {
  FiCalendar,
  FiFlag,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser,
  FiUserPlus,
} from "react-icons/fi";
import { ABOUT_LABELS } from "translations.constants";
import BoxHeader from "../BoxHeader";

type PersonalInfoProps = {};

const PersonalInfo: React.FC<PersonalInfoProps> = () => {
  const { colorMode } = useColorMode();
  const { lang } = useLanguageContext();
  const pageTrans = ABOUT_LABELS[lang].personalInfo;
  const personalInfo =
    pageTrans && isIPersonalInfo(pageTrans) ? pageTrans : null;

  const getIcon = (type: PersonalInfoType) => {
    switch (type) {
      case "name":
        return <Icon as={FiUser} mr="1" />;
      case "surname":
        return <Icon as={FiUserPlus} mr="1" />;
      case "dateofbirth":
        return <Icon as={FiCalendar} mr="1" />;
      case "nationality":
        return <Icon as={FiGlobe} mr="1" />;
      case "phoneno":
        return <Icon as={FiPhone} mr="1" />;
      case "email":
        return <Icon as={FiMail} mr="1" />;
      case "address":
        return <Icon as={FiMapPin} mr="1" />;
      case "langs":
        return <Icon as={FiFlag} mr="1" />;
      default:
        let x: never = type;
        return;
    }
  };

  return (
    personalInfo && (
      <VStack alignItems={{ base: "flex-start" }} py={{ lg: 8 }}>
        <BoxHeader title={personalInfo.title} />
        <Box
          as="div"
          display={{ base: "flex", lg: "none" }}
          justifyContent="center"
          w="full"
          my="2rem !important"
        >
          <Avatar
            src="/images//Łukasz_Sobola.webp"
            size="2xl"
            name="Łukasz Sobola"
          />
        </Box>
        <List display="flex" flexWrap="wrap" mt="0" w="100%">
          {personalInfo.info.map((item) => {
            return (
              <ListItem
                flex="0 0 50%"
                maxW="50%"
                my="0.5rem"
                pr="4"
                key={item.id}
              >
                <Box
                  as="span"
                  mr="1"
                  textTransform="capitalize"
                  color={colorMode === "dark" ? "teal.200" : "teal.700"}
                  display="flex"
                  alignItems="center"
                >
                  {getIcon(item.type)}
                  {`${item.label}:`}
                </Box>
                <Box as="span" fontWeight="bold" display="block">
                  {item.text}
                </Box>
              </ListItem>
            );
          })}
        </List>
      </VStack>
    )
  );
};

export default PersonalInfo;
