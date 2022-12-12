var $loading = $('#loading').hide();

$(document)
    .ajaxStart(function(){
        $loading.show();
    })
    .ajaxStop(function(){
        $loading.hide();
    });

String.prototype.slugify = function(){
    return String(this)
        .toLowerCase()
        .replace(/ /g, '') // Remove whitespace
        .replace(/-*$/, '') // Cannot end with -
        .replace(/^-*/, '') // Cannot begin with -
        .replace(/å/g, 'a') // å -> a
        .replace(/ä/g, 'a') // ä -> a
        .replace(/ö/g, 'o') // ö -> o
        .replace(/http(s)?/g, '') // ö -> o
        .replace(/[^\w-]+/g, ''); // Remove non alphanumeric characters            
}

$("#orgnamefield" ).keyup(function( event ) {
    if(!$('#urlfield').hasClass('data-is-touched')){
        $('#urlfield').val($('#orgnamefield').val().slugify());
    }
}); 

$("#urlfield" ).blur(function( event ) {
    if($('#urlfield').val().length == 0){
        $('#urlfield').removeClass('data-is-touched');        
    }
    else{
        $('#urlfield').addClass('data-is-touched');
    }

    $('#urlfield').val($('#urlfield').val().slugify());
}); 

$("#create-organization" ).on( "submit", function( event ) {
    event.preventDefault();
    
    $.post("https://api.kaddio.com/api/org", $(this).serialize())

    .fail(function(err){
        $('#result').html('Ny organisation kunde inte skapas just nu, men skicka dina uppgifter till support@kaddio.com så hjälper vi dig komma igång!');
    })

    .done(function(data){
        if(data.status == 'success'){
            // Hide something
            $('#create-organization').hide();
            $('#url').html(data.url);
            $('#email').html(data.email);
            $('#success').show();
        }

        else if (data.msg){
            $('#result').html(data.msg);
            $('#result').show();
        }
        
        else{
            $('#result').html('Formuläret är inte ifyllt');
        }

        ga('send', 'event', 'Organization', 'New');
    });
});