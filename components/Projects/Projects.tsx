import { useState } from "react";
import Image from "next/image";
import { IProject } from "@/types/portfolio.interface";
import { isIPortfolio } from "helpers/type-guards.helpers";
import {
  Box,
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

type ProjectsProps = {};

const Projects: React.FC<ProjectsProps> = () => {
  const { lang } = useLanguageContext();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const pageTransPortfolio = PORTFOLIO_LABELS[lang].portfolio;

  const portfolio =
    pageTransPortfolio && isIPortfolio(pageTransPortfolio)
      ? pageTransPortfolio
      : null;

  const [projectId, setProjectId] = useState<string | number | null>(null);
  const selectedProject = portfolio?.projects.find(
    (project) => project.id === projectId
  );

  const openProjectDetails = (id: string | number) => {
    setProjectId(id);
    onOpen();
  };

  return (
    <>
      {portfolio?.projects && (
        <SimpleGrid
          minChildWidth="250px"
          spacing="40px"
          w="100%"
          textAlign="center"
        >
          {portfolio?.projects.map((project) => {
            return (
              <Box
                as="a"
                onClick={() => openProjectDetails(project.id)}
                key={project.id}
              >
                <Image
                  // loader={myLoader}
                  src="https://picsum.photos/350/250?random=1"
                  alt="Picture of the author"
                  width={350}
                  height={250}
                />
              </Box>
            );
          })}
        </SimpleGrid>
      )}
      {selectedProject && (
        <Modal isOpen={isOpen} onClose={onClose} size="2xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedProject.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {portfolio && (
                <ProjectDetailsList
                  labels={portfolio?.productDetailsLabels}
                  details={selectedProject.details}
                />
              )}
            </ModalBody>

            <ModalFooter>
              {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Projects;
