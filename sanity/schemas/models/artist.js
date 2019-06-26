export default {
  title: "Artist",
  name: "artist",
  type: "document",
  options: {
    hotspot: true,
  },
  preview: {
    select: {
      title: "name",
      media: "image"
    },
  },
  fields: [
    {
      title: "Name",
      "name": "name",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Role",
      "name": "role",
      type: "string"
    },
    {
      title: "Pic",
      "name": "image",
      type: "image",
      validation: Rule => Rule.required(),
    },
    {
      title: "Bio",
      name: "content",
      validation: Rule => Rule.required(),
      type: "array",
      of: [
        {
          type: 'block',
            type: 'block',
            styles: [],
            lists: [],
            marks: {
              decorators: [
                { "title": "Strong", "value": "strong" },
                { "title": "Emphasis", "value": "em" },
                { "title": "Underline", "value": "underline" },
                { "title": "Strike", "value": "strike-through" }
              ]
            }
      
        }
      ]
    },
    {title: "Order", name: "order", validation: Rule => Rule.required(), type: 'number'}
  ],
  orderings: [
    {
      title: 'Visibility',
      name: 'sortingAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    },
  ]
};
