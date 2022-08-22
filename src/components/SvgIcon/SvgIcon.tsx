import { SvgIconProps } from "../SvgMaterialIcons/types";

export default function SvgIcon({
  children,
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  ...rest
}: SvgIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-testid="svg-icon"
      height={width}
      width={height}
      viewBox={viewBox}
      {...rest}
    >
      {children}
    </svg>
  );
}