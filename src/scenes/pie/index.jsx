import { Box } from "@mui/material";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import PieChartComponent from "../../components/PieChartComponent/PieChartComponent";

const Pie = () => {
  return (
    <Box m="20px">
      <HeaderComponent title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChartComponent />
      </Box>
    </Box>
  );
};

export default Pie;
