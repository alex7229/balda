const parser = require("node-html-parser");
const parse = parser.parse;
const fs = require("fs");

const wait = async (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
};

const fetchPage = async (url) => {
  const pageResponse = await fetch(url);
  const pageBuffer = await pageResponse.arrayBuffer();
  const decoder = new TextDecoder("windows-1251");
  const text = decoder.decode(pageBuffer);
  return text;
};

const parsePage = (html) => {
  const root = parse(html);
  const links = root.querySelectorAll("a");
  return Array.from(links)
    .filter((link) => {
      if (link.attributes && link.attributes.href) {
        const href = link.attributes.href;
        return href.match(/#zag-\d+/);
      }
      return false;
    })
    .map((link) => {
      return link.innerText.toLowerCase();
    });
};

const processWords = async () => {
  let words = ["alex", "some"];
  for (let i = 192; i <= 223; i++) {
    let pageName = "http://rus-yaz.niv.ru/doc/dictionary/noun/index.htm";
    if (pageName > 192) {
      pageName = `http://rus-yaz.niv.ru/doc/dictionary/noun/index-${i}.htm`;
    }
    const page = await fetchPage(pageName);
    words = words.concat(parsePage(page));
    await wait(2600);
  }
  fs.writeFileSync("./words.json", JSON.stringify(words), {
    encoding: "utf-8",
  });
};

processWords();
