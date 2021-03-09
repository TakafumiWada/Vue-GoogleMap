<template>
  <div class="postMap">
    <div v-for="(marker, id) in marker_items" :key="id">
      <button v-on:click="delMarker(id)">削除</button>
      <input type="text" v-model="marker.title" />
      {{ marker.position }}
    </div>
    <div id="map">
      <GmapMap
        :center="center"
        :zoom="zoom"
        style="width: 1000px; height: 1000px;"
        :options="mapStyle"
        @click="getClickPosition"
      >
        <GmapInfoWindow
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen = false"
        >
          {{ infoTitle }}</GmapInfoWindow
        >
        <GmapMarker
          v-for="(m, id) in marker_items"
          :position="m.position"
          :title="m.title"
          :key="id"
          :icon="m.icon"
          :clickable="true"
          :draggable="true"
          @click="toggleInfoWindow(m)"
        >
        </GmapMarker>
      </GmapMap>
    </div>
  </div>
</template>
<script>
export default {
  name: "PostMap",
  components: {},
  data() {
    return {
      center: { lat: 35.698414, lng: 139.766325 },
      zoom: 18,
      mapStyle: {
        disableDefaultUI: true, // 表示のオプションを指定できます。
        styles: [
          // カスタマイズで使用したスタイルなどはここに。
        ],
      },
      marker_items: [
        { position: { lat: 35.698304, lng: 139.766325 }, title: "title" },
      ],
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      infoWindowPos: null,
      infoWinOpen: false,
      infoTitle: null,
    };
  },
  methods: {
    getClickPosition($event) {
      console.log(
        "緯度：" + $event.latLng.lat() + "経度" + $event.latLng.lng()
      );
      this.marker_items.push({
        position: { lat: $event.latLng.lat(), lng: $event.latLng.lng() },
        title: "title",
      });
    },
    delMarker(id) {
      this.marker_items.splice(id, 1);
    },
    onDragEnd() {
      console.log("hoge");
    },
    toggleInfoWindow(marker) {
      this.infoWindowPos = marker.position;
      this.infoTitle = marker.title;
      this.infoWinOpen = true;
    },
  },
};
</script>
