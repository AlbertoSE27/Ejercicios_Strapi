module.exports = {
  async getEventsByTeacher(ctx) {
    try {
      const { teacherName, teacherId } = ctx.request.params;
      if (!teacherName || !teacherId) {
        return ctx.notFound("Falta el nombre o ID del profesor");
      }
      const eventsByTeacher = await strapi
        .documents("api::teacher.teacher")
        .findOne({
          documentId: teacherId,
          populate: { eventos: { fields: ["tittle"] } },
        });
      if (!eventsByTeacher) {
        return ctx.notFound("No se encontraron eventos para el profesor");
      }
      return ctx.send(eventsByTeacher);
    } catch (error: any) {
      console.error("Error al buscar los eventos:", error);
      return ctx.throw(500, "Error al buscar los eventos");
    }
  },
};
