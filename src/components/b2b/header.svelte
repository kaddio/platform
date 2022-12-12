<script>
	import Typed from "./typed.svelte";

</script>

<header class="top-section hidden-print" style="background-image: url(/img/man.jpg);">
    <nav id="navigation" class="navbar" role="navigation">
  
      <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          </button>
  
          <a class="navbar-brand" id="heading" href="/" alt="">
              
                  <img src="/img/kaddio-logo.png" width="25">
              
          </a>
          
  
      </div>
  
      <div class="collapse navbar-collapse clearfix" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
  
              <li class="dropdown">
                  <a href="#" class="dropdown-toggle hidden-xs" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Funktioner <span class="caret"></span></a>
  
                  <ul class="dropdown-menu">
                    <li><a href="/log">Journalsystem online</a></li>
                    <li><a href="/booking">Bokningssystem</a></li>
                    <li><a href="/payment">Kortbetalning</a></li>
                    <li><a href="/invoicing">Faktureringssystem</a></li>
                    <li><a href="/chat">Krypterad video och chat</a></li>
                    <li><a href="/survey">Enkäter</a></li>
                    <li><a href="/forms">Formulär</a></li>
                    <li><a href="/tasks">Uppgifter</a></li>
                    <li><a href="/county-export">Samlingsräkning</a></li>
                    <li><a href="/files">Dokument</a></li>
                  </ul>
              </li>
  
              <li><a href="/support">Kontakta oss</a></li>              
              <li><a href="/#price" class="smooth">Pris</a></li>
              <li><a href="/#signup" class="smooth" data-to-focus="firstname">Skapa konto</a></li>
          </ul>
  
          <ul class="nav navbar-nav navbar-right">
              <li><a href="/#find-organization" class="smooth" data-to-focus="team-url">Logga in</a></li>
          </ul>
      </div><!-- /.navbar-collapse -->
  
  </nav>
  
  
  
    <div class="jumbotron tight container-fluid">
        <h2>Kaddio</h2>
        <Typed>
            <p>För dig som behandlar stress.</p>
            <p>För dig som coachar i ledarskap.</p>
            <p>För dig som masserar spända nackar.</p>
            <p>För dig som hjälper andra ta sig ur depressioner.</p>
            <p>För dig som hjälper andra äta bättre.</p>
            <p>För dig som hjälper andra se bättre.</p>
            <p>För dig som hjälper andra träna bättre.</p>
            <p>För dig som hjälper andra övervinna fobier.</p>
            <p>För dig som söker enkelhet.</p>
            <p>För dig som vill vara effektiv.</p>
            <p>För dig som utbildar.</p>
            <p>För dig som coachar.</p>
            <p>För dig som behandlar.</p>
            <p>För dig som hjälper.</p>
            <p>För dig.^5000</p>
        </Typed>
  
        <div class="cta">
            <a class="btn btn-primary" target="_blank" href="https://demo.kaddio.com/login-demo" id="demo-click">Prova demo</a>
        </div>
        
    </div>
</header>

<style>
    
</style>