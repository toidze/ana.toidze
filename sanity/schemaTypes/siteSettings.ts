import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "nav", title: "Header / nav" },
    { name: "contact", title: "Contact / footer" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      group: "hero",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      title: "Role (for SEO / meta)",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "avatar",
      title: "Hero image",
      description: "The circular image at the top of the home page.",
      type: "image",
      group: "hero",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt text" }],
    }),
    defineField({
      name: "heroHeading",
      title: "Hero heading",
      description: 'e.g. "Hi I’m Ana 👋"',
      type: "string",
      group: "hero",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroIntro",
      title: "Hero intro",
      type: "text",
      rows: 2,
      group: "hero",
    }),
    defineField({
      name: "logoCloudLabel",
      title: "Logo cloud label",
      description: 'e.g. "Companies I’ve worked with"',
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "logoCloud",
      title: "Logo cloud",
      type: "array",
      group: "hero",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Name" },
            {
              name: "logo",
              type: "image",
              title: "Logo",
              options: { hotspot: false },
            },
          ],
          preview: { select: { title: "name", media: "logo" } },
        }),
      ],
    }),
    defineField({
      name: "resume",
      title: "Résumé (PDF)",
      description:
        'Upload a PDF. The "Resume" button in the header downloads this file.',
      type: "file",
      group: "nav",
      options: { accept: "application/pdf" },
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA button label",
      type: "string",
      group: "nav",
    }),
    defineField({
      name: "ctaHref",
      title: "CTA button href",
      type: "string",
      group: "nav",
    }),
    defineField({
      name: "contactHeading",
      title: "Contact heading",
      description: 'e.g. "Seem interested?"',
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "contactSubtext",
      title: "Contact subtext",
      description: 'e.g. "Let’s chat"',
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "socials",
      title: "Social links",
      type: "array",
      group: "contact",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "url", type: "url", title: "URL" },
          ],
          preview: { select: { title: "label", subtitle: "url" } },
        }),
      ],
    }),
    defineField({
      name: "footerText",
      title: "Footer text",
      type: "string",
      group: "contact",
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});
