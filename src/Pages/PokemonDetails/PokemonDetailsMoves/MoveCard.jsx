import { ClockIcon, LockOpenIcon } from "@heroicons/react/outline";

function MoveCard({
  moveName,
  moveType = null,
  unlockLevel,
  moveCategory,
  cooldown,
  moveDescription,
}) {
  return (
    <div className="mb-2 shadow-sm">
      <div className="flex justify-between w-full px-1">
        <div className="flex flex-col capitalize ml-1 py-">
          {moveType && <span className="font-light text-sm">{moveType}</span>}
          <p className="font-bold text-lg">{moveName}</p>
        </div>

        {unlockLevel && (
          <p className="flex items-center text-lg">
            <LockOpenIcon className="w-4" /> Lv. {unlockLevel}
          </p>
        )}

        <div className="flex flex-col items-end capitalize">
          <p>{moveCategory}</p>

          {cooldown && (
            <div className="flex">
              {cooldown} <ClockIcon className="w-4 text-blue-500 ml-1" />
            </div>
          )}
        </div>
      </div>

      <div className="px-2 pb-2 text-sm">{moveDescription}</div>
    </div>
  );
}

export default MoveCard;
