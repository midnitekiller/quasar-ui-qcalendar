(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[209],{e945:function(e,n,t){"use strict";t.r(n),n["default"]="<template>\n  <div style=\"max-width: 800px; width: 100%;\">\n    <q-calendar\n      v-model=\"selectedDate\"\n      view=\"month\"\n      locale=\"en-us\"\n      :day-height=\"100\"\n    >\n      <template #week=\"{ week, weekdays, miniMode }\">\n        <template v-if=\"!miniMode\">\n          <template v-for=\"(computedEvent, index) in getWeekEvents(week, weekdays)\">\n            <q-badge\n              :key=\"index\"\n              class=\"q-row-event\"\n              :class=\"badgeClasses(computedEvent, 'day')\"\n              :style=\"badgeStyles(computedEvent, 'day', week.length)\"\n            >\n              <template v-if=\"computedEvent.event\">\n                <q-icon :name=\"computedEvent.event.icon\" class=\"q-mr-xs\"></q-icon>\n                <span class=\"ellipsis\">{{ computedEvent.event.title }}</span>\n              </template>\n            </q-badge>\n          </template>\n        </template>\n      </template>\n    </q-calendar>\n  </div>\n</template>\n\n<script>\n// normally you would not import \"all\" of QCalendar, but is needed for this example to work with UMD (codepen)\nimport QCalendar from 'ui' // ui is aliased from '@quasar/quasar-ui-qcalendar'\n\nconst CURRENT_DAY = new Date()\n\nfunction getCurrentDay (day) {\n  const newDay = new Date(CURRENT_DAY)\n  newDay.setDate(day)\n  const tm = QCalendar.parseDate(newDay)\n  return tm.date\n}\n\nexport default {\n  data () {\n    return {\n      selectedDate: '',\n      events: [\n        {\n          title: '1st of the Month',\n          color: 'orange',\n          start: getCurrentDay(1),\n          end: getCurrentDay(1)\n        },\n        {\n          title: 'Sisters Birthday',\n          color: 'green',\n          start: getCurrentDay(4),\n          end: getCurrentDay(4),\n          icon: 'cake'\n        },\n        {\n          title: 'Meeting',\n          color: 'red',\n          start: getCurrentDay(8),\n          end: getCurrentDay(8),\n          icon: 'group'\n        },\n        {\n          title: 'Lunch',\n          color: 'teal',\n          start: getCurrentDay(8),\n          end: getCurrentDay(8),\n          icon: 'free_breakfast'\n        },\n        {\n          title: 'Visit Mom',\n          color: 'blue-grey',\n          start: getCurrentDay(20),\n          end: getCurrentDay(20),\n          icon: 'card_giftcard'\n        },\n        {\n          title: 'Conference',\n          color: 'blue',\n          start: getCurrentDay(22),\n          end: getCurrentDay(22),\n          icon: 'ondemand_video'\n        },\n        {\n          title: 'Girlfriend',\n          color: 'teal',\n          start: getCurrentDay(22),\n          end: getCurrentDay(22),\n          icon: 'fastfood'\n        },\n        {\n          title: 'Rowing',\n          color: 'purple',\n          start: getCurrentDay(27),\n          end: getCurrentDay(28),\n          icon: 'rowing'\n        },\n        {\n          title: 'Vacation',\n          color: 'purple',\n          start: getCurrentDay(22),\n          end: getCurrentDay(29),\n          icon: 'flight'\n        }\n      ]\n    }\n  },\n  methods: {\n    isCssColor (color) {\n      return !!color && !!color.match(/^(#|(rgb|hsl)a?\\()/)\n    },\n\n    badgeClasses (infoEvent, type) {\n      const color = infoEvent.event !== void 0 ? infoEvent.event.color : 'transparent'\n      const cssColor = this.isCssColor(color)\n      const isHeader = type === 'header'\n\n      return {\n        [`text-white bg-${color}`]: !cssColor,\n        'full-width': !isHeader && (!infoEvent.side || infoEvent.side === 'full'),\n        'left-side': !isHeader && infoEvent.side === 'left',\n        'right-side': !isHeader && infoEvent.side === 'right',\n        'cursor-pointer': infoEvent.event !== void 0,\n        'event-void': infoEvent.event === void 0 // height: 0, padding: 0\n      }\n    },\n\n    badgeStyles (infoEvent, type, weekLength, timeStartPos, timeDurationHeight) {\n      const s = {}\n      if (timeStartPos) {\n        s.top = timeStartPos(infoEvent.event.time) + 'px'\n      }\n      if (timeDurationHeight) {\n        s.height = timeDurationHeight(infoEvent.event.duration) + 'px'\n      }\n      if (infoEvent.size !== void 0) {\n        s.width = ((100 / weekLength) * infoEvent.size) + '% !important'\n      }\n      // s['align-items'] = 'flex-start'\n      return s\n    },\n\n    getWeekEvents (week, weekdays) {\n      const tsFirstDay = QCalendar.parsed(week[0].date + ' 00:00')\n      const tsLastDay = QCalendar.parsed(week[week.length - 1].date + ' 23:59')\n      const firstDay = QCalendar.getDayIdentifier(tsFirstDay)\n      const lastDay = QCalendar.getDayIdentifier(tsLastDay)\n\n      const eventsWeek = []\n      this.events.forEach((event, id) => {\n        const tsStartDate = QCalendar.parsed(event.start + ' 00:00')\n        const tsEndDate = QCalendar.parsed(event.end + ' 23:59')\n        const startDate = QCalendar.getDayIdentifier(tsStartDate)\n        const endDate = QCalendar.getDayIdentifier(tsEndDate)\n\n        if (this.isBetweenDatesWeek(startDate, endDate, firstDay, lastDay)) {\n          const left = QCalendar.daysBetween(tsFirstDay, tsStartDate, true)\n          const right = QCalendar.daysBetween(tsEndDate, tsLastDay, true)\n\n          eventsWeek.push({\n            id, // index event\n            left, // Position initial day [0-6]\n            right, // Number days available\n            size: week.length - (left + right), // Size current event (in days)\n            event // Info\n          })\n        }\n      })\n\n      const events = []\n      if (eventsWeek.length > 0) {\n        const infoWeek = eventsWeek.sort((a, b) => a.left - b.left)\n        infoWeek.forEach((event, i) => {\n          this.insertEvent(events, week.length, infoWeek, i, 0, 0)\n        })\n      }\n\n      return events\n    },\n\n    insertEvent (events, weekLength, infoWeek, index, availableDays, level) {\n      const iEvent = infoWeek[index]\n      if (iEvent !== void 0 && iEvent.left >= availableDays) {\n        // If you have space available, more events are placed\n        if (iEvent.left - availableDays) {\n          // It is filled with empty events\n          events.push({ size: iEvent.left - availableDays })\n        }\n        // The event is built\n        events.push({ size: iEvent.size, event: iEvent.event })\n\n        if (level !== 0) {\n          // If it goes into recursion, then the item is deleted\n          infoWeek.splice(index, 1)\n        }\n\n        const currentAvailableDays = iEvent.left + iEvent.size\n\n        if (currentAvailableDays < weekLength) {\n          const indexNextEvent = QCalendar.indexOf(infoWeek, e => e.id !== iEvent.id && e.left >= currentAvailableDays)\n\n          this.insertEvent(\n            events,\n            weekLength,\n            infoWeek,\n            indexNextEvent !== -1 ? indexNextEvent : index,\n            currentAvailableDays,\n            level + 1\n          )\n        } // else: There are no more days available, end of iteration\n      } else {\n        events.push({ size: weekLength - availableDays })\n        // end of iteration\n      }\n    },\n\n    isBetweenDates (date, start, end) {\n      return date >= start && date <= end\n    },\n\n    isBetweenDatesWeek (dateStart, dateEnd, weekStart, weekEnd) {\n      return (\n        (dateEnd < weekEnd && dateEnd >= weekStart) ||\n          dateEnd === weekEnd ||\n          (dateEnd > weekEnd && dateStart <= weekEnd)\n      )\n    }\n  }\n}\n<\/script>\n"}}]);