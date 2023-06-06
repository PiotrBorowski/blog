import type { PropFunction } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import styles from "./styles.module.css";

export const MenuItem = component$<{
  onClick$?: PropFunction<() => void>;
  label: string;
}>(({ onClick$, label }) => {
  return (
    <a class={["w-20", styles.highlight]} onClick$={onClick$}>
      {label}
    </a>
  );
});
