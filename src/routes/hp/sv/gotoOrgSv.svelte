<section class="container" id="find-organization">
    <div id="login" class="jumbotron">
        <div class="row">
            <div class="col-sm-3">
                <h3>Logga in</h3>
            </div>

            <div class="col-sm-9">
                <p>Du loggar in på din organisations hemsida, hitta den här:</p>

                <form id="find-organization-form" style="max-width: 400px">

                    <div class="form-group">
                        <div class="input-group">
                            <input id="team-url" required="" type="text" class="form-control" name="url" placeholder="URL">
                            <span class="input-group-addon">.kaddio.com</span>
                        </div>
                    </div>
                    
                    <p id="find-organization-result" style="color: #A00; display: none">
                        <span>Vi kan inte hitta den organisationen i Kaddio</span>
                    </p>

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary">Gå dit <i class="fa fa-arrow-right"></i></button>
                    </div>
                </form>

            </div>
        </div>
    </div>
</section>