import { component$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { JobItem } from "~/components/JobItem/JobItem";
import { MenuItem } from "~/components/MenuItem/MenuItem";
import { ResumeSection } from "~/components/ResumeSection/ResumeSection";

export default component$(() => {
  const scrollTo = (section: string) =>
    $(() => {
      const elem = document.getElementById(section);
      elem?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    });

  return (
    <>
      <ResumeSection sticky>
        <div q:slot="content" class="h-64 mb-20 md:h-96 md:mb-56 px-10">
          <h1 class="font-bold text-6xl text-left md:ml-20">
            Hello<span class="text-yellow-200">.</span>
          </h1>
        </div>

        <div
          q:slot="footer"
          class="flex flex-row justify-between items-center flex-wrap"
        >
          <div>
            <h3 class="font-bold text-4xl">
              Piotr Borowski<span class="text-yellow-200">.</span>
            </h3>
            <h4 class="text-md  ">software developer</h4>
          </div>

          <MenuItem label="Experience" onClick$={scrollTo("experience")} />
          <MenuItem label="Education" onClick$={scrollTo("education")} />
          <MenuItem label="Contact" onClick$={scrollTo("contact")} />

          <Link
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10"
            href="/blog"
          >
            Blog
          </Link>
        </div>
      </ResumeSection>

      <ResumeSection id="experience" sticky>
        <ul q:slot="content" class="h-96 mb-56 px-10">
          <JobItem
            name={"Monterail"}
            position="React Native Developer"
            startDate="September 2021"
          >
            <p></p>
          </JobItem>
          <JobItem
            name={"Comarch"}
            position="Software Developer"
            startDate="July 2019"
            endDate="September 2021"
          >
            <p></p>
          </JobItem>
          <JobItem
            name={"CodeTwo"}
            position="Intern"
            startDate="July 2018"
            endDate="August 2018"
          >
            <p></p>
          </JobItem>
        </ul>
        <h3 q:slot="footer" class="font-bold text-4xl">
          Work experience
        </h3>
      </ResumeSection>

      <ResumeSection id="education" sticky>
        <ul q:slot="content" class="h-96 mb-56 px-10">
          <JobItem
            name={"Wrocław Uniwersity of Science and Technology"}
            position="Master of Science"
            startDate="2020"
            endDate="2021"
          >
            <p></p>
          </JobItem>
          <JobItem
            name={"Wrocław Uniwersity of Science and Technology"}
            position="Bachelor of Science"
            startDate="2016"
            endDate="2020"
          >
            <p></p>
          </JobItem>
        </ul>
        <h3 q:slot="footer" class="font-bold text-4xl">
          Education
        </h3>
      </ResumeSection>

      <ResumeSection id="contact" sticky>
        <h3 q:slot="footer" class="font-bold text-4xl">
          Contact
        </h3>
      </ResumeSection>

      <ResumeSection sticky>
        <h3 q:slot="footer" class="font-bold text-4xl">
          Footer
        </h3>
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
