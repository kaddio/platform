<script>
	import Price from "../components/price.svelte";

    const modules = [{
		name: "Journal",
		price: 119,
		selected: true
	},
    {
		name: "Tidsbokning & Kalender",
		price: 79
	},
    {
		name: "Dokument",
		price: 29
	},
    {
		name: "Fakturering",
		price: 79
	},
    {
		name: "Video och Chat",
		price: 119
	},
    {
		name: "Hemsida",
		price: 29
	},
    {
		name: "Uppgifter",
		price: 29
	},
    {
		name: "Samlingsräkning Region",
		price: 119
	}
]
</script>
<section id="price">
<div class="container">
    <div class="row">
        <div class="col-sm-3 col-sm-offset-1">
            <p>
                </p><h3>Pris</h3>
                <p>Klicka i för att se vad Kaddio kostar.</p>
            <p></p>
        </div>
        <div class="col-md-6 col-sm-offset-1">
            <Price currency="SEK" modules="{modules}">

            </Price>
        </div>
    </div>
</div>

</section>
<style>
    #price {
        padding: 10rem 0;
    }
</style>