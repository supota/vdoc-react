const path = require("path");

const imageBasePath = path.join(process.cwd(), "src", "client", "img");
const img = (imageName) => {
    if (typeof(imageName) == "string") {
        return path.join(imageBasePath, imageName);
    }
    return;
}

module.exports = {
    imageBasePath: imageBasePath,
    img: img
}