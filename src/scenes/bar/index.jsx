import { Box } from "@mui/material";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import BarChartComponent from "../../components/BarChartComponent/BarChartComponent";

const Bar = () => {
  return (
    <Box m="20px">
      <HeaderComponent title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChartComponent />
      </Box>
    </Box>
  );
};

export default Bar;
