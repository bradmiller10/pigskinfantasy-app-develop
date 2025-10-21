import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";

const KEY_PREFIX = "avva";

const formatKey = (key: Key): string => `${KEY_PREFIX}.${key}`;

export enum Key {
  BiometricSecretKey,
}

export const set = (key: Key, value: string): Promise<void> =>
  setItemAsync(formatKey(key), value);

export const get = async (key: Key): Promise<string> => {
  const value = await getItemAsync(formatKey(key));
  return value || "";
};

export const remove = (key: Key): Promise<void> =>
  deleteItemAsync(formatKey(key));
