import { Box } from "@mui/material";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import LineChartComponent from "../../components/LineChartComponent/LineChartComponent";

const Pie = () => {
  return (
    <Box m="20px">
      <HeaderComponent title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChartComponent />
      </Box>
    </Box>
  );
};

export default Pie;
