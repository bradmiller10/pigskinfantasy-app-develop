import "styled-components";
import { Theme } from "@/typings";
/**
 * Used to include our custom theme definitions in our Typescript declarations
 * for proper typings
 *
 * @author jordanskomer
 */
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
