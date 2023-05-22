import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <span class="text-red-400">Hello Qwik</span>
    </>
  );
});

export const head: DocumentHead = {
  title: "My first Hello Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
