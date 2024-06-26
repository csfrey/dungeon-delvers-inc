import { Box } from "@mui/material";

const Spacer = ({ s }: { s: string }) => (
  <Box
    sx={{
      flex: `0 0 ${s}`,
    }}
  ></Box>
);

export default Spacer;
