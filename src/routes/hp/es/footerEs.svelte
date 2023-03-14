<script>
	import Song from "../components/song.svelte";

</script>
<Song />

<footer class="site-footer">
    <div class="container">
        <div class="row">
            <nav class="col-xs-12 col-sm-3">
                <h5>Productas</h5>
                <ul>
                    <li><a href="/hp/es" class="">Kaddio</a></li>
                    <li><a href="/hp/en/page/enterprise" class="">Kaddio Enterprise</a></li>
                    <!-- <li><a href="/edu" class="">Kaddio Education (LMS)</a></li> -->
                </ul>
            </nav>
            <nav class="col-xs-12 col-sm-3">
                <h5>Ayuda</h5>
                <ul>
                    <li><a target="_blank" rel="noreferrer" href="https://ayuda.kaddio.com/help" class="">Centro de Ayuda</a></li>
                    <li><a href="hp/es/page/support" class="">Kontakta oss</a></li>
                    <li><a href="https://github.com/kaddio/documentation/wiki/Kaddio-GraphQL-API">Developer API</a></li>
                </ul>
            </nav>
            <nav class="col-xs-12 col-sm-3">
                <h5>Avtal</h5>
                <ul>
                    <li><a href="hp/sv/page/tos">Användarvillkor</a></li>
                    <li><a href="hp/sv/page/privacy">Sekretesspolicy</a></li>
                </ul>
            </nav>

            <nav class="col-xs-12 col-sm-3">
                <h5>Företaget</h5>
                <ul>
                    <li><a href="/hp/en/page/about-us" class="">About us</a></li>
                    <li><a style="color: green" href="/hp/en/page/environment">Environmental Policy</a></li>
                    <li><a href="/hp/en/page/career">Lediga tjänster</a></li>
                    
                </ul>
            </nav>
        </div>

        <div class="row" style="margin-top: 40px">
            <div class="col-sm-6">
                    © <strong>Kaddio AB</strong> &nbsp; &nbsp;                   
                    

                    <a href="/hp" >Svenska</a> &nbsp; 
                    <!-- <a href="/hp/en">English</a> &nbsp; -->
                    <a href="/hp/es" class="active-dark">Español</a> &nbsp;
            </div>            
        </div>
    </div>
</footer>