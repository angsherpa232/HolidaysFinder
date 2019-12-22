export default {
  async get() {
    return {
      data: {
        holidays: [
          {
            uuid: 1,
            name: "Christmas",
            date: "2018-12-25",
            weekday: {
              date: {
                name: "Monday"
              }
            }
          },
          {
            uuid: 2,
            name: "New year",
            date: "2018-01-01",
            weekday: {
              date: {
                name: "Sunday"
              }
            }
          }
        ]
      }
    };
  }
};
