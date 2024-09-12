import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";

const barChartsParams = {
  series: [
    { data: [30000, 40000, 10000, 60000, 50000], label: "Laptop" },
    { data: [40000, 30000, 10000, 50000, 80000], label: "Mobile" },
    { data: [40000, 20000, 50000, 40000, 10000], label: "Shoes" },
  ],
  height: 400,
};

export default function DashboardChart() {
  return (
    <Stack
      direction={{ xs: "column", xl: "row" }}
      spacing={1}
      sx={{ width: "100%" }}
    >
      {/* Setting a fixed width for the chart */}
      <Box sx={{ flexGrow: 1, width: "101%", maxWidth: "1200px" }}>
        <BarChart
          {...barChartsParams}
          series={barChartsParams.series.map((series) => ({
            ...series,
          }))}
          yAxis={[
            {
              min: 0,
              max: 100000,
              label:"Bar Chart",
              labelStyle:{
                fontSize: 16,
                fontWeight: 600,
                marginBottom: 200,
              }
            },
          ]}
        />
      </Box>
      <Stack
        direction={{ xs: "row", xl: "column" }}
        spacing={3}
        justifyContent="center"
        flexWrap="wrap"
        useFlexGap
      >
        {/* Additional content can go here */}
      </Stack>
    </Stack>
  );
}
