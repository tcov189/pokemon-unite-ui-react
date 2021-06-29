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
    "https://pokemon-unite-api.trevor-builds-apps.com/api",
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
