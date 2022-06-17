import {
  Box,
  Icon,
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { useEffect, useState } from "react";
import { Octokit } from "@octokit/core";
import moment from "moment";
import { IRepositories } from "@/types/portfolio.interface";

type RepositoriesProps = {
  labels: IRepositories;
};

interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  pushed_at: Date;
}

const Repositories: React.FC<RepositoriesProps> = ({ labels }) => {
  const { colorMode } = useColorMode();
  const { title, projectNameLabel, lastUpdateLabel } = labels;
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    if (repos.length < 1) {
      getRepos();
    }
  }, [repos.length]);

  const getRepos = async () => {
    const octokit = new Octokit({
      auth: process.env.NEXT_PUBLIC_GITHUB_PERSONAL_TOKEN,
    });

    const response = await octokit.request("GET /users/{org}/repos", {
      org: "wooqash",
      sort: "pushed",
      per_page: 5,
      page: 1,
    });

    if (response) {
      setRepos(response.data);
    }
  };

  return (
    <>
      {repos && (
        <Box
          as="div"
          w="100%"
          p="8"
          borderRadius="12px"
          border="1px solid"
          borderColor={
            colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.200"
          }
        >
          <TableContainer>
            <Table variant="striped" colorScheme="teal" size="md">
              {title && (
                <TableCaption placement="top" fontSize="lg">
                  {title}{" "}
                  <Icon
                    as={FaGithub}
                    color={colorMode === "dark" ? "teal.400" : "teal.600"}
                    mx="6px"
                    top="2px"
                    pos="relative"
                  />
                </TableCaption>
              )}
              <Thead>
                <Tr>
                  <Th>{projectNameLabel}</Th>
                  <Th>{lastUpdateLabel}</Th>
                </Tr>
              </Thead>
              <Tbody>
                {repos.map((repo) => (
                  <Tr key={repo.id}>
                    <Td textTransform="capitalize">
                      <Link href={repo.html_url} isExternal>
                        {repo.name}
                        <Icon
                          as={FiExternalLink}
                          mx="6px"
                          top="2px"
                          pos="relative"
                        />
                      </Link>
                    </Td>
                    <Td fontSize="small">
                      {moment(repo.pushed_at).format("DD-MM-YYYY")}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </>
  );
};

export default Repositories;
