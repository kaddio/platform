<script>
  import ModulePresentation from "$components/modulePresentation.svelte";
	import ModulesSection from "$components/modulesSection.svelte";
</script>

<ModulesSection>
  <span slot="title">Choose the services you want</span> 
  <span slot="subtitle">Kaddio follows your need. Choose the services you need and change when you want. Pay for what you use.</span> 

    <ModulePresentation href="en/electronic-medical-record">
        <span slot="icon">
          <i class="text-white fa-regular fa-heart"></i>
        </span>
        <span slot="title">Medical record</span>
        <span slot="body">Kaddio Medical Record is a complete module for documentation of your clients.</span>
    </ModulePresentation>
    <ModulePresentation href="en/online-booking">
        <span slot="icon">
          <i class="text-white fa-regular fa-stopwatch"></i>
      </span>
        <span slot="title">Time booking and calendar</span>
        <span slot="body">Easy-to-use time booking and online payment that does everything you expect.</span>
    </ModulePresentation>

    <ModulePresentation href="en/invoicing">
          <span slot="icon">
              <i class="text-white fa-regular fa-file-lines"></i>
          </span>
          <span slot="title">Invoicing</span>
          <span slot="body">Complete invoicing system for small and medium sized businesses.</span>
    </ModulePresentation>
        
    <ModulePresentation href="en/communication">
      <span slot="icon">
          <i class="text-white fa-regular fa-comments"></i>
      </span>
    <span slot="title">Communication</span>
        <span slot="body">Communicate securely and encrypted via chat or video. With two or 500 participants.</span>
    </ModulePresentation>

    <!-- <ModulePresentation>
      <span slot="icon">
          <i class="text-white fa-regular fa-clipboard-list-check"></i>
      </span>
    <span slot="title">Forms</span>
        <span slot="body">Automate delivery of forms and health assessments.</span>
    </ModulePresentation>
        
    <ModulePresentation>
      <span slot="icon">
          <i class="text-white fa-regular fa-list-ul"></i>
      </span>
        <span slot="title">Todos</span>
        <span slot="body">Do your own todo-list or delegate it to someone.</span>
    </ModulePresentation>
                 -->
    <ModulePresentation>
      <span slot="icon">
          <i class="text-white fa-regular fa-folder-tree"></i>
      </span>
        <span slot="title">Documents</span>
        <span slot="body">Collaborate in the cloud with your collegues. Restrict access in the file management system with advanced permission control. Version management and backup comes by default.</span>
    </ModulePresentation>

    <ModulePresentation>
      <span slot="icon">
          <i class="text-white fa-regular fa-chart-line"></i>
      </span>
        <span slot="title">Reports</span>
        <span slot="body">Get an overview of the business with Kaddio's statistics tool. Visualize data in Kaddio or export for your own analysis.</span>
    </ModulePresentation>


    <ModulePresentation>
      <span slot="icon">
          <i class="text-white fa-regular fa-sparkles" />
      </span>
      <span slot="title">Kaddio AI</span>
      <span slot="body"
          >Transcribe with Kaddio AI, after or during the client meeting. Get a summary of a client's current status. Get a summary of chat etc.
  </ModulePresentation>


</ModulesSection>   