import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header>
      <div class="flex justify-center items-center mt-10">
        <div>
          <a href="/" title="pokewik">
            <img
              class="h-36 w-96"
              src="./images/pokemon-name.png"
              alt="Pokemon logo"
              height={144}
              width={384}
            />
          </a>
        </div>
      </div>
    </header>
  );
});
