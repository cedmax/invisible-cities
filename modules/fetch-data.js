const axios = require("axios");
const download = require("image-downloader");
const fs = require("fs");

const transformer = data => {
  const { _createdAt, _id, _rev, _updatedAt, ...dataModel } = data;

  return dataModel;
};

const fetchImages = async (dataModel, type) => {
  if (dataModel.image) {
    const options = {
      url: dataModel.image,
      dest: "./public/images",
    };

    const { filename } = await download.image(options);
    dataModel.image = filename.replace("public/", "/");
  }

  if (dataModel.gif) {
    const options = {
      url: `${dataModel.gif}`,
      dest: "./public/images",
    };

    const { filename } = await download.image(options);
    delete dataModel.thumbnail;
    dataModel.gif = filename.replace("public/", "/");
  }

  return dataModel;
};

const reducer = async (acc, dataItem) => {
  const { _type, ...dataModel } = dataItem;
  if (!_type.startsWith("sanity.")) {
    acc[_type] = acc[_type] || [];
    const data = await fetchImages(dataModel, _type);
    acc[_type].push(data);
    if (!isNaN(dataModel.order)) {
      acc[_type] = acc[_type].sort((a, b) => a.order - b.order);
    }
  }
  return acc;
};

(async () => {
  const {
    data: { result },
  } = await axios.get(
    "https://wl5kgevm.api.sanity.io/v1/data/query/production?query=*[]{%20...,%20%22thumbnail%22:%20image.asset-%3E%20metadata.lqip,%20%22image%22:%20image.asset%20-%3E%20url%20,%20%22gif%22:%20gif.asset%20-%3E%20url%20}"
  );

  const array = result.map(transformer);
  let results = {};
  for (let i = 0; i < array.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    results = await reducer(results, array[i]);
  }

  fs.writeFileSync("./data.json", JSON.stringify(results), "utf-8");
})();
