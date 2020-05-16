import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { default as CardUi } from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Card({ name, desc, img, tags }) {
  const classes = useStyles();

  return (
    <CardUi className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {desc}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            Tipo: <br />{" "}
            {tags.length > 0
              ? tags.map((tag, i) => {
                  return (
                    <span key={i}>
                      {tag}
                      <br />
                    </span>
                  );
                })
              : "Indefinido"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardUi>
  );
}
