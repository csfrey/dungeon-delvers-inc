import { Button, ButtonProps } from "@mui/material";

const ActionButton = (props: ButtonProps) => (
  <Button
    sx={{
      marginTop: "2vw",
      padding: "1.5vw 3vw",
      borderRadius: "0",
      fontWeight: "bold",
    }}
    variant="contained"
    href={props.href}
  >
    {props.children}
  </Button>
);

export default ActionButton;
