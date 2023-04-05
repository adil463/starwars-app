import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

export const CharacterList = (props) => {
  const { Characters } = props;
  return (
    <List>
      {Characters.map((planet, i) => (
        <ListItem key={i}>
          <ListItemText
            primary={`Name: ${planet.name}`}
            secondary={`Diameter: ${planet.diameter} miles`}
          />
        </ListItem>
      ))}
    </List>
  );
};
