import SvgIcon from "../SvgIcon/SvgIcon";
import { SvgIconProps } from "./types";

export default function PublishMaterialIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      {...props}
    >
      <path d="M11 20v-8.15l-2.6 2.6L7 13l5-5 5 5-1.4 1.45-2.6-2.6V20ZM4 9V6q0-.825.588-1.412Q5.175 4 6 4h12q.825 0 1.413.588Q20 5.175 20 6v3h-2V6H6v3Z"/>
    </SvgIcon>
  );
}