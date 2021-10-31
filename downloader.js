var nightmare = require("nightmare")();
const download = require("image-downloader");

checkPrice();

async function checkPrice() {
  const dp = await nightmare
    .goto("https://www.instagram.com/ig_shahidhussain")
    .wait(".be6sR")
    .evaluate(() => document.querySelector(".be6sR").src)
    .end();
  //console.log(dp);

  const options = {
    url: dp,
    dest: "/home/abhishek/Desktop/"
  };

  async function downloadIMG() {
    try {
      const { filename, image } = await download.image(options);
      console.log(filename); // => /path/to/dest/image.jpg
    } catch (e) {
      console.error(e);
    }
  }

  downloadIMG();
}
