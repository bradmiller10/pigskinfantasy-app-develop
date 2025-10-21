import React from "react";
import { ScreenComponent } from "@/typings";
import { GamesList } from "@/components/organisms";
import { useWindowDimensions } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";

export const Games: ScreenComponent = ({ navigation }) => {
  const [weeks] = React.useState<number>(15);
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const routes = Array.from(new Array(weeks)).map((_, week) => ({
    key: `gamesWeek_${week}`,
    title: `Week ${week + 1}`,
  }));

  return (
    <TabView
      lazy
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderTabBar={(props) => <TabBar {...props} scrollEnabled />}
      navigationState={{ index, routes }}
      renderScene={({ route }) => (
        <GamesList week={Number(route.key.substr(-1))} />
      )}
      renderLazyPlaceholder={() => <GamesList />}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};
