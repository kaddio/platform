<script>
    export let phrase;
</script>

<slot />


Så här skulle man kunna använda denna:


<Trans phrase="Jag godkänner Användarvillkor och Sekretesspolicy">
    <TransPhrase name="Användarvillkor">
        <a href="/sv/legal/tos" class="font-semibold text-oldpink">Användarvillkor</a> och <a href="/sv/legal/privacy" class="font-semibold text-oldpink">Sekretesspolicy</a>.
    </TransPhrase>
</Trans>
