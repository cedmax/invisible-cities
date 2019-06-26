import React from 'react';

export default {
  title: "Sections",
  name: "section",
  type: "document",
  __experimental_actions: [ 'update', 'publish'], 
  options: {
    hotspot: true,
  },
  preview: {
    select: {
      title: "title",
      city: "city"
    },
    prepare({title, city}) {
      return {
        title: `${title} (${city})`,
        media: <div style={{position: 'relative'}}>
          <img src={`https://icities.netlify.com/images/${city}.jpg`} alt="${city}" />
          <img src={`https://icities.netlify.com/images/${city}.svg`} style={{position: 'absolute', top: 0, left: 0, opacity: .4}} />
        </div>
      } 
    }
  },
  fields: [
    {
      title: "Title",
      "name": "title",
      readOnly: true,
      type: "string"
    },
    {
      title: "City",
      name: "city",
      type: "string",
      validation: Rule => Rule.required(),
      options: {
        list: [
          {title: 'Venice', value: 'venice'},
          {title: 'Wroclaw', value: 'wroclaw'},
          {title: 'Athens', value: 'athens'},
        ], 
        layout: 'dropdown' 
      }
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
