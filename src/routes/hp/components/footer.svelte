
<script lang="ts">
    import Song from './song.svelte';
</script>

<Song></Song>

<footer class="site-footer">
    <div class="container">
        <div class="row">
            <nav class="col-xs-12 col-sm-3">
                <h5>Produkter</h5>
                <ul>
                    <li><a href="/" class="">Kaddio</a></li>
                    <li><a href="/enterprise" class="">Kaddio Enterprise</a></li>
                    <!-- <li><a href="/edu" class="">Kaddio Education (LMS)</a></li> -->
                </ul>
            </nav>
            <nav class="col-xs-12 col-sm-3">
                <h5>Support</h5>
                <ul>
                    <li><a target="_blank" rel="noreferrer" href="https://help.kaddio.com/help" class="">Hjälpcenter</a></li>
                    <li><a href="/support" class="">Kontakta oss</a></li>
                    <li><a href="https://github.com/kaddio/documentation/wiki/Kaddio-GraphQL-API">Developer API</a></li>
                </ul>
            </nav>
            <nav class="col-xs-12 col-sm-3">
                <h5>Avtal</h5>
                <ul>
                    <li><a href="/tos">Användarvillkor</a></li>
                    <li><a href="/privacy">Sekretesspolicy</a></li>
                </ul>
            </nav>

            <nav class="col-xs-12 col-sm-3">
                <h5>Företaget</h5>
                <ul>
                    <li><a href="/about-us" class="">Om oss</a></li>
                    <li><a style="color: green" href="page/environment">Environmental Policy</a></li>
                    <li><a href="page/career">Lediga tjänster</a></li>
                    
                </ul>
            </nav>
        </div>

        <div class="row" style="margin-top: 40px">
            <div class="col-sm-6">
                    © <strong>Kaddio AB</strong> &nbsp; &nbsp;                   
                    

                    <a href="/hp" class="active-dark">Svenska</a> &nbsp; 
                    <!-- <a href="/hp/en">English</a> &nbsp; -->
                    <a href="/hp/es">Español</a> &nbsp;
            </div>            
        </div>
    </div>
</footer>