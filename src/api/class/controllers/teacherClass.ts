module.exports = {
  async TeacherToClass(ctx) {
    try {
      const { teacherClass, teacherId, documentIdClass, documentIdTeacher } =
        ctx.request.params;
      if (!teacherClass || !teacherId) {
        return ctx.notFound("El profesor no tiene clase asignada ni ID");
      }
      const className = await strapi.documents("api::class.class").findOne({
        documentId: documentIdClass,
        filters: { tittle: "Maths" },
      });
      if (!className) {
        return ctx.notFound("Clase no encontada");
      }
      const teacherIdentificator = await strapi
        .documents("api::teacher.teacher")
        .findOne({
          documentId: documentIdTeacher,
          filters: { name: "Luis" },
        });
      if (!teacherIdentificator) {
        return ctx.notFound("ID profesor no encontrado");
      }
      await strapi.documents("api::class.class").update({
        documentId: documentIdClass,
        data: { tittle: "Maths" },
      });
      return ctx.send(className);
      return ctx.send(teacherIdentificator);
    } catch (error) {
      return ctx.throw(500, "Error de asignación de profesor a clase");
    }
  },
};
