import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <h1>Piotr Borowski Blog</h1>
      <Slot />
    </>
  );
});
