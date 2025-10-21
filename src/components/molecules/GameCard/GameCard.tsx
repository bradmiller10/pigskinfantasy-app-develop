import { Text } from "@/components/atoms";
import { Games } from "@/typings";
import React from "react";

interface GameCardProps {
  game?: Games;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  if (typeof game === "undefined") return <Text>Loading</Text>;

  return <Text>{game.startsAt.toDateString()}</Text>;
};
