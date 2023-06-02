import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import { BlogPost } from "./BlogPost/BlogPost";

// You will find these components in the "custom components"
// section of the visual editor
// You can also turn on "components only mode" to limit
// editing to only these components
// https://www.builder.io/c/docs/guides/components-only-mode
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: BlogPost,
    name: "BlogPost",
    inputs: [
      {
        name: "title",
        type: "string",
        defaultValue: "New article",
        required: true,
      },
      {
        name: "description",
        type: "longText",
        defaultValue: "Article descritpion",
        required: true,
      },
      {
        name: "date",
        type: "date",
        defaultValue: "January 10, 2023 11:32:00",
        required: true,
      },
      {
        name: "handle",
        type: "text",
        required: true,
      },
      { name: "image", type: "file" },
      { name: "author", type: "reference" },
    ],
  },
];
