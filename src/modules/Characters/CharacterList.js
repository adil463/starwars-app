import { List, ListItem, ListItemText } from "@mui/material";

export const CharacterList = (props) => {
  const { characters } = props;

  return (
    <List>
      {characters.map((character) => (
        <ListItem key={character.id}>
          <ListItemText
            primary={character.name}
            secondary={`ID: ${character.id}, Height: ${character.height}, Haircolor: ${character.hairColor}`}
          />
        </ListItem>
      ))}
    </List>
  );
};


