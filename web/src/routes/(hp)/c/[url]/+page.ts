import { apiUrl } from '$lib/apiUrl.js';
import { redirect } from '@sveltejs/kit';

function urlFromEmail(possibleUrl: string) {
    const emailLookup = {
        'carolinefrost.osteopat@gmail.com': 'osteopatcarolinefrost',
        'amanda@endorfinkliniken.com': 'endorfinkliniken',
        'post@danielheed.com': 'svenskhalsa',
        'kontakt@psykologmalmo.se': 'psykologmalmo',
        'jeanette.niehof@vidunova.se': 'vidunovatrauma-expertiscentrum',
        'info@familjeterapueterna.com': 'familjeterapeuterna',
        'jens@halsomagasinet.se': 'fysiotopia',
        'angeli.holmstedt@kbt-konsulterna.se': 'kbt-konsulterna--forum-for-kognitiv-beteendeterapi',
        'psykologtjanst.pontusnilsson@bahnhof.se': 'psykolog-pontus-nilsson',
        'agneta@psykologreneby.se': 'psykologreneby',
        'lindawiikpsykolog@gmail.com': 'linda-wiik-psykologkonsult',
        'andrea@dinpsykoterapi.se': 'dinpsykoterapi-ab',
        'klinik@vnk.nu': 'vnk',
        'info@protreatment.se': 'protreatmentihalmstad',
        'leg.kiropraktor@gmail.com': 'eliaesonskiropraktik',
        'andreas@kba.se': 'osteopatandreaslennartssonab',
        'michael@mjkiropraktik.se': 'mjkiropraktik',
        'info@getagripp.se': 'getagrippsychology',
        'christoffer@psykologhallberg.se': 'psykologhallberg',
        'info@wzpsykologi.se': 'wennerdalhalsa',
        'mejl@stepspsykoterapi.se': 'kbt-rummetsodertalje',
        'kontakt@misopp.se': 'misopp',
        'psykoterapi@prosanis.se': 'grundstrompsykoterapihandledning',
        'info@bergmarkconsulting.se': 'bergmarkconsulting',
        'kontakt@calmegopsykiatri.se': 'calmegopsykiatri',
        'info@psykologiteamet.se': 'psykologiteamet',
        'legkiropaktor2000@gmail.com': 'christer-sahlberg-chiropraktik-ab',
        'info@blythterapier.se': 'blythterapier',
        'ina@inaghai.se': 'inaghaipsykolog',
        'info@maxolsson.com': 'maxolsson',
        'info@kbtgillrohman.se': 'kbtkonsultgillrohmanab',
        'kontakt@recreare.se': 'recreare',
        'bodil@nordlingterapi.se': 'nordlingterapiab',
        'erik@strombackpsykologi.se': 'strombackpsykologi',
        'eli@bjorkstampsykoterapi.se': 'bjorkstampsykoterapi',
        'jonna@zandlerpsykologi.se': 'zandlerpsykologi',
        'niklas@osteomedica.se': 'osteomedica',
        'info@psykologa.se': 'psykologa',
        'karin@rovasjogren.se': 'rovasjogren',
        'kbt.psykolog.terhi.goffhe@gmail.com': 'kbt-psykolog-terhi-goffhe',
        'info@halsomottagningen.se': 'halsomottagningen',
        'hej@osteopatsabinestage.se': 'osteopatsabinestage',
        'curantpsykologi@gmail.com': 'curantpsykologiab',
        'Anna@mptab.com': 'mptanna',
        'jenny@bjorndalpsykologi.se': 'bjorndalpsykologi',
        'info@lakarhusetblekinge.se': 'lakarhusetblekinge',
        'mimihapten@gmail.com': 'neuropsykologhapten',
        'info@sveabkt.se': 'sveakbt-goteborg',
        'kontakt@osteopatlinda.se': 'osteopatlinda',
        'beatrice@levali.nu': 'levali',
        'kontakt@doktorg.se': 'doktorg',
        'psykolog@emeliehaglund.se': 'psykologemeliehaglund',
        'info@fokusklinik.se': 'fokusklinik',
        'testepost@gmalj.com': 'lenaskaddiotest',
        'hej@brapsykologi.se': 'brapsykologi',
        'tomas@toguspsykologi.se': 'toguspsykologi',
        'kontakt@psykologkroon.se': 'malenekroon',
        'bozena@mejakvinnohalsa.se': 'bozenafatygapsykologiab',
        'emestanley@gmail.com': 'stanleypsykologi',
        'sara@spejapsykologi.se': 'renklintpsykolog',
        'psykoterapeutemmaforshed@gmail.com': 'psykoterapeutemmaforshed',
        'johanna@spejapsykologi.se': 'johannaeliassonpsykolog',
        'kontakt@bygdell.se': 'andreasbygdell',
        'info@sveakbt.se': 'sveakbt-malmo',
        'info@jspsykologmottagning.com': 'jennystalhammarpsykologmottagning',
        'morgensternskbt@gmail.com': 'psykologmorgensterns',
        'ida.hallgren@rentaphilosopher.se': 'legpsykologidahallgren',
        'info@danielalambertpsykolog.se': 'danielalambertpsykolog',
        'info@dinrorlighet.se': 'dinrorlighet',
        'psychologistsuzan@gmail.com': 'psychologistsuzan',
        'info@redhawkskliniken.com': 'redhawkskliniken',
        'info@stockholmsamtalstid.se': 'stockholmsamtalstid',
        'matilda@aftercarecenter.se': 'aftercarecenter',
        'kontakt@mind-hub.se': 'mind-hub',
        'info@johnlundborg.se': 'psykoterapimottagningistdp',
        'kontakt@bravurpsykologi.se': 'bravurpsykologi',
        'evabrattfeldt@gmail.com': 'evabrattfeldt',
        'olivia@sanktolofsmottagningen.se': 'oliviajarl',
        'info@medvikt.se': 'medvikt',
        'kristin@kristinpsykolog.se': 'kristinpsykolog',
        'thoraastridlinnea@gmail.com': 'linneavaleripsykologmottagning',
        'kontakt@psykologtovemartinsson.se': 'psykologtovemartinsson',
        'info@bupspektrum.se': 'bupspektrum',
        'info@bralivo.se': 'bralivo',
        'info@wiseliving.se': 'wiseliving',
        'psykolog@joannawilkas.se': 'joannawilkas',
        'info@novapsykiatri.se': 'novapsykiatri',
        'kontakt@hedvigreesalu.se': 'psykologhedvigreesalu',
        'alice.luther.nasholm@gmail.com': 'aliceluthernasholm',
        'psykolog@ludwigfranke.se': 'psykologludwigfranke',
        'annicamedici@gmail.com': 'kunskapmedhjarta',
        'hje.wallin@gmail.com': 'henrikwallinlegpsykolog',
        'oscar@dambergpsykolog.se': 'dambergpsykologmottagning',
        'emelie@ordrik.se': 'ordriklogopedi',
        'psykologjulialidman@gmail.com': 'juli',
        'info@dandelia.ax': 'dandelia',
        'stefan@bjorkpsykologi.se': 'bjorkpsykologi',
        'mona@kasimclinic.com': 'monakasimclinic',
        'david@mineliuspsykologi.com': 'mineliuspsykologi',
        'info@ekorehab.se': 'ekorehab',
        'psykolog@tobiasbjorn.se': 'psykologtobiasbjorn',
        'katarina.kilsby71@gmail.com': 'katarinakilsbypsykologmottagning',
        'jh@rfsl.se': 'rfsljh'
    };

    return emailLookup[possibleUrl];
}

export async function load({ params, fetch }) {
    const redirectUrl = urlFromEmail(params.url);

    if (redirectUrl) {
        console.log(`Redirecting from email ${params.url} to ${redirectUrl}`);
        throw redirect(301, `https://kaddio.com/c/${redirectUrl}`);
    }

    const result = await fetch(`${apiUrl()}/graphqlmarketplace`, {
        method: 'POST',
        body: JSON.stringify({
            query: `
            query {
                findOrganization(url: "${params.url}") {
                    name,
                    stars,
                    address,
                    city,
                    bookingLink,
                    hasBooking,
                    showBooking,
                    hasPlaces
                    hasContactForm
                    url
                    keywords
                    bookingFilterOnHost
                    logo
                    cssVars {
                        name,
                        value
                    }
                    places {
                        name
                        address,
                        city
                        bookingLink
                    }
                    bookingTypes {
                        name
                        categoryName
                        price
                        clientVisibleLength
                        bookingLink
                        description
                    }
                    homepage {
                        headerImg
                        presentation
                        pics
                        showPlaces
                        showUs
                        links {
                            type
                            url
                            label
                        }
                        telephone
                        email
                        mainActivity
                        metaDescription
                    }
                    hosts {
                        firstname
                        lastname
                        imgUrl
                        bookingLink
                        presentation
                        title
                        hasSomeClientBookableBookingType
                    }
                    useReviews
                    reviewCount
                    starsHistogram
                    reviews {
                        clientName
                        comment
                        stars
                        date
                        answer{
                            answer
                        }
                    }
                    geoPoint {
                        coordinates
                    }
                }
            }
        `
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await result.json();

    if (data?.data?.findOrganization) {
        return { organization: data.data.findOrganization };
    } else {
        throw redirect(302, `https://${params.url}.kaddio.com/login`);
    }
}
