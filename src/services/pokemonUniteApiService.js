export const uniteApiUrl = "http://pokemon-unite-api.test/api";

export async function fetchAllPokemon() {
  const query = `
  {
    all_pokemon {
      id
      name
      image_path
      battle_type
      attack_type
    }
}`;

  const result = await fetch(
    uniteApiUrl,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: {},
      }),
    }
  );

  return await result.json();
}

export async function getPokemon(id) {
  const query = `
  {
    pokemon(id: ${id}) {
      id
      name
      image_path
      battle_type
      attack_type
      difficulty
      ability_name
      ability_description
      ability_icon_path
      offense
      endurance
      mobility
      scoring
      support
      moves {
        id
        name
        slot
        icon_path
        description
        category
        cooldown
        unlock_level
        upgrade_level
        upgrade_effect
        is_evolved_special_attack
      }
    evolutions {
      name
      stage
      level_evolved_at
    }
    }
  }`;

  const result = await fetch(
    uniteApiUrl,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    }
  );

  return await result.json();
}
