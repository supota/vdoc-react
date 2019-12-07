const path = require("path");

export const imageBasePath = path.join(process.cwd(), "src", "img");
export const img = (imageName: string) => {
  if (typeof imageName == "string") {
    return path.join(imageBasePath, imageName);
  }
  return;
};
