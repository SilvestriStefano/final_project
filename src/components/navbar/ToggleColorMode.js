import { IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext"
import Brightness2Icon from '@mui/icons-material/Brightness2';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function ToggleColorMode() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return (
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness2Icon />}
        </IconButton>
    )
  }