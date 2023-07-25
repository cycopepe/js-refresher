export default () => {
  const teams = ["arsenal", "man u"];
  // add item
  teams.push("man city");

  console.log(teams);

  const findIndexResult = teams.findIndex((item) => {
    return item === "arsenal";
  });

  console.log(findIndexResult);

  const mapped = teams.map((team) => ({ name: team }));
  console.log(mapped);

  const flat = mapped.flatMap((item) => item.name + "!");
  console.log(flat);
};
