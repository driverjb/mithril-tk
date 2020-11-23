import m from 'mithril';

export const Input = {
  view: ({ attrs }) => {
    /** @type {import('../util/Field.class').Field} */
    let field = attrs.field;
    return m('input', {
      oninput: ({ target: { value } }) => (field.value = value),
      class:
        `${
          field.requiresValidation ? (field.isValid ? field.successClass : field.failClass) : ''
        } ${attrs.class}${attrs.fail ? ` ${field.failClass}` : ''}` + ` ${attrs.class}`,
      placeholder: field.name,
      value: field.value,
      ...attrs
    });
  }
};
