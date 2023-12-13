const url = 'https://youtube-v2.p.rapidapi.com/channel/videos?channel_id=UCBDS_3lequglPLGJmzSwVIQ';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '476d8b33b1mshe031184b9c4f518p17b69bjsn3c4af992c05c',
		'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videosApi = await fetchData(url)
        let view = `
        ${videosApi.videos.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.thumbnails[0].url}" alt="${video.title}" class="w-full">
                    </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.title}
                </h3>
            </div>
        </div>
        `).slice(0, 4).join('')}
        `;
        content.innerHTML = view;
    } catch (error){
        console.log(error);
        alert('Algo a salido mal, error: ' + error);
    }
})();