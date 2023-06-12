<script>
  import ModulePresentation from "$components/modulePresentation.svelte";
	import ModulesSection from "$components/modulesSection.svelte";
</script>

<ModulesSection>
  <span slot="title">Selecciona las características que deseas</span> 
  <span slot="subtitle">Kaddio se adapta a tus necesidades. Elige las funciones que necesites y cambia cuando quieras. Paga solo por lo que uses.</span> 

    <ModulePresentation href="es/feature/log">
        <span slot="icon">
          <i class="text-white fa-regular fa-heart"></i>
        </span>
        <span slot="title">Historia clínica</span>
        <span slot="body">Kaddio es un software de gestión online adaptable a cualquier volumen de clínica. Desde los centros pequeños hasta las clínicas interdisciplinarias de mayor tamaño, está diseñado para ser fácil de usar. Adapta tanto el contenido como la funcionalidad a tus necesidades.</span>
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
        <span slot="body">Vídeo seguro hasta 500 participantes.</span>
    </ModulePresentation>

    <ModulePresentation href="es/feature/forms">
      <span slot="icon">
          <i class="text-white fa-regular fa-clipboard-list-check"></i>
      </span>
    <span slot="title">Formularios</span>
        <span slot="body">Envía formularios y la declaración de salud a tus clientes, de forma automática o manual.</span>
    </ModulePresentation>
        
    <ModulePresentation href="es/feature/todos">
      <span slot="icon">
          <i class="text-white fa-regular fa-list-ul"></i>
      </span>
        <span slot="title">Tareas</span>
        <span slot="body">Crea tu propia "Lista de tareas pendientes". Delega tareas a otros y obtén una visión general de las acciones que deben llevarse a cabo.</span>
    </ModulePresentation>
                
    <ModulePresentation href="es/feature/documents">
      <span slot="icon">
          <i class="text-white fa-regular fa-folder-tree"></i>
      </span>
        <span slot="title">Documentos</span>
        <span slot="body">Colabora en la nube con tus colegas. Limita el acceso en el sistema de gestión de archivos con un avanzado control de permisos. El control de versiones y las copias de seguridad se realizan automáticamente.</span>
    </ModulePresentation>

    <ModulePresentation href="es/feature/reports">
      <span slot="icon">
          <i class="text-white fa-regular fa-chart-line"></i>
      </span>
        <span slot="title">Informes</span>
        <span slot="body">Mantén el control con las herramientas de estadísticas de Kaddio. Visualiza o exporta los datos para realizar tu propio análisis.</span>
    </ModulePresentation>

</ModulesSection>   