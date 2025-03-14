/*EJERCICIO 7.2: En lugar de depender de la API predeterminada, crearemos un servicio personalizado para asignar profesores a una clase y validar:
Que el profesor no tenga más de 5 clases activas (límite personalizable).
Que la clase no tenga más de 3 profesores asignados.
Si la asignación es exitosa, se enviará una notificación automática.*/

module.exports = {
  async assignTeacherToClass(teacherId, classId) {
    try {
      const limitClasses = 5;
      const limitTeachers = 3;
      const teacher = await strapi.documents("api::teacher.teacher").findOne({
        documentId: teacherId,
        populate: { classes: true },
      });
      if (teacher.classes.length >= limitClasses) {
        return "El profesor ha superado el límite de clases activas";
      }
      const class2 = await strapi.documents("api::class.class").findOne({
        documentId: classId,
        populate: { teachers: true },
      });
      if (class2.teachers.length >= limitTeachers) {
        return "Las clases han superado el límite de profesores asignados";
      }
      await strapi.documents("api::class.class").update({
        documentId: classId,
        data: { teacher: [...class2.teachers, teacher] },
      });
      return "Profesor asignado a la clase correctamente";
    } catch (error) {
      return "Error al asignar profesor a la clase" + error.message;
    }
  },
};
