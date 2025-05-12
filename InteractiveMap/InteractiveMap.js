const el = document.querySelector('#eorzea-map') // 地图容器，请自行创建

window.YZWF.eorzeaMap.create(el)
.then(function (map) {
  window.map = map
  map.loadMapKey(23) // 23 为地图编号（游戏内 Map 表）
  .then(function () {
  	// 地图要加载好后才可以加标记
    const x = 20
    const y = 30
    const iconUrl = window.YZWF.eorzeaMap.loader.getIconUrl('ui/icon/060000/060561.tex') // 小旗子标记；注意地图 CDN 上只有地图用到的图标
    // const iconUrl = 'https://http.cat/204' // 也可以直接是 URL；如果没有的图标也可以从 cafemaker 上拿

    const marker = window.YZWF.eorzeaMap.simpleMarker(
      x, // 游戏 2D 坐标 X
      y, // 游戏 2D 坐标 Y
      iconUrl, // 图标 url
      map.mapInfo // 直接照抄就行了，这是从 map 实例上拿的地图信息
    )

    map.addMaker(marker)

    setTimeout(() => {
      map.setView(map.mapToLatLng2D(x, y), 0) // 移动到视角中心；setView 参考 leaflet 用法即可
    }, 300)
  })
})