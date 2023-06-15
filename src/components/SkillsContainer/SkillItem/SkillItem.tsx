import { component$ } from "@builder.io/qwik";

export const SkillItem = component$<{
  name: string;
  level: string;
}>(({ name, level }) => {
  return (
    <li class="mb-3">
      <p class="font-['Lato_Bold']">{name}</p>
      <p class="font-['Lato_Light']">{level}</p>
    </li>
  );
});
