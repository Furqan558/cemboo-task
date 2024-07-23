import Box, { BoxProps } from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import { MAIN_PATH } from "src/constant";

export default function Logo({ sx }: BoxProps) {
  return (
    <RouterLink to={`/${MAIN_PATH.browse}`}>
      <Box
        component="img"
        alt="Cemboo Logo"
        src="/assets/cemboo-logo.png"
        width={75}
        sx={{
          ...sx,
        }}
      />
    </RouterLink>
  );
}
