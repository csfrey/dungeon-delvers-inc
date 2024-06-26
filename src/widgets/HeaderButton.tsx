import {
  ButtonProps,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useLocation } from "react-router-dom";

const HeaderButton = (props: ButtonProps & { text: string }) => {
  let location = useLocation();

  return (
    <ListItem>
      <ListItemButton
        sx={{
          backgroundColor: "rgba(0,0,0,0.2)",
          textDecoration:
            location.pathname === props.href ? "underline" : "none",
        }}
        href={props.href || ""}
      >
        <ListItemText
          sx={{
            fontWeight: "bold",
          }}
          primary={props.text}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default HeaderButton;
