import { MetadataKeys } from './MetadataKeys';

export const bodyValidator = (...keys: string[]): Function => {
  return (target: any, key: string, desc: PropertyDescriptor): void => {
    Reflect.defineMetadata(MetadataKeys.Validator, keys, target, key);
  };
};