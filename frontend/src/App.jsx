import { Container, Input, Stack, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import UserGrid from "./components/UserGrid";

export const BASE_URL = import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/api" : "/api";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const filtered = users.filter((user) => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Stack minH={"100vh"}>
      <Navbar setUsers={setUsers} />

      <Container maxW={"1200px"} my={4}>
        <Text
        fontSize={{ base: "3xl", md: "50" }}
        fontWeight={"bold"}
        letterSpacing={"2px"}
        textTransform={"uppercase"}
        textAlign={"center"}
        mb={8}>
          <Text as={"span"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}>
            My Besties
          </Text>
        </Text>

    <Input
    placeholder="Search users"
    mb={4}
    value={searchTerm}
    onChange={handleSearch}
    />

        <UserGrid users={filteredUsers} setUsers={setUsers} />
      </Container>
    </Stack>
  )
}

export default App;