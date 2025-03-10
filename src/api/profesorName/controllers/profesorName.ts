export default {
  async getEventsByProfesor(ctx) {
    try {
      const { name } = ctx.params;
      if (!name) {
        return ctx.badRequuest("Falta el nombre del profesor");
      }
      const events = await strapi.db
        .query("appi: :event.event")
        .findMany({ where: { pofesor: name } });
      return ctx.send(events);
    } catch (error) {
      return ctx.internalServerError("Error al buscar los eventos");
    }
  },
};
