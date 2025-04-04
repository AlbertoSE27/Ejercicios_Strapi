/*Crea un lifecycle hook que, antes de crear o actualizar un artículo, 
verifique que el contenido cumpla con una longitud mínima y rechace la operación si no la cumple.*/
import { errors } from "@strapi/utils";
const { ApplicationError } = errors;
export default {
  beforeCreate: async (event) => {
    const ctx = strapi.requestContext.get();
    const { params } = ctx;
    const { id } = params;
    const { data } = event.params;
    const descriptionLength = await strapi
      .documents("api::article.article")
      .findOne({
        documentId: id,
        fields: ["description"],
      });
    try {
      if (
        descriptionLength.description.length < 20 ||
        descriptionLength.description.length > 80
      ) {
        throw new ApplicationError(
          "La descripción debe de tener entre 20 y 80 caracteres"
        );
      } else {
        return descriptionLength.description.length;
      }
    } catch (error) {
      throw new ApplicationError(
        "La descripción debe de tener entre 20 y 80 caracteres"
      );
    }
  },
  beforeUpdate: async (event) => {
    const ctx = strapi.requestContext.get();
    const { params } = ctx;
    const { id } = params;
    const { data } = event.params;
    const descriptionLength = await strapi
      .documents("api::article.article")
      .findOne({
        documentId: id,
        fields: ["description"],
      });
    try {
      if (
        descriptionLength.description.length < 20 ||
        descriptionLength.description.length > 80
      ) {
        throw new ApplicationError(
          "La descripción debe de tener entre 20 y 80 caracteres"
        );
      } else {
        return descriptionLength.description.length;
      }
    } catch (error) {
      throw new ApplicationError(
        "La descripción debe de tener entre 20 y 80 caracteres"
      );
    }
  },
};
