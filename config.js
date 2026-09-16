var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    accessToken: 'pk.eyJ1IjoiY2NhcmFzaXMiLCJhIjoiY210dnp4dHBlMDRsNDJ5b2FzbzMwYzd0NCJ9.jjPwOMlmB3aCwKp8JpKS_Q',
    showMarkers: true,
    markerColor: '#8db855',
    theme: 'dark',
    use3dTerrain: true,
    title: '<img src="./assets/IMG_3358.jpeg" style="width:100%; height:180px; object-fit:cover; border-radius:6px; margin-bottom:15px;"><br>Arvanitochoria',
    subtitle: 'Arvanite Cartographies of Mt. Arachnaio',
    byline: 'By Christina Maria Carasis <br> University of California, Berkeley <br> Department of Geography',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'What are the Arvanitochoria?',
            image: '',
            description: 'Introduction to Arvanite settlements near Mt. Arachnaio.',
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
            id: 'limnes-church',
            alignment: 'right',
            hidden: false,
            title: 'Church of Agia Triada (Limnes)',
            image: '',
            description: 'The Holy Trinity Church in the village square of Limnes.',
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
