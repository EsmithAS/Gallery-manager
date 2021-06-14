Vue.component( 'navigation' , {
    template : /*html*/`
    <header class="p-2 bg-indigo-700 inline-block h-screen">
        <div class="p-4">
            <h1 class="text-center text-2xl text-indigo-200 font-bold">E/S</h1>
        </div>
        <nav>
            <ul class="text-indigo-400 text-sm space-y-2">                
                <router-link to="/"> 
                    <li class="px-6 py-4 flex flex-col items-center rounded-md hover:bg-indigo-500 cursor-pointer hover:text-white transition duration-500">
                        <svg class="w-5 h-5 stroke-current"><use href="icon/home.svg#home"></use></svg>
                        <span class="mt-2">Home</span>
                    </li>
                </router-link>
                <router-link to="/all"> 
                    <li class="px-6 py-4 flex flex-col items-center rounded-md hover:bg-indigo-500 cursor-pointer hover:text-white transition duration-500">
                        <svg class="w-5 h-5 stroke-current"><use href="icon/files.svg#files"></use></svg>
                        <span class="mt-2">All Files</span>
                    </li>
                </router-link>
                <router-link to="/photos"> 
                    <li class="px-6 py-4 flex flex-col items-center rounded-md hover:bg-indigo-500 cursor-pointer hover:text-white transition duration-500">
                        <svg class="w-5 h-5 stroke-current"><use href="icon/image.svg#image"></use></svg>
                        <span class="mt-2">Photos</span>
                    </li>
                </router-link>
                <router-link to="/shared"> 
                    <li class="px-6 py-4 flex flex-col items-center rounded-md hover:bg-indigo-500 cursor-pointer hover:text-white transition duration-500">
                        <svg class="w-5 h-5 stroke-current"><use href="icon/people.svg#people"></use></svg>
                        <span class="mt-2">Shared</span>
                    </li>
                </router-link>
                <router-link to="/albums"> 
                    <li class="px-6 py-4 flex flex-col items-center rounded-md hover:bg-indigo-500 cursor-pointer hover:text-white transition duration-500">
                        <svg class="w-5 h-5 stroke-current"><use href="icon/collection.svg#collection"></use></svg>
                        <span class="mt-2">Albums</span>
                    </li>
                </router-link>
                <router-link to="/settings"> 
                    <li class="px-6 py-4 flex flex-col items-center rounded-md hover:bg-indigo-500 cursor-pointer hover:text-white transition duration-500">
                        <svg class="w-5 h-5 stroke-current"><use href="icon/setting.svg#setting"></use></svg>
                        <span class="mt-2">Settings</span>
                    </li>
                </router-link>
            </ul>
        </nav>
    </header>
    `
} )