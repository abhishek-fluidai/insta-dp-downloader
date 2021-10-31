var nightmare = require("nightmare")();
const download = require("image-downloader");

download_dp();

async function download_dp() {
  const dp = await nightmare
    .goto("https://www.instagram.com/ig_shahidhussain")
    .wait(".be6sR")
    .evaluate(() => document.querySelector(".be6sR").src)
    .end();
  //console.log(dp);

  const options = {
    url: dp,
    dest: "/home/cse-bbs/Pictures/"
  };

  async function download_image() {
    try {
      const { filename, image } = await download.image(options);
      console.log(filename); // => /path/to/dest/image.jpg
    } catch (e) {
      console.error(e);
    }
  }

  download_image();
}
