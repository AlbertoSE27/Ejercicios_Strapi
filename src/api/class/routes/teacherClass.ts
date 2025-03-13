module.exports = {
  routes: [
    {
      method: "POST",
      path: "/class-name-and-id-teacher/:teacherClass",
      handler: "customeClass.assignTeacherToClass",
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};
