module.exports = {
  routes: [
    {
      method: "POST",
      path: "/class-name-and-id-teacher/:teacherClass",
      handler: "customeClass.asingTeacherToClass",
      config: {
        auth: false,
        policies: [],
      },
    },
  ],
};
