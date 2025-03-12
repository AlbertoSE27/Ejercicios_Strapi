module.exports = {
  routes: [
    {
      method: "GET",
      path: "/events-by-teacher/:teacherName",
      handler: "customController.getEventsByTeacher",
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};
