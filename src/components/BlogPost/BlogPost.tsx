import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const BlogPost = component$(
  (props: {
    title: string;
    description: string;
    date: string;
    image: string;
    handle: string;
    // author: string;
  }) => {
    return (
      <Link
        href={props.handle}
        class="flex flex-col md:flex-row justify-center md:justify-start items-center bg-slate-300 "
      >
        <img
          class="max-w-sm w-10/12 object-scale-down max-h-80"
          src={props.image}
          width={"auto"}
          height={"auto"}
        />
        <div class="max-w-sm mx-4">
          <h2 class="font-bold">{props.title}</h2>
          <p>{props.description}</p>
          <h5 class="font-light">{props.date}</h5>
        </div>
      </Link>
    );
  }
);
