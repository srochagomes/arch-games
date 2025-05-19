
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model team
 * 
 */
export type team = $Result.DefaultSelection<Prisma.$teamPayload>
/**
 * Model activity
 * 
 */
export type activity = $Result.DefaultSelection<Prisma.$activityPayload>
/**
 * Model image
 * 
 */
export type image = $Result.DefaultSelection<Prisma.$imagePayload>
/**
 * Model participant
 * 
 */
export type participant = $Result.DefaultSelection<Prisma.$participantPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Teams
 * const teams = await prisma.team.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Teams
   * const teams = await prisma.team.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.team`: Exposes CRUD operations for the **team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.teamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.activityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.imageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participant`: Exposes CRUD operations for the **participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participant.findMany()
    * ```
    */
  get participant(): Prisma.participantDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    team: 'team',
    activity: 'activity',
    image: 'image',
    participant: 'participant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "team" | "activity" | "image" | "participant"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      team: {
        payload: Prisma.$teamPayload<ExtArgs>
        fields: Prisma.teamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          findFirst: {
            args: Prisma.teamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          findMany: {
            args: Prisma.teamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[]
          }
          create: {
            args: Prisma.teamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          createMany: {
            args: Prisma.teamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.teamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[]
          }
          delete: {
            args: Prisma.teamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          update: {
            args: Prisma.teamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          deleteMany: {
            args: Prisma.teamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.teamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[]
          }
          upsert: {
            args: Prisma.teamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.teamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.teamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      activity: {
        payload: Prisma.$activityPayload<ExtArgs>
        fields: Prisma.activityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.activityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.activityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPayload>
          }
          findFirst: {
            args: Prisma.activityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.activityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPayload>
          }
          findMany: {
            args: Prisma.activityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPayload>[]
          }
          create: {
            args: Prisma.activityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPayload>
          }
          createMany: {
            args: Prisma.activityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.activityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPayload>[]
          }
          delete: {
            args: Prisma.activityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPayload>
          }
          update: {
            args: Prisma.activityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPayload>
          }
          deleteMany: {
            args: Prisma.activityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.activityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.activityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPayload>[]
          }
          upsert: {
            args: Prisma.activityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$activityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.activityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.activityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      image: {
        payload: Prisma.$imagePayload<ExtArgs>
        fields: Prisma.imageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          findFirst: {
            args: Prisma.imageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          findMany: {
            args: Prisma.imageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>[]
          }
          create: {
            args: Prisma.imageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          createMany: {
            args: Prisma.imageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.imageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>[]
          }
          delete: {
            args: Prisma.imageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          update: {
            args: Prisma.imageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          deleteMany: {
            args: Prisma.imageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.imageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.imageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>[]
          }
          upsert: {
            args: Prisma.imageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.imageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.imageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      participant: {
        payload: Prisma.$participantPayload<ExtArgs>
        fields: Prisma.participantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.participantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.participantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload>
          }
          findFirst: {
            args: Prisma.participantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.participantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload>
          }
          findMany: {
            args: Prisma.participantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload>[]
          }
          create: {
            args: Prisma.participantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload>
          }
          createMany: {
            args: Prisma.participantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.participantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload>[]
          }
          delete: {
            args: Prisma.participantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload>
          }
          update: {
            args: Prisma.participantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload>
          }
          deleteMany: {
            args: Prisma.participantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.participantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.participantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload>[]
          }
          upsert: {
            args: Prisma.participantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$participantPayload>
          }
          aggregate: {
            args: Prisma.ParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipant>
          }
          groupBy: {
            args: Prisma.participantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.participantCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    team?: teamOmit
    activity?: activityOmit
    image?: imageOmit
    participant?: participantOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    participants: number
    activities: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | TeamCountOutputTypeCountParticipantsArgs
    activities?: boolean | TeamCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participantWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activityWhereInput
  }


  /**
   * Count Type ParticipantCountOutputType
   */

  export type ParticipantCountOutputType = {
    activities: number
  }

  export type ParticipantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activities?: boolean | ParticipantCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantCountOutputType
     */
    select?: ParticipantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParticipantCountOutputType without action
   */
  export type ParticipantCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team to aggregate.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type teamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput
    orderBy?: teamOrderByWithAggregationInput | teamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: teamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    name: string
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends teamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type teamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    participants?: boolean | team$participantsArgs<ExtArgs>
    activities?: boolean | team$activitiesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type teamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["team"]>

  export type teamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["team"]>

  export type teamSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type teamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["team"]>
  export type teamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | team$participantsArgs<ExtArgs>
    activities?: boolean | team$activitiesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type teamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type teamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $teamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "team"
    objects: {
      participants: Prisma.$participantPayload<ExtArgs>[]
      activities: Prisma.$activityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type teamGetPayload<S extends boolean | null | undefined | teamDefaultArgs> = $Result.GetResult<Prisma.$teamPayload, S>

  type teamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface teamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team'], meta: { name: 'team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {teamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teamFindUniqueArgs>(args: SelectSubset<T, teamFindUniqueArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teamFindUniqueOrThrowArgs>(args: SelectSubset<T, teamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teamFindFirstArgs>(args?: SelectSubset<T, teamFindFirstArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teamFindFirstOrThrowArgs>(args?: SelectSubset<T, teamFindFirstOrThrowArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teamFindManyArgs>(args?: SelectSubset<T, teamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {teamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends teamCreateArgs>(args: SelectSubset<T, teamCreateArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {teamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teamCreateManyArgs>(args?: SelectSubset<T, teamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {teamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends teamCreateManyAndReturnArgs>(args?: SelectSubset<T, teamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {teamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends teamDeleteArgs>(args: SelectSubset<T, teamDeleteArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {teamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teamUpdateArgs>(args: SelectSubset<T, teamUpdateArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {teamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teamDeleteManyArgs>(args?: SelectSubset<T, teamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teamUpdateManyArgs>(args: SelectSubset<T, teamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {teamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends teamUpdateManyAndReturnArgs>(args: SelectSubset<T, teamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {teamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends teamUpsertArgs>(args: SelectSubset<T, teamUpsertArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends teamCountArgs>(
      args?: Subset<T, teamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends teamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamGroupByArgs['orderBy'] }
        : { orderBy?: teamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, teamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the team model
   */
  readonly fields: teamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participants<T extends team$participantsArgs<ExtArgs> = {}>(args?: Subset<T, team$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends team$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, team$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the team model
   */
  interface teamFieldRefs {
    readonly id: FieldRef<"team", 'Int'>
    readonly name: FieldRef<"team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * team findUnique
   */
  export type teamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team findUniqueOrThrow
   */
  export type teamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team findFirst
   */
  export type teamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * team findFirstOrThrow
   */
  export type teamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * team findMany
   */
  export type teamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teams.
     */
    cursor?: teamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * team create
   */
  export type teamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * The data needed to create a team.
     */
    data: XOR<teamCreateInput, teamUncheckedCreateInput>
  }

  /**
   * team createMany
   */
  export type teamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamCreateManyInput | teamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * team createManyAndReturn
   */
  export type teamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * The data used to create many teams.
     */
    data: teamCreateManyInput | teamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * team update
   */
  export type teamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * The data needed to update a team.
     */
    data: XOR<teamUpdateInput, teamUncheckedUpdateInput>
    /**
     * Choose, which team to update.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team updateMany
   */
  export type teamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamWhereInput
    /**
     * Limit how many teams to update.
     */
    limit?: number
  }

  /**
   * team updateManyAndReturn
   */
  export type teamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * The data used to update teams.
     */
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamWhereInput
    /**
     * Limit how many teams to update.
     */
    limit?: number
  }

  /**
   * team upsert
   */
  export type teamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * The filter to search for the team to update in case it exists.
     */
    where: teamWhereUniqueInput
    /**
     * In case the team found by the `where` argument doesn't exist, create a new team with this data.
     */
    create: XOR<teamCreateInput, teamUncheckedCreateInput>
    /**
     * In case the team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamUpdateInput, teamUncheckedUpdateInput>
  }

  /**
   * team delete
   */
  export type teamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    /**
     * Filter which team to delete.
     */
    where: teamWhereUniqueInput
  }

  /**
   * team deleteMany
   */
  export type teamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamWhereInput
    /**
     * Limit how many teams to delete.
     */
    limit?: number
  }

  /**
   * team.participants
   */
  export type team$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    where?: participantWhereInput
    orderBy?: participantOrderByWithRelationInput | participantOrderByWithRelationInput[]
    cursor?: participantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * team.activities
   */
  export type team$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity
     */
    omit?: activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityInclude<ExtArgs> | null
    where?: activityWhereInput
    orderBy?: activityOrderByWithRelationInput | activityOrderByWithRelationInput[]
    cursor?: activityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * team without action
   */
  export type teamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
  }


  /**
   * Model activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityAvgAggregateOutputType = {
    team_id: number | null
    base_score: number | null
    multiplier: number | null
    calculated_score: number | null
  }

  export type ActivitySumAggregateOutputType = {
    team_id: number | null
    base_score: number | null
    multiplier: number | null
    calculated_score: number | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    participant: string | null
    team: string | null
    team_id: number | null
    participant_id: string | null
    date: Date | null
    type: string | null
    category: string | null
    base_score: number | null
    multiplier: number | null
    calculated_score: number | null
    key_process: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    participant: string | null
    team: string | null
    team_id: number | null
    participant_id: string | null
    date: Date | null
    type: string | null
    category: string | null
    base_score: number | null
    multiplier: number | null
    calculated_score: number | null
    key_process: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    participant: number
    team: number
    team_id: number
    participant_id: number
    date: number
    type: number
    category: number
    base_score: number
    multiplier: number
    calculated_score: number
    key_process: number
    activity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActivityAvgAggregateInputType = {
    team_id?: true
    base_score?: true
    multiplier?: true
    calculated_score?: true
  }

  export type ActivitySumAggregateInputType = {
    team_id?: true
    base_score?: true
    multiplier?: true
    calculated_score?: true
  }

  export type ActivityMinAggregateInputType = {
    id?: true
    participant?: true
    team?: true
    team_id?: true
    participant_id?: true
    date?: true
    type?: true
    category?: true
    base_score?: true
    multiplier?: true
    calculated_score?: true
    key_process?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    participant?: true
    team?: true
    team_id?: true
    participant_id?: true
    date?: true
    type?: true
    category?: true
    base_score?: true
    multiplier?: true
    calculated_score?: true
    key_process?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    participant?: true
    team?: true
    team_id?: true
    participant_id?: true
    date?: true
    type?: true
    category?: true
    base_score?: true
    multiplier?: true
    calculated_score?: true
    key_process?: true
    activity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activity to aggregate.
     */
    where?: activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activityOrderByWithRelationInput | activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type activityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: activityWhereInput
    orderBy?: activityOrderByWithAggregationInput | activityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: activityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _avg?: ActivityAvgAggregateInputType
    _sum?: ActivitySumAggregateInputType
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    participant: string
    team: string
    team_id: number | null
    participant_id: string | null
    date: Date
    type: string
    category: string
    base_score: number
    multiplier: number
    calculated_score: number
    key_process: string
    activity: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ActivityCountAggregateOutputType | null
    _avg: ActivityAvgAggregateOutputType | null
    _sum: ActivitySumAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends activityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type activitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant?: boolean
    team?: boolean
    team_id?: boolean
    participant_id?: boolean
    date?: boolean
    type?: boolean
    category?: boolean
    base_score?: boolean
    multiplier?: boolean
    calculated_score?: boolean
    key_process?: boolean
    activity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team_relation?: boolean | activity$team_relationArgs<ExtArgs>
    participant_relation?: boolean | activity$participant_relationArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type activitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant?: boolean
    team?: boolean
    team_id?: boolean
    participant_id?: boolean
    date?: boolean
    type?: boolean
    category?: boolean
    base_score?: boolean
    multiplier?: boolean
    calculated_score?: boolean
    key_process?: boolean
    activity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team_relation?: boolean | activity$team_relationArgs<ExtArgs>
    participant_relation?: boolean | activity$participant_relationArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type activitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participant?: boolean
    team?: boolean
    team_id?: boolean
    participant_id?: boolean
    date?: boolean
    type?: boolean
    category?: boolean
    base_score?: boolean
    multiplier?: boolean
    calculated_score?: boolean
    key_process?: boolean
    activity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    team_relation?: boolean | activity$team_relationArgs<ExtArgs>
    participant_relation?: boolean | activity$participant_relationArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type activitySelectScalar = {
    id?: boolean
    participant?: boolean
    team?: boolean
    team_id?: boolean
    participant_id?: boolean
    date?: boolean
    type?: boolean
    category?: boolean
    base_score?: boolean
    multiplier?: boolean
    calculated_score?: boolean
    key_process?: boolean
    activity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type activityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participant" | "team" | "team_id" | "participant_id" | "date" | "type" | "category" | "base_score" | "multiplier" | "calculated_score" | "key_process" | "activity" | "createdAt" | "updatedAt", ExtArgs["result"]["activity"]>
  export type activityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_relation?: boolean | activity$team_relationArgs<ExtArgs>
    participant_relation?: boolean | activity$participant_relationArgs<ExtArgs>
  }
  export type activityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_relation?: boolean | activity$team_relationArgs<ExtArgs>
    participant_relation?: boolean | activity$participant_relationArgs<ExtArgs>
  }
  export type activityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_relation?: boolean | activity$team_relationArgs<ExtArgs>
    participant_relation?: boolean | activity$participant_relationArgs<ExtArgs>
  }

  export type $activityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "activity"
    objects: {
      team_relation: Prisma.$teamPayload<ExtArgs> | null
      participant_relation: Prisma.$participantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      participant: string
      team: string
      team_id: number | null
      participant_id: string | null
      date: Date
      type: string
      category: string
      base_score: number
      multiplier: number
      calculated_score: number
      key_process: string
      activity: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type activityGetPayload<S extends boolean | null | undefined | activityDefaultArgs> = $Result.GetResult<Prisma.$activityPayload, S>

  type activityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<activityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface activityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['activity'], meta: { name: 'activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {activityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends activityFindUniqueArgs>(args: SelectSubset<T, activityFindUniqueArgs<ExtArgs>>): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {activityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends activityFindUniqueOrThrowArgs>(args: SelectSubset<T, activityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends activityFindFirstArgs>(args?: SelectSubset<T, activityFindFirstArgs<ExtArgs>>): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends activityFindFirstOrThrowArgs>(args?: SelectSubset<T, activityFindFirstOrThrowArgs<ExtArgs>>): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends activityFindManyArgs>(args?: SelectSubset<T, activityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activity.
     * @param {activityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends activityCreateArgs>(args: SelectSubset<T, activityCreateArgs<ExtArgs>>): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activities.
     * @param {activityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends activityCreateManyArgs>(args?: SelectSubset<T, activityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {activityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends activityCreateManyAndReturnArgs>(args?: SelectSubset<T, activityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activity.
     * @param {activityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends activityDeleteArgs>(args: SelectSubset<T, activityDeleteArgs<ExtArgs>>): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activity.
     * @param {activityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends activityUpdateArgs>(args: SelectSubset<T, activityUpdateArgs<ExtArgs>>): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activities.
     * @param {activityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends activityDeleteManyArgs>(args?: SelectSubset<T, activityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends activityUpdateManyArgs>(args: SelectSubset<T, activityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities and returns the data updated in the database.
     * @param {activityUpdateManyAndReturnArgs} args - Arguments to update many Activities.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends activityUpdateManyAndReturnArgs>(args: SelectSubset<T, activityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activity.
     * @param {activityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends activityUpsertArgs>(args: SelectSubset<T, activityUpsertArgs<ExtArgs>>): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends activityCountArgs>(
      args?: Subset<T, activityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {activityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends activityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: activityGroupByArgs['orderBy'] }
        : { orderBy?: activityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, activityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the activity model
   */
  readonly fields: activityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__activityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team_relation<T extends activity$team_relationArgs<ExtArgs> = {}>(args?: Subset<T, activity$team_relationArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    participant_relation<T extends activity$participant_relationArgs<ExtArgs> = {}>(args?: Subset<T, activity$participant_relationArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the activity model
   */
  interface activityFieldRefs {
    readonly id: FieldRef<"activity", 'String'>
    readonly participant: FieldRef<"activity", 'String'>
    readonly team: FieldRef<"activity", 'String'>
    readonly team_id: FieldRef<"activity", 'Int'>
    readonly participant_id: FieldRef<"activity", 'String'>
    readonly date: FieldRef<"activity", 'DateTime'>
    readonly type: FieldRef<"activity", 'String'>
    readonly category: FieldRef<"activity", 'String'>
    readonly base_score: FieldRef<"activity", 'Float'>
    readonly multiplier: FieldRef<"activity", 'Float'>
    readonly calculated_score: FieldRef<"activity", 'Float'>
    readonly key_process: FieldRef<"activity", 'String'>
    readonly activity: FieldRef<"activity", 'Json'>
    readonly createdAt: FieldRef<"activity", 'DateTime'>
    readonly updatedAt: FieldRef<"activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * activity findUnique
   */
  export type activityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity
     */
    omit?: activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * Filter, which activity to fetch.
     */
    where: activityWhereUniqueInput
  }

  /**
   * activity findUniqueOrThrow
   */
  export type activityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity
     */
    omit?: activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * Filter, which activity to fetch.
     */
    where: activityWhereUniqueInput
  }

  /**
   * activity findFirst
   */
  export type activityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity
     */
    omit?: activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * Filter, which activity to fetch.
     */
    where?: activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activityOrderByWithRelationInput | activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activities.
     */
    cursor?: activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * activity findFirstOrThrow
   */
  export type activityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity
     */
    omit?: activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * Filter, which activity to fetch.
     */
    where?: activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activityOrderByWithRelationInput | activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for activities.
     */
    cursor?: activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * activity findMany
   */
  export type activityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity
     */
    omit?: activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * Filter, which activities to fetch.
     */
    where?: activityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of activities to fetch.
     */
    orderBy?: activityOrderByWithRelationInput | activityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing activities.
     */
    cursor?: activityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * activity create
   */
  export type activityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity
     */
    omit?: activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * The data needed to create a activity.
     */
    data: XOR<activityCreateInput, activityUncheckedCreateInput>
  }

  /**
   * activity createMany
   */
  export type activityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many activities.
     */
    data: activityCreateManyInput | activityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * activity createManyAndReturn
   */
  export type activityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activity
     */
    omit?: activityOmit<ExtArgs> | null
    /**
     * The data used to create many activities.
     */
    data: activityCreateManyInput | activityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * activity update
   */
  export type activityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity
     */
    omit?: activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * The data needed to update a activity.
     */
    data: XOR<activityUpdateInput, activityUncheckedUpdateInput>
    /**
     * Choose, which activity to update.
     */
    where: activityWhereUniqueInput
  }

  /**
   * activity updateMany
   */
  export type activityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update activities.
     */
    data: XOR<activityUpdateManyMutationInput, activityUncheckedUpdateManyInput>
    /**
     * Filter which activities to update
     */
    where?: activityWhereInput
    /**
     * Limit how many activities to update.
     */
    limit?: number
  }

  /**
   * activity updateManyAndReturn
   */
  export type activityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the activity
     */
    omit?: activityOmit<ExtArgs> | null
    /**
     * The data used to update activities.
     */
    data: XOR<activityUpdateManyMutationInput, activityUncheckedUpdateManyInput>
    /**
     * Filter which activities to update
     */
    where?: activityWhereInput
    /**
     * Limit how many activities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * activity upsert
   */
  export type activityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity
     */
    omit?: activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * The filter to search for the activity to update in case it exists.
     */
    where: activityWhereUniqueInput
    /**
     * In case the activity found by the `where` argument doesn't exist, create a new activity with this data.
     */
    create: XOR<activityCreateInput, activityUncheckedCreateInput>
    /**
     * In case the activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<activityUpdateInput, activityUncheckedUpdateInput>
  }

  /**
   * activity delete
   */
  export type activityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity
     */
    omit?: activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityInclude<ExtArgs> | null
    /**
     * Filter which activity to delete.
     */
    where: activityWhereUniqueInput
  }

  /**
   * activity deleteMany
   */
  export type activityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which activities to delete
     */
    where?: activityWhereInput
    /**
     * Limit how many activities to delete.
     */
    limit?: number
  }

  /**
   * activity.team_relation
   */
  export type activity$team_relationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team
     */
    omit?: teamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamInclude<ExtArgs> | null
    where?: teamWhereInput
  }

  /**
   * activity.participant_relation
   */
  export type activity$participant_relationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    where?: participantWhereInput
  }

  /**
   * activity without action
   */
  export type activityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity
     */
    omit?: activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityInclude<ExtArgs> | null
  }


  /**
   * Model image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    key_process: string | null
    hash: string | null
    name: string | null
    team: string | null
    type: string | null
    activity_date: Date | null
    upload_date: Date | null
    filename: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    key_process: string | null
    hash: string | null
    name: string | null
    team: string | null
    type: string | null
    activity_date: Date | null
    upload_date: Date | null
    filename: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    key_process: number
    hash: number
    name: number
    team: number
    type: number
    activity_date: number
    upload_date: number
    filename: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    key_process?: true
    hash?: true
    name?: true
    team?: true
    type?: true
    activity_date?: true
    upload_date?: true
    filename?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    key_process?: true
    hash?: true
    name?: true
    team?: true
    type?: true
    activity_date?: true
    upload_date?: true
    filename?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    key_process?: true
    hash?: true
    name?: true
    team?: true
    type?: true
    activity_date?: true
    upload_date?: true
    filename?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which image to aggregate.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type imageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imageWhereInput
    orderBy?: imageOrderByWithAggregationInput | imageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: imageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    key_process: string
    hash: string
    name: string
    team: string
    type: string
    activity_date: Date
    upload_date: Date
    filename: string
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends imageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type imageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key_process?: boolean
    hash?: boolean
    name?: boolean
    team?: boolean
    type?: boolean
    activity_date?: boolean
    upload_date?: boolean
    filename?: boolean
  }, ExtArgs["result"]["image"]>

  export type imageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key_process?: boolean
    hash?: boolean
    name?: boolean
    team?: boolean
    type?: boolean
    activity_date?: boolean
    upload_date?: boolean
    filename?: boolean
  }, ExtArgs["result"]["image"]>

  export type imageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key_process?: boolean
    hash?: boolean
    name?: boolean
    team?: boolean
    type?: boolean
    activity_date?: boolean
    upload_date?: boolean
    filename?: boolean
  }, ExtArgs["result"]["image"]>

  export type imageSelectScalar = {
    id?: boolean
    key_process?: boolean
    hash?: boolean
    name?: boolean
    team?: boolean
    type?: boolean
    activity_date?: boolean
    upload_date?: boolean
    filename?: boolean
  }

  export type imageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key_process" | "hash" | "name" | "team" | "type" | "activity_date" | "upload_date" | "filename", ExtArgs["result"]["image"]>

  export type $imagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "image"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      key_process: string
      hash: string
      name: string
      team: string
      type: string
      activity_date: Date
      upload_date: Date
      filename: string
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type imageGetPayload<S extends boolean | null | undefined | imageDefaultArgs> = $Result.GetResult<Prisma.$imagePayload, S>

  type imageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<imageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface imageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['image'], meta: { name: 'image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {imageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends imageFindUniqueArgs>(args: SelectSubset<T, imageFindUniqueArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {imageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends imageFindUniqueOrThrowArgs>(args: SelectSubset<T, imageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends imageFindFirstArgs>(args?: SelectSubset<T, imageFindFirstArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends imageFindFirstOrThrowArgs>(args?: SelectSubset<T, imageFindFirstOrThrowArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends imageFindManyArgs>(args?: SelectSubset<T, imageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {imageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends imageCreateArgs>(args: SelectSubset<T, imageCreateArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {imageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends imageCreateManyArgs>(args?: SelectSubset<T, imageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {imageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends imageCreateManyAndReturnArgs>(args?: SelectSubset<T, imageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {imageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends imageDeleteArgs>(args: SelectSubset<T, imageDeleteArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {imageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends imageUpdateArgs>(args: SelectSubset<T, imageUpdateArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {imageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends imageDeleteManyArgs>(args?: SelectSubset<T, imageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends imageUpdateManyArgs>(args: SelectSubset<T, imageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {imageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends imageUpdateManyAndReturnArgs>(args: SelectSubset<T, imageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {imageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends imageUpsertArgs>(args: SelectSubset<T, imageUpsertArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends imageCountArgs>(
      args?: Subset<T, imageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends imageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imageGroupByArgs['orderBy'] }
        : { orderBy?: imageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, imageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the image model
   */
  readonly fields: imageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the image model
   */
  interface imageFieldRefs {
    readonly id: FieldRef<"image", 'Int'>
    readonly key_process: FieldRef<"image", 'String'>
    readonly hash: FieldRef<"image", 'String'>
    readonly name: FieldRef<"image", 'String'>
    readonly team: FieldRef<"image", 'String'>
    readonly type: FieldRef<"image", 'String'>
    readonly activity_date: FieldRef<"image", 'DateTime'>
    readonly upload_date: FieldRef<"image", 'DateTime'>
    readonly filename: FieldRef<"image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * image findUnique
   */
  export type imageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Filter, which image to fetch.
     */
    where: imageWhereUniqueInput
  }

  /**
   * image findUniqueOrThrow
   */
  export type imageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Filter, which image to fetch.
     */
    where: imageWhereUniqueInput
  }

  /**
   * image findFirst
   */
  export type imageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Filter, which image to fetch.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * image findFirstOrThrow
   */
  export type imageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Filter, which image to fetch.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * image findMany
   */
  export type imageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing images.
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * image create
   */
  export type imageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * The data needed to create a image.
     */
    data: XOR<imageCreateInput, imageUncheckedCreateInput>
  }

  /**
   * image createMany
   */
  export type imageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many images.
     */
    data: imageCreateManyInput | imageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * image createManyAndReturn
   */
  export type imageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * The data used to create many images.
     */
    data: imageCreateManyInput | imageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * image update
   */
  export type imageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * The data needed to update a image.
     */
    data: XOR<imageUpdateInput, imageUncheckedUpdateInput>
    /**
     * Choose, which image to update.
     */
    where: imageWhereUniqueInput
  }

  /**
   * image updateMany
   */
  export type imageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update images.
     */
    data: XOR<imageUpdateManyMutationInput, imageUncheckedUpdateManyInput>
    /**
     * Filter which images to update
     */
    where?: imageWhereInput
    /**
     * Limit how many images to update.
     */
    limit?: number
  }

  /**
   * image updateManyAndReturn
   */
  export type imageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * The data used to update images.
     */
    data: XOR<imageUpdateManyMutationInput, imageUncheckedUpdateManyInput>
    /**
     * Filter which images to update
     */
    where?: imageWhereInput
    /**
     * Limit how many images to update.
     */
    limit?: number
  }

  /**
   * image upsert
   */
  export type imageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * The filter to search for the image to update in case it exists.
     */
    where: imageWhereUniqueInput
    /**
     * In case the image found by the `where` argument doesn't exist, create a new image with this data.
     */
    create: XOR<imageCreateInput, imageUncheckedCreateInput>
    /**
     * In case the image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imageUpdateInput, imageUncheckedUpdateInput>
  }

  /**
   * image delete
   */
  export type imageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Filter which image to delete.
     */
    where: imageWhereUniqueInput
  }

  /**
   * image deleteMany
   */
  export type imageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images to delete
     */
    where?: imageWhereInput
    /**
     * Limit how many images to delete.
     */
    limit?: number
  }

  /**
   * image without action
   */
  export type imageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
  }


  /**
   * Model participant
   */

  export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null
    _avg: ParticipantAvgAggregateOutputType | null
    _sum: ParticipantSumAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  export type ParticipantAvgAggregateOutputType = {
    team_id: number | null
  }

  export type ParticipantSumAggregateOutputType = {
    team_id: number | null
  }

  export type ParticipantMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    type: string | null
    team_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ParticipantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    type: string | null
    team_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ParticipantCountAggregateOutputType = {
    id: number
    name: number
    email: number
    type: number
    team_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ParticipantAvgAggregateInputType = {
    team_id?: true
  }

  export type ParticipantSumAggregateInputType = {
    team_id?: true
  }

  export type ParticipantMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    type?: true
    team_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ParticipantMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    type?: true
    team_id?: true
    created_at?: true
    updated_at?: true
  }

  export type ParticipantCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    type?: true
    team_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participant to aggregate.
     */
    where?: participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participants to fetch.
     */
    orderBy?: participantOrderByWithRelationInput | participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned participants
    **/
    _count?: true | ParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType
  }

  export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipant[P]>
      : GetScalarType<T[P], AggregateParticipant[P]>
  }




  export type participantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: participantWhereInput
    orderBy?: participantOrderByWithAggregationInput | participantOrderByWithAggregationInput[]
    by: ParticipantScalarFieldEnum[] | ParticipantScalarFieldEnum
    having?: participantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCountAggregateInputType | true
    _avg?: ParticipantAvgAggregateInputType
    _sum?: ParticipantSumAggregateInputType
    _min?: ParticipantMinAggregateInputType
    _max?: ParticipantMaxAggregateInputType
  }

  export type ParticipantGroupByOutputType = {
    id: string
    name: string
    email: string
    type: string
    team_id: number
    created_at: Date
    updated_at: Date
    _count: ParticipantCountAggregateOutputType | null
    _avg: ParticipantAvgAggregateOutputType | null
    _sum: ParticipantSumAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  type GetParticipantGroupByPayload<T extends participantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
        }
      >
    >


  export type participantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    type?: boolean
    team_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
    activities?: boolean | participant$activitiesArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type participantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    type?: boolean
    team_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type participantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    type?: boolean
    team_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type participantSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    type?: boolean
    team_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type participantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "type" | "team_id" | "created_at" | "updated_at", ExtArgs["result"]["participant"]>
  export type participantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
    activities?: boolean | participant$activitiesArgs<ExtArgs>
    _count?: boolean | ParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type participantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type participantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }

  export type $participantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "participant"
    objects: {
      team: Prisma.$teamPayload<ExtArgs>
      activities: Prisma.$activityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      type: string
      team_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["participant"]>
    composites: {}
  }

  type participantGetPayload<S extends boolean | null | undefined | participantDefaultArgs> = $Result.GetResult<Prisma.$participantPayload, S>

  type participantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<participantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantCountAggregateInputType | true
    }

  export interface participantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['participant'], meta: { name: 'participant' } }
    /**
     * Find zero or one Participant that matches the filter.
     * @param {participantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends participantFindUniqueArgs>(args: SelectSubset<T, participantFindUniqueArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {participantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends participantFindUniqueOrThrowArgs>(args: SelectSubset<T, participantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends participantFindFirstArgs>(args?: SelectSubset<T, participantFindFirstArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends participantFindFirstOrThrowArgs>(args?: SelectSubset<T, participantFindFirstOrThrowArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantWithIdOnly = await prisma.participant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends participantFindManyArgs>(args?: SelectSubset<T, participantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participant.
     * @param {participantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     * 
     */
    create<T extends participantCreateArgs>(args: SelectSubset<T, participantCreateArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {participantCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends participantCreateManyArgs>(args?: SelectSubset<T, participantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {participantCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends participantCreateManyAndReturnArgs>(args?: SelectSubset<T, participantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participant.
     * @param {participantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     * 
     */
    delete<T extends participantDeleteArgs>(args: SelectSubset<T, participantDeleteArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participant.
     * @param {participantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends participantUpdateArgs>(args: SelectSubset<T, participantUpdateArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {participantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends participantDeleteManyArgs>(args?: SelectSubset<T, participantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends participantUpdateManyArgs>(args: SelectSubset<T, participantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {participantUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends participantUpdateManyAndReturnArgs>(args: SelectSubset<T, participantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participant.
     * @param {participantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
     */
    upsert<T extends participantUpsertArgs>(args: SelectSubset<T, participantUpsertArgs<ExtArgs>>): Prisma__participantClient<$Result.GetResult<Prisma.$participantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends participantCountArgs>(
      args?: Subset<T, participantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipantAggregateArgs>(args: Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>

    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {participantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends participantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: participantGroupByArgs['orderBy'] }
        : { orderBy?: participantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, participantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the participant model
   */
  readonly fields: participantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__participantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends teamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamDefaultArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    activities<T extends participant$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, participant$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the participant model
   */
  interface participantFieldRefs {
    readonly id: FieldRef<"participant", 'String'>
    readonly name: FieldRef<"participant", 'String'>
    readonly email: FieldRef<"participant", 'String'>
    readonly type: FieldRef<"participant", 'String'>
    readonly team_id: FieldRef<"participant", 'Int'>
    readonly created_at: FieldRef<"participant", 'DateTime'>
    readonly updated_at: FieldRef<"participant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * participant findUnique
   */
  export type participantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * Filter, which participant to fetch.
     */
    where: participantWhereUniqueInput
  }

  /**
   * participant findUniqueOrThrow
   */
  export type participantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * Filter, which participant to fetch.
     */
    where: participantWhereUniqueInput
  }

  /**
   * participant findFirst
   */
  export type participantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * Filter, which participant to fetch.
     */
    where?: participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participants to fetch.
     */
    orderBy?: participantOrderByWithRelationInput | participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participants.
     */
    cursor?: participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * participant findFirstOrThrow
   */
  export type participantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * Filter, which participant to fetch.
     */
    where?: participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participants to fetch.
     */
    orderBy?: participantOrderByWithRelationInput | participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for participants.
     */
    cursor?: participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * participant findMany
   */
  export type participantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * Filter, which participants to fetch.
     */
    where?: participantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of participants to fetch.
     */
    orderBy?: participantOrderByWithRelationInput | participantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing participants.
     */
    cursor?: participantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` participants.
     */
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * participant create
   */
  export type participantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * The data needed to create a participant.
     */
    data: XOR<participantCreateInput, participantUncheckedCreateInput>
  }

  /**
   * participant createMany
   */
  export type participantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many participants.
     */
    data: participantCreateManyInput | participantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * participant createManyAndReturn
   */
  export type participantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * The data used to create many participants.
     */
    data: participantCreateManyInput | participantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * participant update
   */
  export type participantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * The data needed to update a participant.
     */
    data: XOR<participantUpdateInput, participantUncheckedUpdateInput>
    /**
     * Choose, which participant to update.
     */
    where: participantWhereUniqueInput
  }

  /**
   * participant updateMany
   */
  export type participantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update participants.
     */
    data: XOR<participantUpdateManyMutationInput, participantUncheckedUpdateManyInput>
    /**
     * Filter which participants to update
     */
    where?: participantWhereInput
    /**
     * Limit how many participants to update.
     */
    limit?: number
  }

  /**
   * participant updateManyAndReturn
   */
  export type participantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * The data used to update participants.
     */
    data: XOR<participantUpdateManyMutationInput, participantUncheckedUpdateManyInput>
    /**
     * Filter which participants to update
     */
    where?: participantWhereInput
    /**
     * Limit how many participants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * participant upsert
   */
  export type participantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * The filter to search for the participant to update in case it exists.
     */
    where: participantWhereUniqueInput
    /**
     * In case the participant found by the `where` argument doesn't exist, create a new participant with this data.
     */
    create: XOR<participantCreateInput, participantUncheckedCreateInput>
    /**
     * In case the participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<participantUpdateInput, participantUncheckedUpdateInput>
  }

  /**
   * participant delete
   */
  export type participantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
    /**
     * Filter which participant to delete.
     */
    where: participantWhereUniqueInput
  }

  /**
   * participant deleteMany
   */
  export type participantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which participants to delete
     */
    where?: participantWhereInput
    /**
     * Limit how many participants to delete.
     */
    limit?: number
  }

  /**
   * participant.activities
   */
  export type participant$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the activity
     */
    select?: activitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the activity
     */
    omit?: activityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: activityInclude<ExtArgs> | null
    where?: activityWhereInput
    orderBy?: activityOrderByWithRelationInput | activityOrderByWithRelationInput[]
    cursor?: activityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * participant without action
   */
  export type participantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the participant
     */
    select?: participantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the participant
     */
    omit?: participantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: participantInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    participant: 'participant',
    team: 'team',
    team_id: 'team_id',
    participant_id: 'participant_id',
    date: 'date',
    type: 'type',
    category: 'category',
    base_score: 'base_score',
    multiplier: 'multiplier',
    calculated_score: 'calculated_score',
    key_process: 'key_process',
    activity: 'activity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    key_process: 'key_process',
    hash: 'hash',
    name: 'name',
    team: 'team',
    type: 'type',
    activity_date: 'activity_date',
    upload_date: 'upload_date',
    filename: 'filename'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const ParticipantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    type: 'type',
    team_id: 'team_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type teamWhereInput = {
    AND?: teamWhereInput | teamWhereInput[]
    OR?: teamWhereInput[]
    NOT?: teamWhereInput | teamWhereInput[]
    id?: IntFilter<"team"> | number
    name?: StringFilter<"team"> | string
    participants?: ParticipantListRelationFilter
    activities?: ActivityListRelationFilter
  }

  export type teamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    participants?: participantOrderByRelationAggregateInput
    activities?: activityOrderByRelationAggregateInput
  }

  export type teamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: teamWhereInput | teamWhereInput[]
    OR?: teamWhereInput[]
    NOT?: teamWhereInput | teamWhereInput[]
    participants?: ParticipantListRelationFilter
    activities?: ActivityListRelationFilter
  }, "id" | "name">

  export type teamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: teamCountOrderByAggregateInput
    _avg?: teamAvgOrderByAggregateInput
    _max?: teamMaxOrderByAggregateInput
    _min?: teamMinOrderByAggregateInput
    _sum?: teamSumOrderByAggregateInput
  }

  export type teamScalarWhereWithAggregatesInput = {
    AND?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[]
    OR?: teamScalarWhereWithAggregatesInput[]
    NOT?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"team"> | number
    name?: StringWithAggregatesFilter<"team"> | string
  }

  export type activityWhereInput = {
    AND?: activityWhereInput | activityWhereInput[]
    OR?: activityWhereInput[]
    NOT?: activityWhereInput | activityWhereInput[]
    id?: StringFilter<"activity"> | string
    participant?: StringFilter<"activity"> | string
    team?: StringFilter<"activity"> | string
    team_id?: IntNullableFilter<"activity"> | number | null
    participant_id?: StringNullableFilter<"activity"> | string | null
    date?: DateTimeFilter<"activity"> | Date | string
    type?: StringFilter<"activity"> | string
    category?: StringFilter<"activity"> | string
    base_score?: FloatFilter<"activity"> | number
    multiplier?: FloatFilter<"activity"> | number
    calculated_score?: FloatFilter<"activity"> | number
    key_process?: StringFilter<"activity"> | string
    activity?: JsonFilter<"activity">
    createdAt?: DateTimeFilter<"activity"> | Date | string
    updatedAt?: DateTimeFilter<"activity"> | Date | string
    team_relation?: XOR<TeamNullableScalarRelationFilter, teamWhereInput> | null
    participant_relation?: XOR<ParticipantNullableScalarRelationFilter, participantWhereInput> | null
  }

  export type activityOrderByWithRelationInput = {
    id?: SortOrder
    participant?: SortOrder
    team?: SortOrder
    team_id?: SortOrderInput | SortOrder
    participant_id?: SortOrderInput | SortOrder
    date?: SortOrder
    type?: SortOrder
    category?: SortOrder
    base_score?: SortOrder
    multiplier?: SortOrder
    calculated_score?: SortOrder
    key_process?: SortOrder
    activity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    team_relation?: teamOrderByWithRelationInput
    participant_relation?: participantOrderByWithRelationInput
  }

  export type activityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: activityWhereInput | activityWhereInput[]
    OR?: activityWhereInput[]
    NOT?: activityWhereInput | activityWhereInput[]
    participant?: StringFilter<"activity"> | string
    team?: StringFilter<"activity"> | string
    team_id?: IntNullableFilter<"activity"> | number | null
    participant_id?: StringNullableFilter<"activity"> | string | null
    date?: DateTimeFilter<"activity"> | Date | string
    type?: StringFilter<"activity"> | string
    category?: StringFilter<"activity"> | string
    base_score?: FloatFilter<"activity"> | number
    multiplier?: FloatFilter<"activity"> | number
    calculated_score?: FloatFilter<"activity"> | number
    key_process?: StringFilter<"activity"> | string
    activity?: JsonFilter<"activity">
    createdAt?: DateTimeFilter<"activity"> | Date | string
    updatedAt?: DateTimeFilter<"activity"> | Date | string
    team_relation?: XOR<TeamNullableScalarRelationFilter, teamWhereInput> | null
    participant_relation?: XOR<ParticipantNullableScalarRelationFilter, participantWhereInput> | null
  }, "id">

  export type activityOrderByWithAggregationInput = {
    id?: SortOrder
    participant?: SortOrder
    team?: SortOrder
    team_id?: SortOrderInput | SortOrder
    participant_id?: SortOrderInput | SortOrder
    date?: SortOrder
    type?: SortOrder
    category?: SortOrder
    base_score?: SortOrder
    multiplier?: SortOrder
    calculated_score?: SortOrder
    key_process?: SortOrder
    activity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: activityCountOrderByAggregateInput
    _avg?: activityAvgOrderByAggregateInput
    _max?: activityMaxOrderByAggregateInput
    _min?: activityMinOrderByAggregateInput
    _sum?: activitySumOrderByAggregateInput
  }

  export type activityScalarWhereWithAggregatesInput = {
    AND?: activityScalarWhereWithAggregatesInput | activityScalarWhereWithAggregatesInput[]
    OR?: activityScalarWhereWithAggregatesInput[]
    NOT?: activityScalarWhereWithAggregatesInput | activityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"activity"> | string
    participant?: StringWithAggregatesFilter<"activity"> | string
    team?: StringWithAggregatesFilter<"activity"> | string
    team_id?: IntNullableWithAggregatesFilter<"activity"> | number | null
    participant_id?: StringNullableWithAggregatesFilter<"activity"> | string | null
    date?: DateTimeWithAggregatesFilter<"activity"> | Date | string
    type?: StringWithAggregatesFilter<"activity"> | string
    category?: StringWithAggregatesFilter<"activity"> | string
    base_score?: FloatWithAggregatesFilter<"activity"> | number
    multiplier?: FloatWithAggregatesFilter<"activity"> | number
    calculated_score?: FloatWithAggregatesFilter<"activity"> | number
    key_process?: StringWithAggregatesFilter<"activity"> | string
    activity?: JsonWithAggregatesFilter<"activity">
    createdAt?: DateTimeWithAggregatesFilter<"activity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"activity"> | Date | string
  }

  export type imageWhereInput = {
    AND?: imageWhereInput | imageWhereInput[]
    OR?: imageWhereInput[]
    NOT?: imageWhereInput | imageWhereInput[]
    id?: IntFilter<"image"> | number
    key_process?: StringFilter<"image"> | string
    hash?: StringFilter<"image"> | string
    name?: StringFilter<"image"> | string
    team?: StringFilter<"image"> | string
    type?: StringFilter<"image"> | string
    activity_date?: DateTimeFilter<"image"> | Date | string
    upload_date?: DateTimeFilter<"image"> | Date | string
    filename?: StringFilter<"image"> | string
  }

  export type imageOrderByWithRelationInput = {
    id?: SortOrder
    key_process?: SortOrder
    hash?: SortOrder
    name?: SortOrder
    team?: SortOrder
    type?: SortOrder
    activity_date?: SortOrder
    upload_date?: SortOrder
    filename?: SortOrder
  }

  export type imageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    hash?: string
    AND?: imageWhereInput | imageWhereInput[]
    OR?: imageWhereInput[]
    NOT?: imageWhereInput | imageWhereInput[]
    key_process?: StringFilter<"image"> | string
    name?: StringFilter<"image"> | string
    team?: StringFilter<"image"> | string
    type?: StringFilter<"image"> | string
    activity_date?: DateTimeFilter<"image"> | Date | string
    upload_date?: DateTimeFilter<"image"> | Date | string
    filename?: StringFilter<"image"> | string
  }, "id" | "hash">

  export type imageOrderByWithAggregationInput = {
    id?: SortOrder
    key_process?: SortOrder
    hash?: SortOrder
    name?: SortOrder
    team?: SortOrder
    type?: SortOrder
    activity_date?: SortOrder
    upload_date?: SortOrder
    filename?: SortOrder
    _count?: imageCountOrderByAggregateInput
    _avg?: imageAvgOrderByAggregateInput
    _max?: imageMaxOrderByAggregateInput
    _min?: imageMinOrderByAggregateInput
    _sum?: imageSumOrderByAggregateInput
  }

  export type imageScalarWhereWithAggregatesInput = {
    AND?: imageScalarWhereWithAggregatesInput | imageScalarWhereWithAggregatesInput[]
    OR?: imageScalarWhereWithAggregatesInput[]
    NOT?: imageScalarWhereWithAggregatesInput | imageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"image"> | number
    key_process?: StringWithAggregatesFilter<"image"> | string
    hash?: StringWithAggregatesFilter<"image"> | string
    name?: StringWithAggregatesFilter<"image"> | string
    team?: StringWithAggregatesFilter<"image"> | string
    type?: StringWithAggregatesFilter<"image"> | string
    activity_date?: DateTimeWithAggregatesFilter<"image"> | Date | string
    upload_date?: DateTimeWithAggregatesFilter<"image"> | Date | string
    filename?: StringWithAggregatesFilter<"image"> | string
  }

  export type participantWhereInput = {
    AND?: participantWhereInput | participantWhereInput[]
    OR?: participantWhereInput[]
    NOT?: participantWhereInput | participantWhereInput[]
    id?: StringFilter<"participant"> | string
    name?: StringFilter<"participant"> | string
    email?: StringFilter<"participant"> | string
    type?: StringFilter<"participant"> | string
    team_id?: IntFilter<"participant"> | number
    created_at?: DateTimeFilter<"participant"> | Date | string
    updated_at?: DateTimeFilter<"participant"> | Date | string
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
    activities?: ActivityListRelationFilter
  }

  export type participantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    type?: SortOrder
    team_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    team?: teamOrderByWithRelationInput
    activities?: activityOrderByRelationAggregateInput
  }

  export type participantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: participantWhereInput | participantWhereInput[]
    OR?: participantWhereInput[]
    NOT?: participantWhereInput | participantWhereInput[]
    name?: StringFilter<"participant"> | string
    type?: StringFilter<"participant"> | string
    team_id?: IntFilter<"participant"> | number
    created_at?: DateTimeFilter<"participant"> | Date | string
    updated_at?: DateTimeFilter<"participant"> | Date | string
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
    activities?: ActivityListRelationFilter
  }, "id" | "email">

  export type participantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    type?: SortOrder
    team_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: participantCountOrderByAggregateInput
    _avg?: participantAvgOrderByAggregateInput
    _max?: participantMaxOrderByAggregateInput
    _min?: participantMinOrderByAggregateInput
    _sum?: participantSumOrderByAggregateInput
  }

  export type participantScalarWhereWithAggregatesInput = {
    AND?: participantScalarWhereWithAggregatesInput | participantScalarWhereWithAggregatesInput[]
    OR?: participantScalarWhereWithAggregatesInput[]
    NOT?: participantScalarWhereWithAggregatesInput | participantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"participant"> | string
    name?: StringWithAggregatesFilter<"participant"> | string
    email?: StringWithAggregatesFilter<"participant"> | string
    type?: StringWithAggregatesFilter<"participant"> | string
    team_id?: IntWithAggregatesFilter<"participant"> | number
    created_at?: DateTimeWithAggregatesFilter<"participant"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"participant"> | Date | string
  }

  export type teamCreateInput = {
    name: string
    participants?: participantCreateNestedManyWithoutTeamInput
    activities?: activityCreateNestedManyWithoutTeam_relationInput
  }

  export type teamUncheckedCreateInput = {
    id?: number
    name: string
    participants?: participantUncheckedCreateNestedManyWithoutTeamInput
    activities?: activityUncheckedCreateNestedManyWithoutTeam_relationInput
  }

  export type teamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUpdateManyWithoutTeamNestedInput
    activities?: activityUpdateManyWithoutTeam_relationNestedInput
  }

  export type teamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUncheckedUpdateManyWithoutTeamNestedInput
    activities?: activityUncheckedUpdateManyWithoutTeam_relationNestedInput
  }

  export type teamCreateManyInput = {
    id?: number
    name: string
  }

  export type teamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type teamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type activityCreateInput = {
    id?: string
    participant: string
    team: string
    date: Date | string
    type: string
    category: string
    base_score?: number
    multiplier?: number
    calculated_score?: number
    key_process: string
    activity: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    team_relation?: teamCreateNestedOneWithoutActivitiesInput
    participant_relation?: participantCreateNestedOneWithoutActivitiesInput
  }

  export type activityUncheckedCreateInput = {
    id?: string
    participant: string
    team: string
    team_id?: number | null
    participant_id?: string | null
    date: Date | string
    type: string
    category: string
    base_score?: number
    multiplier?: number
    calculated_score?: number
    key_process: string
    activity: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type activityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    base_score?: FloatFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    calculated_score?: FloatFieldUpdateOperationsInput | number
    key_process?: StringFieldUpdateOperationsInput | string
    activity?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team_relation?: teamUpdateOneWithoutActivitiesNestedInput
    participant_relation?: participantUpdateOneWithoutActivitiesNestedInput
  }

  export type activityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    participant_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    base_score?: FloatFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    calculated_score?: FloatFieldUpdateOperationsInput | number
    key_process?: StringFieldUpdateOperationsInput | string
    activity?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activityCreateManyInput = {
    id?: string
    participant: string
    team: string
    team_id?: number | null
    participant_id?: string | null
    date: Date | string
    type: string
    category: string
    base_score?: number
    multiplier?: number
    calculated_score?: number
    key_process: string
    activity: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type activityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    base_score?: FloatFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    calculated_score?: FloatFieldUpdateOperationsInput | number
    key_process?: StringFieldUpdateOperationsInput | string
    activity?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    participant_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    base_score?: FloatFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    calculated_score?: FloatFieldUpdateOperationsInput | number
    key_process?: StringFieldUpdateOperationsInput | string
    activity?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type imageCreateInput = {
    key_process: string
    hash: string
    name: string
    team: string
    type: string
    activity_date: Date | string
    upload_date?: Date | string
    filename: string
  }

  export type imageUncheckedCreateInput = {
    id?: number
    key_process: string
    hash: string
    name: string
    team: string
    type: string
    activity_date: Date | string
    upload_date?: Date | string
    filename: string
  }

  export type imageUpdateInput = {
    key_process?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    activity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type imageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key_process?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    activity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type imageCreateManyInput = {
    id?: number
    key_process: string
    hash: string
    name: string
    team: string
    type: string
    activity_date: Date | string
    upload_date?: Date | string
    filename: string
  }

  export type imageUpdateManyMutationInput = {
    key_process?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    activity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type imageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key_process?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    activity_date?: DateTimeFieldUpdateOperationsInput | Date | string
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string
    filename?: StringFieldUpdateOperationsInput | string
  }

  export type participantCreateInput = {
    id?: string
    name: string
    email: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
    team: teamCreateNestedOneWithoutParticipantsInput
    activities?: activityCreateNestedManyWithoutParticipant_relationInput
  }

  export type participantUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    type: string
    team_id: number
    created_at?: Date | string
    updated_at?: Date | string
    activities?: activityUncheckedCreateNestedManyWithoutParticipant_relationInput
  }

  export type participantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: teamUpdateOneRequiredWithoutParticipantsNestedInput
    activities?: activityUpdateManyWithoutParticipant_relationNestedInput
  }

  export type participantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    team_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: activityUncheckedUpdateManyWithoutParticipant_relationNestedInput
  }

  export type participantCreateManyInput = {
    id?: string
    name: string
    email: string
    type: string
    team_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type participantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type participantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    team_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ParticipantListRelationFilter = {
    every?: participantWhereInput
    some?: participantWhereInput
    none?: participantWhereInput
  }

  export type ActivityListRelationFilter = {
    every?: activityWhereInput
    some?: activityWhereInput
    none?: activityWhereInput
  }

  export type participantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type activityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type teamAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type teamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type teamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type teamSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TeamNullableScalarRelationFilter = {
    is?: teamWhereInput | null
    isNot?: teamWhereInput | null
  }

  export type ParticipantNullableScalarRelationFilter = {
    is?: participantWhereInput | null
    isNot?: participantWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type activityCountOrderByAggregateInput = {
    id?: SortOrder
    participant?: SortOrder
    team?: SortOrder
    team_id?: SortOrder
    participant_id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    category?: SortOrder
    base_score?: SortOrder
    multiplier?: SortOrder
    calculated_score?: SortOrder
    key_process?: SortOrder
    activity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type activityAvgOrderByAggregateInput = {
    team_id?: SortOrder
    base_score?: SortOrder
    multiplier?: SortOrder
    calculated_score?: SortOrder
  }

  export type activityMaxOrderByAggregateInput = {
    id?: SortOrder
    participant?: SortOrder
    team?: SortOrder
    team_id?: SortOrder
    participant_id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    category?: SortOrder
    base_score?: SortOrder
    multiplier?: SortOrder
    calculated_score?: SortOrder
    key_process?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type activityMinOrderByAggregateInput = {
    id?: SortOrder
    participant?: SortOrder
    team?: SortOrder
    team_id?: SortOrder
    participant_id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    category?: SortOrder
    base_score?: SortOrder
    multiplier?: SortOrder
    calculated_score?: SortOrder
    key_process?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type activitySumOrderByAggregateInput = {
    team_id?: SortOrder
    base_score?: SortOrder
    multiplier?: SortOrder
    calculated_score?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type imageCountOrderByAggregateInput = {
    id?: SortOrder
    key_process?: SortOrder
    hash?: SortOrder
    name?: SortOrder
    team?: SortOrder
    type?: SortOrder
    activity_date?: SortOrder
    upload_date?: SortOrder
    filename?: SortOrder
  }

  export type imageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type imageMaxOrderByAggregateInput = {
    id?: SortOrder
    key_process?: SortOrder
    hash?: SortOrder
    name?: SortOrder
    team?: SortOrder
    type?: SortOrder
    activity_date?: SortOrder
    upload_date?: SortOrder
    filename?: SortOrder
  }

  export type imageMinOrderByAggregateInput = {
    id?: SortOrder
    key_process?: SortOrder
    hash?: SortOrder
    name?: SortOrder
    team?: SortOrder
    type?: SortOrder
    activity_date?: SortOrder
    upload_date?: SortOrder
    filename?: SortOrder
  }

  export type imageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamScalarRelationFilter = {
    is?: teamWhereInput
    isNot?: teamWhereInput
  }

  export type participantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    type?: SortOrder
    team_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type participantAvgOrderByAggregateInput = {
    team_id?: SortOrder
  }

  export type participantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    type?: SortOrder
    team_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type participantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    type?: SortOrder
    team_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type participantSumOrderByAggregateInput = {
    team_id?: SortOrder
  }

  export type participantCreateNestedManyWithoutTeamInput = {
    create?: XOR<participantCreateWithoutTeamInput, participantUncheckedCreateWithoutTeamInput> | participantCreateWithoutTeamInput[] | participantUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: participantCreateOrConnectWithoutTeamInput | participantCreateOrConnectWithoutTeamInput[]
    createMany?: participantCreateManyTeamInputEnvelope
    connect?: participantWhereUniqueInput | participantWhereUniqueInput[]
  }

  export type activityCreateNestedManyWithoutTeam_relationInput = {
    create?: XOR<activityCreateWithoutTeam_relationInput, activityUncheckedCreateWithoutTeam_relationInput> | activityCreateWithoutTeam_relationInput[] | activityUncheckedCreateWithoutTeam_relationInput[]
    connectOrCreate?: activityCreateOrConnectWithoutTeam_relationInput | activityCreateOrConnectWithoutTeam_relationInput[]
    createMany?: activityCreateManyTeam_relationInputEnvelope
    connect?: activityWhereUniqueInput | activityWhereUniqueInput[]
  }

  export type participantUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<participantCreateWithoutTeamInput, participantUncheckedCreateWithoutTeamInput> | participantCreateWithoutTeamInput[] | participantUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: participantCreateOrConnectWithoutTeamInput | participantCreateOrConnectWithoutTeamInput[]
    createMany?: participantCreateManyTeamInputEnvelope
    connect?: participantWhereUniqueInput | participantWhereUniqueInput[]
  }

  export type activityUncheckedCreateNestedManyWithoutTeam_relationInput = {
    create?: XOR<activityCreateWithoutTeam_relationInput, activityUncheckedCreateWithoutTeam_relationInput> | activityCreateWithoutTeam_relationInput[] | activityUncheckedCreateWithoutTeam_relationInput[]
    connectOrCreate?: activityCreateOrConnectWithoutTeam_relationInput | activityCreateOrConnectWithoutTeam_relationInput[]
    createMany?: activityCreateManyTeam_relationInputEnvelope
    connect?: activityWhereUniqueInput | activityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type participantUpdateManyWithoutTeamNestedInput = {
    create?: XOR<participantCreateWithoutTeamInput, participantUncheckedCreateWithoutTeamInput> | participantCreateWithoutTeamInput[] | participantUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: participantCreateOrConnectWithoutTeamInput | participantCreateOrConnectWithoutTeamInput[]
    upsert?: participantUpsertWithWhereUniqueWithoutTeamInput | participantUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: participantCreateManyTeamInputEnvelope
    set?: participantWhereUniqueInput | participantWhereUniqueInput[]
    disconnect?: participantWhereUniqueInput | participantWhereUniqueInput[]
    delete?: participantWhereUniqueInput | participantWhereUniqueInput[]
    connect?: participantWhereUniqueInput | participantWhereUniqueInput[]
    update?: participantUpdateWithWhereUniqueWithoutTeamInput | participantUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: participantUpdateManyWithWhereWithoutTeamInput | participantUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: participantScalarWhereInput | participantScalarWhereInput[]
  }

  export type activityUpdateManyWithoutTeam_relationNestedInput = {
    create?: XOR<activityCreateWithoutTeam_relationInput, activityUncheckedCreateWithoutTeam_relationInput> | activityCreateWithoutTeam_relationInput[] | activityUncheckedCreateWithoutTeam_relationInput[]
    connectOrCreate?: activityCreateOrConnectWithoutTeam_relationInput | activityCreateOrConnectWithoutTeam_relationInput[]
    upsert?: activityUpsertWithWhereUniqueWithoutTeam_relationInput | activityUpsertWithWhereUniqueWithoutTeam_relationInput[]
    createMany?: activityCreateManyTeam_relationInputEnvelope
    set?: activityWhereUniqueInput | activityWhereUniqueInput[]
    disconnect?: activityWhereUniqueInput | activityWhereUniqueInput[]
    delete?: activityWhereUniqueInput | activityWhereUniqueInput[]
    connect?: activityWhereUniqueInput | activityWhereUniqueInput[]
    update?: activityUpdateWithWhereUniqueWithoutTeam_relationInput | activityUpdateWithWhereUniqueWithoutTeam_relationInput[]
    updateMany?: activityUpdateManyWithWhereWithoutTeam_relationInput | activityUpdateManyWithWhereWithoutTeam_relationInput[]
    deleteMany?: activityScalarWhereInput | activityScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type participantUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<participantCreateWithoutTeamInput, participantUncheckedCreateWithoutTeamInput> | participantCreateWithoutTeamInput[] | participantUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: participantCreateOrConnectWithoutTeamInput | participantCreateOrConnectWithoutTeamInput[]
    upsert?: participantUpsertWithWhereUniqueWithoutTeamInput | participantUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: participantCreateManyTeamInputEnvelope
    set?: participantWhereUniqueInput | participantWhereUniqueInput[]
    disconnect?: participantWhereUniqueInput | participantWhereUniqueInput[]
    delete?: participantWhereUniqueInput | participantWhereUniqueInput[]
    connect?: participantWhereUniqueInput | participantWhereUniqueInput[]
    update?: participantUpdateWithWhereUniqueWithoutTeamInput | participantUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: participantUpdateManyWithWhereWithoutTeamInput | participantUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: participantScalarWhereInput | participantScalarWhereInput[]
  }

  export type activityUncheckedUpdateManyWithoutTeam_relationNestedInput = {
    create?: XOR<activityCreateWithoutTeam_relationInput, activityUncheckedCreateWithoutTeam_relationInput> | activityCreateWithoutTeam_relationInput[] | activityUncheckedCreateWithoutTeam_relationInput[]
    connectOrCreate?: activityCreateOrConnectWithoutTeam_relationInput | activityCreateOrConnectWithoutTeam_relationInput[]
    upsert?: activityUpsertWithWhereUniqueWithoutTeam_relationInput | activityUpsertWithWhereUniqueWithoutTeam_relationInput[]
    createMany?: activityCreateManyTeam_relationInputEnvelope
    set?: activityWhereUniqueInput | activityWhereUniqueInput[]
    disconnect?: activityWhereUniqueInput | activityWhereUniqueInput[]
    delete?: activityWhereUniqueInput | activityWhereUniqueInput[]
    connect?: activityWhereUniqueInput | activityWhereUniqueInput[]
    update?: activityUpdateWithWhereUniqueWithoutTeam_relationInput | activityUpdateWithWhereUniqueWithoutTeam_relationInput[]
    updateMany?: activityUpdateManyWithWhereWithoutTeam_relationInput | activityUpdateManyWithWhereWithoutTeam_relationInput[]
    deleteMany?: activityScalarWhereInput | activityScalarWhereInput[]
  }

  export type teamCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<teamCreateWithoutActivitiesInput, teamUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: teamCreateOrConnectWithoutActivitiesInput
    connect?: teamWhereUniqueInput
  }

  export type participantCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<participantCreateWithoutActivitiesInput, participantUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: participantCreateOrConnectWithoutActivitiesInput
    connect?: participantWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type teamUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<teamCreateWithoutActivitiesInput, teamUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: teamCreateOrConnectWithoutActivitiesInput
    upsert?: teamUpsertWithoutActivitiesInput
    disconnect?: teamWhereInput | boolean
    delete?: teamWhereInput | boolean
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutActivitiesInput, teamUpdateWithoutActivitiesInput>, teamUncheckedUpdateWithoutActivitiesInput>
  }

  export type participantUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<participantCreateWithoutActivitiesInput, participantUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: participantCreateOrConnectWithoutActivitiesInput
    upsert?: participantUpsertWithoutActivitiesInput
    disconnect?: participantWhereInput | boolean
    delete?: participantWhereInput | boolean
    connect?: participantWhereUniqueInput
    update?: XOR<XOR<participantUpdateToOneWithWhereWithoutActivitiesInput, participantUpdateWithoutActivitiesInput>, participantUncheckedUpdateWithoutActivitiesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type teamCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<teamCreateWithoutParticipantsInput, teamUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: teamCreateOrConnectWithoutParticipantsInput
    connect?: teamWhereUniqueInput
  }

  export type activityCreateNestedManyWithoutParticipant_relationInput = {
    create?: XOR<activityCreateWithoutParticipant_relationInput, activityUncheckedCreateWithoutParticipant_relationInput> | activityCreateWithoutParticipant_relationInput[] | activityUncheckedCreateWithoutParticipant_relationInput[]
    connectOrCreate?: activityCreateOrConnectWithoutParticipant_relationInput | activityCreateOrConnectWithoutParticipant_relationInput[]
    createMany?: activityCreateManyParticipant_relationInputEnvelope
    connect?: activityWhereUniqueInput | activityWhereUniqueInput[]
  }

  export type activityUncheckedCreateNestedManyWithoutParticipant_relationInput = {
    create?: XOR<activityCreateWithoutParticipant_relationInput, activityUncheckedCreateWithoutParticipant_relationInput> | activityCreateWithoutParticipant_relationInput[] | activityUncheckedCreateWithoutParticipant_relationInput[]
    connectOrCreate?: activityCreateOrConnectWithoutParticipant_relationInput | activityCreateOrConnectWithoutParticipant_relationInput[]
    createMany?: activityCreateManyParticipant_relationInputEnvelope
    connect?: activityWhereUniqueInput | activityWhereUniqueInput[]
  }

  export type teamUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<teamCreateWithoutParticipantsInput, teamUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: teamCreateOrConnectWithoutParticipantsInput
    upsert?: teamUpsertWithoutParticipantsInput
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutParticipantsInput, teamUpdateWithoutParticipantsInput>, teamUncheckedUpdateWithoutParticipantsInput>
  }

  export type activityUpdateManyWithoutParticipant_relationNestedInput = {
    create?: XOR<activityCreateWithoutParticipant_relationInput, activityUncheckedCreateWithoutParticipant_relationInput> | activityCreateWithoutParticipant_relationInput[] | activityUncheckedCreateWithoutParticipant_relationInput[]
    connectOrCreate?: activityCreateOrConnectWithoutParticipant_relationInput | activityCreateOrConnectWithoutParticipant_relationInput[]
    upsert?: activityUpsertWithWhereUniqueWithoutParticipant_relationInput | activityUpsertWithWhereUniqueWithoutParticipant_relationInput[]
    createMany?: activityCreateManyParticipant_relationInputEnvelope
    set?: activityWhereUniqueInput | activityWhereUniqueInput[]
    disconnect?: activityWhereUniqueInput | activityWhereUniqueInput[]
    delete?: activityWhereUniqueInput | activityWhereUniqueInput[]
    connect?: activityWhereUniqueInput | activityWhereUniqueInput[]
    update?: activityUpdateWithWhereUniqueWithoutParticipant_relationInput | activityUpdateWithWhereUniqueWithoutParticipant_relationInput[]
    updateMany?: activityUpdateManyWithWhereWithoutParticipant_relationInput | activityUpdateManyWithWhereWithoutParticipant_relationInput[]
    deleteMany?: activityScalarWhereInput | activityScalarWhereInput[]
  }

  export type activityUncheckedUpdateManyWithoutParticipant_relationNestedInput = {
    create?: XOR<activityCreateWithoutParticipant_relationInput, activityUncheckedCreateWithoutParticipant_relationInput> | activityCreateWithoutParticipant_relationInput[] | activityUncheckedCreateWithoutParticipant_relationInput[]
    connectOrCreate?: activityCreateOrConnectWithoutParticipant_relationInput | activityCreateOrConnectWithoutParticipant_relationInput[]
    upsert?: activityUpsertWithWhereUniqueWithoutParticipant_relationInput | activityUpsertWithWhereUniqueWithoutParticipant_relationInput[]
    createMany?: activityCreateManyParticipant_relationInputEnvelope
    set?: activityWhereUniqueInput | activityWhereUniqueInput[]
    disconnect?: activityWhereUniqueInput | activityWhereUniqueInput[]
    delete?: activityWhereUniqueInput | activityWhereUniqueInput[]
    connect?: activityWhereUniqueInput | activityWhereUniqueInput[]
    update?: activityUpdateWithWhereUniqueWithoutParticipant_relationInput | activityUpdateWithWhereUniqueWithoutParticipant_relationInput[]
    updateMany?: activityUpdateManyWithWhereWithoutParticipant_relationInput | activityUpdateManyWithWhereWithoutParticipant_relationInput[]
    deleteMany?: activityScalarWhereInput | activityScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type participantCreateWithoutTeamInput = {
    id?: string
    name: string
    email: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
    activities?: activityCreateNestedManyWithoutParticipant_relationInput
  }

  export type participantUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    email: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
    activities?: activityUncheckedCreateNestedManyWithoutParticipant_relationInput
  }

  export type participantCreateOrConnectWithoutTeamInput = {
    where: participantWhereUniqueInput
    create: XOR<participantCreateWithoutTeamInput, participantUncheckedCreateWithoutTeamInput>
  }

  export type participantCreateManyTeamInputEnvelope = {
    data: participantCreateManyTeamInput | participantCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type activityCreateWithoutTeam_relationInput = {
    id?: string
    participant: string
    team: string
    date: Date | string
    type: string
    category: string
    base_score?: number
    multiplier?: number
    calculated_score?: number
    key_process: string
    activity: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    participant_relation?: participantCreateNestedOneWithoutActivitiesInput
  }

  export type activityUncheckedCreateWithoutTeam_relationInput = {
    id?: string
    participant: string
    team: string
    participant_id?: string | null
    date: Date | string
    type: string
    category: string
    base_score?: number
    multiplier?: number
    calculated_score?: number
    key_process: string
    activity: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type activityCreateOrConnectWithoutTeam_relationInput = {
    where: activityWhereUniqueInput
    create: XOR<activityCreateWithoutTeam_relationInput, activityUncheckedCreateWithoutTeam_relationInput>
  }

  export type activityCreateManyTeam_relationInputEnvelope = {
    data: activityCreateManyTeam_relationInput | activityCreateManyTeam_relationInput[]
    skipDuplicates?: boolean
  }

  export type participantUpsertWithWhereUniqueWithoutTeamInput = {
    where: participantWhereUniqueInput
    update: XOR<participantUpdateWithoutTeamInput, participantUncheckedUpdateWithoutTeamInput>
    create: XOR<participantCreateWithoutTeamInput, participantUncheckedCreateWithoutTeamInput>
  }

  export type participantUpdateWithWhereUniqueWithoutTeamInput = {
    where: participantWhereUniqueInput
    data: XOR<participantUpdateWithoutTeamInput, participantUncheckedUpdateWithoutTeamInput>
  }

  export type participantUpdateManyWithWhereWithoutTeamInput = {
    where: participantScalarWhereInput
    data: XOR<participantUpdateManyMutationInput, participantUncheckedUpdateManyWithoutTeamInput>
  }

  export type participantScalarWhereInput = {
    AND?: participantScalarWhereInput | participantScalarWhereInput[]
    OR?: participantScalarWhereInput[]
    NOT?: participantScalarWhereInput | participantScalarWhereInput[]
    id?: StringFilter<"participant"> | string
    name?: StringFilter<"participant"> | string
    email?: StringFilter<"participant"> | string
    type?: StringFilter<"participant"> | string
    team_id?: IntFilter<"participant"> | number
    created_at?: DateTimeFilter<"participant"> | Date | string
    updated_at?: DateTimeFilter<"participant"> | Date | string
  }

  export type activityUpsertWithWhereUniqueWithoutTeam_relationInput = {
    where: activityWhereUniqueInput
    update: XOR<activityUpdateWithoutTeam_relationInput, activityUncheckedUpdateWithoutTeam_relationInput>
    create: XOR<activityCreateWithoutTeam_relationInput, activityUncheckedCreateWithoutTeam_relationInput>
  }

  export type activityUpdateWithWhereUniqueWithoutTeam_relationInput = {
    where: activityWhereUniqueInput
    data: XOR<activityUpdateWithoutTeam_relationInput, activityUncheckedUpdateWithoutTeam_relationInput>
  }

  export type activityUpdateManyWithWhereWithoutTeam_relationInput = {
    where: activityScalarWhereInput
    data: XOR<activityUpdateManyMutationInput, activityUncheckedUpdateManyWithoutTeam_relationInput>
  }

  export type activityScalarWhereInput = {
    AND?: activityScalarWhereInput | activityScalarWhereInput[]
    OR?: activityScalarWhereInput[]
    NOT?: activityScalarWhereInput | activityScalarWhereInput[]
    id?: StringFilter<"activity"> | string
    participant?: StringFilter<"activity"> | string
    team?: StringFilter<"activity"> | string
    team_id?: IntNullableFilter<"activity"> | number | null
    participant_id?: StringNullableFilter<"activity"> | string | null
    date?: DateTimeFilter<"activity"> | Date | string
    type?: StringFilter<"activity"> | string
    category?: StringFilter<"activity"> | string
    base_score?: FloatFilter<"activity"> | number
    multiplier?: FloatFilter<"activity"> | number
    calculated_score?: FloatFilter<"activity"> | number
    key_process?: StringFilter<"activity"> | string
    activity?: JsonFilter<"activity">
    createdAt?: DateTimeFilter<"activity"> | Date | string
    updatedAt?: DateTimeFilter<"activity"> | Date | string
  }

  export type teamCreateWithoutActivitiesInput = {
    name: string
    participants?: participantCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutActivitiesInput = {
    id?: number
    name: string
    participants?: participantUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutActivitiesInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutActivitiesInput, teamUncheckedCreateWithoutActivitiesInput>
  }

  export type participantCreateWithoutActivitiesInput = {
    id?: string
    name: string
    email: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
    team: teamCreateNestedOneWithoutParticipantsInput
  }

  export type participantUncheckedCreateWithoutActivitiesInput = {
    id?: string
    name: string
    email: string
    type: string
    team_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type participantCreateOrConnectWithoutActivitiesInput = {
    where: participantWhereUniqueInput
    create: XOR<participantCreateWithoutActivitiesInput, participantUncheckedCreateWithoutActivitiesInput>
  }

  export type teamUpsertWithoutActivitiesInput = {
    update: XOR<teamUpdateWithoutActivitiesInput, teamUncheckedUpdateWithoutActivitiesInput>
    create: XOR<teamCreateWithoutActivitiesInput, teamUncheckedCreateWithoutActivitiesInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutActivitiesInput, teamUncheckedUpdateWithoutActivitiesInput>
  }

  export type teamUpdateWithoutActivitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type participantUpsertWithoutActivitiesInput = {
    update: XOR<participantUpdateWithoutActivitiesInput, participantUncheckedUpdateWithoutActivitiesInput>
    create: XOR<participantCreateWithoutActivitiesInput, participantUncheckedCreateWithoutActivitiesInput>
    where?: participantWhereInput
  }

  export type participantUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: participantWhereInput
    data: XOR<participantUpdateWithoutActivitiesInput, participantUncheckedUpdateWithoutActivitiesInput>
  }

  export type participantUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: teamUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type participantUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    team_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teamCreateWithoutParticipantsInput = {
    name: string
    activities?: activityCreateNestedManyWithoutTeam_relationInput
  }

  export type teamUncheckedCreateWithoutParticipantsInput = {
    id?: number
    name: string
    activities?: activityUncheckedCreateNestedManyWithoutTeam_relationInput
  }

  export type teamCreateOrConnectWithoutParticipantsInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutParticipantsInput, teamUncheckedCreateWithoutParticipantsInput>
  }

  export type activityCreateWithoutParticipant_relationInput = {
    id?: string
    participant: string
    team: string
    date: Date | string
    type: string
    category: string
    base_score?: number
    multiplier?: number
    calculated_score?: number
    key_process: string
    activity: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    team_relation?: teamCreateNestedOneWithoutActivitiesInput
  }

  export type activityUncheckedCreateWithoutParticipant_relationInput = {
    id?: string
    participant: string
    team: string
    team_id?: number | null
    date: Date | string
    type: string
    category: string
    base_score?: number
    multiplier?: number
    calculated_score?: number
    key_process: string
    activity: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type activityCreateOrConnectWithoutParticipant_relationInput = {
    where: activityWhereUniqueInput
    create: XOR<activityCreateWithoutParticipant_relationInput, activityUncheckedCreateWithoutParticipant_relationInput>
  }

  export type activityCreateManyParticipant_relationInputEnvelope = {
    data: activityCreateManyParticipant_relationInput | activityCreateManyParticipant_relationInput[]
    skipDuplicates?: boolean
  }

  export type teamUpsertWithoutParticipantsInput = {
    update: XOR<teamUpdateWithoutParticipantsInput, teamUncheckedUpdateWithoutParticipantsInput>
    create: XOR<teamCreateWithoutParticipantsInput, teamUncheckedCreateWithoutParticipantsInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutParticipantsInput, teamUncheckedUpdateWithoutParticipantsInput>
  }

  export type teamUpdateWithoutParticipantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    activities?: activityUpdateManyWithoutTeam_relationNestedInput
  }

  export type teamUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    activities?: activityUncheckedUpdateManyWithoutTeam_relationNestedInput
  }

  export type activityUpsertWithWhereUniqueWithoutParticipant_relationInput = {
    where: activityWhereUniqueInput
    update: XOR<activityUpdateWithoutParticipant_relationInput, activityUncheckedUpdateWithoutParticipant_relationInput>
    create: XOR<activityCreateWithoutParticipant_relationInput, activityUncheckedCreateWithoutParticipant_relationInput>
  }

  export type activityUpdateWithWhereUniqueWithoutParticipant_relationInput = {
    where: activityWhereUniqueInput
    data: XOR<activityUpdateWithoutParticipant_relationInput, activityUncheckedUpdateWithoutParticipant_relationInput>
  }

  export type activityUpdateManyWithWhereWithoutParticipant_relationInput = {
    where: activityScalarWhereInput
    data: XOR<activityUpdateManyMutationInput, activityUncheckedUpdateManyWithoutParticipant_relationInput>
  }

  export type participantCreateManyTeamInput = {
    id?: string
    name: string
    email: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type activityCreateManyTeam_relationInput = {
    id?: string
    participant: string
    team: string
    participant_id?: string | null
    date: Date | string
    type: string
    category: string
    base_score?: number
    multiplier?: number
    calculated_score?: number
    key_process: string
    activity: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type participantUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: activityUpdateManyWithoutParticipant_relationNestedInput
  }

  export type participantUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: activityUncheckedUpdateManyWithoutParticipant_relationNestedInput
  }

  export type participantUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activityUpdateWithoutTeam_relationInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    base_score?: FloatFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    calculated_score?: FloatFieldUpdateOperationsInput | number
    key_process?: StringFieldUpdateOperationsInput | string
    activity?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant_relation?: participantUpdateOneWithoutActivitiesNestedInput
  }

  export type activityUncheckedUpdateWithoutTeam_relationInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    participant_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    base_score?: FloatFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    calculated_score?: FloatFieldUpdateOperationsInput | number
    key_process?: StringFieldUpdateOperationsInput | string
    activity?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activityUncheckedUpdateManyWithoutTeam_relationInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    participant_id?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    base_score?: FloatFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    calculated_score?: FloatFieldUpdateOperationsInput | number
    key_process?: StringFieldUpdateOperationsInput | string
    activity?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activityCreateManyParticipant_relationInput = {
    id?: string
    participant: string
    team: string
    team_id?: number | null
    date: Date | string
    type: string
    category: string
    base_score?: number
    multiplier?: number
    calculated_score?: number
    key_process: string
    activity: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type activityUpdateWithoutParticipant_relationInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    base_score?: FloatFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    calculated_score?: FloatFieldUpdateOperationsInput | number
    key_process?: StringFieldUpdateOperationsInput | string
    activity?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team_relation?: teamUpdateOneWithoutActivitiesNestedInput
  }

  export type activityUncheckedUpdateWithoutParticipant_relationInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    base_score?: FloatFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    calculated_score?: FloatFieldUpdateOperationsInput | number
    key_process?: StringFieldUpdateOperationsInput | string
    activity?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type activityUncheckedUpdateManyWithoutParticipant_relationInput = {
    id?: StringFieldUpdateOperationsInput | string
    participant?: StringFieldUpdateOperationsInput | string
    team?: StringFieldUpdateOperationsInput | string
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    base_score?: FloatFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    calculated_score?: FloatFieldUpdateOperationsInput | number
    key_process?: StringFieldUpdateOperationsInput | string
    activity?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}