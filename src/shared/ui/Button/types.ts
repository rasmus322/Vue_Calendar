export type ButtonVariant = "primary" | "secondary" | "danger";
export type ButtonSize = "xs" | "sm" | "md" | "lg";
export type ButtonType = "button" | "submit";
export type ButtonPosition = "solo" | "left" | "center" | "right";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: ButtonType;
  position?: ButtonPosition;
  disabled?: boolean;
}
