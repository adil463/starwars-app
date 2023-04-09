import { List, ListItem, ListItemText } from "@mui/material";

export const StarshipList = (props) => {
  const { starships } = props;

  return (
    <List>
      {starships.map((starship) => (
        <ListItem key={starship.id}>
          <ListItemText
            primary={starship.name}
            secondary={`Starships ID: ${starship.id}, Model: ${starship.model}, Class: ${starship.starshipClass}`}
          />
        </ListItem>
      ))}
    </List>
  );
};


