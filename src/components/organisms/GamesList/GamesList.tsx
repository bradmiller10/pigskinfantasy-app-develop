import { Text } from "@/components/atoms";
import { GameCard } from "@/components/molecules";
import { Game } from "@/typings";
import React, { useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface GamesListProps {
  week?: number;
}

export const GamesList: React.FC<GamesListProps> = ({ week }) => {
  const [games] = useState<Partial<Game>[]>([
    {
      week,
      startsAt: new Date(),
    },
  ]);

  if (typeof week === "undefined") return <Text>Loading</Text>;

  return (
    <SafeAreaView>
      <FlatList
        data={games}
        renderItem={({ item }) => <GameCard game={item as Game} />}
        keyExtractor={(item) => `todo${item.week}`}
      />
    </SafeAreaView>
  );
};
