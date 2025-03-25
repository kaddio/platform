<script lang="ts">
    import StatsSection from "$components/statsSection.svelte";
    import StatsSectionPart from "$components/statsSectionPart.svelte";

    export let lang: "sv" | "eng" | "es" = "sv"; 


    const texts: Record<"sv" | "eng" | "es", { users: string; bookings: string; meetings: string }> = {
        sv: {
            users: "användare",
            bookings: "bokningar per dygn",
            meetings: "videomöten per månad"
        },
        eng: {
            users: "users",
            bookings: "bookings per day",
            meetings: "video meetings per month"
        },
        es: {
            users: "usuarios",
            bookings: "reservas por día",
            meetings: "reuniones por video al mes"
        }
    };
</script>

<StatsSection>
    <StatsSectionPart>
        <span slot="title">{texts[lang].users}</span>
        <span slot="sub">47 000+</span>
    </StatsSectionPart>
    <StatsSectionPart>
        <span slot="title">{texts[lang].bookings}</span>
        <span slot="sub">1300+</span>
    </StatsSectionPart>
    <StatsSectionPart>
        <span slot="title">{texts[lang].meetings}</span>
        <span slot="sub">8500+</span>
    </StatsSectionPart>
</StatsSection>