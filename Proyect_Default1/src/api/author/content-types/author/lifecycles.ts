/*Implementa un lifecycle hook que, después de crear un autor,cree automáticamente un artículo de bienvenida asociado a ese autor.*/
export default {
  afterCreate: async (event) => {
    const { result } = event;
    try {
      const newArticle = await strapi.documents("api::article.article").create({
        data: {
          title: "Bienvenido a mi blog",
          description: "Este es mi articulo de bienvenida",
          connect: {
            author: result.documentId,
          },
        },
      });
      const author = await strapi.documents("api::author.author").update({
        documentId: result.documentId,
        data: {
          articles: {
            connect: [newArticle.documentId],
          },
        },
      });
    } catch (error) {
      throw new Error(`Error creating article for author: ${error.message}`);
    }
  },
};
