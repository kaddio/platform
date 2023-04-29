import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/index3.js";
import { M as ModuleSection, a as ModuleFeature, F as FaqSection, Q as Qa } from "../../../../../../chunks/faqSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ModuleSection, "ModuleSection").$$render($$result, {}, {}, {
    sub: () => {
      return `<span slot="${"sub"}">Kaddio Fakturering är ett komplett faktureringsprogram, i och med att det finns integrerat i Kaddio hjälper det dig att fakturera direkt från bokningar och journalanteckningar</span>`;
    },
    title: () => {
      return `<span slot="${"title"}">Kaddio Fakturering</span>`;
    },
    default: () => {
      return `${validate_component(ModuleFeature, "ModuleFeature").$$render($$result, {}, {}, {
        body: () => {
          return `<span slot="${"body"}">Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>`;
        },
        title: () => {
          return `<span slot="${"title"}">Artiklar</span>`;
        }
      })}

	${validate_component(ModuleFeature, "ModuleFeature").$$render($$result, {}, {}, {
        body: () => {
          return `<span slot="${"body"}">Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>`;
        },
        title: () => {
          return `<span slot="${"title"}">Journalformulär</span>`;
        }
      })}

	${validate_component(ModuleFeature, "ModuleFeature").$$render($$result, {}, {}, {
        body: () => {
          return `<span slot="${"body"}">Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.
		</span>`;
        },
        title: () => {
          return `<span slot="${"title"}">ICD-10</span>`;
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
          return `<span slot="${"a"}">Kaddio skapar automatiskt fakturaunderlag utifrån kalender och journal.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Fakturaunderlag</span>`;
        }
      })}
	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Skicka fakturor med post, e-post, via Kaddios säkra kommunikation och e-faktura.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Skicka fakturor</span>`;
        }
      })}
	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Skicka påminnelsefakturor automatiskt och manuellt.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Påminnelsefaktura</span>`;
        }
      })}
	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Kaddio prickar av fakturor automatiskt när kunden betalar via bankgiro.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Automatisk avprickning</span>`;
        }
      })}
	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Skicka e-fakturor med Kaddio enligt EU-standarden PEPPOL.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">E-faktura</span>`;
        }
      })}
	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Fakturera för flera klienter till ett företag, till exempel ett gruppboende eller försäkringsbolag.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Samfakturering</span>`;
        }
      })}
	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Exportera ej betalda fakturor som sedan kan importeras till ett inkassoföretag.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Inkassoexport</span>`;
        }
      })}

	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Exportera fakturor som SIE-fil eller CSV-fil för uppladdning i ett bokföringsprogram.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Export</span>`;
        }
      })}

	${validate_component(Qa, "Qa").$$render($$result, {}, {}, {
        a: () => {
          return `<span slot="${"a"}">Skicka fakturor i världens 33 vanligaste valutor, med automatiska växelkurser som uppdateras varje dag från ECB. Kaddio bokför automatiskt valutakursvinster och valutakursförluster i SIE-exporten.
		</span>`;
        },
        q: () => {
          return `<span slot="${"q"}">Valutor</span>`;
        }
      })}`;
    }
  })}`;
});
export {
  Page as default
};
