import { MouseEventHandler } from "react";

export interface SearchBarProps {
  setType: (type: string) => void;
  // setMount: (model: string) => void;
}

// export interface FilterProps {
//   manufacturer?: string;
//   year?: number;
//   model?: string;
//   limit?: number;
//   fuel?: string;
// }

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setMount: (selected: any) => void;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}