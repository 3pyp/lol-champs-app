import axios from "axios";
const URI = "http://ddragon.leagueoflegends.com/cdn";
const version = "10.10.3208608";

export async function getChamps() {
  try {
    const champs = await axios.get(
      `${URI}/${version}/data/es_MX/champion.json`
    );
    return champs.data;
  } catch (error) {
    console.log(error);
  }
}
