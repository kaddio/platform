<script lang="ts">
    let cannotFind: boolean = false;

    const submit = async function(e: SubmitEvent) {
        const formData = new FormData(e.target);

        try {
            // 'https://api.kaddio.com/api/org';
            const response = await fetch('http://localhost:3000/api/find-organization', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.fromEntries(formData.entries()))
            });

             const data = await response.json();

             if(data.status == 'success'){
                window.location.href = data.data.url + '/login';
             }
             else{
                cannotFind = true;
             }
        } catch(e) {
            console.error('err')
        }
    }    
</script>

<section class="container" >
    <div id="find-organization" class="jumbotron">
        <div class="row">
            <div class="col-sm-3">
                <h3>Logga in</h3>
            </div>

            <div class="col-sm-9">
                <p>Du loggar in på din organisations startsida, hitta den här:</p>

                <form on:submit|preventDefault={submit} style="max-width: 400px">

                    <div class="form-group">
                        <div class="input-group">
                            <input id="team-url" required type="text" class="form-control" name="url" placeholder="URL">
                            <span class="input-group-addon">.kaddio.com</span>
                        </div>
                    </div>
                    
                    {#if cannotFind }
                        <p>Vi kan inte hitta den organisationen</p>
                    {/if}

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Gå dit <i class="fa fa-arrow-right"></i></button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</section>