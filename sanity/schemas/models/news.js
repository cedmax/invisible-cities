export default {
  title: "News",
  name: "news",
  type: "document",
  options: {
    hotspot: true,
  },
  preview: {
    select: {
      title: "title",
    },
  },
  fields: [
    {
      title: "Identifier",
      "name": "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      validation: Rule => Rule.required(),
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
