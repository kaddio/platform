<script lang="ts">
	import Typed from "./typed.svelte";
    import Nav from "./nav.svelte";

    export let color: string;

</script>

<header class="top-section hidden-print">
    <Nav color={color}></Nav>
  
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
            <a class="btn btn-primary" target="_blank" rel="noreferrer" href="https://demo.kaddio.com/login-demo" id="demo-click">Prova demo</a>
        </div>
        
    </div>
</header>

<style>
    header{
        background-image: url(/img/man.jpg);        
    }
</style>