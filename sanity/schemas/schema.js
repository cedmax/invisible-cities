import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import meta from "./models/meta";
import news from "./models/news";
import sections from "./models/sections";
import about from "./models/about";
import artist from "./models/artist";
 
export default createSchema({
  name: "default",
  types: schemaTypes.concat([meta, sections, about, news, artist]),
});
