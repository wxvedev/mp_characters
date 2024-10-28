import { useState } from "react";

import { formatMoney } from "../utils/formatter";
import { fetchNui } from "../hooks/fetchNui";

import Button from "./Button";
import CharacterDeletionModal from "./Modal";

import ICharacter from "../types/character";

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
}

function Info({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-semibold text-white/80">{title}</span>
      <span className="font-medium">{description}</span>
    </div>
  );
}

function Selection({ characters }: { characters: ICharacter[] }) {
  const [characterToDelete, setCharacterToDelete] = useState<ICharacter | null>(
    null
  );

  return (
    <main>
      <ul
        className={`max-w-4xl mx-auto ${
          characters.length === 1 ? "grid grid-cols-1" : "grid grid-cols-2"
        }`}
      >
        {characters.map((character) => {
          const { cid, cash, bank, firstname, lastname, sex, phone } =
            character;

          const fullname = `${firstname} ${lastname}`;

          return (
            <li key={cid} className="w-full flex justify-center items-center">
              <article
                className="relative flex flex-col gap-4 rounded-lg backdrop-blur-3xl border border-white/5 p-6 text-white transition-all"
                style={{ width: "420px" }}
              >
                <header>
                  <h3 className="text-3xl font-semibold text-mp">{fullname}</h3>
                </header>

                <main className="flex flex-col gap-4 text-white/60">
                  <Grid>
                    <Info title="Sex" description={sex} />
                    <Info title="Phone Number" description={phone} />
                  </Grid>
                  <Grid>
                    <Info title="Cash" description={formatMoney(cash)} />
                    <Info title="Bank" description={formatMoney(bank)} />
                  </Grid>
                </main>

                <footer className="flex flex-col gap-4">
                  <Button
                    className="bg-blue-500 hover:bg-blue-600"
                    text="Select"
                    disabled={false}
                    onClick={() => fetchNui("selectCharacter", character)}
                  />
                  <Button
                    className="bg-red-500 hover:bg-red-600"
                    text="Delete"
                    disabled={false}
                    onClick={() => setCharacterToDelete(character)}
                  />
                </footer>
              </article>
            </li>
          );
        })}
      </ul>

      {characterToDelete && (
        <CharacterDeletionModal
          character={characterToDelete}
          onClose={() => setCharacterToDelete(null)}
          onConfirm={() => {
            fetchNui("deleteCharacter", characterToDelete);
            setCharacterToDelete(null);
          }}
        />
      )}
    </main>
  );
}

export default Selection;
