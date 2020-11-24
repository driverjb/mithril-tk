import m from 'mithril';

export const Input = {
  view: ({ attrs }) => {
    /** @type {import('../util/Field.class').Field} */
    let field = attrs.field;
    console.log('view', field.name);
    let cls = attrs.class;
    delete attrs.class;
    return m('input', {
      oninput: ({ target: { value } }) => {
        field.value = value;
        if (field.requiresValidation) field.validate();
      },
      class: `${
        field.requiresValidation ? (field.isValid ? field.successClass : field.failClass) : ''
      } ${attrs.fail ? field.failClass : ''} ${cls}`,
      placeholder: field.name,
      value: field.value,
      ...attrs
    });
  }
};
