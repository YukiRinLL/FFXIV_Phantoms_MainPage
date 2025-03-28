document.getElementById('assetForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const path = document.getElementById('assetPath').value;
    const format = document.getElementById('assetFormat').value;
    const response = await fetch(`https://v2.xivapi.com/api/asset?path=${encodeURIComponent(path)}&format=${format}`);
    const data = await response.blob();
    const url = URL.createObjectURL(data);
    document.getElementById('assetResult').innerHTML = `<img src="${url}" alt="Asset">`;
});

document.getElementById('mapForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const territory = document.getElementById('mapTerritory').value;
    const index = document.getElementById('mapIndex').value;
    const response = await fetch(`https://v2.xivapi.com/api/asset/map/${territory}/${index}`);
    const data = await response.blob();
    const url = URL.createObjectURL(data);
    document.getElementById('mapResult').innerHTML = `<img src="${url}" alt="Map">`;
});

document.getElementById('searchForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = document.getElementById('searchQuery').value;
    const sheets = document.getElementById('searchSheets').value;
    const response = await fetch(`https://v2.xivapi.com/api/search?query=${encodeURIComponent(query)}&sheets=${sheets}`);
    const data = await response.json();
    document.getElementById('searchResult').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
});

document.getElementById('sheetForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const sheet = document.getElementById('sheetName').value;
    const response = await fetch(`https://v2.xivapi.com/api/sheet/${sheet}`);
    const data = await response.json();
    document.getElementById('sheetResult').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
});

document.getElementById('versionButton').addEventListener('click', async () => {
    const response = await fetch('https://v2.xivapi.com/api/version');
    const data = await response.json();
    document.getElementById('versionResult').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
});