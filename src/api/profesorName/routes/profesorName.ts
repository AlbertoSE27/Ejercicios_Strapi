export default {
  routes: [
    {
      method: "GET",
      path: "/profesorName",
      handler: "profesorName.exampleAction",
      config: {
        auth: false,
      },
    },
  ],
};
