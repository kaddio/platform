import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/index3.js";
import { M as ModuleSection, a as ModuleFeature, F as FaqSection, Q as Qa } from "../../../../../../chunks/faqSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-a4b6a2_START -->${$$result.title = `<title>Kaddio - Kalender och Tidsbokning</title>`, ""}<meta name="${"description"}" content="${"Kaddio Kalender och Tidsbokning"}"><!-- HEAD_svelte-a4b6a2_END -->`, ""}

${validate_component(ModuleSection, "ModuleSection").$$render($$result, {}, {}, {
    sub: () => {
      return `<span slot="${"sub"}">Kaddios Dokumentation / Journal har allt du behöver för att dokumentera verksamheten och journalföra klienter. Ett komplett journalsystem för vård.</span>`;
    },
    title: () => {
      return `<span slot="${"title"}">Kaddio Kalender och Tidsbokning</span>`;
    },
    default: () => {
      return `${validate_component(ModuleFeature, "ModuleFeature").$$render($$result, {}, {}, {
        body: () => {
          return `<span slot="${"body"}">Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>`;
        },
        title: () => {
          return `<span slot="${"title"}">Användarvänligt.</span>`;
        }
      })}

	${validate_component(ModuleFeature, "ModuleFeature").$$render($$result, {}, {}, {
        body: () => {
          return `<span slot="${"body"}">Skapa egna mallar för journalanteckningar utifrån dina behov och din verksamhet. Välj egna sökord/rubriker. Använd malltext, fraser, filuppladdning och mer</span>`;
        },
        title: () => {
          return `<span slot="${"title"}">Flexibelt.</span>`;
        }
      })}

	${validate_component(ModuleFeature, "ModuleFeature").$$render($$result, {}, {}, {
        body: () => {
          return `<span slot="${"body"}">Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>`;
        },
        title: () => {
          return `<span slot="${"title"}">Säkert.</span>`;
        }
      })}

	${validate_component(ModuleFeature, "ModuleFeature").$$render($$result, {}, {}, {
        body: () => {
          return `<span slot="${"body"}">Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>`;
        },
        title: () => {
          return `<span slot="${"title"}">Behörighetsstyrning.</span>`;
        }
      })}

	${validate_component(ModuleFeature, "ModuleFeature").$$render($$result, {}, {}, {
        body: () => {
          return `<span slot="${"body"}">Automatisera flöden med Kaddio GraphQL API. Kaddio Journal finns åtkomligt via API.
		</span>`;
        },
        title: () => {
          return `<span slot="${"title"}">API.</span>`;
        }
      })}

	${validate_component(ModuleFeature, "ModuleFeature").$$render($$result, {}, {}, {
        body: () => {
          return `<span slot="${"body"}">Kaddio tar kontinuerlig backup av allting i Kaddio, flera gånger per dygn. Säkerhetskopior lagras krypterat på geografiskt skiljda platser.
		</span>`;
        },
        title: () => {
          return `<span slot="${"title"}">Backup.</span>`;
        }
      })}`;
    }
  })}
  

${validate_component(FaqSection, "FaqSection").$$render($$result, {}, {}, {
    title: () => {
      return `<span slot="${"title"}">Funktioner</span>`;
    },
    default: () => {
      return `${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Skapa dina egna mallar för journalanteckningar så de passar din verksamhet. Välj din egna sökord/rubriker. Använd malltext, fraser, filuppladdning och mer.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Anteckningsmallar</span>`;
        }
      })}

	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Kaddio kan användas som digital personalliggare genom Arbetstid i Kalendern, med hjälp av Loggning uppfylls även Skatteverkets regler kring kontroll.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Personalliggare</span>`;
        }
      })}

	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Läsning och redigering loggas. Loggen visar vad som gjorts med en viss klients journal och av vem, när och från vilken ip-adress.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Loggning</span>`;
        }
      })}

	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Läsning och redigering loggas. Loggen visar vad som gjorts med en viss klients journal och av vem, när och från vilken ip-adress.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">API</span>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
