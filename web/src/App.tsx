import { useState } from "react";

import { useNuiEvent } from "./hooks/useNuiEvent";
import { debugData } from "./hooks/debugData";

import Header from "./components/Header";
import Selection from "./components/Selection";

import ICharacter from "./types/character";
import Creation from "./components/Creation";

function App() {
  const [visible, setVisible] = useState(true);
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useNuiEvent("setVisible", (visible: boolean) => setVisible(visible));
  useNuiEvent("setCharacters", (characters: ICharacter[]) =>
    setCharacters(characters)
  );

  debugData([
    {
      action: "setVisible",
      data: true,
    },
  ]);

  debugData([
    {
      action: "setCharacters",
      data: [
        // {
        //   cid: "1",
        //   firstName: "John",
        //   lastName: "Doe",
        //   gender: "Male",
        //   phoneNumber: "123456789",
        //   cash: 1000,
        //   bank: 15000,
        //   job: {
        //     name: "police",
        //     rank: "officer",
        //   },
        // },
        // {
        //   cid: "2",
        //   firstName: "Doe",
        //   lastName: "John",
        //   gender: "Male",
        //   phoneNumber: "123456789",
        //   cash: 1000,
        //   bank: 15000,
        //   job: {
        //     name: "unemployed",
        //   },
        // },
      ],
    },
  ]);

  const hasCharacters = characters.length > 0;

  return (
    <main
      className={
        visible
          ? `w-screen h-screen flex flex-col items-center justify-center bg-[#090a0d] relative`
          : `exit`
      }
    >
      <div className="absolute top-0 h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(80,89,100,.6),rgba(255,255,255,0))] z-0" />
      <div className="relative container flex flex-col gap-8 z-10">
        <section className="relative container flex flex-col gap-8">
          <section className="enter">
            <Header hasCharacters={hasCharacters} />
          </section>
          <section className="enter" style={{ animationDelay: "0.05s" }}>
            {hasCharacters ? (
              <Selection characters={characters} />
            ) : (
              <Creation />
            )}
          </section>
        </section>
      </div>
    </main>
  );
}

export default App;
