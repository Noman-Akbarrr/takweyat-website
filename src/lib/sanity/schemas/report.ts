import { defineField, defineType } from "sanity";

export default defineType({
  name: "report",
  title: "Report",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
    }),
    defineField({
      name: "file",
      title: "File",
      type: "file",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Annual Report", value: "annual" },
          { title: "Financial Report", value: "financial" },
          { title: "Impact Report", value: "impact" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "year" },
  },
});
