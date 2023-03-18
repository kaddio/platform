<script lang="ts">
    let cannotFind: boolean = false;

    const submit = async function(e: SubmitEvent) {
        const formData = new FormData(e.target);

        try {
            // 'https://api.kaddio.com/api/org';
            const response = await fetch('http://localhost:3000/api/find-organization', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.fromEntries(formData.entries()))
            });

             const data = await response.json();

             if(data.status == 'success'){
                window.location.href = data.data.url + '/login';
             }
             else{
                cannotFind = true;
             }
        } catch(e) {
            console.error('err')
        }
    }    
</script>


<div class="bg-white py-16 sm:py-24 lg:py-32">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
      <div class="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
        <h2 class="inline sm:block lg:inline xl:block">Du loggar in på din organisations sida, hitta den här.</h2>
      </div>
      <form class="w-full max-w-md lg:col-span-5 lg:pt-2">
        <div class="flex gap-x-4">
          <label for="url" class="sr-only">Email address</label>
          <input id="url" name="url" type="url" required class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter your email">
          <button type="submit" class="flex-none rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Hitta</button>
        </div>
        <p class="mt-4 text-sm leading-6 text-gray-900">Du vidarebefordras till ditt företags sida.</p>
      </form>
    </div>
  </div>
  