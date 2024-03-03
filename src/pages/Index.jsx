import React, { useState, useEffect } from "react";
import { Box, Flex, Image, useBreakpointValue, VStack, Text, Heading, Stat, StatLabel, StatNumber, StatGroup } from "@chakra-ui/react";
import { FaChartLine } from "react-icons/fa";

const Index = () => {
  const [players, setPlayers] = useState([
    { id: 1, rank: 1 },
    { id: 2, rank: 2 },
    { id: 3, rank: 3 },
    { id: 4, rank: 4 },
  ]);
  const [gameStats, setGameStats] = useState({
    score: 0,
    timePlayed: 0,
    highScore: 0,
  });

  const updateStats = () => {
    // Randomly update player ranks
    const updatedPlayers = players
      .map((player) => ({
        ...player,
        rank: Math.floor(Math.random() * 100),
      }))
      .sort((a, b) => a.rank - b.rank);

    setPlayers(updatedPlayers);

    // Randomly update game stats
    setGameStats({
      score: Math.floor(Math.random() * 1000),
      timePlayed: Math.floor(Math.random() * 500),
      highScore: Math.floor(Math.random() * 1000),
    });
  };

  useEffect(() => {
    const intervalId = setInterval(updateStats, 45000);

    return () => clearInterval(intervalId);
  }, [players]);

  // Responsive columns
  const columns = useBreakpointValue({ base: 1, md: 3 });

  return (
    <VStack spacing={8}>
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Image src="https://images.unsplash.com/photo-1642779179433-52493000bc73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZ3JhcGhpY3xlbnwwfHx8fDE3MDk0MzQzNTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Game Graphic" borderRadius="md" />
      </Box>

      <Flex direction={{ base: "column", md: "row" }} w="full">
        <VStack w={{ base: "full", md: "33%" }} p={4} borderRightWidth={{ base: 0, md: 1 }} borderBottomWidth={{ base: 1, md: 0 }} borderColor="gray.200">
          <Heading size="md">Players</Heading>
          {players.map((player) => (
            <Flex key={player.id} align="center" p={2} w="full" borderRadius="full" borderWidth="1px" borderColor="gray.200" my={2}>
              <Image boxSize="50px" borderRadius="full" src={`https://images.unsplash.com/photo-1593101635261-8d3ba345e570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwbGF5ZXIlMjBhdmF0YXIlMjAlMjQlN0JwbGF5ZXIuaWQlN0R8ZW58MHx8fHwxNzA5NDM0MzU2fDA&ixlib=rb-4.0.3&q=80&w=1080`} alt={`Player ${player.id}`} mr={2} />
              <Text>
                Player {player.id} - Rank {player.rank}
              </Text>
            </Flex>
          ))}
        </VStack>

        <VStack w={{ base: "full", md: "33%" }} p={4} borderRightWidth={{ base: 0, md: 1 }} borderBottomWidth={{ base: 1, md: 0 }} borderColor="gray.200">
          <Heading size="md">Game Graph</Heading>
          {/* Placeholder for Game Graph */}
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" w="full" h="200px">
            <FaChartLine size="3em" />
          </Box>
        </VStack>

        <VStack w={{ base: "full", md: "33%" }} p={4}>
          <Heading size="md">Game Stats</Heading>
          <StatGroup w="full">
            <Stat>
              <StatLabel>Score</StatLabel>
              <StatNumber>{gameStats.score}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Time Played</StatLabel>
              <StatNumber>{gameStats.timePlayed}</StatNumber>
            </Stat>
            <Stat>
              <StatLabel>High Score</StatLabel>
              <StatNumber>{gameStats.highScore}</StatNumber>
            </Stat>
          </StatGroup>
        </VStack>
      </Flex>
    </VStack>
  );
};

export default Index;
