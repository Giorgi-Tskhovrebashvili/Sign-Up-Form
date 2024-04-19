export interface ButtonType {
  children: string;
  className: string;
  type: "submit" | undefined;
}

export interface InputType {
  className: string;
  type: "text" | "email" | "password";
  placeholder: string;
  value: string;
  onChange: (event: any) => void;
  onBlur: (event: any) => void;
  id: string;
  name: string;
  style: Object;
}

export interface IntroType {
  title: string;
  info: string;
}

export interface WarningType {
  text: string;
  link: string;
  linkPath: string;
}

export interface NotificationType {
  time: string;
  price: string;
}
