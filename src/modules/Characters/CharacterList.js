import { List, ListItem, ListItemText } from "@mui/material";

export const CharacterList = (props) => {
    const { characters } = props;
    return (
      <List>
        {characters.map((character, i) => (
          <ListItem key={i}>
            <ListItemText
              primary={`Name: ${character.name}`}
              secondary={`Height: ${character.height} Inches`}
            />
          </ListItem>
        ))}
      </List>
    );
  };
  
