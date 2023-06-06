import { Slot, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./styles.module.css";

export const ResumeSection = component$(({ sticky }: { sticky?: boolean }) => {
  const animate = useSignal(false);

  useVisibleTask$(
    () => {
      animate.value = true;
    },
    { strategy: "intersection-observer" }
  );

  return (
    <div
      class={[
        "mt-20 flex items-end justify-center h-[100vh]",
        styles.hidden,
        animate.value ? styles.show : "",
      ]}
    >
      <div
        class={[
          "px-14 py-10 w-full",
          styles.glass,
          sticky ? styles.sticky : "",
        ]}
      >
        <Slot />
      </div>
    </div>
  );
});
