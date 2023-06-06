import { Slot, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./styles.module.css";

export const ResumeSection = component$(
  ({ sticky, id }: { sticky?: boolean; id?: string }) => {
    const animate = useSignal(false);

    useVisibleTask$(
      () => {
        animate.value = true;
      },
      { strategy: "intersection-observer" }
    );

    return (
      <div
        id={id}
        class={[
          "mt-20 flex flex-col justify-end h-[100vh]",
          styles.hidden,
          animate.value ? styles.show : "",
        ]}
      >
        <Slot name="content" />
        <div
          class={[
            "px-14 py-10 w-full",
            styles.glass,
            sticky ? styles.sticky : "",
          ]}
        >
          <Slot name="footer" />
        </div>
      </div>
    );
  }
);
