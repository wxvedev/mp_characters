import ICharacter from "types/character";
import { focus, send } from "./nui";

onNet("mp_characters:setVisible", (visible: boolean) => {
  send({ action: "setVisible", data: visible });
  focus(visible ? true : false);
  console.log("VISIBLE: ", visible);
});

onNet("mp_characters:setCharacters", (data: ICharacter[]) => {
  send({ action: "setCharacters", data: data });
  console.log("ACTUAL PLAYER DATA RECEIVED!!!", JSON.stringify(data));
});
