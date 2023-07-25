export default () => {
  const sports = ["soccer", "racing"];
  const moreSports = ["tenis", "wrestling"];

  const merged = [...sports, ...moreSports];

  console.log(merged);

  //spread in objects
  const team = {
    name: "Arsenal",
    color: "Red"
  };

  const extendedTeam = {
    ...team,
    country: "England"
  };

  console.log(extendedTeam);
};
