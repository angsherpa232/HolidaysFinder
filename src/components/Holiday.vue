<template>
  <div class="todos">
    <div class="todo" v-for="h in holidays" :key="h.uuid">
      <span class="holidayName">{{ h.name | statement }}</span>
      <br />
      <p>{{ formatDateToString(h.date, h.weekday.date) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["holidays"],
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

.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

@media (max-width: 760px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
