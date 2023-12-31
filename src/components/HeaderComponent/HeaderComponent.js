import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";

const HeaderComponent = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.colors);
  return (
    <Box mb="30px">
      <Typography variant="h2" fontWeight="bold" sx={{ m: "0 0 5px 0" }}>
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

HeaderComponent.propTypes = {};

HeaderComponent.defaultProps = {};

export default HeaderComponent;
