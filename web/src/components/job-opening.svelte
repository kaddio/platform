
<li class="py-8">
    <dl class="relative flex flex-wrap gap-x-3">
        <dt class="sr-only">Role</dt>
        <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
        <a href="mailto:david@kaddio.com?subject=frontend%20dev&body=Hi! I found this job on your website and I'm interested...">
            Senior frontend developer
            <span class="absolute inset-0" aria-hidden="true"></span>
        </a>
        </dd>
        <dt class="sr-only">Description</dt>
        <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600"><slot name="desc"/></dd>
        <dt class="sr-only">Salary</dt>
        <dd class="mt-4 text-base font-semibold leading-7 text-gray-900"><slot name="salary" /></dd>
        <dt class="sr-only">Location</dt>
        <dd class="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
        <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
            <circle cx="1" cy="1" r="1" />
        </svg>
        <slot name="place" />
        </dd>
    </dl>
</li>