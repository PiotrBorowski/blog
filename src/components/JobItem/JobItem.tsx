import { Slot, component$ } from "@builder.io/qwik";

export const JobItem = component$(
  ({
    name,
    position,
    startDate,
    endDate,
  }: {
    name: string;
    position: string;
    startDate: string;
    endDate?: string;
  }) => {
    return (
      <li class="mt-5">
        <h4 class="text-3xl">{name}</h4>
        <h5 class="ml-1 text-slate-200">{position}</h5>
        <h5 class="ml-1">
          {startDate} - {endDate ?? "now"}
        </h5>
        <Slot />
      </li>
    );
  }
);
