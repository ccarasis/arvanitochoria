var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    accessToken: 'pk.eyJ1IjoiY2NhcmFzaXMiLCJhIjoiY210dnp4dHBlMDRsNDJ5b2FzbzMwYzd0NCJ9.jjPwOMlmB3aCwKp8JpKS_Q',
    showMarkers: true,
    markerColor: '#8db855',
    theme: 'dark',
    use3dTerrain: true,
    title: 'Arvanitochoria',
    subtitle: 'Arvanite Cartographies of Mt. Arachnaio',
    byline: 'By Christina Maria Carasis <br> University of California, Berkeley <br> Department of Geography',
    footer: 'Sources: Department of Geography, UC Berkeley',
    chapters: [
        {
            id: 'introduction',
            alignment: 'left',
            hidden: false,
            title: 'What are the Arvanitochoria?',
            image: '',
            description: 'The first chapter contains an introduction to Arvanite cultural sites around Mt. Arachnaio.',
            location: {
                center: [22.9562, 37.6793],
                zoom: 11,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'agia-triada',
            alignment: 'right',
            hidden: false,
            title: 'Church of Agia Triada (Limnes)',
            image: '',
            description: 'Holy Trinity Church in Limnes village square.',
            location: {
                center: [22.8804, 37.7128],
                zoom: 16.5,
                pitch: 65,
                bearing: -10
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
