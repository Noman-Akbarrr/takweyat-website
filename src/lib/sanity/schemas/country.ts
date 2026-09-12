import { defineField, defineType } from "sanity";

export default defineType({
  name: "country",
  title: "Country",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "coordinates",
      title: "Coordinates",
      type: "geopoint",
    }),
    defineField({
      name: "programs",
      title: "Programs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "program" }] }],
    }),
    defineField({
      name: "impact",
      title: "Impact",
      type: "object",
      fields: [
        defineField({ name: "people", title: "People Reached", type: "number" }),
        defineField({ name: "projects", title: "Projects", type: "number" }),
        defineField({ name: "communities", title: "Communities", type: "number" }),
      ],
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "description" },
  },
});
