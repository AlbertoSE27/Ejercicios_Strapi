module.exports = {
  async getEventsByTeacher(ctx) {
    try {
      const { teacherName, teacherId } = ctx.request.params;
      if (!teacherName || teacherId) {
        return ctx.notFound("Falta el nombre e ID del profesor");
      }
      const EventsByTeacher = await strapi.documents("api::teacher.teacher").findOne({
        docuementId: teacherId,
        populate: eventos: {tittle},
        });
      if (!EventsByTeacher) {
        return ctx.notFound("No se encontraron eventos para el profesor");
      }
      return ctx.send(EventsByTeacher);
    } catch (error) {
      return ctx.throw(500, "Error al buscar los eventos");
    }
  },
};
