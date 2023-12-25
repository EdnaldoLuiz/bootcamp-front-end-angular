import { Option } from "./option.model";

export interface Question {
  id: number;
  text: string;
  options: Option[];
  selectedOption: string | null;
  submitted: boolean;
  backgroundImage?: string;
}
