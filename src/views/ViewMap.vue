<template>
  <div class="viewMap">
    <div id="map">
      <GmapMap
        :center="center"
        :zoom="zoom"
        style="width: 1000px; height: 1000px;"
        :options="mapStyle"
      >
        <GmapMarker
          v-for="(m, id) in marker_items"
          :position="m.position"
          :title="m.title"
          :key="id"
          :icon="m.icon"
          :clickable="true"
          :draggable="true"
        >
        </GmapMarker>
      </GmapMap>
    </div>
  </div>
</template>
<script>
export default {
  name: "ViewMap",
  components: {},
  data() {
    return {
      center: { lat: 35.698304, lng: 139.766325 },
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
    };
  },
  methods: {},
};
</script>
