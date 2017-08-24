/// <reference types="chai" />

declare global {
  namespace Chai {
    interface Assertion extends LanguageChains, NumericComparison, TypeComparison {

      // TODO: Union type results in "TS2403: Subsequent variable declarations must have the same type."
      // Or, if in the base Chai declaration, at the call site it results in "TS2349: Cannot invoke an
      // expression whose type lacks a call signature. Type 'Assertion | ((message?: string) => Assertion)'
      // has no compatible call signatures."
      // ok: Assertion | ((message?: string) => Assertion);

      // TODO: Function type results in "TS2300: Duplicate identifier."
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

      // This works because finite() is missing from the current version of the base Chai.Assertion type declaration
      finite(message?: string): Assertion;
    }
  }
}

declare function dirtyChai(chai: any, utils: any): void;

export = dirtyChai;