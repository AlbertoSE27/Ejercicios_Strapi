module.exports = {
  async assignTeacherToClass(ctx) {
    try {
      const { documentIdClass, teacherId } = ctx.request.params;
      if (!documentIdClass || !teacherId) {
        return ctx.notFound("El profesor no tiene clase asignada ni ID");
      }
      const className = await strapi.documents("api::class.class").findOne({
        documentId: documentIdClass,
        filters: { tittle: "Maths" },
      });
      if (!className) {
        return ctx.notFound("Clase no encontada");
      }
      const teacher = await strapi.documents("api::teacher.teacher").findOne({
        documentId: teacherId,
        filters: { name: "Luis" },
      });
      if (!teacher) {
        return ctx.notFound("ID profesor no encontrado");
      }
      await strapi.documents("api::class.class").update({
        data: {
          teachers: {
            connect: [teacherId],
          },
        },
      });
      return ctx.send(className);
      return ctx.send(teacher);
    } catch (error) {
      return ctx.throw(500, "Error de asignación de profesor a clase");
    }
  },
};
