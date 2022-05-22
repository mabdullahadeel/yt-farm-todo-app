import { Badge, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const TodoCard = ({ todo }) => {
  const navigate = useNavigate();
  return (
    <Flex
      bg={useColorModeValue("gray.300", "gray.600")}
      minHeight="3rem"
      my={3}
      p={3}
      rounded="lg"
      alignItems="center"
      justifyContent="space-between"
      _hover={{
        opacity: 0.9,
        cursor: "pointer",
        transform: "translateY(-3px)",
      }}
      onClick={() => navigate(`/${todo.todo_id}`, { replace: true })}
    >
      <Text>{todo.title}</Text>
      <Badge colorScheme={todo.status ? "green" : "purple"}>
        {todo.status ? "Complete" : "Pending"}
      </Badge>
    </Flex>
  );
};
