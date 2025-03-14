module.exports = {
  routes: [
    {
      method: "GET",
      path: "/events-by-teacher/teacherName",
      handler: "teacher-name.getEventsByTeacher",
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};
