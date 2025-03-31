/* EJERCICIO 7.1: Cada vez que se asigna un profesor a una clase, el número de clases que imparte deberá incrementarse automáticamente y 
si se elimina una asignación, el número de clases debe disminuir.*/

/*module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const teacherId = result.documentId;
    const teacherClasses = await strapi.documents("api::class.class").findMany({
      populate: { filters: { teacher: teacherId } },
    });
    await strapi.documents("api::teacher.teacher").update({
      documentId: teacherId,
      populate: { data: { classes: teacherClasses.length } },
    });
  },
};

module.exports = {
  async afterDelete(event) {
    const { result } = event;
    const teacherId = result.documentId;
    const teacherClasses = await strapi.documents("api::class.class").findMany({
      populate: { filters: { teacher: teacherId } },
    });
    await strapi.documents("api::teacher.teacher").update({
      documentId: teacherId,
      populate: { data: { classes: teacherClasses.length } },
    });
  },
};*/
