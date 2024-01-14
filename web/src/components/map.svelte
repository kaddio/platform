<script lang="ts">
    import { onMount } from 'svelte';
    import Error from '../routes/+error.svelte';
    import FooterMarketplace from './footerMarketplace.svelte';

    export let addresses: string[];

    let container: HTMLElement;
    const styles = [
        {
            featureType: 'landscape.natural',
            elementType: 'geometry.fill',
            stylers: [
                {
                    visibility: 'on'
                },
                {
                    color: '#e0efef'
                }
            ]
        },
        {
            featureType: 'poi',
            stylers: [
                {
                    visibility: 'off'
                },
                {
                    hue: '#1900ff'
                },
                {
                    color: '#c0e8e8'
                }
            ]
        },
        {
            featureType: 'landscape.man_made',
            elementType: 'geometry.fill'
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
                {
                    lightness: 100
                },
                {
                    visibility: 'simplified'
                }
            ]
        },
        {
            featureType: 'road',
            elementType: 'labels',
            stylers: [
                {
                    visibility: 'on'
                }
            ]
        },
        {
            featureType: 'water',
            stylers: [
                {
                    color: '#9ad7d5'
                }
            ]
        },
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [
                {
                    visibility: 'on'
                },
                {
                    lightness: 700
                }
            ]
        },
        {
            featureType: 'transit.station.bus',
            stylers: [
                {
                    visibility: 'off'
                }
            ]
        }
    ];

    interface Coordinates {
        latitude: number;
        longitude: number;
    }
    const addressToCoordinates = function (address: string): Promise<Coordinates> {
        return new Promise<Coordinates>((resolve, reject) => {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address: address }, function (result, status: string) {
                if ((status = 'OK')) {
                    resolve(result[0].geometry.location);
                } else {
                    reject(new Error('addressToCoordinates ' + result));
                }
            });
        });
    };
    onMount(() => {
        // console.log('address', address)
        window.initMap = async function () {
            const map = new google.maps.Map(container, {
                maxZoom: 16,
                minZoom: 2,
                zoom: 14,
                styles: styles,
                scrollwheel: !1,
                mapTypeControl: false
            });
            if ('ontouchstart' in window) {
                map.setOptions({
                    draggable: false,
                    scrollwheel: false,
                    disableDoubleClickZoom: true
                });
            }
            let bounds = new google.maps.LatLngBounds();
            await Promise.all(
                addresses.map(async (address) => {
                    const center: Coordinates = await addressToCoordinates(address);

                    const marker = new google.maps.Marker({
                        map: map,
                        position: center
                    });
                    bounds.extend(marker.getPosition());

                    marker.addListener('click', () => {
                        map.setZoom(15);
                        map.setCenter(marker.getPosition());
                    });
                })
            );

            map.fitBounds(bounds);
        };
        var script = document.createElement('script');
        script.src =
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyCXqXMri1T3Ndjue5lQVDLx9nM-uoTIuZQ&callback=initMap';
        script.async = true;
        document.head.appendChild(script);
    });
</script>

{#if addresses.length > 0}
    <div bind:this={container} class="aspect-video" />
{/if}
