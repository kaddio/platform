import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/index3.js";
import { M as ModuleSection, a as ModuleFeature, F as FaqSection, Q as Qa } from "../../../../../../chunks/faqSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-8rr7ka_START -->${$$result.title = `<title>Kaddio - Dokumentation</title>`, ""}<meta name="${"description"}" content="${"Kaddio Dokumentation har allt du behöver för att dokumentera din verksamhet"}"><!-- HEAD_svelte-8rr7ka_END -->`, ""}

${validate_component(ModuleSection, "ModuleSection").$$render($$result, {}, {}, {
    sub: () => {
      return `<span slot="${"sub"}">Kaddios Dokumentation / Journal har allt du behöver för att dokumentera verksamheten och journalföra klienter. Ett komplett journalsystem för vård.</span>`;
    },
    title: () => {
      return `<span slot="${"title"}">Kaddio Dokumentation</span>`;
    },
    default: () => {
      return `${validate_component(ModuleFeature, "ModuleFeature").$$render($$result, {}, {}, {
        body: () => {
          return `<span slot="${"body"}">Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>`;
        },
        title: () => {
          return `<span slot="${"title"}">Nej det är inte användarvänligt.</span>`;
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
          return `<span slot="${"a"}">Skapa dina egna formulär eller använd vanligt förekommande standardformulär direkt från Kaddio. Skicka skattningsformulär och hälsodeklarationer via e-post och sms. Journalformulär kan skickas automatiskt i samband med bokning eller manuellt vid behov. Svaren sparas i journalen.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Journalformulär</span>`;
        }
      })}

	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Skapa brev, remisser, remissvar och intyg. Skicka med post, via Kaddios chat eller ladda ner som PDF.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Brev och remisser</span>`;
        }
      })}

	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Sök med kod eller fritext och lägg till diagnoser i varje journalanteckning.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">ICD-10</span>`;
        }
      })}

	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Välj om alla i verksamheten ska kunna läsa klienters journal eller om behörigheten ska begränsas till vissa behandlare.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Behörigheter</span>`;
        }
      })}

	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Rita på fram- och baksida av en människokropp för att dokumentera till exempel var klienten upplever smärta.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Bild</span>`;
        }
      })}

	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Håll koll på anteckningar som väntar på att bli signerade.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Lista osignerade anteckningar</span>`;
        }
      })}

	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Exportera och skriv ut enskild journalanteckning eller hela journalen till PDF.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Exportera/skriv ut</span>`;
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
