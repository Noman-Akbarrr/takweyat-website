import { defineField, defineType } from "sanity";

export default defineType({
  name: "campaign",
  title: "Campaign",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "program",
      title: "Program",
      type: "reference",
      to: [{ type: "program" }],
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "problem",
      title: "Problem",
      type: "text",
    }),
    defineField({
      name: "solution",
      title: "Solution",
      type: "text",
    }),
    defineField({
      name: "donationTiers",
      title: "Donation Tiers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "amount", title: "Amount", type: "number" }),
            defineField({ name: "impactText", title: "Impact Text", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "story",
      title: "Featured Story",
      type: "reference",
      to: [{ type: "story" }],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
        defineField({ name: "metaDescription", title: "Meta Description", type: "text" }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "headline" },
  },
});
