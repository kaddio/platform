<script lang="ts">
    const submit = function(e) {
        const formData = new FormData(e);

        fetch("https://api.kaddio.com   ")
    }

</script>
<div class="row tight">
    <div class="col-sm-6">
        <p>
            </p><h3>Enkelt</h3>
            <p>Kostnadsfritt i 10 dagar och det tar bara några minuter att komma igång.</p>
        <p></p>

        <p>
            </p><h3>Modulärt</h3>
            <p>Betala bara för vad du använder. Du kan när som helst lägga till eller ta bort moduler.</p>
        <p></p>
        </div>

    <div class="col-sm-6">
        <div >
            <h3 class="text-center" style="color: #c38f9c">Skapa konto</h3>
            <form id="create-organization" class="gap-5-vertical" on:submit|preventDefault={submit} name="create">
                <input id="firstname" required="" type="text" class="form-control" name="firstname" placeholder="Förnamn">
                <input required="" type="text" class="form-control" name="lastname" placeholder="Efternamn">
                <input required="" type="email" class="form-control" name="email" placeholder="E-post">
                <input id="orgnamefield" required="" type="text" class="form-control" name="orgname" placeholder="Företagsnamn">
                <input style="display: none;" type="text" class="form-control" name="create" placeholder="Detta fältet ska vara tomt">
                
                <input name="manniska" value="1" checked="" type="hidden">
                <input type="hidden" name="referrer" id="referrer" value="https://kaddio.com/es/, https://kaddio.com/, https://kaddio.com/">
                <input type="hidden" name="ref" id="ref" value="">
                <input type="hidden" name="gclid" id="gclid" value="">
                <input type="hidden" name="i_agree" value="1">

                
                <div class="control-group">
                    <input id="urlfield" required="" type="text" class="form-control" name="orgurl" placeholder="URL">
                    <span class="control-group-addon">.kaddio.com</span>
                </div>
                <div class="text-center">
                    <i><small>        
                        URL är webbadressen där du loggar in i Kaddio.
                </small></i>
                </div> 
                <br>


                
                <input type="text" class="form-control" name="coupon" placeholder="Eventuell rabattkod">
                <p id="result" class="text-center" style="color: #A00; display: none"></p>
                <button type="submit" style="width: 100%" class="btn btn-primary">OK <span id="loading" style="display: none;"><i class="fa fa-spinner fa-pulse"></i></span></button>
                </div>


                <div class="text">
                                                
                    Genom att klicka på “OK“ godkänner du våra <a target="_blank" href="/tos">användarvillkor</a> och <a target="_blank" href="/privacy">sekretesspolicy</a>.
                    
                    Vi skickar Kaddio-relaterad information via e-post.
                </div>       

                <br>

                <div class="text-center">
                    <a href="" id="coupon">Jag har en rabattkod</a>
                </div>

            </form>

            <span id="success" style="display: none">
                <h3 class="text-center" style="color: #0A0">Konto skapat <i class="fa fa-check-circle"></i></h3>

                <p>Du har skapat en ny organisation i Kaddio.</p>

                <p>
                    URL <strong id="url"></strong><br>
                    E-post <strong id="email"></strong>
                </p>

                <p>Vi har skickat ett mail till dig med instruktioner om hur du kommer igång.</p>

            </span>

        </div>

    </div>
</div>