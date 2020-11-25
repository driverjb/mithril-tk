/**
 * @typedef {object} FieldOptions
 * @property {string} [opt.initialValue]
 * @property {string} [opt.name]
 * @property {(v: any)=>boolean} [opt.validator]
 * @property {string} [opt.failClass]
 * @property {string} [opt.successClass]
 */

/**
 * A field is a value control that can be fed to various UI components. Its settings dictate the behavior of
 * the control that is being operated by it. See controls to see how a Field instance is used.
 * @class
 */
export class Field {
  /**
   * @param {FieldOptions} opt
   */
  constructor(opt) {
    /** @private */
    this._value = opt.initialValue;
    /** @private */
    this._name = opt.name || '';
    /** @private */
    this._validator = opt.validator;
    this._asnycValidator = opt.asyncValidator;
    /** @private */
    this._failClass = opt.failClass;
    /** @private */
    this._successClass = opt.successClass;
    /** @private */
    this._validState = false;
  }
  /**
   * Get the value of the field
   * @returns {*}
   */
  get value() {
    return this._value;
  }
  /**
   * Set the value of the field
   * @param {*} v
   */
  set value(v) {
    this._value = v;
  }
  /**
   * The name of the field. This is used for a placeholder or display name
   * @returns {string}
   */
  get name() {
    return this._name;
  }
  /**
   * If set, will be used to augment the look of a field when validation is successful
   * @returns {string}
   */
  get successClass() {
    return this._successClass;
  }
  /**
   * If set, will be used to augment the look of a field when validation is failed
   * @returns {string}
   */
  get failClass() {
    return this._failClass;
  }
  /**
   * Perform validation of this field based on the set validator function. If not set, this always returns true.
   * @returns {boolean}
   */
  get isValid() {
    return this._validState;
  }
  async validate() {
    if (this._validator) this._validState = this._validator(this._value);
    else if (this._asnycValidator) this._validState = await this._asnycValidator(this._value);
    else this._validState = true;
  }
  /**
   * True if a validator is set, false it not.
   * @returns {boolean}
   */
  get requiresValidation() {
    return this._validator !== undefined || this._asnycValidator !== undefined;
  }
}

export default Field;
