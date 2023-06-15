import { component$ } from "@builder.io/qwik";
import styles from "./styles.module.css";
import { SkillItem } from "./SkillItem/SkillItem";

export const SkillsContainer = component$(() => {
  return (
    <div
      class={[
        styles.glass,
        "max-w-lg min-w-[240px] md:min-w-[400px] px-4 py-3",
      ]}
    >
      <h4 class="text-center mb-3">Title</h4>
      <ul class="columns-2 ">
        <SkillItem name="React" level="proficient" />
        <SkillItem name="React Native" level="proficient" />
        <SkillItem name="Qwik" level="familiar" />
        <SkillItem name="React" level="proficient" />
        <SkillItem name="React Native" level="proficient" />
        <SkillItem name="Qwik" level="familiar" />
      </ul>
    </div>
  );
});
