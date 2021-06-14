Vue.component( 'search' , {
    template : /*html*/ `
        <header class="relative z-10 flex justify-between px-8 py-3 bg-gray-50 shadow">
            <div class="flex items-center flex-1">
                <svg class="w-5 h-5 text-gray-500"><use href="icon/search.svg#search"></use></svg>
                <input type="text" placeholder="Search all files" class="bg-transparent flex-1 px-4 outline-none">
            </div>
            <div class="flex items-center space-x-5">
                <img v-if="infoUser.avatar" class="w-10 h-10 object-cover rounded-full" src="" alt="me">
                <span v-else class="w-10 h-10 bg-gray-200 rounded-full">
                    <p class="text-center mt-1">
                        <span class="inline-block w-2 h-3 bg-gray-400 rounded-full"></span>
                        <span class="inline-block w-2 h-3 bg-gray-400 rounded-full"></span>
                    </p>
                </span>
                <button class="w-12 h-12 bg-white rounded-full focus:outline-none">
                    <svg class="w-full h-full stroke-current text-indigo-700"><use href="icon/add-circle.svg#add-circle"></use></svg>
                </button>
            </div>
        </header>
    `,
    data() {
        return {
            infoUser : {
                name : 'Esmith As',
                avatar : ''
            },
        }
    },
} )