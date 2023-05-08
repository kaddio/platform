<script lang="ts">
	import { page } from "$app/stores";
    import Logo from "../components/logo.svelte";
    export let color: string = 'white';
</script>

<nav id="navigation" class="navbar">
  
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>

        <Logo color={color}></Logo>
        
    </div>

    <div class="collapse navbar-collapse clearfix" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">

            <li class="dropdown">
                <a href="#" class="dropdown-toggle hidden-xs" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Functiones <span class="caret"></span></a>

                <ul class="dropdown-menu">
                  <li><a href="/log">Journalsystem online</a></li>
                  <li><a href="/booking">Bokningssystem</a></li>
                  <li><a href="/payment">Kortbetalning</a></li>
                  <li><a href="/invoicing">Faktureringssystem</a></li>
                  <li><a href="/communication">Krypterad video och chat</a></li>
                  <li><a href="/survey">Enkäter</a></li>
                  <li><a href="/forms">Formulär</a></li>
                  <li><a href="/tasks">Uppgifter</a></li>
                  <li><a href="/county-export">Samlingsräkning</a></li>
                  <li><a href="/files">Dokument</a></li>
                </ul>
            </li>


            <li><a href="/hp/es/support" class:active-dark={$page.url.pathname.endsWith('support')} >Contactar</a></li>              
            <li><a href="/hp/es#price" class="smooth">Precio</a></li>
            <li><a href="/hp/es#signup" class="smooth" data-to-focus="firstname">Crear una cuenta</a></li>
        </ul>

        <ul class="nav navbar-nav navbar-right">
            <li><a href="/hp/es#find-organization" class="smooth" data-to-focus="team-url">Logga in</a></li>
        </ul>
    </div><!-- /.navbar-collapse -->

</nav>
