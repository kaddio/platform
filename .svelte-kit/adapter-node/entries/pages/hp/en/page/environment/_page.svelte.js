import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/index3.js";
import { H as Header_hero, a as HeroBox } from "../../../../../../chunks/header-hero.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header_hero, "HeaderHero").$$render($$result, {}, {}, {
    title: () => {
      return `<span slot="${"title"}">Environmental policy</span>`;
    }
  })}

${validate_component(HeroBox, "HeroBox").$$render($$result, {}, {}, {
    default: () => {
      return `We are climate positive. As a profitable and well functioning IT-business we have both expectations and abilities to engage and affect our environment, community, staff and customers in many positive ways. We want our impact to be as big as possible and we are comitted to making good.
`;
    }
  })}

<main><article><h4>Workers</h4>
        <p>All workers have access to generous health benefits
        </p>

        <h4>Consumables etc.</h4>
        <ul><li>100% of all consumables are certified with at least <i>Svanen</i> or equivalent certification</li>
            <li>100% of all office food and beverages is ecologic/organic and vegetarian</li></ul>

        <h4>Business trips</h4>
        <ul><li>Business trips are preferrably done using bicycle or public transportation</li>
            <li>Virtual meetings are always considered instead of flights</li>
            <li>Flights must only be used when all other means of transportation can be considered unrealistic (including virtual meetings)</li>
            <li>No flights within Nordic countries.</li></ul>
                            
        <h4>Trees</h4>
        <ul><li>Every time you recommend Kaddio to someone through Kaddio&#39;s recommendation system, <a href="${"https://help.kaddio.com/help/tree"}">we plant a tree</a>.</li></ul>

        <p>Kaddio Environmental Policy<br>
            Feb 3, 2021
        </p></article></main>`;
});
export {
  Page as default
};
