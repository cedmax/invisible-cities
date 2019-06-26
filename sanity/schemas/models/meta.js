export default {
  name: "meta",
  title: "Meta",
  type: "document",
  liveEdit: false,
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "meta_title",
      title: "Page Title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "meta_decription",
      title: "Meta Decription (for search engines and social sharing)",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      name: "image",
      title: "Image (for social sharing)",
      type: "image",
      validation: Rule => Rule.required(),
    },
  ],
};
