import React from "react";

function ViabilityContainer({
  offense,
  endurance,
  mobility,
  scoring,
  support,
}) {
  return (
    <div className="flex justify-between py-2 bg-gray-600 text-gray-300 shadow-inner">
      <StatBlock statName="offense" statValue={offense} />
      <StatBlock statName="endurance" statValue={endurance} />
      <StatBlock statName="mobility" statValue={mobility} />
      <StatBlock statName="scoring" statValue={scoring} />
      <StatBlock statName="support" statValue={support} />
    </div>
  );
}

export default ViabilityContainer;

function StatBlock({ statName, statValue }) {
  const statColor = (stat) => {
    if (stat < 4) {
      return "text-red-400";
    }

    if (stat >= 4 && stat <= 7) {
      return "text-blue-400";
    }

    return "text-green-400";
  };
  return (
    <p className="flex flex-col items-center capitalize shadow px-2">
      <span>{statName}</span>
      <span className={`font-bold ${statColor(statValue)}`}>{statValue}</span>
    </p>
  );
}
