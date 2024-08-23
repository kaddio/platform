<div class="pt-8 sm:inline-block sm:w-full sm:px-4">
    <figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
      <blockquote class="text-gray-900">
        <p><slot /></p>
      </blockquote>
      <figcaption class="mt-6 flex items-center gap-x-4">
        <!-- <img class="h-10 w-10 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> -->
        <div>
          <div class="font-semibold text-gray-900"><slot name="quoted" /></div>
          <div class="text-gray-600">
              <slot name="author"/>
          </div>
        </div>
      </figcaption>
    </figure>
  </div>
