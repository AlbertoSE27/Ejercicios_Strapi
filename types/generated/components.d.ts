import type { Schema, Struct } from '@strapi/strapi';

export interface ClassesAditionalDetails extends Struct.ComponentSchema {
  collectionName: 'components_classes_aditional_details';
  info: {
    description: '';
    displayName: 'Additional Details';
  };
  attributes: {
    classroom: Schema.Attribute.String;
    duration: Schema.Attribute.Integer;
    schedule: Schema.Attribute.Time;
  };
}

export interface EventosAdditionalDetails extends Struct.ComponentSchema {
  collectionName: 'components_eventos_additional_details';
  info: {
    description: '';
    displayName: 'Additional Details';
  };
  attributes: {
    date: Schema.Attribute.Date;
    hour: Schema.Attribute.Time;
    ubication: Schema.Attribute.String;
  };
}

export interface TeachersAdditionalDetails extends Struct.ComponentSchema {
  collectionName: 'components_teachers_additional_details';
  info: {
    description: '';
    displayName: 'Additional Details';
  };
  attributes: {
    experience: Schema.Attribute.Integer;
    speciality: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'classes.aditional-details': ClassesAditionalDetails;
      'eventos.additional-details': EventosAdditionalDetails;
      'teachers.additional-details': TeachersAdditionalDetails;
    }
  }
}
