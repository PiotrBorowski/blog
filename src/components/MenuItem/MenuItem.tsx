import type { PropFunction } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import styles from "./styles.module.css";

export const MenuItem = component$<{
  onClick$?: PropFunction<() => void>;
  label: string;
}>(({ onClick$, label }) => {
  return (
    <a class={[styles.highlight]} onClick$={onClick$}>
      {label}
      <div class={[styles.hiddenChild]}></div>
    </a>
  );
});
