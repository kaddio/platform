export const rawSalesData = {
    marina: {
        name: 'Marina',
        src: '/img/daniel_rufus.jpeg', // bild på Marina
        text: 'Kontakta Marina så hjälper hon dig. Tillgänglig på vardagar kl 9 - 12.'
    },

    daniel: {
        name: 'Daniel',
        src: '/img/daniel_sale.jpeg',
        text: 'Kontakta Daniel så hjälper han dig. Tillgänglig på vardagar kl 9 - 12.'
    }
};

export const salesData = function (now = new Date()) {
    const isSalesPerson1 = now.getDay() >= 1 && now.getDay() <= 3;

    return isSalesPerson1 ? rawSalesData.marina : rawSalesData.daniel;
};
