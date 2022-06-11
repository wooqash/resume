import { useState } from "react";
import Image from "next/image";
import { isIPortfolio } from "helpers/type-guards.helpers";
import {
  Box,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import { PORTFOLIO_LABELS } from "translations.constants";
import { useLanguageContext } from "contexts/language";
import ProjectDetailsList from "./ProjectDetailsList";
import SwiperCarousel from "../SwiperCarousel";
import Recommendations from "../Recommendations";

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  const { lang } = useLanguageContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const tPortfolio = PORTFOLIO_LABELS[lang].portfolio;
  const portfolio = tPortfolio && isIPortfolio(tPortfolio) ? tPortfolio : null;

  const [projectId, setProjectId] = useState<string | number | null>(null);
  const selectedProject = portfolio?.projects.find(
    (project) => project.id === projectId
  );

  const selectedProjectImages = selectedProject?.details?.images?.map(
    (image) => (
      <Image
        // loader={myLoader}
        src={image.url}
        // alt="Picture of the author"
        width={image.width}
        height={image.height}
        key={image.id}
      />
    )
  );

  const openProjectDetails = (id: string | number) => {
    setProjectId(id);
    onOpen();
  };

  return (
    <>
      {portfolio?.projects && (
        <SimpleGrid minChildWidth="250px" spacing="40px" w="100%">
          {portfolio?.projects.map((project) => {
            return (
              <Box
                as="a"
                borderRadius="5px"
                cursor="pointer"
                key={project.id}
                minH="250px"
                onClick={() => openProjectDetails(project.id)}
                overflow="hidden"
                position="relative"
                _before={{
                  background: "teal.600",
                  content: `""`,
                  height: "100%",
                  left: 0,
                  opacity: 0,
                  position: "absolute",
                  top: 0,
                  transition: ".5s",
                  visibility: "hidden",
                  width: "100%",
                  zIndex: 1,
                }}
                _hover={{
                  _before: { visibility: "visible", opacity: 1 },
                  span: {
                    opacity: 1,
                    transform: "translateY(0)",
                    visibility: "visible",
                  },
                }}
              >
                <Image
                  // loader={myLoader}
                  src={project.mainImage.url}
                  alt="Picture of the author"
                  // width={350}
                  // height={250}
                  layout="fill"
                />
                <Box
                  as="span"
                  fontFamily="heading"
                  left="0"
                  letterSpacing="2px"
                  margin="0"
                  opacity="0"
                  position="absolute"
                  textAlign="center"
                  textTransform="uppercase"
                  top="48%"
                  transform="translateY(-50%)"
                  transition=".5s"
                  visibility="hidden"
                  w="100%"
                  zIndex="5"
                >
                  {project.title}
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      )}
      {portfolio?.recommendations && (
        <Recommendations recommendations={portfolio?.recommendations} />
      )}
      {selectedProject && (
        <Modal isOpen={isOpen} onClose={onClose} size="2xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center">
              <Heading as="h3" size="xl" variant="brand">
                {selectedProject.title}
              </Heading>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {portfolio && (
                <ProjectDetailsList
                  labels={portfolio?.projectDetailsLabels}
                  details={selectedProject.details}
                />
              )}
              {selectedProjectImages && (
                <SwiperCarousel>{selectedProjectImages}</SwiperCarousel>
              )}
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Projects;
