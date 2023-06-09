import { component$, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { JobItem } from "~/components/JobItem/JobItem";
import { MenuItem } from "~/components/MenuItem/MenuItem";
import { ResumeSection } from "~/components/ResumeSection/ResumeSection";
import { MoArrowUp, MoDocument, MoDownload } from "@qwikest/icons/monoicons";
import { SkillsContainer } from "~/components/SkillsContainer/SkillsContainer";

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

  const scrollToTop = $(() => {
    document.getElementById("main")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });

  return (
    <>
      <ResumeSection sticky>
        <div
          q:slot="content"
          id="main"
          class="h-full px-10 flex flex-1 flex-wrap items-center gap-10 content-center"
        >
          <h1 class="font-bold text-6xl text-left md:ml-20 font-serif">
            Hello<span class="text-yellow-200">.</span>
          </h1>
          <Link
            download={"PiotrBorowskiCV"}
            class="text-yellow-200 border-yellow-200 bg-slate-500 hover:text-yellow-300 hover:bg-slate-600 hover:border-yellow-300 transition-colors duration-500 border-2 text-xl font-bold py-3 px-6 h-min rounded flex items-center"
            href="/Piotr_Borowski_CV.pdf"
          >
            Resume PDF
            <MoDocument class="ml-2" />
          </Link>
        </div>

        <div
          q:slot="footer"
          class="flex flex-row justify-between items-center flex-wrap gap-3"
        >
          <div>
            <h3 class="font-bold font-serif text-4xl">
              Piotr Borowski<span class="text-yellow-200">.</span>
            </h3>
            <h4 class="text-md">software developer</h4>
          </div>

          <ul class="flex flex-row gap-4 justify-around flex-1 mr-3 max-w-3xl">
            <MenuItem label="Skills" onClick$={scrollTo("skills")} />
            <MenuItem label="Experience" onClick$={scrollTo("experience")} />
            <MenuItem label="Education" onClick$={scrollTo("education")} />
            <MenuItem label="Contact" onClick$={scrollTo("contact")} />
          </ul>

          <Link
            class="hover:text-yellow-300 border-yellow-200 border-2 text-white font-bold py-1 px-4 rounded"
            href="/blog"
          >
            Blog
          </Link>
        </div>
      </ResumeSection>

      <ResumeSection id="skills" sticky>
        <div q:slot="content" class="flex justify-center flex-1 h-full ">
          <div class="flex flex-row overflow-y-hidden overflow-x-auto gap-20 max-h-96 pb-10 pl-[10%] md:pl-0">
            <SkillsContainer />
            <SkillsContainer />
            {/* <SkillsContainer /> */}
          </div>
        </div>
        <div q:slot="footer" class="flex items-center justify-between">
          <h3 class="font-bold text-4xl">Skills</h3>
          <a onClick$={scrollToTop}>
            <MoArrowUp class={"h-5 w-5"} />
          </a>
        </div>
      </ResumeSection>

      <ResumeSection id="experience" sticky>
        <ul q:slot="content" class="h-full px-10">
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
        <div q:slot="footer" class="flex items-center justify-between">
          <h3 class="font-bold text-4xl">Experience</h3>
          <a onClick$={scrollToTop}>
            <MoArrowUp class={"h-5 w-5"} />
          </a>
        </div>
      </ResumeSection>

      <ResumeSection id="education" sticky>
        <ul q:slot="content" class="h-full px-10">
          <JobItem
            name={"Wrocław University of Science and Technology"}
            position="Master of Science"
            startDate="2020"
            endDate="2021"
          >
            <p></p>
          </JobItem>
          <JobItem
            name={"Wrocław University of Science and Technology"}
            position="Bachelor of Science"
            startDate="2016"
            endDate="2020"
          >
            <p></p>
          </JobItem>
        </ul>

        <div q:slot="footer" class="flex items-center justify-between">
          <h3 class="font-bold text-4xl">Education</h3>
          <a onClick$={scrollToTop}>
            <MoArrowUp class={"h-5 w-5"} />
          </a>
        </div>
      </ResumeSection>

      <ResumeSection id="contact" sticky>
        <div q:slot="footer" class="flex items-center justify-between">
          <h3 class="font-bold text-4xl">Contact</h3>
          <a onClick$={scrollToTop}>
            <MoArrowUp class={"h-5 w-5"} />
          </a>
        </div>
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
