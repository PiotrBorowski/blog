import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { ResumeSection } from "~/components/ResumeSection/ResumeSection";

export default component$(() => {
  return (
    <>
      <ResumeSection sticky>
        <div class="flex flex-row justify-between items-center">
          <div>
            <h3 class="font-bold text-4xl">Piotr Borowski</h3>
            <h4 class="text-md  ">react/react-native developer</h4>
          </div>

          <Link
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10"
            href="/blog"
          >
            Blog
          </Link>
        </div>
      </ResumeSection>

      <ResumeSection sticky>
        <h3 class="font-bold text-4xl">Work experience</h3>
      </ResumeSection>

      <ResumeSection sticky>
        <h3 class="font-bold text-4xl">Education</h3>
      </ResumeSection>

      <ResumeSection sticky>
        <h3 class="font-bold text-4xl">Personal projects</h3>
      </ResumeSection>

      <ResumeSection sticky>
        <h3 class="font-bold text-4xl">Footer</h3>
      </ResumeSection>
    </>
  );
});

export const head: DocumentHead = {
  title: "Piotr Borowski",
  meta: [
    {
      name: "description",
      content: "Piotr Borowski`s Blog",
    },
  ],
};
