export default () => {
  const teams = ["arsenal", "man u"];
  // old way
  const first = teams[0];
  const second = teams[1];
  // destructure way
  const [ff, ss] = teams;
  console.log(ff);
  console.log(ss);

  // for objects
  const { firstname, lastname } = {
    firstname: "Jose",
    lastname: "G"
  };

  console.log(firstname);
  console.log(lastname);
};
