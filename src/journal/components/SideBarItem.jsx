import { TurnedInNot } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({title, body, id, date, imageUrls = []}) => {

    const newTitle = useMemo(() => {
        return title.length > 17
        ? title.substring(0, 17) + '...'
        : title 
    })

    const dispatch = useDispatch();

    const onClickNote = () => {
        dispatch(setActiveNote({title, body, id, date, imageUrls}))
    }

  return (
    <ListItem key={id} disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText
            secondary={body}
          />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
