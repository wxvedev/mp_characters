import ICharacter from "../types/character";
import Button from "./Button";

function CharacterDeletionModal({
  character,
  onClose,
  onConfirm,
}: {
  character: ICharacter;
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="enter fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-[#0c0d10] border border-white/5 rounded-md p-6 text-white">
        <h1 className="text-2xl text-white font-medium">Character Deletion</h1>
        <h2 className="text-md font-regular text-white/60">
          Are you sure you want to delete{" "}
          <span className="font-medium">
            {character.firstname} {character.lastname}
          </span>
          ?
        </h2>
        <span className="text-sm text-gray-400">
          This action cannot be undone.
        </span>
        <div className="flex justify-end mt-4 gap-2">
          <Button
            className="px-4 py-2 text-gray-200 bg-gray-700 rounded hover:bg-gray-600"
            text="Cancel"
            disabled={false}
            onClick={onClose}
          />
          <Button
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
            text="Delete"
            disabled={false}
            onClick={() => {
              onConfirm();
              onClose();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CharacterDeletionModal;
