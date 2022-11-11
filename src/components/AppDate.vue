<template>
  <span :title="exactDate()">{{ diffTime() }}</span>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedDate from "dayjs/plugin/localizedFormat";

dayjs.extend(relativeTime);
dayjs.extend(localizedDate);

export default {
  props: {
    timeStamp: {
      required: true,
      type: Number,
    },
  },
  methods: {
    diffTime() {
      return dayjs.unix(this.timeStamp).fromNow();
    },
    exactDate() {
      return dayjs.unix(this.timeStamp).format("llll");
    },
  },
};
</script>

<style></style>
