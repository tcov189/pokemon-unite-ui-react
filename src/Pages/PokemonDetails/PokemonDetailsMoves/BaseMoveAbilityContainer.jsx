import React from "react";

function BaseMoveAbilityContainer({ name, description, type, cooldown = null, category, unlockLevel }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between w-full capitalize">
        <div className="flex flex-col">
            <span className="font-light text-sm">{type}</span>
            <p className="font-bold text-lg">{name}</p>
        </div>
        {unlockLevel && <p>Lv. {unlockLevel}</p>}
        <div className="flex flex-col items-end">
            <p>{ category }</p>
            <p>{ cooldown }</p>
        </div>
      </div>
      <div className="mt-1">{description}</div>
    </div>
  );
}

export default BaseMoveAbilityContainer;
