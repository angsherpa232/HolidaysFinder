<template>
  <div class="holiday">
    <span class="holidayName">{{ holiday.name | statement }}</span>
    <br />
    <p>{{ formatDateToString(holiday.date, holiday.weekday.date) }}</p>
  </div>
</template>

<script>
export default {
  props: ["holiday"],
  methods: {
    formatDateToString(date, weekday) {
      const dateObject = new Date(date);
      const year = dateObject.toLocaleString("en-us", { year: "numeric" });
      const month = dateObject.toLocaleString("en-us", { month: "long" });
      const day = dateObject.toLocaleString("en-us", { day: "numeric" });
      const formattedDate = `${year} ${month} ${day}, ${weekday.name}`;
      return formattedDate;
    }
  },
  filters: {
    statement(name) {
      if (!name) return "";
      return `${name} 
      will be on `;
    }
  }
};
</script>

<style scoped>
.holidayName {
  white-space: pre-wrap;
}

.holiday {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>
