import { ValidationError } from 'yup';

interface YupErrors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): YupErrors {
  const validationErrors: YupErrors = {};

  err.inner.forEach(error => {
    if (error.path) {
      validationErrors[error.path] = error.message;
    }
  });

  return validationErrors;
}
