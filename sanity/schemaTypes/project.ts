import { defineArrayMember, defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  groups: [
    { name: "overview", title: "Overview", default: true },
    { name: "details", title: "Details" },
    { name: "gallery", title: "Gallery" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Shown on the project card and as the H1 on the project page.",
      type: "string",
      group: "overview",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "overview",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      description: "Lower numbers appear first.",
      type: "number",
      group: "overview",
      initialValue: 0,
    }),
    defineField({
      name: "isNew",
      title: "Show “New” badge",
      type: "boolean",
      group: "overview",
      initialValue: false,
    }),
    defineField({
      name: "description",
      title: "Short description",
      description: "Sits under the title on the project page.",
      type: "text",
      rows: 2,
      group: "overview",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      group: "overview",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "thumbnail",
      title: "Project cover",
      description: "Card image used in the Home list and “Up next”.",
      type: "image",
      group: "overview",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      group: "overview",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({
      name: "details",
      title: "Detail rows",
      description:
        "Numbered rows: Project context, My role, Problem, Solution, etc.",
      type: "array",
      group: "details",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "body", type: "text", title: "Body", rows: 4 },
          ],
          preview: { select: { title: "label", subtitle: "body" } },
        }),
      ],
    }),
    defineField({
      name: "tools",
      title: "Tools used",
      description: "Up to 5 tool logos.",
      type: "array",
      group: "details",
      validation: (r) => r.max(5),
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Name" },
            { name: "icon", type: "image", title: "Icon" },
          ],
          preview: { select: { title: "name", media: "icon" } },
        }),
      ],
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      description: "Images shown in the project gallery. Click opens full size.",
      type: "array",
      group: "gallery",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            {
              name: "image",
              type: "image",
              title: "Image",
              options: { hotspot: true },
              fields: [{ name: "alt", type: "string", title: "Alt text" }],
            },
            { name: "caption", type: "string", title: "Image title" },
          ],
          preview: { select: { title: "caption", media: "image" } },
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "thumbnail", isNew: "isNew" },
    prepare: ({ title, media, isNew }) => ({
      title,
      subtitle: isNew ? "New" : undefined,
      media,
    }),
  },
});
