import ICharacter from "../types/character";

type SendAction<T> = {
  action: string;
  data: T;
};

export function send<T>({ action, data }: SendAction<T>) {
  SendNuiMessage(
    JSON.stringify({
      action: action,
      data: data,
    })
  );
}

export function focus(value: boolean) {
  SetNuiFocus(value, value);
  console.log("FOCUS: ", value);
}

onNet("mp_characters:setVisible", (visible: boolean) => {
  send({ action: "setVisible", data: visible });
  focus(visible ? true : false);
  console.log("VISIBLE: ", visible);
});

onNet("mp_characters:setCharacters", (data: ICharacter[]) => {
  // send({ action: "setCharacters", data: data });
  console.log(JSON.stringify(data));
});
