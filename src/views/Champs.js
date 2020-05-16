import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Grid from "@material-ui/core/Grid";
import { getChamps } from "../services/champsServices";

export default function Champs() {
  const [state, setState] = useState({
    champs: [],
    champsLenght: 0,
    imgURI: "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/",
  });

  useEffect(() => {
    async function fetchChamps() {
      const { data } = await getChamps();
      const champs = Object.keys(data).map((key) => data[key]);

      setState({ ...state, champs });
    }
    fetchChamps();
  }, []);
  console.log(state);

  const showChamps = () => {
    return state.champs.length > 0 ? (
      state.champs.map((champ, i) => (
        <Card
          key={i}
          name={champ.name}
          desc={champ.blurb}
          img={`${state.imgURI}${champ.id}_0.jpg`}
          tags={champ.tags}
        />
      ))
    ) : (
      <h3>Cargando...</h3>
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="space-around">
          {showChamps()}
        </Grid>
      </Grid>
    </Grid>
  );
}
