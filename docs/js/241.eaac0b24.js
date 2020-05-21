(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[241],{"9f44":function(n,e,t){"use strict";t.r(e),e["default"]='<template>\n  <div style="max-width: 800px; width: 100%;">\n    <q-calendar\n    ref="calendar"\n      v-model="currentDate"\n      view="week"\n      locale="en-us"\n      style="height: 400px;"\n    >\n      \x3c!-- eslint-disable vue/no-unused-vars --\x3e\n      <template #day-container="{ date }">\n        <div class="week-view-current-time-indicator" :style="style" />\n        <div class="week-view-current-time-line" :style="style" />\n      </template>\n    </q-calendar>\n  </div>\n</template>\n\n<script>\n// normally you would not import "all" of QCalendar, but is needed for this example to work with UMD (codepen)\nimport QCalendar from \'ui\' // ui is aliased from \'@quasar/quasar-ui-qcalendar\'\n\nexport default {\n  data () {\n    return {\n      currentDate: void 0,\n      currentTime: void 0,\n      intervalId: null,\n      timeStartPos: 0\n    }\n  },\n\n  mounted () {\n    this.adjustCurrentTime()\n    // now, adjust the time every minute\n    this.intervalId = setInterval(() => {\n      this.adjustCurrentTime()\n    }, 60000)\n  },\n\n  beforeDestroy () {\n    clearInterval(this.intervalId)\n  },\n\n  computed: {\n    style () {\n      return {\n        top: this.timeStartPos + \'px\'\n      }\n    }\n  },\n\n  methods: {\n    adjustCurrentTime () {\n      const now = new Date()\n      const p = QCalendar.parseDate(now)\n      this.currentDate = p.date\n      this.currentTime = p.time\n      this.timeStartPos = this.$refs.calendar.timeStartPos(this.currentTime)\n    }\n  }\n}\n<\/script>\n\n<style lang="sass">\n.week-view-current-time-indicator\n  position: absolute\n  left: 45px\n  height: 10px\n  width: 10px\n  margin-top: -4px\n  background-color: rgba(0, 0, 255, .5)\n  border-radius: 50%\n\n.week-view-current-time-line\n  position: absolute\n  left: 55px\n  border-top: rgba(0, 0, 255, .5) 2px solid\n  width: calc(100% - 50px - 5px)\n\n.body--dark\n  .week-view-current-time-indicator\n    background-color: rgba(255, 255, 0, .85)\n\n  .week-view-current-time-line\n    border-top: rgba(255, 255, 0, .85) 2px solid\n\n</style>\n'}}]);