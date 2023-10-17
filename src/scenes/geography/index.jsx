import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import GeographyChartComponent from "../../components/GeographyChartComponent/GeographyChartComponent";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <HeaderComponent title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChartComponent />
      </Box>
    </Box>
  );
};

export default Geography;
