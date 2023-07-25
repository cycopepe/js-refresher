export default (msg = "default string") => {
  console.log(`calling with: ${msg}`);
  otherFunction();
};

const otherFunction = () => console.log("other function");
