/// <reference types="chai" />

declare global {
  namespace Chai {
    interface Assertion extends LanguageChains, NumericComparison, TypeComparison {

      // TODO: This would work if defined in the base Assertion declaration
      // Otherwise... TS2403: Subsequent variable declarations must have the same type.
      // ok: Assertion | ((message?: string) => Assertion);

      // TODO: TS2300: Duplicate identifier
      // ok(message?: string): Assertion;
      // true(message?: string): Assertion;
      // false(message?: string): Assertion;
      // null(message?: string): Assertion;
      // undefined(message?: string): Assertion;
      // NaN(message?: string): Assertion;
      // exist(message?: string): Assertion;
      // empty(message?: string): Assertion;
      // arguments(message?: string): Assertion;
      // Arguments(message?: string): Assertion;
      // extensible(message?: string): Assertion;
      // sealed(message?: string): Assertion;
      // frozen(message?: string): Assertion;

      // This works because finite() is missing from the current version of the base Chai.Assertion type definition
      finite(message?: string): Assertion;
    }
  }
}

declare function dirtyChai(chai: any, utils: any): void;

export = dirtyChai;