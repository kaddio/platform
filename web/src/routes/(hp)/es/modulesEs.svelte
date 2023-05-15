<script>
  import ModulePresentation from "../components/modulePresentation.svelte";
	import ModulesSection from "../components/modulesSection.svelte";
</script>

<ModulesSection>
  <span slot="title">Seleccione las características que desea</span> 
  <span slot="subtitle">Kaddio se adapta a tus necesidades. Elige las funciones que necesites y cambia cuando quieras. solo paga por lo que usas.</span> 

    <ModulePresentation href="es/feature/log">
        <span slot="icon">
          <i class="text-white fa-regular fa-heart"></i>
        </span>
        <span slot="title">Historia clínica</span>
        <span slot="body">Kaddio es un software de gestión online adaptable a cualquier volumen de clínica. Desde los centros pequeños hasta las clínicas interdisciplinares de mayor tamaño, está diseñado para ser fácil de usar. Adapta tanto el contenido como la funcionalidad a las necesidades de tu negocio.</span>
    </ModulePresentation>
    <ModulePresentation href="es/feature/cal">
        <span slot="icon">
          <i class="text-white fa-regular fa-stopwatch"></i>
      </span>
        <span slot="title">Sistema de reservas</span>
        <span slot="body">Kaddio tiene un servicio de reservas en el que tus clientes pueden reservar a través de una web accesible al público. También puedes optar por administrar las reservas tu mismo dentro de Kaddio.</span>
    </ModulePresentation>

    <ModulePresentation href="es/feature/invoicing">
          <span slot="icon">
              <i class="text-white fa-regular fa-file-lines"></i>
          </span>
          <span slot="title">Sistema de facturación</span>
          <span slot="body">Las facturas se crean automáticamente en función de las citas reservadas. También puedes crearlas de forma independiente. Todas las facturas se guardan en Kaddio.</span>
    </ModulePresentation>
        
    <ModulePresentation href="es/feature/communication">
      <span slot="icon">
          <i class="text-white fa-regular fa-comments"></i>
      </span>
    <span slot="title">Vídeo y chat encriptados</span>
        <span slot="body">Vídeo seguro hasta 100 participantes.</span>
    </ModulePresentation>

    <ModulePresentation href="es/feature/forms">
      <span slot="icon">
          <i class="text-white fa-regular fa-clipboard-list-check"></i>
      </span>
    <span slot="title">Formulär</span>
        <span slot="body">Automatisera utskick av formulär och hälsodeklarationer.</span>
    </ModulePresentation>
        
    <ModulePresentation href="es/feature/todos">
      <span slot="icon">
          <i class="text-white fa-regular fa-list-ul"></i>
      </span>
        <span slot="title">Uppgifter</span>
        <span slot="body">Gör din egen att-göra-lista eller delegera till någon annan.</span>
    </ModulePresentation>
                
    <ModulePresentation href="es/feature/documents">
      <span slot="icon">
          <i class="text-white fa-regular fa-folder-tree"></i>
      </span>
        <span slot="title">Dokument</span>
        <span slot="body">Samarbeta i molnet med dina kollegor. Begränsa åtkomst i filhanteringssystemet med avancerad behörighetsstyrning. Versionshantering och backup kommer automatiskt.</span>
    </ModulePresentation>

    <ModulePresentation href="es/feature/reports">
      <span slot="icon">
          <i class="text-white fa-regular fa-chart-line"></i>
      </span>
        <span slot="title">Rapporter</span>
        <span slot="body">Få koll på verksamheten med Kaddios statistikverktyg. Visualisera data i Kaddio eller exportera för egen analys. </span>
    </ModulePresentation>

</ModulesSection>   