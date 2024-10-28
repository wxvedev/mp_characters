import { focus, send } from "./nui";

type ICharacter = {
  cid: string;
  cash: number;
  bank: number;
  firstname: string;
  lastname: string;
  sex: "male" | "female";
  dob: string;
  phone: string;
  bankingId: string;
  citizenid: string;
};

onNet("mp_characters:setVisible", (visible: boolean) => {
  send({ action: "setVisible", data: visible });
  focus(visible ? true : false);
});

onNet("mp_characters:setCharacters", (data: ICharacter[]) => {
  send({ action: "setCharacters", data: data });
  console.log("setCharacters", data);
});
