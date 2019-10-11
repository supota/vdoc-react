const path = require("path");

const imageBasePath = path.join(process.cwd(), "src", "client", "img");
const img = (imageName) => {
    return path.join(imageBasePath, imageName);
}

module.exports = {
    imageBasePath: imageBasePath,
    img: img
}