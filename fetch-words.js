const parser = require("node-html-parser");
const parse = parser.parse;

const firstPageURL =
  "http://rus-yaz.niv.ru/doc/dictionary/noun/fc/slovar-192-1.htm";

const fetchPage = async (url) => {
  const pageResponse = await fetch(url);
  const pageBuffer = await pageResponse.arrayBuffer();
  const decoder = new TextDecoder("windows-1251");
  const text = decoder.decode(pageBuffer);
  return text;
};

const parsePage = (html) => {
  const root = parse(html);
  const headings = root.querySelectorAll("h2.slovar");
  const paragraphs = root.querySelectorAll("h2.slovar ~ p");

  const words = [];

  for (let i = 0; i < 10; i++) {
    const heading = headings[i];
    const detailedText = paragraphs[i];
    words.push({
      heading: heading.innerHTML,
      description: detailedText.innerText,
    });
  }
  console.log(words[6]);
};

const showResult = async () => {
  const firstPage = await fetchPage(firstPageURL);
  parsePage(firstPage);
};

showResult();
