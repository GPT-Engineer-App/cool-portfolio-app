import React, { useState } from "react";
import { Box, VStack, HStack, Text, Button, useColorMode, useColorModeValue, Input, Image } from "@chakra-ui/react";
import { FaSun, FaMoon, FaTerminal, FaCode, FaUser } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState("");

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const command = terminalInput.trim().toLowerCase();
    let output = "";

    if (command === "projects") {
      output = "Project 1\nProject 2\nProject 3";
    } else if (command === "skills") {
      output = "JavaScript\nReact\nNode.js\nExpress";
    } else {
      output = "Invalid command. Try 'projects' or 'skills'.";
    }

    setTerminalOutput(output);
    setTerminalInput("");
  };

  return (
    <Box minHeight="100vh" bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.800", "white")} p={8}>
      <VStack spacing={8} align="stretch">
        <HStack justify="space-between">
          <Text fontSize="2xl" fontWeight="bold">
            My Portfolio
          </Text>
          <Button onClick={toggleColorMode}>{useColorModeValue(<FaMoon />, <FaSun />)}</Button>
        </HStack>

        <Box p={6} borderRadius="lg" boxShadow={useColorModeValue("0 4px 6px rgba(160, 174, 192, 0.6)", "0 4px 6px rgba(9, 17, 28, 0.9)")} bg={useColorModeValue("white", "gray.800")}>
          <VStack spacing={4} align="stretch">
            <HStack spacing={4}>
              <FaUser size={24} />
              <Text fontSize="xl" fontWeight="bold">
                About Me
              </Text>
            </HStack>
            <Text>I am a backend developer specializing in building robust and scalable web applications.</Text>
          </VStack>
        </Box>

        <Box p={6} borderRadius="lg" boxShadow={useColorModeValue("0 4px 6px rgba(160, 174, 192, 0.6)", "0 4px 6px rgba(9, 17, 28, 0.9)")} bg={useColorModeValue("white", "gray.800")}>
          <VStack spacing={4} align="stretch">
            <HStack spacing={4}>
              <FaTerminal size={24} />
              <Text fontSize="xl" fontWeight="bold">
                Terminal
              </Text>
            </HStack>
            <Box p={4} borderRadius="md" bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.800", "white")}>
              <form onSubmit={handleTerminalSubmit}>
                <HStack spacing={2}>
                  <Text>$</Text>
                  <Input value={terminalInput} onChange={(e) => setTerminalInput(e.target.value)} placeholder="Enter a command..." variant="unstyled" />
                </HStack>
              </form>
              <Text whiteSpace="pre-wrap">{terminalOutput}</Text>
            </Box>
          </VStack>
        </Box>

        <Box p={6} borderRadius="lg" boxShadow={useColorModeValue("0 4px 6px rgba(160, 174, 192, 0.6)", "0 4px 6px rgba(9, 17, 28, 0.9)")} bg={useColorModeValue("white", "gray.800")}>
          <VStack spacing={4} align="stretch">
            <HStack spacing={4}>
              <FaCode size={24} />
              <Text fontSize="xl" fontWeight="bold">
                Projects
              </Text>
            </HStack>
            <Image src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMjY4NjY2NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Project Screenshot" />
            <Text>Check out some of my notable projects by running the 'projects' command in the terminal.</Text>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
