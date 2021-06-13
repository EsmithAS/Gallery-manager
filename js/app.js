const app = new Vue({
    el: '#app',
    data: {
        photos : [
            {
                image : 'https://images.pexels.com/photos/1048036/pexels-photo-1048036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                name: 'Planta roja en maceta',
                size: '3.9 MB',
            }
        ],
        showDescription: false,
        inforPhoto : {},
        infoUser : {}
    },
    methods: {
        selectedImage( photo ) {
            this.inforPhoto = photo
            this.showDescription = true 
        }
    },
})