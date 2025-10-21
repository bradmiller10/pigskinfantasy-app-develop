/**
 * Used to load our root screens from pages lazily in our StackNavigator. The spelling must exactly
 * match the name found in pages and the main index must export a default component
 *
 * @author jordanskomer
 */
export enum Screen {
  Games = "Games",
  League = "League",
  Draft = "Draft",
  Auth = "Auth",
  Profile = "Profile",
}

export const Screens = Object.keys(Screen) as Screen[];
