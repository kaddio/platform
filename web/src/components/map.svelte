<script lang="ts">
    import { onMount } from 'svelte';
    import Error from '../routes/+error.svelte';

    export let address: string;
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
    if (process.browser) {
        window.initMap = async function () {
            const center: Coordinates = await addressToCoordinates(address);

            const map = new google.maps.Map(container, {
                center,
                zoom: 15,
                styles: styles,
                scrollwheel: !1,
                mapTypeControl: false
            });

            if ('ontouchstart' in window) {
                map.setOptions({
                    draggable: false,
                    zoomControl: false,
                    scrollwheel: false,
                    disableDoubleClickZoom: true
                });
            }

            const marker = new google.maps.Marker({
                map: map,
                position: center
            });
        };
    }
</script>

<svelte:head>
    <script
        async
        src="//maps.googleapis.com/maps/api/js?key=AIzaSyBMsThX-fXXnWgTKCbaBIlx0B13eIxp7F4&language=en&callback=initMap"
    ></script>;
</svelte:head>

<div bind:this={container} />
