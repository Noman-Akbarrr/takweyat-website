import { defineField, defineType } from "sanity";

export default defineType({
  name: "impactStats",
  title: "Impact Statistics",
  type: "document",
  fields: [
    defineField({
      name: "countries",
      title: "Countries",
      type: "number",
    }),
    defineField({
      name: "projects",
      title: "Projects",
      type: "number",
    }),
    defineField({
      name: "peopleReached",
      title: "People Reached",
      type: "number",
    }),
    defineField({
      name: "communities",
      title: "Communities",
      type: "number",
    }),
    defineField({
      name: "yearsActive",
      title: "Years Active",
      type: "number",
    }),
    defineField({
      name: "childrenEducated",
      title: "Children Educated",
      type: "number",
    }),
    defineField({
      name: "hotMealsDistributed",
      title: "Hot Meals Distributed",
      type: "number",
    }),
    defineField({
      name: "legalServicesProvided",
      title: "Legal Services Provided",
      type: "number",
    }),
    defineField({
      name: "rationPackagesDistributed",
      title: "Ration Packages Distributed",
      type: "number",
    }),
    defineField({
      name: "clothesDistributed",
      title: "Clothes Distributed",
      type: "number",
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "datetime",
    }),
  ],
  preview: {
    select: { title: "countries" },
    prepare(select) {
      return { title: `Impact Stats (${select.title || 0} countries)` };
    },
  },
});
