export { BabyIcon } from "./BabyIcon";
export { FlowerIcon } from "./FlowerIcon";
export { BingoIcon } from "./BingoIcon";
export { CrossIcon } from "./CrossIcon";
export { CoffeeIcon } from "./CoffeeIcon";
export { IconPicker } from "./IconPicker";
export { IconPickerItem } from "./IconPickerItem";

export const icons = ["baby", "flower", "bingo", "cross", "coffee"] as const;
export type IconType = typeof icons[number];
