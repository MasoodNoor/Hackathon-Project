import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Product Name",
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule) => Rule.required().min(10),
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      type: "number",
      title: "Price (PKR)",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "capacity",
      type: "string",
      title: "Capacity (oz)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stock",
      type: "number",
      title: "Stock Quantity",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Product Image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: (doc) => `${doc.name}-${doc._id}`, // Use _id for uniqueness
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, ""), // Remove special characters
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
