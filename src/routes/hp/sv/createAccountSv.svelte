<script lang="ts">

	import Trans from "../../../components/trans.svelte";
    
    const submit = async function(e: SubmitEvent) {
        const formData = new FormData(e.target);

        try {
            // 'https://api.kaddio.com/api/org';
            const response = await fetch('http://localhost:3000/api/org', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.fromEntries(formData.entries()))
            });

            orgCreated = true;
        } catch(e) {
            
        }
    }

    let showCoupon: boolean = false;
    let orgCreated: boolean = false
    let url: string = '';

    export let orgName: string;
    export let email: string;

    const slugify = function(str: string){
        return str.toLowerCase()
            .replace(/ /g, '') // Remove whitespace
            .replace(/-*$/, '') // Cannot end with -
            .replace(/^-*/, '') // Cannot begin with -
            .replace(/Ã¥/g, 'a') // Ã¥ -> a
            .replace(/Ã¤/g, 'a') // Ã¤ -> a
            .replace(/Ã¶/g, 'o') // Ã¶ -> o
            .replace(/http(s)?/g, '') // Ã¶ -> o
            .replace(/[^\w-]+/g, ''); // Remove non alphanumeric characters            
    }

    $: url = slugify(orgName || '');

</script>

<div id="signup">

<div class="container">
<div class="row" >
    <div class="col-sm-4 col-sm-offset-1">
        <Trans lang="sv">
            <h3>Enkelt</h3>
            <p>Kostnadsfritt i 10 dagar och det tar bara några minuter att komma igång.</p>
            <br>
            <h3>Modulärt</h3>
            <p>Betala bara för vad du använder. Du kan när som helst lägga till eller ta bort moduler.</p>
        </Trans>
        <Trans lang="es">
            <h3>Facil</h3>
            <p>Kostnadsfritt i 10 dagar och det tar bara några minuter att komma igång.</p>
            <br>
            <h3>Modulärt</h3>
            <p>Betala bara för vad du använder. Du kan när som helst lägga till eller ta bort moduler.</p>
        </Trans>
        
    </div>
    
    <div class="col-sm-4 col-sm-offset-1">
        {#if !orgCreated}
        <div id="create-organization-outer">
            <h3 class="text-center" style="color: #c38f9c">
                <Trans lang="sv">Skapa konto</Trans>
            </h3>
            <form id="create-organization" class="gap-5-vertical" on:submit|preventDefault={submit} name="create">
                <div class="form-group"><input id="firstname" required type="text" class="form-control" name="firstname" placeholder="Förnamn"></div>
                <div class="form-group"><input required type="text" class="form-control" name="lastname" placeholder="Efternamn"></div>
                <div class="form-group"><input bind:value={email} required type="email" class="form-control" name="email" placeholder="E-post"></div>
                <div class="form-group"><input bind:value={orgName} required type="text" class="form-control" name="orgname" placeholder="Företagsnamn"></div>

                <div class="form-group">
                    <select name="countrycode" required class="form-control">
                        <option value="SE">Sverige</option>
                        <option value="FI">Finland</option>
                        <option value="NO">Norge</option>
                        <option value="DK">Danmark</option>
                        <option value="ES">Spanien</option>
                    </select>
                </div>

                <input style="display: none;" type="text" class="form-control" name="create" placeholder="Detta fältet ska vara tomt">
                
                <input name="manniska" value="1" checked type="hidden">

                <input type="hidden" name="referrer" id="referrer">
                <input type="hidden" name="ref" id="ref" value="">
                <input type="hidden" name="gclid" id="gclid" value="">
                <input type="hidden" name="i_agree" value="1">

                
                <div class="input-group">
                    <input bind:value={url} required type="text" class="form-control" name="orgurl" placeholder="URL">
                    <span class="input-group-addon">.kaddio.com</span>
                </div>
                <div class="text-center">
                    <i><small>
                        <Trans lang="sv">
                            URL är webbadressen där du loggar in i Kaddio.
                        </Trans>
                        <Trans lang="es">
                            URL är webbadressen där du loggar in i Kaddio.
                        </Trans>
                    </small></i>
                </div> 
                <br>
                
                {#if showCoupon }
                    <div class="form-group">
                        <input type="text" class="form-control" name="coupon" placeholder="Eventuell rabattkod">
                    </div>
                {/if}
                <p id="result" class="text-center" style="color: #A00; display: none"></p>
                <div class="form-group">
                    <button type="submit" style="width: 100%" class="btn btn-primary">OK <span id="loading" style="display: none;"><i class="fa fa-spinner fa-pulse"></i></span></button>
                </div>


                <div class="text">
                    
                    Genom att klicka på “OK“ godkänner du våra <a target="_blank" href="/tos">användarvillkor</a> och <a target="_blank" href="/privacy">sekretesspolicy</a>.
                    
                    Vi skickar Kaddio-relaterad information via e-post.
                </div>       

                <br>
                {#if !showCoupon }
                    <div class="text-center">
                        <a href="" on:click|preventDefault={()=>showCoupon=true}>Jag har en rabattkod</a>
                    </div>
                {/if}

            </form>
        </div>
        {/if}
        {#if orgCreated}
            <span>
                <h3 class="text-center" style="color: #0A0">Konto skapat <i class="fa fa-check-circle"></i></h3>

                <p>Du har skapat en ny organisation i Kaddio.</p>

                <p>
                    URL {url}<br>
                    E-post {email}
                </p>

                <p>Vi har skickat ett mail till dig med instruktioner om hur du kommer igång.</p>

            </span>
        {/if}
    </div>
</div>
</div>

</div>
<style>
    #signup {
        padding: 5em 0;
    }
</style>