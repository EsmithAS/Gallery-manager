const v_photos = {
    template : /*html*/ `
        <div class="flex-1 bg-gray-100 h-screen flex flex-col">
            <search></search>
            <section class="flex-1 flex overflow-hidden">
                <div class="flex-1 px-8 flex flex-col">
                    <h2 class="text-gray-800 text-2xl py-4 font-bold">Photos</h2>
                    <nav class="flex items-center justify-between border-b-2">
                        <ul class="flex items-center space-x-8 text-sm text-gray-500 font-medium">
                            <li class="transition duration-500 py-4 border-b-2 cursor-pointer hover:border-indigo-500 border-indigo-500 text-indigo-500 ">
                                Recently Viewed
                            </li>
                            <li class="transition duration-500 py-4 border-b-2 cursor-pointer hover:border-indigo-500 border-transparent">
                                Recently Added
                            </li>
                            <li class="transition duration-500 py-4 border-b-2 cursor-pointer hover:border-indigo-500 border-transparent">
                                Favorited
                            </li>
                        </ul>
                        <div class="flex bg-gray-200 p-1 rounded space-x-1">
                            <button class="transition duration-500 hover:bg-gray-200 hover:shadow rounded-md w-8 h-8 p-1 text-gray-400 focus:outline-none">
                                <svg class="w-full h-full fill-current"><use href="icon/list.svg#list"></use></svg>
                            </button>
                            <button class="transition duration-500 hover:bg-gray-200 hover:shadow rounded-md w-8 h-8 p-1 bg-white text-gray-400 focus:outline-none">
                                <svg class="w-full h-full fill-current"><use href="icon/grid.svg#grid"></use></svg>
                            </button>
                        </div>
                    </nav>
                    <section class="flex-1 overflow-y-scroll scroll py-8 px-1">
                        <div class="flex justify-between flex-wrap transition-all duration-500">
                            <div v-for="photo of photos" class="m-1 space-y-2 transform hover:scale-110 transition duration-300" :class="{ 'w-1/4' : showDescription , 'w-1/6' : !showDescription }">
                                <img class="cursor-pointer rounded-xl object-cover w-full h-32 ring-indigo-500 ring-offset-2 transition duration-500" :src="photo.image" :alt="photo.name"  @click="selectedImage(photo,$event)">
                                <p class="text-sm font-medium uppercase">{{ photo.name }}</p>
                                <span class="text-gray-700 text-xs">{{ photo.size }}</span>
                            </div>                        
                        </div>
                    </section>
                </div>
                <div class="bg-gray-50 h-full shadow scroll relative transition-all duration-500" :class="{ 'w-96 overflow-y-scroll p-8 opacity-100' : showDescription , 'w-0 overflow-hidden opacity-0' : !showDescription }">
                    <div class="fixed -ml-12 top-0 bottom-0 flex items-center" :class="{ 'block' : showDescription, 'hidden' : !showDescription}">
                        <button class="focus:outline-none w-10 h-10 p-2 text-white bg-indigo-600 shadow-xl rounded-full" @click="showDescription=!showDescription">
                            <svg class="w-full h-full fill-current"><use href="icon/next.svg#next"></use></svg>
                        </button>
                    </div>
                    <div class="space-y-2">
                        <img class="rounded-xl object-cover w-full h-64" :src="infoPhotoSelected.image" alt="">
                        <div class="flex items-center justify-between pb-4">
                            <div>
                                <p class="text-base font-medium">{{ infoPhotoSelected.name }}</p>
                                <span class="text-gray-700 text-sm">{{ infoPhotoSelected.size }}</span>
                            </div>
                            <button class="w-6 h-6 text-gray-300 focus:outline-none" @click="infoPhotoSelected.favorite = !infoPhotoSelected.favorite">
                                <svg class="w-full h-full stroke-current transition duration-500" :class="{ 'text-indigo-500' : infoPhotoSelected.favorite }"><use href="icon/heart.svg#heart"></use></svg>
                            </button>
                        </div>
                        <table class="w-full">
                            <thead>
                                <tr>
                                    <th colspan="2" class="text-lg font-medium text-gray-800 py-3 border-b border-gray-300 text-left">Information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-sm border-b border-gray-300">
                                    <td class="font-medium text-gray-500 py-3">Uploaded By</td>
                                    <td class="font-medium text-gray-800 py-3 text-right">{{ infoPhotoSelected.uploadBy }}</td>
                                </tr>
                                <tr class="text-sm border-b border-gray-300">
                                    <td class="font-medium text-gray-500 py-3">Created</td>
                                    <td class="font-medium text-gray-800 py-3 text-right">{{ infoPhotoSelected.created }}</td>
                                </tr>
                                <tr class="text-sm border-b border-gray-300">
                                    <td class="font-medium text-gray-500 py-3">Last modified</td>
                                    <td class="font-medium text-gray-800 py-3 text-right">{{ infoPhotoSelected.modified }}</td>
                                </tr>
                                <tr class="text-sm border-b border-gray-300">
                                    <td class="font-medium text-gray-500 py-3">Dimensions</td>
                                    <td class="font-medium text-gray-800 py-3 text-right">{{ infoPhotoSelected.dimensions }}</td>
                                </tr>
                                <tr class="text-sm border-b border-gray-300">
                                    <td class="font-medium text-gray-500 py-3">Resolution</td>
                                    <td class="font-medium text-gray-800 py-3 text-right">{{ infoPhotoSelected.resolution }}</td>
                                </tr>   
                            </tbody>
                        </table>
                        <div class="py-4">
                            <h3 class="text-lg font-medium text-gray-800">Description</h3>
                            <div class="flex items-center text-gray-500">
                                <input type="text" name="" id="" v-model="infoPhotoSelected.description" placeholder="Add a description to this image" class="transition duration-500 border-b border-transparent focus:border-gray-300 bg-transparent flex-1 py-3 text-sm outline-none italic">
                                <svg class="w-5 h-5 fill-current"><use href="icon/edit.svg#edit"></use></svg>
                            </div>
                        </div>
                        <table class="w-full">
                            <thead>
                                <tr>
                                    <th colspan="2" class="text-lg font-medium text-gray-800 py-3 border-b border-gray-300 text-left">Shared with</th>
                                </tr>
                            </thead>
                            <tbody class="w-full">
                                <tr v-for="item of infoPhotoSelected.shared" class="text-sm border-b border-gray-300 hover:bg-gray-100 transition duration-500">
                                    <td class="font-medium text-gray-500 py-3 flex items-center">
                                        <img v-if="item.avatar" class="w-10 h-10 object-cover rounded-full mr-4" src="" :alt="item.name">
                                        <span v-else class="w-10 h-10 bg-gray-200 rounded-full mr-4">
                                            <p class="text-center mt-1">
                                                <span class="inline-block w-2 h-3 bg-gray-400 rounded-full"></span>
                                                <span class="inline-block w-2 h-3 bg-gray-400 rounded-full"></span>
                                            </p>
                                        </span>
                                        <span class="text-base font-medium text-gray-800">{{ item.name }}</span>
                                    </td>
                                    <td class="py-3 text-right"><button class="font-medium text-indigo-900 focus:outline-none">Remove</button></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="block w-full text-sm border-b border-gray-300">
                            <div colspan="2" class="font-medium text-gray-500 py-3 flex items-center">
                                <button class="w-10 h-10 rounded-full border-2 border-gray-400 border-dashed flex items-center justify-center mr-4">
                                    <svg class="w-5 h-5 fill-current"><use href="icon/more.svg#more"></use></svg>
                                </button>
                                <span class="text-sm font-medium text-indigo-800">Share</span>
                            </div>
                        </div> 
                        <div class="flex space-x-2 pt-4">
                            <button class="focus:outline-none shadow-lg flex-1 py-1.5 bg-indigo-600 text-indigo-100 font-medium rounded-lg">Download</button>
                            <button class="focus:outline-none shadow-lg flex-1 py-1.5 border-2 border-gray-300 text-gray-500 font-medium rounded-lg">Delete</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>`,
    data() {
        return {
            photos : [
                {
                    id : 1,
                    image : 'https://images.pexels.com/photos/1048036/pexels-photo-1048036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    name : 'Planta roja en maceta',
                    description : 'Planta roja tipo cactus', 
                    size: '3.9 MB',
                    favorite : false,
                    uploadBy : 'Esmith AS',
                    created : 'May. 8, 2021',
                    modified : 'May. 8, 2021',
                    dimensions : '400 x 400',
                    resolution : '72 x 72',
                    shared : [
                        {
                            idUser : 2,
                            name : 'Noemi RE',
                            avatar : ''
                        },
                        {
                            idUser : 3,
                            name : 'Lisbeth AS',
                            avatar : ''
                        }
                    ]
                }
            ],
            showDescription: false,
            infoPhotoSelected : {}
        }
    },
    methods: {
        selectedImage( photo, e) {
            if ( document.querySelector('img.ring-2') ) {
                document.querySelector('img.ring-2').classList.remove('ring-2')
            }
            e.target.classList.add('ring-2')
            this.infoPhotoSelected = photo
            this.showDescription = true 
        }
    },
}
Vue.component( 'v_photos' , v_photos )