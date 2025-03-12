module.exports = {
  routes: [
    {
      method: "POST",
      path: "/class-name-and-id-teacher/:teacherClass",
      handler: "customeClass.TeacherToClass",
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};
