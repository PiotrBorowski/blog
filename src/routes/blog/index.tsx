import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { getContent, RenderContent } from "@builder.io/sdk-qwik";
import { CUSTOM_COMPONENTS } from "~/components/builder-registry";

export const BUILDER_MODEL = "articles";

export default component$(() => {
  const builderContentRsrc = useResource$<any>(() => {
    return getContent({
      model: BUILDER_MODEL,
      apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY,
    });
  });

  return (
    <Resource
      value={builderContentRsrc}
      onPending={() => <div>Loading...</div>}
      onResolved={(content) => (
        <RenderContent
          model={BUILDER_MODEL}
          content={content}
          apiKey={import.meta.env.PUBLIC_BUILDER_API_KEY}
          customComponents={CUSTOM_COMPONENTS}
        />
      )}
    />
  );
});
