type RuleHandler = (value: string) => string | undefined;

// Rules
export const required: RuleHandler = (value) => (value ? undefined : 'Required');

export const minLength = (minLength: number): RuleHandler => (value) =>
    value.trim().length >= minLength ? undefined : `Should be greater or equal than ${minLength}`;

export const maxLength = (maxLength: number): RuleHandler => (value) =>
    value.trim().length <= maxLength ? undefined : `Should be less or equal than ${maxLength}`;

export const composeValidators = (...validators: RuleHandler[]) => (value: string): ReturnType<RuleHandler> =>
    validators.reduce((error: string | undefined, validator) => error ?? validator(value), undefined);
