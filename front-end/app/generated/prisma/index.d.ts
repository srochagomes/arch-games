
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
 * Model ScoreChangeHistory
 * 
 */
export type ScoreChangeHistory = $Result.DefaultSelection<Prisma.$ScoreChangeHistoryPayload>
/**
 * Model RankingTeam
 * 
 */
export type RankingTeam = $Result.DefaultSelection<Prisma.$RankingTeamPayload>
/**
 * Model RankingParticipant
 * 
 */
export type RankingParticipant = $Result.DefaultSelection<Prisma.$RankingParticipantPayload>
/**
 * Model TeamScoreHistory
 * 
 */
export type TeamScoreHistory = $Result.DefaultSelection<Prisma.$TeamScoreHistoryPayload>
/**
 * Model ParticipantScoreHistory
 * 
 */
export type ParticipantScoreHistory = $Result.DefaultSelection<Prisma.$ParticipantScoreHistoryPayload>
/**
 * Model TeamScoreDistribution
 * 
 */
export type TeamScoreDistribution = $Result.DefaultSelection<Prisma.$TeamScoreDistributionPayload>
/**
 * Model CategoryDistribution
 * 
 */
export type CategoryDistribution = $Result.DefaultSelection<Prisma.$CategoryDistributionPayload>

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

  /**
   * `prisma.scoreChangeHistory`: Exposes CRUD operations for the **ScoreChangeHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScoreChangeHistories
    * const scoreChangeHistories = await prisma.scoreChangeHistory.findMany()
    * ```
    */
  get scoreChangeHistory(): Prisma.ScoreChangeHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rankingTeam`: Exposes CRUD operations for the **RankingTeam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RankingTeams
    * const rankingTeams = await prisma.rankingTeam.findMany()
    * ```
    */
  get rankingTeam(): Prisma.RankingTeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rankingParticipant`: Exposes CRUD operations for the **RankingParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RankingParticipants
    * const rankingParticipants = await prisma.rankingParticipant.findMany()
    * ```
    */
  get rankingParticipant(): Prisma.RankingParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamScoreHistory`: Exposes CRUD operations for the **TeamScoreHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamScoreHistories
    * const teamScoreHistories = await prisma.teamScoreHistory.findMany()
    * ```
    */
  get teamScoreHistory(): Prisma.TeamScoreHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participantScoreHistory`: Exposes CRUD operations for the **ParticipantScoreHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParticipantScoreHistories
    * const participantScoreHistories = await prisma.participantScoreHistory.findMany()
    * ```
    */
  get participantScoreHistory(): Prisma.ParticipantScoreHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamScoreDistribution`: Exposes CRUD operations for the **TeamScoreDistribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamScoreDistributions
    * const teamScoreDistributions = await prisma.teamScoreDistribution.findMany()
    * ```
    */
  get teamScoreDistribution(): Prisma.TeamScoreDistributionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryDistribution`: Exposes CRUD operations for the **CategoryDistribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryDistributions
    * const categoryDistributions = await prisma.categoryDistribution.findMany()
    * ```
    */
  get categoryDistribution(): Prisma.CategoryDistributionDelegate<ExtArgs, ClientOptions>;
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
    participant: 'participant',
    ScoreChangeHistory: 'ScoreChangeHistory',
    RankingTeam: 'RankingTeam',
    RankingParticipant: 'RankingParticipant',
    TeamScoreHistory: 'TeamScoreHistory',
    ParticipantScoreHistory: 'ParticipantScoreHistory',
    TeamScoreDistribution: 'TeamScoreDistribution',
    CategoryDistribution: 'CategoryDistribution'
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
      modelProps: "team" | "activity" | "image" | "participant" | "scoreChangeHistory" | "rankingTeam" | "rankingParticipant" | "teamScoreHistory" | "participantScoreHistory" | "teamScoreDistribution" | "categoryDistribution"
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
      ScoreChangeHistory: {
        payload: Prisma.$ScoreChangeHistoryPayload<ExtArgs>
        fields: Prisma.ScoreChangeHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScoreChangeHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreChangeHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScoreChangeHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreChangeHistoryPayload>
          }
          findFirst: {
            args: Prisma.ScoreChangeHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreChangeHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScoreChangeHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreChangeHistoryPayload>
          }
          findMany: {
            args: Prisma.ScoreChangeHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreChangeHistoryPayload>[]
          }
          create: {
            args: Prisma.ScoreChangeHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreChangeHistoryPayload>
          }
          createMany: {
            args: Prisma.ScoreChangeHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScoreChangeHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreChangeHistoryPayload>[]
          }
          delete: {
            args: Prisma.ScoreChangeHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreChangeHistoryPayload>
          }
          update: {
            args: Prisma.ScoreChangeHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreChangeHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ScoreChangeHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScoreChangeHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScoreChangeHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreChangeHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ScoreChangeHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScoreChangeHistoryPayload>
          }
          aggregate: {
            args: Prisma.ScoreChangeHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScoreChangeHistory>
          }
          groupBy: {
            args: Prisma.ScoreChangeHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScoreChangeHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScoreChangeHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ScoreChangeHistoryCountAggregateOutputType> | number
          }
        }
      }
      RankingTeam: {
        payload: Prisma.$RankingTeamPayload<ExtArgs>
        fields: Prisma.RankingTeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RankingTeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingTeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RankingTeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingTeamPayload>
          }
          findFirst: {
            args: Prisma.RankingTeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingTeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RankingTeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingTeamPayload>
          }
          findMany: {
            args: Prisma.RankingTeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingTeamPayload>[]
          }
          create: {
            args: Prisma.RankingTeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingTeamPayload>
          }
          createMany: {
            args: Prisma.RankingTeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RankingTeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingTeamPayload>[]
          }
          delete: {
            args: Prisma.RankingTeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingTeamPayload>
          }
          update: {
            args: Prisma.RankingTeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingTeamPayload>
          }
          deleteMany: {
            args: Prisma.RankingTeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RankingTeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RankingTeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingTeamPayload>[]
          }
          upsert: {
            args: Prisma.RankingTeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingTeamPayload>
          }
          aggregate: {
            args: Prisma.RankingTeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRankingTeam>
          }
          groupBy: {
            args: Prisma.RankingTeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<RankingTeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.RankingTeamCountArgs<ExtArgs>
            result: $Utils.Optional<RankingTeamCountAggregateOutputType> | number
          }
        }
      }
      RankingParticipant: {
        payload: Prisma.$RankingParticipantPayload<ExtArgs>
        fields: Prisma.RankingParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RankingParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RankingParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingParticipantPayload>
          }
          findFirst: {
            args: Prisma.RankingParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RankingParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingParticipantPayload>
          }
          findMany: {
            args: Prisma.RankingParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingParticipantPayload>[]
          }
          create: {
            args: Prisma.RankingParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingParticipantPayload>
          }
          createMany: {
            args: Prisma.RankingParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RankingParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingParticipantPayload>[]
          }
          delete: {
            args: Prisma.RankingParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingParticipantPayload>
          }
          update: {
            args: Prisma.RankingParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingParticipantPayload>
          }
          deleteMany: {
            args: Prisma.RankingParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RankingParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RankingParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingParticipantPayload>[]
          }
          upsert: {
            args: Prisma.RankingParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RankingParticipantPayload>
          }
          aggregate: {
            args: Prisma.RankingParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRankingParticipant>
          }
          groupBy: {
            args: Prisma.RankingParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RankingParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RankingParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<RankingParticipantCountAggregateOutputType> | number
          }
        }
      }
      TeamScoreHistory: {
        payload: Prisma.$TeamScoreHistoryPayload<ExtArgs>
        fields: Prisma.TeamScoreHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamScoreHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamScoreHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreHistoryPayload>
          }
          findFirst: {
            args: Prisma.TeamScoreHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamScoreHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreHistoryPayload>
          }
          findMany: {
            args: Prisma.TeamScoreHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreHistoryPayload>[]
          }
          create: {
            args: Prisma.TeamScoreHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreHistoryPayload>
          }
          createMany: {
            args: Prisma.TeamScoreHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamScoreHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreHistoryPayload>[]
          }
          delete: {
            args: Prisma.TeamScoreHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreHistoryPayload>
          }
          update: {
            args: Prisma.TeamScoreHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TeamScoreHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamScoreHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamScoreHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TeamScoreHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreHistoryPayload>
          }
          aggregate: {
            args: Prisma.TeamScoreHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamScoreHistory>
          }
          groupBy: {
            args: Prisma.TeamScoreHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamScoreHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamScoreHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TeamScoreHistoryCountAggregateOutputType> | number
          }
        }
      }
      ParticipantScoreHistory: {
        payload: Prisma.$ParticipantScoreHistoryPayload<ExtArgs>
        fields: Prisma.ParticipantScoreHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantScoreHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantScoreHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantScoreHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantScoreHistoryPayload>
          }
          findFirst: {
            args: Prisma.ParticipantScoreHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantScoreHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantScoreHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantScoreHistoryPayload>
          }
          findMany: {
            args: Prisma.ParticipantScoreHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantScoreHistoryPayload>[]
          }
          create: {
            args: Prisma.ParticipantScoreHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantScoreHistoryPayload>
          }
          createMany: {
            args: Prisma.ParticipantScoreHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantScoreHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantScoreHistoryPayload>[]
          }
          delete: {
            args: Prisma.ParticipantScoreHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantScoreHistoryPayload>
          }
          update: {
            args: Prisma.ParticipantScoreHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantScoreHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantScoreHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantScoreHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantScoreHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantScoreHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantScoreHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantScoreHistoryPayload>
          }
          aggregate: {
            args: Prisma.ParticipantScoreHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipantScoreHistory>
          }
          groupBy: {
            args: Prisma.ParticipantScoreHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantScoreHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantScoreHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantScoreHistoryCountAggregateOutputType> | number
          }
        }
      }
      TeamScoreDistribution: {
        payload: Prisma.$TeamScoreDistributionPayload<ExtArgs>
        fields: Prisma.TeamScoreDistributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamScoreDistributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreDistributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamScoreDistributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreDistributionPayload>
          }
          findFirst: {
            args: Prisma.TeamScoreDistributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreDistributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamScoreDistributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreDistributionPayload>
          }
          findMany: {
            args: Prisma.TeamScoreDistributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreDistributionPayload>[]
          }
          create: {
            args: Prisma.TeamScoreDistributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreDistributionPayload>
          }
          createMany: {
            args: Prisma.TeamScoreDistributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamScoreDistributionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreDistributionPayload>[]
          }
          delete: {
            args: Prisma.TeamScoreDistributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreDistributionPayload>
          }
          update: {
            args: Prisma.TeamScoreDistributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreDistributionPayload>
          }
          deleteMany: {
            args: Prisma.TeamScoreDistributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamScoreDistributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamScoreDistributionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreDistributionPayload>[]
          }
          upsert: {
            args: Prisma.TeamScoreDistributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamScoreDistributionPayload>
          }
          aggregate: {
            args: Prisma.TeamScoreDistributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamScoreDistribution>
          }
          groupBy: {
            args: Prisma.TeamScoreDistributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamScoreDistributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamScoreDistributionCountArgs<ExtArgs>
            result: $Utils.Optional<TeamScoreDistributionCountAggregateOutputType> | number
          }
        }
      }
      CategoryDistribution: {
        payload: Prisma.$CategoryDistributionPayload<ExtArgs>
        fields: Prisma.CategoryDistributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryDistributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDistributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryDistributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDistributionPayload>
          }
          findFirst: {
            args: Prisma.CategoryDistributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDistributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryDistributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDistributionPayload>
          }
          findMany: {
            args: Prisma.CategoryDistributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDistributionPayload>[]
          }
          create: {
            args: Prisma.CategoryDistributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDistributionPayload>
          }
          createMany: {
            args: Prisma.CategoryDistributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryDistributionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDistributionPayload>[]
          }
          delete: {
            args: Prisma.CategoryDistributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDistributionPayload>
          }
          update: {
            args: Prisma.CategoryDistributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDistributionPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDistributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryDistributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryDistributionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDistributionPayload>[]
          }
          upsert: {
            args: Prisma.CategoryDistributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryDistributionPayload>
          }
          aggregate: {
            args: Prisma.CategoryDistributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryDistribution>
          }
          groupBy: {
            args: Prisma.CategoryDistributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryDistributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryDistributionCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryDistributionCountAggregateOutputType> | number
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
    scoreChangeHistory?: ScoreChangeHistoryOmit
    rankingTeam?: RankingTeamOmit
    rankingParticipant?: RankingParticipantOmit
    teamScoreHistory?: TeamScoreHistoryOmit
    participantScoreHistory?: ParticipantScoreHistoryOmit
    teamScoreDistribution?: TeamScoreDistributionOmit
    categoryDistribution?: CategoryDistributionOmit
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
    rankings: number
    participantRankings: number
    scoreHistory: number
    scoreDistribution: number
    categoryDistribution: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | TeamCountOutputTypeCountParticipantsArgs
    activities?: boolean | TeamCountOutputTypeCountActivitiesArgs
    rankings?: boolean | TeamCountOutputTypeCountRankingsArgs
    participantRankings?: boolean | TeamCountOutputTypeCountParticipantRankingsArgs
    scoreHistory?: boolean | TeamCountOutputTypeCountScoreHistoryArgs
    scoreDistribution?: boolean | TeamCountOutputTypeCountScoreDistributionArgs
    categoryDistribution?: boolean | TeamCountOutputTypeCountCategoryDistributionArgs
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
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountRankingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RankingTeamWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountParticipantRankingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RankingParticipantWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountScoreHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamScoreHistoryWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountScoreDistributionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamScoreDistributionWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountCategoryDistributionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryDistributionWhereInput
  }


  /**
   * Count Type ActivityCountOutputType
   */

  export type ActivityCountOutputType = {
    scoreChanges: number
  }

  export type ActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scoreChanges?: boolean | ActivityCountOutputTypeCountScoreChangesArgs
  }

  // Custom InputTypes
  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCountOutputType
     */
    select?: ActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActivityCountOutputType without action
   */
  export type ActivityCountOutputTypeCountScoreChangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreChangeHistoryWhereInput
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
    rankings?: boolean | team$rankingsArgs<ExtArgs>
    participantRankings?: boolean | team$participantRankingsArgs<ExtArgs>
    scoreHistory?: boolean | team$scoreHistoryArgs<ExtArgs>
    scoreDistribution?: boolean | team$scoreDistributionArgs<ExtArgs>
    categoryDistribution?: boolean | team$categoryDistributionArgs<ExtArgs>
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
    rankings?: boolean | team$rankingsArgs<ExtArgs>
    participantRankings?: boolean | team$participantRankingsArgs<ExtArgs>
    scoreHistory?: boolean | team$scoreHistoryArgs<ExtArgs>
    scoreDistribution?: boolean | team$scoreDistributionArgs<ExtArgs>
    categoryDistribution?: boolean | team$categoryDistributionArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type teamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type teamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $teamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "team"
    objects: {
      participants: Prisma.$participantPayload<ExtArgs>[]
      activities: Prisma.$activityPayload<ExtArgs>[]
      rankings: Prisma.$RankingTeamPayload<ExtArgs>[]
      participantRankings: Prisma.$RankingParticipantPayload<ExtArgs>[]
      scoreHistory: Prisma.$TeamScoreHistoryPayload<ExtArgs>[]
      scoreDistribution: Prisma.$TeamScoreDistributionPayload<ExtArgs>[]
      categoryDistribution: Prisma.$CategoryDistributionPayload<ExtArgs>[]
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
    rankings<T extends team$rankingsArgs<ExtArgs> = {}>(args?: Subset<T, team$rankingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankingTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participantRankings<T extends team$participantRankingsArgs<ExtArgs> = {}>(args?: Subset<T, team$participantRankingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankingParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scoreHistory<T extends team$scoreHistoryArgs<ExtArgs> = {}>(args?: Subset<T, team$scoreHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamScoreHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scoreDistribution<T extends team$scoreDistributionArgs<ExtArgs> = {}>(args?: Subset<T, team$scoreDistributionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamScoreDistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoryDistribution<T extends team$categoryDistributionArgs<ExtArgs> = {}>(args?: Subset<T, team$categoryDistributionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryDistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * team.rankings
   */
  export type team$rankingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingTeam
     */
    select?: RankingTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingTeam
     */
    omit?: RankingTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingTeamInclude<ExtArgs> | null
    where?: RankingTeamWhereInput
    orderBy?: RankingTeamOrderByWithRelationInput | RankingTeamOrderByWithRelationInput[]
    cursor?: RankingTeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RankingTeamScalarFieldEnum | RankingTeamScalarFieldEnum[]
  }

  /**
   * team.participantRankings
   */
  export type team$participantRankingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingParticipant
     */
    select?: RankingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingParticipant
     */
    omit?: RankingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingParticipantInclude<ExtArgs> | null
    where?: RankingParticipantWhereInput
    orderBy?: RankingParticipantOrderByWithRelationInput | RankingParticipantOrderByWithRelationInput[]
    cursor?: RankingParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RankingParticipantScalarFieldEnum | RankingParticipantScalarFieldEnum[]
  }

  /**
   * team.scoreHistory
   */
  export type team$scoreHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreHistory
     */
    select?: TeamScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreHistory
     */
    omit?: TeamScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreHistoryInclude<ExtArgs> | null
    where?: TeamScoreHistoryWhereInput
    orderBy?: TeamScoreHistoryOrderByWithRelationInput | TeamScoreHistoryOrderByWithRelationInput[]
    cursor?: TeamScoreHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScoreHistoryScalarFieldEnum | TeamScoreHistoryScalarFieldEnum[]
  }

  /**
   * team.scoreDistribution
   */
  export type team$scoreDistributionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreDistribution
     */
    select?: TeamScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreDistribution
     */
    omit?: TeamScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreDistributionInclude<ExtArgs> | null
    where?: TeamScoreDistributionWhereInput
    orderBy?: TeamScoreDistributionOrderByWithRelationInput | TeamScoreDistributionOrderByWithRelationInput[]
    cursor?: TeamScoreDistributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScoreDistributionScalarFieldEnum | TeamScoreDistributionScalarFieldEnum[]
  }

  /**
   * team.categoryDistribution
   */
  export type team$categoryDistributionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDistribution
     */
    select?: CategoryDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDistribution
     */
    omit?: CategoryDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDistributionInclude<ExtArgs> | null
    where?: CategoryDistributionWhereInput
    orderBy?: CategoryDistributionOrderByWithRelationInput | CategoryDistributionOrderByWithRelationInput[]
    cursor?: CategoryDistributionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryDistributionScalarFieldEnum | CategoryDistributionScalarFieldEnum[]
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
    scoreChanges?: boolean | activity$scoreChangesArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
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
    scoreChanges?: boolean | activity$scoreChangesArgs<ExtArgs>
    _count?: boolean | ActivityCountOutputTypeDefaultArgs<ExtArgs>
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
      scoreChanges: Prisma.$ScoreChangeHistoryPayload<ExtArgs>[]
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
    scoreChanges<T extends activity$scoreChangesArgs<ExtArgs> = {}>(args?: Subset<T, activity$scoreChangesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreChangeHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * activity.scoreChanges
   */
  export type activity$scoreChangesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreChangeHistory
     */
    select?: ScoreChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreChangeHistory
     */
    omit?: ScoreChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreChangeHistoryInclude<ExtArgs> | null
    where?: ScoreChangeHistoryWhereInput
    orderBy?: ScoreChangeHistoryOrderByWithRelationInput | ScoreChangeHistoryOrderByWithRelationInput[]
    cursor?: ScoreChangeHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScoreChangeHistoryScalarFieldEnum | ScoreChangeHistoryScalarFieldEnum[]
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
   * Model ScoreChangeHistory
   */

  export type AggregateScoreChangeHistory = {
    _count: ScoreChangeHistoryCountAggregateOutputType | null
    _avg: ScoreChangeHistoryAvgAggregateOutputType | null
    _sum: ScoreChangeHistorySumAggregateOutputType | null
    _min: ScoreChangeHistoryMinAggregateOutputType | null
    _max: ScoreChangeHistoryMaxAggregateOutputType | null
  }

  export type ScoreChangeHistoryAvgAggregateOutputType = {
    old_base_score: number | null
    old_multiplier: number | null
    new_base_score: number | null
    new_multiplier: number | null
  }

  export type ScoreChangeHistorySumAggregateOutputType = {
    old_base_score: number | null
    old_multiplier: number | null
    new_base_score: number | null
    new_multiplier: number | null
  }

  export type ScoreChangeHistoryMinAggregateOutputType = {
    id: string | null
    activity_id: string | null
    old_base_score: number | null
    old_multiplier: number | null
    new_base_score: number | null
    new_multiplier: number | null
    change_reason: string | null
    changed_at: Date | null
    createdAt: Date | null
  }

  export type ScoreChangeHistoryMaxAggregateOutputType = {
    id: string | null
    activity_id: string | null
    old_base_score: number | null
    old_multiplier: number | null
    new_base_score: number | null
    new_multiplier: number | null
    change_reason: string | null
    changed_at: Date | null
    createdAt: Date | null
  }

  export type ScoreChangeHistoryCountAggregateOutputType = {
    id: number
    activity_id: number
    old_base_score: number
    old_multiplier: number
    new_base_score: number
    new_multiplier: number
    change_reason: number
    changed_at: number
    createdAt: number
    _all: number
  }


  export type ScoreChangeHistoryAvgAggregateInputType = {
    old_base_score?: true
    old_multiplier?: true
    new_base_score?: true
    new_multiplier?: true
  }

  export type ScoreChangeHistorySumAggregateInputType = {
    old_base_score?: true
    old_multiplier?: true
    new_base_score?: true
    new_multiplier?: true
  }

  export type ScoreChangeHistoryMinAggregateInputType = {
    id?: true
    activity_id?: true
    old_base_score?: true
    old_multiplier?: true
    new_base_score?: true
    new_multiplier?: true
    change_reason?: true
    changed_at?: true
    createdAt?: true
  }

  export type ScoreChangeHistoryMaxAggregateInputType = {
    id?: true
    activity_id?: true
    old_base_score?: true
    old_multiplier?: true
    new_base_score?: true
    new_multiplier?: true
    change_reason?: true
    changed_at?: true
    createdAt?: true
  }

  export type ScoreChangeHistoryCountAggregateInputType = {
    id?: true
    activity_id?: true
    old_base_score?: true
    old_multiplier?: true
    new_base_score?: true
    new_multiplier?: true
    change_reason?: true
    changed_at?: true
    createdAt?: true
    _all?: true
  }

  export type ScoreChangeHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoreChangeHistory to aggregate.
     */
    where?: ScoreChangeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreChangeHistories to fetch.
     */
    orderBy?: ScoreChangeHistoryOrderByWithRelationInput | ScoreChangeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScoreChangeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreChangeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreChangeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScoreChangeHistories
    **/
    _count?: true | ScoreChangeHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScoreChangeHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScoreChangeHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScoreChangeHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScoreChangeHistoryMaxAggregateInputType
  }

  export type GetScoreChangeHistoryAggregateType<T extends ScoreChangeHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateScoreChangeHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScoreChangeHistory[P]>
      : GetScalarType<T[P], AggregateScoreChangeHistory[P]>
  }




  export type ScoreChangeHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScoreChangeHistoryWhereInput
    orderBy?: ScoreChangeHistoryOrderByWithAggregationInput | ScoreChangeHistoryOrderByWithAggregationInput[]
    by: ScoreChangeHistoryScalarFieldEnum[] | ScoreChangeHistoryScalarFieldEnum
    having?: ScoreChangeHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScoreChangeHistoryCountAggregateInputType | true
    _avg?: ScoreChangeHistoryAvgAggregateInputType
    _sum?: ScoreChangeHistorySumAggregateInputType
    _min?: ScoreChangeHistoryMinAggregateInputType
    _max?: ScoreChangeHistoryMaxAggregateInputType
  }

  export type ScoreChangeHistoryGroupByOutputType = {
    id: string
    activity_id: string
    old_base_score: number
    old_multiplier: number
    new_base_score: number
    new_multiplier: number
    change_reason: string
    changed_at: Date
    createdAt: Date
    _count: ScoreChangeHistoryCountAggregateOutputType | null
    _avg: ScoreChangeHistoryAvgAggregateOutputType | null
    _sum: ScoreChangeHistorySumAggregateOutputType | null
    _min: ScoreChangeHistoryMinAggregateOutputType | null
    _max: ScoreChangeHistoryMaxAggregateOutputType | null
  }

  type GetScoreChangeHistoryGroupByPayload<T extends ScoreChangeHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScoreChangeHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScoreChangeHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScoreChangeHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ScoreChangeHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ScoreChangeHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity_id?: boolean
    old_base_score?: boolean
    old_multiplier?: boolean
    new_base_score?: boolean
    new_multiplier?: boolean
    change_reason?: boolean
    changed_at?: boolean
    createdAt?: boolean
    activity?: boolean | activityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoreChangeHistory"]>

  export type ScoreChangeHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity_id?: boolean
    old_base_score?: boolean
    old_multiplier?: boolean
    new_base_score?: boolean
    new_multiplier?: boolean
    change_reason?: boolean
    changed_at?: boolean
    createdAt?: boolean
    activity?: boolean | activityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoreChangeHistory"]>

  export type ScoreChangeHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    activity_id?: boolean
    old_base_score?: boolean
    old_multiplier?: boolean
    new_base_score?: boolean
    new_multiplier?: boolean
    change_reason?: boolean
    changed_at?: boolean
    createdAt?: boolean
    activity?: boolean | activityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scoreChangeHistory"]>

  export type ScoreChangeHistorySelectScalar = {
    id?: boolean
    activity_id?: boolean
    old_base_score?: boolean
    old_multiplier?: boolean
    new_base_score?: boolean
    new_multiplier?: boolean
    change_reason?: boolean
    changed_at?: boolean
    createdAt?: boolean
  }

  export type ScoreChangeHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "activity_id" | "old_base_score" | "old_multiplier" | "new_base_score" | "new_multiplier" | "change_reason" | "changed_at" | "createdAt", ExtArgs["result"]["scoreChangeHistory"]>
  export type ScoreChangeHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | activityDefaultArgs<ExtArgs>
  }
  export type ScoreChangeHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | activityDefaultArgs<ExtArgs>
  }
  export type ScoreChangeHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | activityDefaultArgs<ExtArgs>
  }

  export type $ScoreChangeHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScoreChangeHistory"
    objects: {
      activity: Prisma.$activityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      activity_id: string
      old_base_score: number
      old_multiplier: number
      new_base_score: number
      new_multiplier: number
      change_reason: string
      changed_at: Date
      createdAt: Date
    }, ExtArgs["result"]["scoreChangeHistory"]>
    composites: {}
  }

  type ScoreChangeHistoryGetPayload<S extends boolean | null | undefined | ScoreChangeHistoryDefaultArgs> = $Result.GetResult<Prisma.$ScoreChangeHistoryPayload, S>

  type ScoreChangeHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScoreChangeHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScoreChangeHistoryCountAggregateInputType | true
    }

  export interface ScoreChangeHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScoreChangeHistory'], meta: { name: 'ScoreChangeHistory' } }
    /**
     * Find zero or one ScoreChangeHistory that matches the filter.
     * @param {ScoreChangeHistoryFindUniqueArgs} args - Arguments to find a ScoreChangeHistory
     * @example
     * // Get one ScoreChangeHistory
     * const scoreChangeHistory = await prisma.scoreChangeHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScoreChangeHistoryFindUniqueArgs>(args: SelectSubset<T, ScoreChangeHistoryFindUniqueArgs<ExtArgs>>): Prisma__ScoreChangeHistoryClient<$Result.GetResult<Prisma.$ScoreChangeHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScoreChangeHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScoreChangeHistoryFindUniqueOrThrowArgs} args - Arguments to find a ScoreChangeHistory
     * @example
     * // Get one ScoreChangeHistory
     * const scoreChangeHistory = await prisma.scoreChangeHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScoreChangeHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ScoreChangeHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScoreChangeHistoryClient<$Result.GetResult<Prisma.$ScoreChangeHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScoreChangeHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreChangeHistoryFindFirstArgs} args - Arguments to find a ScoreChangeHistory
     * @example
     * // Get one ScoreChangeHistory
     * const scoreChangeHistory = await prisma.scoreChangeHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScoreChangeHistoryFindFirstArgs>(args?: SelectSubset<T, ScoreChangeHistoryFindFirstArgs<ExtArgs>>): Prisma__ScoreChangeHistoryClient<$Result.GetResult<Prisma.$ScoreChangeHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScoreChangeHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreChangeHistoryFindFirstOrThrowArgs} args - Arguments to find a ScoreChangeHistory
     * @example
     * // Get one ScoreChangeHistory
     * const scoreChangeHistory = await prisma.scoreChangeHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScoreChangeHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ScoreChangeHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScoreChangeHistoryClient<$Result.GetResult<Prisma.$ScoreChangeHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScoreChangeHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreChangeHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScoreChangeHistories
     * const scoreChangeHistories = await prisma.scoreChangeHistory.findMany()
     * 
     * // Get first 10 ScoreChangeHistories
     * const scoreChangeHistories = await prisma.scoreChangeHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scoreChangeHistoryWithIdOnly = await prisma.scoreChangeHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScoreChangeHistoryFindManyArgs>(args?: SelectSubset<T, ScoreChangeHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreChangeHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScoreChangeHistory.
     * @param {ScoreChangeHistoryCreateArgs} args - Arguments to create a ScoreChangeHistory.
     * @example
     * // Create one ScoreChangeHistory
     * const ScoreChangeHistory = await prisma.scoreChangeHistory.create({
     *   data: {
     *     // ... data to create a ScoreChangeHistory
     *   }
     * })
     * 
     */
    create<T extends ScoreChangeHistoryCreateArgs>(args: SelectSubset<T, ScoreChangeHistoryCreateArgs<ExtArgs>>): Prisma__ScoreChangeHistoryClient<$Result.GetResult<Prisma.$ScoreChangeHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScoreChangeHistories.
     * @param {ScoreChangeHistoryCreateManyArgs} args - Arguments to create many ScoreChangeHistories.
     * @example
     * // Create many ScoreChangeHistories
     * const scoreChangeHistory = await prisma.scoreChangeHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScoreChangeHistoryCreateManyArgs>(args?: SelectSubset<T, ScoreChangeHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScoreChangeHistories and returns the data saved in the database.
     * @param {ScoreChangeHistoryCreateManyAndReturnArgs} args - Arguments to create many ScoreChangeHistories.
     * @example
     * // Create many ScoreChangeHistories
     * const scoreChangeHistory = await prisma.scoreChangeHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScoreChangeHistories and only return the `id`
     * const scoreChangeHistoryWithIdOnly = await prisma.scoreChangeHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScoreChangeHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ScoreChangeHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreChangeHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScoreChangeHistory.
     * @param {ScoreChangeHistoryDeleteArgs} args - Arguments to delete one ScoreChangeHistory.
     * @example
     * // Delete one ScoreChangeHistory
     * const ScoreChangeHistory = await prisma.scoreChangeHistory.delete({
     *   where: {
     *     // ... filter to delete one ScoreChangeHistory
     *   }
     * })
     * 
     */
    delete<T extends ScoreChangeHistoryDeleteArgs>(args: SelectSubset<T, ScoreChangeHistoryDeleteArgs<ExtArgs>>): Prisma__ScoreChangeHistoryClient<$Result.GetResult<Prisma.$ScoreChangeHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScoreChangeHistory.
     * @param {ScoreChangeHistoryUpdateArgs} args - Arguments to update one ScoreChangeHistory.
     * @example
     * // Update one ScoreChangeHistory
     * const scoreChangeHistory = await prisma.scoreChangeHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScoreChangeHistoryUpdateArgs>(args: SelectSubset<T, ScoreChangeHistoryUpdateArgs<ExtArgs>>): Prisma__ScoreChangeHistoryClient<$Result.GetResult<Prisma.$ScoreChangeHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScoreChangeHistories.
     * @param {ScoreChangeHistoryDeleteManyArgs} args - Arguments to filter ScoreChangeHistories to delete.
     * @example
     * // Delete a few ScoreChangeHistories
     * const { count } = await prisma.scoreChangeHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScoreChangeHistoryDeleteManyArgs>(args?: SelectSubset<T, ScoreChangeHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScoreChangeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreChangeHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScoreChangeHistories
     * const scoreChangeHistory = await prisma.scoreChangeHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScoreChangeHistoryUpdateManyArgs>(args: SelectSubset<T, ScoreChangeHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScoreChangeHistories and returns the data updated in the database.
     * @param {ScoreChangeHistoryUpdateManyAndReturnArgs} args - Arguments to update many ScoreChangeHistories.
     * @example
     * // Update many ScoreChangeHistories
     * const scoreChangeHistory = await prisma.scoreChangeHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScoreChangeHistories and only return the `id`
     * const scoreChangeHistoryWithIdOnly = await prisma.scoreChangeHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScoreChangeHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ScoreChangeHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScoreChangeHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScoreChangeHistory.
     * @param {ScoreChangeHistoryUpsertArgs} args - Arguments to update or create a ScoreChangeHistory.
     * @example
     * // Update or create a ScoreChangeHistory
     * const scoreChangeHistory = await prisma.scoreChangeHistory.upsert({
     *   create: {
     *     // ... data to create a ScoreChangeHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScoreChangeHistory we want to update
     *   }
     * })
     */
    upsert<T extends ScoreChangeHistoryUpsertArgs>(args: SelectSubset<T, ScoreChangeHistoryUpsertArgs<ExtArgs>>): Prisma__ScoreChangeHistoryClient<$Result.GetResult<Prisma.$ScoreChangeHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScoreChangeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreChangeHistoryCountArgs} args - Arguments to filter ScoreChangeHistories to count.
     * @example
     * // Count the number of ScoreChangeHistories
     * const count = await prisma.scoreChangeHistory.count({
     *   where: {
     *     // ... the filter for the ScoreChangeHistories we want to count
     *   }
     * })
    **/
    count<T extends ScoreChangeHistoryCountArgs>(
      args?: Subset<T, ScoreChangeHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScoreChangeHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScoreChangeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreChangeHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScoreChangeHistoryAggregateArgs>(args: Subset<T, ScoreChangeHistoryAggregateArgs>): Prisma.PrismaPromise<GetScoreChangeHistoryAggregateType<T>>

    /**
     * Group by ScoreChangeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScoreChangeHistoryGroupByArgs} args - Group by arguments.
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
      T extends ScoreChangeHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScoreChangeHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ScoreChangeHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScoreChangeHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScoreChangeHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScoreChangeHistory model
   */
  readonly fields: ScoreChangeHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScoreChangeHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScoreChangeHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    activity<T extends activityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, activityDefaultArgs<ExtArgs>>): Prisma__activityClient<$Result.GetResult<Prisma.$activityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ScoreChangeHistory model
   */
  interface ScoreChangeHistoryFieldRefs {
    readonly id: FieldRef<"ScoreChangeHistory", 'String'>
    readonly activity_id: FieldRef<"ScoreChangeHistory", 'String'>
    readonly old_base_score: FieldRef<"ScoreChangeHistory", 'Float'>
    readonly old_multiplier: FieldRef<"ScoreChangeHistory", 'Float'>
    readonly new_base_score: FieldRef<"ScoreChangeHistory", 'Float'>
    readonly new_multiplier: FieldRef<"ScoreChangeHistory", 'Float'>
    readonly change_reason: FieldRef<"ScoreChangeHistory", 'String'>
    readonly changed_at: FieldRef<"ScoreChangeHistory", 'DateTime'>
    readonly createdAt: FieldRef<"ScoreChangeHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScoreChangeHistory findUnique
   */
  export type ScoreChangeHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreChangeHistory
     */
    select?: ScoreChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreChangeHistory
     */
    omit?: ScoreChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreChangeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ScoreChangeHistory to fetch.
     */
    where: ScoreChangeHistoryWhereUniqueInput
  }

  /**
   * ScoreChangeHistory findUniqueOrThrow
   */
  export type ScoreChangeHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreChangeHistory
     */
    select?: ScoreChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreChangeHistory
     */
    omit?: ScoreChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreChangeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ScoreChangeHistory to fetch.
     */
    where: ScoreChangeHistoryWhereUniqueInput
  }

  /**
   * ScoreChangeHistory findFirst
   */
  export type ScoreChangeHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreChangeHistory
     */
    select?: ScoreChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreChangeHistory
     */
    omit?: ScoreChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreChangeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ScoreChangeHistory to fetch.
     */
    where?: ScoreChangeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreChangeHistories to fetch.
     */
    orderBy?: ScoreChangeHistoryOrderByWithRelationInput | ScoreChangeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoreChangeHistories.
     */
    cursor?: ScoreChangeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreChangeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreChangeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoreChangeHistories.
     */
    distinct?: ScoreChangeHistoryScalarFieldEnum | ScoreChangeHistoryScalarFieldEnum[]
  }

  /**
   * ScoreChangeHistory findFirstOrThrow
   */
  export type ScoreChangeHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreChangeHistory
     */
    select?: ScoreChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreChangeHistory
     */
    omit?: ScoreChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreChangeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ScoreChangeHistory to fetch.
     */
    where?: ScoreChangeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreChangeHistories to fetch.
     */
    orderBy?: ScoreChangeHistoryOrderByWithRelationInput | ScoreChangeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScoreChangeHistories.
     */
    cursor?: ScoreChangeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreChangeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreChangeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScoreChangeHistories.
     */
    distinct?: ScoreChangeHistoryScalarFieldEnum | ScoreChangeHistoryScalarFieldEnum[]
  }

  /**
   * ScoreChangeHistory findMany
   */
  export type ScoreChangeHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreChangeHistory
     */
    select?: ScoreChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreChangeHistory
     */
    omit?: ScoreChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreChangeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ScoreChangeHistories to fetch.
     */
    where?: ScoreChangeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScoreChangeHistories to fetch.
     */
    orderBy?: ScoreChangeHistoryOrderByWithRelationInput | ScoreChangeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScoreChangeHistories.
     */
    cursor?: ScoreChangeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScoreChangeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScoreChangeHistories.
     */
    skip?: number
    distinct?: ScoreChangeHistoryScalarFieldEnum | ScoreChangeHistoryScalarFieldEnum[]
  }

  /**
   * ScoreChangeHistory create
   */
  export type ScoreChangeHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreChangeHistory
     */
    select?: ScoreChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreChangeHistory
     */
    omit?: ScoreChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreChangeHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ScoreChangeHistory.
     */
    data: XOR<ScoreChangeHistoryCreateInput, ScoreChangeHistoryUncheckedCreateInput>
  }

  /**
   * ScoreChangeHistory createMany
   */
  export type ScoreChangeHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScoreChangeHistories.
     */
    data: ScoreChangeHistoryCreateManyInput | ScoreChangeHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScoreChangeHistory createManyAndReturn
   */
  export type ScoreChangeHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreChangeHistory
     */
    select?: ScoreChangeHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreChangeHistory
     */
    omit?: ScoreChangeHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ScoreChangeHistories.
     */
    data: ScoreChangeHistoryCreateManyInput | ScoreChangeHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreChangeHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScoreChangeHistory update
   */
  export type ScoreChangeHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreChangeHistory
     */
    select?: ScoreChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreChangeHistory
     */
    omit?: ScoreChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreChangeHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ScoreChangeHistory.
     */
    data: XOR<ScoreChangeHistoryUpdateInput, ScoreChangeHistoryUncheckedUpdateInput>
    /**
     * Choose, which ScoreChangeHistory to update.
     */
    where: ScoreChangeHistoryWhereUniqueInput
  }

  /**
   * ScoreChangeHistory updateMany
   */
  export type ScoreChangeHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScoreChangeHistories.
     */
    data: XOR<ScoreChangeHistoryUpdateManyMutationInput, ScoreChangeHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ScoreChangeHistories to update
     */
    where?: ScoreChangeHistoryWhereInput
    /**
     * Limit how many ScoreChangeHistories to update.
     */
    limit?: number
  }

  /**
   * ScoreChangeHistory updateManyAndReturn
   */
  export type ScoreChangeHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreChangeHistory
     */
    select?: ScoreChangeHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreChangeHistory
     */
    omit?: ScoreChangeHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ScoreChangeHistories.
     */
    data: XOR<ScoreChangeHistoryUpdateManyMutationInput, ScoreChangeHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ScoreChangeHistories to update
     */
    where?: ScoreChangeHistoryWhereInput
    /**
     * Limit how many ScoreChangeHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreChangeHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScoreChangeHistory upsert
   */
  export type ScoreChangeHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreChangeHistory
     */
    select?: ScoreChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreChangeHistory
     */
    omit?: ScoreChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreChangeHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ScoreChangeHistory to update in case it exists.
     */
    where: ScoreChangeHistoryWhereUniqueInput
    /**
     * In case the ScoreChangeHistory found by the `where` argument doesn't exist, create a new ScoreChangeHistory with this data.
     */
    create: XOR<ScoreChangeHistoryCreateInput, ScoreChangeHistoryUncheckedCreateInput>
    /**
     * In case the ScoreChangeHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScoreChangeHistoryUpdateInput, ScoreChangeHistoryUncheckedUpdateInput>
  }

  /**
   * ScoreChangeHistory delete
   */
  export type ScoreChangeHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreChangeHistory
     */
    select?: ScoreChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreChangeHistory
     */
    omit?: ScoreChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreChangeHistoryInclude<ExtArgs> | null
    /**
     * Filter which ScoreChangeHistory to delete.
     */
    where: ScoreChangeHistoryWhereUniqueInput
  }

  /**
   * ScoreChangeHistory deleteMany
   */
  export type ScoreChangeHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScoreChangeHistories to delete
     */
    where?: ScoreChangeHistoryWhereInput
    /**
     * Limit how many ScoreChangeHistories to delete.
     */
    limit?: number
  }

  /**
   * ScoreChangeHistory without action
   */
  export type ScoreChangeHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScoreChangeHistory
     */
    select?: ScoreChangeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScoreChangeHistory
     */
    omit?: ScoreChangeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScoreChangeHistoryInclude<ExtArgs> | null
  }


  /**
   * Model RankingTeam
   */

  export type AggregateRankingTeam = {
    _count: RankingTeamCountAggregateOutputType | null
    _avg: RankingTeamAvgAggregateOutputType | null
    _sum: RankingTeamSumAggregateOutputType | null
    _min: RankingTeamMinAggregateOutputType | null
    _max: RankingTeamMaxAggregateOutputType | null
  }

  export type RankingTeamAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
    scoreTotal: number | null
    rankingPosition: number | null
    rankingVariation: number | null
    scoreDiff: number | null
  }

  export type RankingTeamSumAggregateOutputType = {
    id: number | null
    teamId: number | null
    scoreTotal: number | null
    rankingPosition: number | null
    rankingVariation: number | null
    scoreDiff: number | null
  }

  export type RankingTeamMinAggregateOutputType = {
    id: number | null
    teamId: number | null
    teamName: string | null
    scoreTotal: number | null
    rankingPosition: number | null
    rankingVariation: number | null
    scoreDiff: number | null
    generatedAt: Date | null
  }

  export type RankingTeamMaxAggregateOutputType = {
    id: number | null
    teamId: number | null
    teamName: string | null
    scoreTotal: number | null
    rankingPosition: number | null
    rankingVariation: number | null
    scoreDiff: number | null
    generatedAt: Date | null
  }

  export type RankingTeamCountAggregateOutputType = {
    id: number
    teamId: number
    teamName: number
    scoreTotal: number
    rankingPosition: number
    rankingVariation: number
    scoreDiff: number
    generatedAt: number
    _all: number
  }


  export type RankingTeamAvgAggregateInputType = {
    id?: true
    teamId?: true
    scoreTotal?: true
    rankingPosition?: true
    rankingVariation?: true
    scoreDiff?: true
  }

  export type RankingTeamSumAggregateInputType = {
    id?: true
    teamId?: true
    scoreTotal?: true
    rankingPosition?: true
    rankingVariation?: true
    scoreDiff?: true
  }

  export type RankingTeamMinAggregateInputType = {
    id?: true
    teamId?: true
    teamName?: true
    scoreTotal?: true
    rankingPosition?: true
    rankingVariation?: true
    scoreDiff?: true
    generatedAt?: true
  }

  export type RankingTeamMaxAggregateInputType = {
    id?: true
    teamId?: true
    teamName?: true
    scoreTotal?: true
    rankingPosition?: true
    rankingVariation?: true
    scoreDiff?: true
    generatedAt?: true
  }

  export type RankingTeamCountAggregateInputType = {
    id?: true
    teamId?: true
    teamName?: true
    scoreTotal?: true
    rankingPosition?: true
    rankingVariation?: true
    scoreDiff?: true
    generatedAt?: true
    _all?: true
  }

  export type RankingTeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RankingTeam to aggregate.
     */
    where?: RankingTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RankingTeams to fetch.
     */
    orderBy?: RankingTeamOrderByWithRelationInput | RankingTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RankingTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RankingTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RankingTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RankingTeams
    **/
    _count?: true | RankingTeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RankingTeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RankingTeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RankingTeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RankingTeamMaxAggregateInputType
  }

  export type GetRankingTeamAggregateType<T extends RankingTeamAggregateArgs> = {
        [P in keyof T & keyof AggregateRankingTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRankingTeam[P]>
      : GetScalarType<T[P], AggregateRankingTeam[P]>
  }




  export type RankingTeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RankingTeamWhereInput
    orderBy?: RankingTeamOrderByWithAggregationInput | RankingTeamOrderByWithAggregationInput[]
    by: RankingTeamScalarFieldEnum[] | RankingTeamScalarFieldEnum
    having?: RankingTeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RankingTeamCountAggregateInputType | true
    _avg?: RankingTeamAvgAggregateInputType
    _sum?: RankingTeamSumAggregateInputType
    _min?: RankingTeamMinAggregateInputType
    _max?: RankingTeamMaxAggregateInputType
  }

  export type RankingTeamGroupByOutputType = {
    id: number
    teamId: number
    teamName: string
    scoreTotal: number
    rankingPosition: number
    rankingVariation: number | null
    scoreDiff: number | null
    generatedAt: Date
    _count: RankingTeamCountAggregateOutputType | null
    _avg: RankingTeamAvgAggregateOutputType | null
    _sum: RankingTeamSumAggregateOutputType | null
    _min: RankingTeamMinAggregateOutputType | null
    _max: RankingTeamMaxAggregateOutputType | null
  }

  type GetRankingTeamGroupByPayload<T extends RankingTeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RankingTeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RankingTeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RankingTeamGroupByOutputType[P]>
            : GetScalarType<T[P], RankingTeamGroupByOutputType[P]>
        }
      >
    >


  export type RankingTeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    teamName?: boolean
    scoreTotal?: boolean
    rankingPosition?: boolean
    rankingVariation?: boolean
    scoreDiff?: boolean
    generatedAt?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rankingTeam"]>

  export type RankingTeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    teamName?: boolean
    scoreTotal?: boolean
    rankingPosition?: boolean
    rankingVariation?: boolean
    scoreDiff?: boolean
    generatedAt?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rankingTeam"]>

  export type RankingTeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    teamName?: boolean
    scoreTotal?: boolean
    rankingPosition?: boolean
    rankingVariation?: boolean
    scoreDiff?: boolean
    generatedAt?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rankingTeam"]>

  export type RankingTeamSelectScalar = {
    id?: boolean
    teamId?: boolean
    teamName?: boolean
    scoreTotal?: boolean
    rankingPosition?: boolean
    rankingVariation?: boolean
    scoreDiff?: boolean
    generatedAt?: boolean
  }

  export type RankingTeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "teamName" | "scoreTotal" | "rankingPosition" | "rankingVariation" | "scoreDiff" | "generatedAt", ExtArgs["result"]["rankingTeam"]>
  export type RankingTeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type RankingTeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type RankingTeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }

  export type $RankingTeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RankingTeam"
    objects: {
      team: Prisma.$teamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamId: number
      teamName: string
      scoreTotal: number
      rankingPosition: number
      rankingVariation: number | null
      scoreDiff: number | null
      generatedAt: Date
    }, ExtArgs["result"]["rankingTeam"]>
    composites: {}
  }

  type RankingTeamGetPayload<S extends boolean | null | undefined | RankingTeamDefaultArgs> = $Result.GetResult<Prisma.$RankingTeamPayload, S>

  type RankingTeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RankingTeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RankingTeamCountAggregateInputType | true
    }

  export interface RankingTeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RankingTeam'], meta: { name: 'RankingTeam' } }
    /**
     * Find zero or one RankingTeam that matches the filter.
     * @param {RankingTeamFindUniqueArgs} args - Arguments to find a RankingTeam
     * @example
     * // Get one RankingTeam
     * const rankingTeam = await prisma.rankingTeam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RankingTeamFindUniqueArgs>(args: SelectSubset<T, RankingTeamFindUniqueArgs<ExtArgs>>): Prisma__RankingTeamClient<$Result.GetResult<Prisma.$RankingTeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RankingTeam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RankingTeamFindUniqueOrThrowArgs} args - Arguments to find a RankingTeam
     * @example
     * // Get one RankingTeam
     * const rankingTeam = await prisma.rankingTeam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RankingTeamFindUniqueOrThrowArgs>(args: SelectSubset<T, RankingTeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RankingTeamClient<$Result.GetResult<Prisma.$RankingTeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RankingTeam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingTeamFindFirstArgs} args - Arguments to find a RankingTeam
     * @example
     * // Get one RankingTeam
     * const rankingTeam = await prisma.rankingTeam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RankingTeamFindFirstArgs>(args?: SelectSubset<T, RankingTeamFindFirstArgs<ExtArgs>>): Prisma__RankingTeamClient<$Result.GetResult<Prisma.$RankingTeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RankingTeam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingTeamFindFirstOrThrowArgs} args - Arguments to find a RankingTeam
     * @example
     * // Get one RankingTeam
     * const rankingTeam = await prisma.rankingTeam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RankingTeamFindFirstOrThrowArgs>(args?: SelectSubset<T, RankingTeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__RankingTeamClient<$Result.GetResult<Prisma.$RankingTeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RankingTeams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingTeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RankingTeams
     * const rankingTeams = await prisma.rankingTeam.findMany()
     * 
     * // Get first 10 RankingTeams
     * const rankingTeams = await prisma.rankingTeam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rankingTeamWithIdOnly = await prisma.rankingTeam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RankingTeamFindManyArgs>(args?: SelectSubset<T, RankingTeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankingTeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RankingTeam.
     * @param {RankingTeamCreateArgs} args - Arguments to create a RankingTeam.
     * @example
     * // Create one RankingTeam
     * const RankingTeam = await prisma.rankingTeam.create({
     *   data: {
     *     // ... data to create a RankingTeam
     *   }
     * })
     * 
     */
    create<T extends RankingTeamCreateArgs>(args: SelectSubset<T, RankingTeamCreateArgs<ExtArgs>>): Prisma__RankingTeamClient<$Result.GetResult<Prisma.$RankingTeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RankingTeams.
     * @param {RankingTeamCreateManyArgs} args - Arguments to create many RankingTeams.
     * @example
     * // Create many RankingTeams
     * const rankingTeam = await prisma.rankingTeam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RankingTeamCreateManyArgs>(args?: SelectSubset<T, RankingTeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RankingTeams and returns the data saved in the database.
     * @param {RankingTeamCreateManyAndReturnArgs} args - Arguments to create many RankingTeams.
     * @example
     * // Create many RankingTeams
     * const rankingTeam = await prisma.rankingTeam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RankingTeams and only return the `id`
     * const rankingTeamWithIdOnly = await prisma.rankingTeam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RankingTeamCreateManyAndReturnArgs>(args?: SelectSubset<T, RankingTeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankingTeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RankingTeam.
     * @param {RankingTeamDeleteArgs} args - Arguments to delete one RankingTeam.
     * @example
     * // Delete one RankingTeam
     * const RankingTeam = await prisma.rankingTeam.delete({
     *   where: {
     *     // ... filter to delete one RankingTeam
     *   }
     * })
     * 
     */
    delete<T extends RankingTeamDeleteArgs>(args: SelectSubset<T, RankingTeamDeleteArgs<ExtArgs>>): Prisma__RankingTeamClient<$Result.GetResult<Prisma.$RankingTeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RankingTeam.
     * @param {RankingTeamUpdateArgs} args - Arguments to update one RankingTeam.
     * @example
     * // Update one RankingTeam
     * const rankingTeam = await prisma.rankingTeam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RankingTeamUpdateArgs>(args: SelectSubset<T, RankingTeamUpdateArgs<ExtArgs>>): Prisma__RankingTeamClient<$Result.GetResult<Prisma.$RankingTeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RankingTeams.
     * @param {RankingTeamDeleteManyArgs} args - Arguments to filter RankingTeams to delete.
     * @example
     * // Delete a few RankingTeams
     * const { count } = await prisma.rankingTeam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RankingTeamDeleteManyArgs>(args?: SelectSubset<T, RankingTeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RankingTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingTeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RankingTeams
     * const rankingTeam = await prisma.rankingTeam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RankingTeamUpdateManyArgs>(args: SelectSubset<T, RankingTeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RankingTeams and returns the data updated in the database.
     * @param {RankingTeamUpdateManyAndReturnArgs} args - Arguments to update many RankingTeams.
     * @example
     * // Update many RankingTeams
     * const rankingTeam = await prisma.rankingTeam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RankingTeams and only return the `id`
     * const rankingTeamWithIdOnly = await prisma.rankingTeam.updateManyAndReturn({
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
    updateManyAndReturn<T extends RankingTeamUpdateManyAndReturnArgs>(args: SelectSubset<T, RankingTeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankingTeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RankingTeam.
     * @param {RankingTeamUpsertArgs} args - Arguments to update or create a RankingTeam.
     * @example
     * // Update or create a RankingTeam
     * const rankingTeam = await prisma.rankingTeam.upsert({
     *   create: {
     *     // ... data to create a RankingTeam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RankingTeam we want to update
     *   }
     * })
     */
    upsert<T extends RankingTeamUpsertArgs>(args: SelectSubset<T, RankingTeamUpsertArgs<ExtArgs>>): Prisma__RankingTeamClient<$Result.GetResult<Prisma.$RankingTeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RankingTeams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingTeamCountArgs} args - Arguments to filter RankingTeams to count.
     * @example
     * // Count the number of RankingTeams
     * const count = await prisma.rankingTeam.count({
     *   where: {
     *     // ... the filter for the RankingTeams we want to count
     *   }
     * })
    **/
    count<T extends RankingTeamCountArgs>(
      args?: Subset<T, RankingTeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RankingTeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RankingTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingTeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RankingTeamAggregateArgs>(args: Subset<T, RankingTeamAggregateArgs>): Prisma.PrismaPromise<GetRankingTeamAggregateType<T>>

    /**
     * Group by RankingTeam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingTeamGroupByArgs} args - Group by arguments.
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
      T extends RankingTeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RankingTeamGroupByArgs['orderBy'] }
        : { orderBy?: RankingTeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RankingTeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRankingTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RankingTeam model
   */
  readonly fields: RankingTeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RankingTeam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RankingTeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends teamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamDefaultArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RankingTeam model
   */
  interface RankingTeamFieldRefs {
    readonly id: FieldRef<"RankingTeam", 'Int'>
    readonly teamId: FieldRef<"RankingTeam", 'Int'>
    readonly teamName: FieldRef<"RankingTeam", 'String'>
    readonly scoreTotal: FieldRef<"RankingTeam", 'Float'>
    readonly rankingPosition: FieldRef<"RankingTeam", 'Int'>
    readonly rankingVariation: FieldRef<"RankingTeam", 'Int'>
    readonly scoreDiff: FieldRef<"RankingTeam", 'Float'>
    readonly generatedAt: FieldRef<"RankingTeam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RankingTeam findUnique
   */
  export type RankingTeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingTeam
     */
    select?: RankingTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingTeam
     */
    omit?: RankingTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingTeamInclude<ExtArgs> | null
    /**
     * Filter, which RankingTeam to fetch.
     */
    where: RankingTeamWhereUniqueInput
  }

  /**
   * RankingTeam findUniqueOrThrow
   */
  export type RankingTeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingTeam
     */
    select?: RankingTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingTeam
     */
    omit?: RankingTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingTeamInclude<ExtArgs> | null
    /**
     * Filter, which RankingTeam to fetch.
     */
    where: RankingTeamWhereUniqueInput
  }

  /**
   * RankingTeam findFirst
   */
  export type RankingTeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingTeam
     */
    select?: RankingTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingTeam
     */
    omit?: RankingTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingTeamInclude<ExtArgs> | null
    /**
     * Filter, which RankingTeam to fetch.
     */
    where?: RankingTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RankingTeams to fetch.
     */
    orderBy?: RankingTeamOrderByWithRelationInput | RankingTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RankingTeams.
     */
    cursor?: RankingTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RankingTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RankingTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RankingTeams.
     */
    distinct?: RankingTeamScalarFieldEnum | RankingTeamScalarFieldEnum[]
  }

  /**
   * RankingTeam findFirstOrThrow
   */
  export type RankingTeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingTeam
     */
    select?: RankingTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingTeam
     */
    omit?: RankingTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingTeamInclude<ExtArgs> | null
    /**
     * Filter, which RankingTeam to fetch.
     */
    where?: RankingTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RankingTeams to fetch.
     */
    orderBy?: RankingTeamOrderByWithRelationInput | RankingTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RankingTeams.
     */
    cursor?: RankingTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RankingTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RankingTeams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RankingTeams.
     */
    distinct?: RankingTeamScalarFieldEnum | RankingTeamScalarFieldEnum[]
  }

  /**
   * RankingTeam findMany
   */
  export type RankingTeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingTeam
     */
    select?: RankingTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingTeam
     */
    omit?: RankingTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingTeamInclude<ExtArgs> | null
    /**
     * Filter, which RankingTeams to fetch.
     */
    where?: RankingTeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RankingTeams to fetch.
     */
    orderBy?: RankingTeamOrderByWithRelationInput | RankingTeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RankingTeams.
     */
    cursor?: RankingTeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RankingTeams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RankingTeams.
     */
    skip?: number
    distinct?: RankingTeamScalarFieldEnum | RankingTeamScalarFieldEnum[]
  }

  /**
   * RankingTeam create
   */
  export type RankingTeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingTeam
     */
    select?: RankingTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingTeam
     */
    omit?: RankingTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingTeamInclude<ExtArgs> | null
    /**
     * The data needed to create a RankingTeam.
     */
    data: XOR<RankingTeamCreateInput, RankingTeamUncheckedCreateInput>
  }

  /**
   * RankingTeam createMany
   */
  export type RankingTeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RankingTeams.
     */
    data: RankingTeamCreateManyInput | RankingTeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RankingTeam createManyAndReturn
   */
  export type RankingTeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingTeam
     */
    select?: RankingTeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RankingTeam
     */
    omit?: RankingTeamOmit<ExtArgs> | null
    /**
     * The data used to create many RankingTeams.
     */
    data: RankingTeamCreateManyInput | RankingTeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingTeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RankingTeam update
   */
  export type RankingTeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingTeam
     */
    select?: RankingTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingTeam
     */
    omit?: RankingTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingTeamInclude<ExtArgs> | null
    /**
     * The data needed to update a RankingTeam.
     */
    data: XOR<RankingTeamUpdateInput, RankingTeamUncheckedUpdateInput>
    /**
     * Choose, which RankingTeam to update.
     */
    where: RankingTeamWhereUniqueInput
  }

  /**
   * RankingTeam updateMany
   */
  export type RankingTeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RankingTeams.
     */
    data: XOR<RankingTeamUpdateManyMutationInput, RankingTeamUncheckedUpdateManyInput>
    /**
     * Filter which RankingTeams to update
     */
    where?: RankingTeamWhereInput
    /**
     * Limit how many RankingTeams to update.
     */
    limit?: number
  }

  /**
   * RankingTeam updateManyAndReturn
   */
  export type RankingTeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingTeam
     */
    select?: RankingTeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RankingTeam
     */
    omit?: RankingTeamOmit<ExtArgs> | null
    /**
     * The data used to update RankingTeams.
     */
    data: XOR<RankingTeamUpdateManyMutationInput, RankingTeamUncheckedUpdateManyInput>
    /**
     * Filter which RankingTeams to update
     */
    where?: RankingTeamWhereInput
    /**
     * Limit how many RankingTeams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingTeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RankingTeam upsert
   */
  export type RankingTeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingTeam
     */
    select?: RankingTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingTeam
     */
    omit?: RankingTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingTeamInclude<ExtArgs> | null
    /**
     * The filter to search for the RankingTeam to update in case it exists.
     */
    where: RankingTeamWhereUniqueInput
    /**
     * In case the RankingTeam found by the `where` argument doesn't exist, create a new RankingTeam with this data.
     */
    create: XOR<RankingTeamCreateInput, RankingTeamUncheckedCreateInput>
    /**
     * In case the RankingTeam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RankingTeamUpdateInput, RankingTeamUncheckedUpdateInput>
  }

  /**
   * RankingTeam delete
   */
  export type RankingTeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingTeam
     */
    select?: RankingTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingTeam
     */
    omit?: RankingTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingTeamInclude<ExtArgs> | null
    /**
     * Filter which RankingTeam to delete.
     */
    where: RankingTeamWhereUniqueInput
  }

  /**
   * RankingTeam deleteMany
   */
  export type RankingTeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RankingTeams to delete
     */
    where?: RankingTeamWhereInput
    /**
     * Limit how many RankingTeams to delete.
     */
    limit?: number
  }

  /**
   * RankingTeam without action
   */
  export type RankingTeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingTeam
     */
    select?: RankingTeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingTeam
     */
    omit?: RankingTeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingTeamInclude<ExtArgs> | null
  }


  /**
   * Model RankingParticipant
   */

  export type AggregateRankingParticipant = {
    _count: RankingParticipantCountAggregateOutputType | null
    _avg: RankingParticipantAvgAggregateOutputType | null
    _sum: RankingParticipantSumAggregateOutputType | null
    _min: RankingParticipantMinAggregateOutputType | null
    _max: RankingParticipantMaxAggregateOutputType | null
  }

  export type RankingParticipantAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
    scoreTotal: number | null
    rankingPosition: number | null
    rankingVariation: number | null
    scoreDiff: number | null
  }

  export type RankingParticipantSumAggregateOutputType = {
    id: number | null
    teamId: number | null
    scoreTotal: number | null
    rankingPosition: number | null
    rankingVariation: number | null
    scoreDiff: number | null
  }

  export type RankingParticipantMinAggregateOutputType = {
    id: number | null
    participantId: string | null
    participantName: string | null
    teamId: number | null
    scoreTotal: number | null
    rankingPosition: number | null
    rankingVariation: number | null
    scoreDiff: number | null
    generatedAt: Date | null
  }

  export type RankingParticipantMaxAggregateOutputType = {
    id: number | null
    participantId: string | null
    participantName: string | null
    teamId: number | null
    scoreTotal: number | null
    rankingPosition: number | null
    rankingVariation: number | null
    scoreDiff: number | null
    generatedAt: Date | null
  }

  export type RankingParticipantCountAggregateOutputType = {
    id: number
    participantId: number
    participantName: number
    teamId: number
    scoreTotal: number
    rankingPosition: number
    rankingVariation: number
    scoreDiff: number
    generatedAt: number
    _all: number
  }


  export type RankingParticipantAvgAggregateInputType = {
    id?: true
    teamId?: true
    scoreTotal?: true
    rankingPosition?: true
    rankingVariation?: true
    scoreDiff?: true
  }

  export type RankingParticipantSumAggregateInputType = {
    id?: true
    teamId?: true
    scoreTotal?: true
    rankingPosition?: true
    rankingVariation?: true
    scoreDiff?: true
  }

  export type RankingParticipantMinAggregateInputType = {
    id?: true
    participantId?: true
    participantName?: true
    teamId?: true
    scoreTotal?: true
    rankingPosition?: true
    rankingVariation?: true
    scoreDiff?: true
    generatedAt?: true
  }

  export type RankingParticipantMaxAggregateInputType = {
    id?: true
    participantId?: true
    participantName?: true
    teamId?: true
    scoreTotal?: true
    rankingPosition?: true
    rankingVariation?: true
    scoreDiff?: true
    generatedAt?: true
  }

  export type RankingParticipantCountAggregateInputType = {
    id?: true
    participantId?: true
    participantName?: true
    teamId?: true
    scoreTotal?: true
    rankingPosition?: true
    rankingVariation?: true
    scoreDiff?: true
    generatedAt?: true
    _all?: true
  }

  export type RankingParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RankingParticipant to aggregate.
     */
    where?: RankingParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RankingParticipants to fetch.
     */
    orderBy?: RankingParticipantOrderByWithRelationInput | RankingParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RankingParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RankingParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RankingParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RankingParticipants
    **/
    _count?: true | RankingParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RankingParticipantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RankingParticipantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RankingParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RankingParticipantMaxAggregateInputType
  }

  export type GetRankingParticipantAggregateType<T extends RankingParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateRankingParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRankingParticipant[P]>
      : GetScalarType<T[P], AggregateRankingParticipant[P]>
  }




  export type RankingParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RankingParticipantWhereInput
    orderBy?: RankingParticipantOrderByWithAggregationInput | RankingParticipantOrderByWithAggregationInput[]
    by: RankingParticipantScalarFieldEnum[] | RankingParticipantScalarFieldEnum
    having?: RankingParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RankingParticipantCountAggregateInputType | true
    _avg?: RankingParticipantAvgAggregateInputType
    _sum?: RankingParticipantSumAggregateInputType
    _min?: RankingParticipantMinAggregateInputType
    _max?: RankingParticipantMaxAggregateInputType
  }

  export type RankingParticipantGroupByOutputType = {
    id: number
    participantId: string
    participantName: string
    teamId: number
    scoreTotal: number
    rankingPosition: number
    rankingVariation: number | null
    scoreDiff: number | null
    generatedAt: Date
    _count: RankingParticipantCountAggregateOutputType | null
    _avg: RankingParticipantAvgAggregateOutputType | null
    _sum: RankingParticipantSumAggregateOutputType | null
    _min: RankingParticipantMinAggregateOutputType | null
    _max: RankingParticipantMaxAggregateOutputType | null
  }

  type GetRankingParticipantGroupByPayload<T extends RankingParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RankingParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RankingParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RankingParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], RankingParticipantGroupByOutputType[P]>
        }
      >
    >


  export type RankingParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    participantName?: boolean
    teamId?: boolean
    scoreTotal?: boolean
    rankingPosition?: boolean
    rankingVariation?: boolean
    scoreDiff?: boolean
    generatedAt?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rankingParticipant"]>

  export type RankingParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    participantName?: boolean
    teamId?: boolean
    scoreTotal?: boolean
    rankingPosition?: boolean
    rankingVariation?: boolean
    scoreDiff?: boolean
    generatedAt?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rankingParticipant"]>

  export type RankingParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    participantName?: boolean
    teamId?: boolean
    scoreTotal?: boolean
    rankingPosition?: boolean
    rankingVariation?: boolean
    scoreDiff?: boolean
    generatedAt?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rankingParticipant"]>

  export type RankingParticipantSelectScalar = {
    id?: boolean
    participantId?: boolean
    participantName?: boolean
    teamId?: boolean
    scoreTotal?: boolean
    rankingPosition?: boolean
    rankingVariation?: boolean
    scoreDiff?: boolean
    generatedAt?: boolean
  }

  export type RankingParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participantId" | "participantName" | "teamId" | "scoreTotal" | "rankingPosition" | "rankingVariation" | "scoreDiff" | "generatedAt", ExtArgs["result"]["rankingParticipant"]>
  export type RankingParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type RankingParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type RankingParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }

  export type $RankingParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RankingParticipant"
    objects: {
      team: Prisma.$teamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      participantId: string
      participantName: string
      teamId: number
      scoreTotal: number
      rankingPosition: number
      rankingVariation: number | null
      scoreDiff: number | null
      generatedAt: Date
    }, ExtArgs["result"]["rankingParticipant"]>
    composites: {}
  }

  type RankingParticipantGetPayload<S extends boolean | null | undefined | RankingParticipantDefaultArgs> = $Result.GetResult<Prisma.$RankingParticipantPayload, S>

  type RankingParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RankingParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RankingParticipantCountAggregateInputType | true
    }

  export interface RankingParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RankingParticipant'], meta: { name: 'RankingParticipant' } }
    /**
     * Find zero or one RankingParticipant that matches the filter.
     * @param {RankingParticipantFindUniqueArgs} args - Arguments to find a RankingParticipant
     * @example
     * // Get one RankingParticipant
     * const rankingParticipant = await prisma.rankingParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RankingParticipantFindUniqueArgs>(args: SelectSubset<T, RankingParticipantFindUniqueArgs<ExtArgs>>): Prisma__RankingParticipantClient<$Result.GetResult<Prisma.$RankingParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RankingParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RankingParticipantFindUniqueOrThrowArgs} args - Arguments to find a RankingParticipant
     * @example
     * // Get one RankingParticipant
     * const rankingParticipant = await prisma.rankingParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RankingParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, RankingParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RankingParticipantClient<$Result.GetResult<Prisma.$RankingParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RankingParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingParticipantFindFirstArgs} args - Arguments to find a RankingParticipant
     * @example
     * // Get one RankingParticipant
     * const rankingParticipant = await prisma.rankingParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RankingParticipantFindFirstArgs>(args?: SelectSubset<T, RankingParticipantFindFirstArgs<ExtArgs>>): Prisma__RankingParticipantClient<$Result.GetResult<Prisma.$RankingParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RankingParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingParticipantFindFirstOrThrowArgs} args - Arguments to find a RankingParticipant
     * @example
     * // Get one RankingParticipant
     * const rankingParticipant = await prisma.rankingParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RankingParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, RankingParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RankingParticipantClient<$Result.GetResult<Prisma.$RankingParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RankingParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RankingParticipants
     * const rankingParticipants = await prisma.rankingParticipant.findMany()
     * 
     * // Get first 10 RankingParticipants
     * const rankingParticipants = await prisma.rankingParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rankingParticipantWithIdOnly = await prisma.rankingParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RankingParticipantFindManyArgs>(args?: SelectSubset<T, RankingParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankingParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RankingParticipant.
     * @param {RankingParticipantCreateArgs} args - Arguments to create a RankingParticipant.
     * @example
     * // Create one RankingParticipant
     * const RankingParticipant = await prisma.rankingParticipant.create({
     *   data: {
     *     // ... data to create a RankingParticipant
     *   }
     * })
     * 
     */
    create<T extends RankingParticipantCreateArgs>(args: SelectSubset<T, RankingParticipantCreateArgs<ExtArgs>>): Prisma__RankingParticipantClient<$Result.GetResult<Prisma.$RankingParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RankingParticipants.
     * @param {RankingParticipantCreateManyArgs} args - Arguments to create many RankingParticipants.
     * @example
     * // Create many RankingParticipants
     * const rankingParticipant = await prisma.rankingParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RankingParticipantCreateManyArgs>(args?: SelectSubset<T, RankingParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RankingParticipants and returns the data saved in the database.
     * @param {RankingParticipantCreateManyAndReturnArgs} args - Arguments to create many RankingParticipants.
     * @example
     * // Create many RankingParticipants
     * const rankingParticipant = await prisma.rankingParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RankingParticipants and only return the `id`
     * const rankingParticipantWithIdOnly = await prisma.rankingParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RankingParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, RankingParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankingParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RankingParticipant.
     * @param {RankingParticipantDeleteArgs} args - Arguments to delete one RankingParticipant.
     * @example
     * // Delete one RankingParticipant
     * const RankingParticipant = await prisma.rankingParticipant.delete({
     *   where: {
     *     // ... filter to delete one RankingParticipant
     *   }
     * })
     * 
     */
    delete<T extends RankingParticipantDeleteArgs>(args: SelectSubset<T, RankingParticipantDeleteArgs<ExtArgs>>): Prisma__RankingParticipantClient<$Result.GetResult<Prisma.$RankingParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RankingParticipant.
     * @param {RankingParticipantUpdateArgs} args - Arguments to update one RankingParticipant.
     * @example
     * // Update one RankingParticipant
     * const rankingParticipant = await prisma.rankingParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RankingParticipantUpdateArgs>(args: SelectSubset<T, RankingParticipantUpdateArgs<ExtArgs>>): Prisma__RankingParticipantClient<$Result.GetResult<Prisma.$RankingParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RankingParticipants.
     * @param {RankingParticipantDeleteManyArgs} args - Arguments to filter RankingParticipants to delete.
     * @example
     * // Delete a few RankingParticipants
     * const { count } = await prisma.rankingParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RankingParticipantDeleteManyArgs>(args?: SelectSubset<T, RankingParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RankingParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RankingParticipants
     * const rankingParticipant = await prisma.rankingParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RankingParticipantUpdateManyArgs>(args: SelectSubset<T, RankingParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RankingParticipants and returns the data updated in the database.
     * @param {RankingParticipantUpdateManyAndReturnArgs} args - Arguments to update many RankingParticipants.
     * @example
     * // Update many RankingParticipants
     * const rankingParticipant = await prisma.rankingParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RankingParticipants and only return the `id`
     * const rankingParticipantWithIdOnly = await prisma.rankingParticipant.updateManyAndReturn({
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
    updateManyAndReturn<T extends RankingParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, RankingParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RankingParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RankingParticipant.
     * @param {RankingParticipantUpsertArgs} args - Arguments to update or create a RankingParticipant.
     * @example
     * // Update or create a RankingParticipant
     * const rankingParticipant = await prisma.rankingParticipant.upsert({
     *   create: {
     *     // ... data to create a RankingParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RankingParticipant we want to update
     *   }
     * })
     */
    upsert<T extends RankingParticipantUpsertArgs>(args: SelectSubset<T, RankingParticipantUpsertArgs<ExtArgs>>): Prisma__RankingParticipantClient<$Result.GetResult<Prisma.$RankingParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RankingParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingParticipantCountArgs} args - Arguments to filter RankingParticipants to count.
     * @example
     * // Count the number of RankingParticipants
     * const count = await prisma.rankingParticipant.count({
     *   where: {
     *     // ... the filter for the RankingParticipants we want to count
     *   }
     * })
    **/
    count<T extends RankingParticipantCountArgs>(
      args?: Subset<T, RankingParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RankingParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RankingParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RankingParticipantAggregateArgs>(args: Subset<T, RankingParticipantAggregateArgs>): Prisma.PrismaPromise<GetRankingParticipantAggregateType<T>>

    /**
     * Group by RankingParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RankingParticipantGroupByArgs} args - Group by arguments.
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
      T extends RankingParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RankingParticipantGroupByArgs['orderBy'] }
        : { orderBy?: RankingParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RankingParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRankingParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RankingParticipant model
   */
  readonly fields: RankingParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RankingParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RankingParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends teamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamDefaultArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RankingParticipant model
   */
  interface RankingParticipantFieldRefs {
    readonly id: FieldRef<"RankingParticipant", 'Int'>
    readonly participantId: FieldRef<"RankingParticipant", 'String'>
    readonly participantName: FieldRef<"RankingParticipant", 'String'>
    readonly teamId: FieldRef<"RankingParticipant", 'Int'>
    readonly scoreTotal: FieldRef<"RankingParticipant", 'Float'>
    readonly rankingPosition: FieldRef<"RankingParticipant", 'Int'>
    readonly rankingVariation: FieldRef<"RankingParticipant", 'Int'>
    readonly scoreDiff: FieldRef<"RankingParticipant", 'Float'>
    readonly generatedAt: FieldRef<"RankingParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RankingParticipant findUnique
   */
  export type RankingParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingParticipant
     */
    select?: RankingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingParticipant
     */
    omit?: RankingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RankingParticipant to fetch.
     */
    where: RankingParticipantWhereUniqueInput
  }

  /**
   * RankingParticipant findUniqueOrThrow
   */
  export type RankingParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingParticipant
     */
    select?: RankingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingParticipant
     */
    omit?: RankingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RankingParticipant to fetch.
     */
    where: RankingParticipantWhereUniqueInput
  }

  /**
   * RankingParticipant findFirst
   */
  export type RankingParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingParticipant
     */
    select?: RankingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingParticipant
     */
    omit?: RankingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RankingParticipant to fetch.
     */
    where?: RankingParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RankingParticipants to fetch.
     */
    orderBy?: RankingParticipantOrderByWithRelationInput | RankingParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RankingParticipants.
     */
    cursor?: RankingParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RankingParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RankingParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RankingParticipants.
     */
    distinct?: RankingParticipantScalarFieldEnum | RankingParticipantScalarFieldEnum[]
  }

  /**
   * RankingParticipant findFirstOrThrow
   */
  export type RankingParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingParticipant
     */
    select?: RankingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingParticipant
     */
    omit?: RankingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RankingParticipant to fetch.
     */
    where?: RankingParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RankingParticipants to fetch.
     */
    orderBy?: RankingParticipantOrderByWithRelationInput | RankingParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RankingParticipants.
     */
    cursor?: RankingParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RankingParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RankingParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RankingParticipants.
     */
    distinct?: RankingParticipantScalarFieldEnum | RankingParticipantScalarFieldEnum[]
  }

  /**
   * RankingParticipant findMany
   */
  export type RankingParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingParticipant
     */
    select?: RankingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingParticipant
     */
    omit?: RankingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which RankingParticipants to fetch.
     */
    where?: RankingParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RankingParticipants to fetch.
     */
    orderBy?: RankingParticipantOrderByWithRelationInput | RankingParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RankingParticipants.
     */
    cursor?: RankingParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RankingParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RankingParticipants.
     */
    skip?: number
    distinct?: RankingParticipantScalarFieldEnum | RankingParticipantScalarFieldEnum[]
  }

  /**
   * RankingParticipant create
   */
  export type RankingParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingParticipant
     */
    select?: RankingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingParticipant
     */
    omit?: RankingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a RankingParticipant.
     */
    data: XOR<RankingParticipantCreateInput, RankingParticipantUncheckedCreateInput>
  }

  /**
   * RankingParticipant createMany
   */
  export type RankingParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RankingParticipants.
     */
    data: RankingParticipantCreateManyInput | RankingParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RankingParticipant createManyAndReturn
   */
  export type RankingParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingParticipant
     */
    select?: RankingParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RankingParticipant
     */
    omit?: RankingParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many RankingParticipants.
     */
    data: RankingParticipantCreateManyInput | RankingParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RankingParticipant update
   */
  export type RankingParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingParticipant
     */
    select?: RankingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingParticipant
     */
    omit?: RankingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a RankingParticipant.
     */
    data: XOR<RankingParticipantUpdateInput, RankingParticipantUncheckedUpdateInput>
    /**
     * Choose, which RankingParticipant to update.
     */
    where: RankingParticipantWhereUniqueInput
  }

  /**
   * RankingParticipant updateMany
   */
  export type RankingParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RankingParticipants.
     */
    data: XOR<RankingParticipantUpdateManyMutationInput, RankingParticipantUncheckedUpdateManyInput>
    /**
     * Filter which RankingParticipants to update
     */
    where?: RankingParticipantWhereInput
    /**
     * Limit how many RankingParticipants to update.
     */
    limit?: number
  }

  /**
   * RankingParticipant updateManyAndReturn
   */
  export type RankingParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingParticipant
     */
    select?: RankingParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RankingParticipant
     */
    omit?: RankingParticipantOmit<ExtArgs> | null
    /**
     * The data used to update RankingParticipants.
     */
    data: XOR<RankingParticipantUpdateManyMutationInput, RankingParticipantUncheckedUpdateManyInput>
    /**
     * Filter which RankingParticipants to update
     */
    where?: RankingParticipantWhereInput
    /**
     * Limit how many RankingParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RankingParticipant upsert
   */
  export type RankingParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingParticipant
     */
    select?: RankingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingParticipant
     */
    omit?: RankingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the RankingParticipant to update in case it exists.
     */
    where: RankingParticipantWhereUniqueInput
    /**
     * In case the RankingParticipant found by the `where` argument doesn't exist, create a new RankingParticipant with this data.
     */
    create: XOR<RankingParticipantCreateInput, RankingParticipantUncheckedCreateInput>
    /**
     * In case the RankingParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RankingParticipantUpdateInput, RankingParticipantUncheckedUpdateInput>
  }

  /**
   * RankingParticipant delete
   */
  export type RankingParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingParticipant
     */
    select?: RankingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingParticipant
     */
    omit?: RankingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingParticipantInclude<ExtArgs> | null
    /**
     * Filter which RankingParticipant to delete.
     */
    where: RankingParticipantWhereUniqueInput
  }

  /**
   * RankingParticipant deleteMany
   */
  export type RankingParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RankingParticipants to delete
     */
    where?: RankingParticipantWhereInput
    /**
     * Limit how many RankingParticipants to delete.
     */
    limit?: number
  }

  /**
   * RankingParticipant without action
   */
  export type RankingParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RankingParticipant
     */
    select?: RankingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RankingParticipant
     */
    omit?: RankingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RankingParticipantInclude<ExtArgs> | null
  }


  /**
   * Model TeamScoreHistory
   */

  export type AggregateTeamScoreHistory = {
    _count: TeamScoreHistoryCountAggregateOutputType | null
    _avg: TeamScoreHistoryAvgAggregateOutputType | null
    _sum: TeamScoreHistorySumAggregateOutputType | null
    _min: TeamScoreHistoryMinAggregateOutputType | null
    _max: TeamScoreHistoryMaxAggregateOutputType | null
  }

  export type TeamScoreHistoryAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
    score: number | null
  }

  export type TeamScoreHistorySumAggregateOutputType = {
    id: number | null
    teamId: number | null
    score: number | null
  }

  export type TeamScoreHistoryMinAggregateOutputType = {
    id: number | null
    teamId: number | null
    score: number | null
    date: Date | null
  }

  export type TeamScoreHistoryMaxAggregateOutputType = {
    id: number | null
    teamId: number | null
    score: number | null
    date: Date | null
  }

  export type TeamScoreHistoryCountAggregateOutputType = {
    id: number
    teamId: number
    score: number
    date: number
    _all: number
  }


  export type TeamScoreHistoryAvgAggregateInputType = {
    id?: true
    teamId?: true
    score?: true
  }

  export type TeamScoreHistorySumAggregateInputType = {
    id?: true
    teamId?: true
    score?: true
  }

  export type TeamScoreHistoryMinAggregateInputType = {
    id?: true
    teamId?: true
    score?: true
    date?: true
  }

  export type TeamScoreHistoryMaxAggregateInputType = {
    id?: true
    teamId?: true
    score?: true
    date?: true
  }

  export type TeamScoreHistoryCountAggregateInputType = {
    id?: true
    teamId?: true
    score?: true
    date?: true
    _all?: true
  }

  export type TeamScoreHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamScoreHistory to aggregate.
     */
    where?: TeamScoreHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamScoreHistories to fetch.
     */
    orderBy?: TeamScoreHistoryOrderByWithRelationInput | TeamScoreHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamScoreHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamScoreHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamScoreHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamScoreHistories
    **/
    _count?: true | TeamScoreHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamScoreHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamScoreHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamScoreHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamScoreHistoryMaxAggregateInputType
  }

  export type GetTeamScoreHistoryAggregateType<T extends TeamScoreHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamScoreHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamScoreHistory[P]>
      : GetScalarType<T[P], AggregateTeamScoreHistory[P]>
  }




  export type TeamScoreHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamScoreHistoryWhereInput
    orderBy?: TeamScoreHistoryOrderByWithAggregationInput | TeamScoreHistoryOrderByWithAggregationInput[]
    by: TeamScoreHistoryScalarFieldEnum[] | TeamScoreHistoryScalarFieldEnum
    having?: TeamScoreHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamScoreHistoryCountAggregateInputType | true
    _avg?: TeamScoreHistoryAvgAggregateInputType
    _sum?: TeamScoreHistorySumAggregateInputType
    _min?: TeamScoreHistoryMinAggregateInputType
    _max?: TeamScoreHistoryMaxAggregateInputType
  }

  export type TeamScoreHistoryGroupByOutputType = {
    id: number
    teamId: number
    score: number
    date: Date
    _count: TeamScoreHistoryCountAggregateOutputType | null
    _avg: TeamScoreHistoryAvgAggregateOutputType | null
    _sum: TeamScoreHistorySumAggregateOutputType | null
    _min: TeamScoreHistoryMinAggregateOutputType | null
    _max: TeamScoreHistoryMaxAggregateOutputType | null
  }

  type GetTeamScoreHistoryGroupByPayload<T extends TeamScoreHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamScoreHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamScoreHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamScoreHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TeamScoreHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TeamScoreHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    score?: boolean
    date?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamScoreHistory"]>

  export type TeamScoreHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    score?: boolean
    date?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamScoreHistory"]>

  export type TeamScoreHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    score?: boolean
    date?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamScoreHistory"]>

  export type TeamScoreHistorySelectScalar = {
    id?: boolean
    teamId?: boolean
    score?: boolean
    date?: boolean
  }

  export type TeamScoreHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "score" | "date", ExtArgs["result"]["teamScoreHistory"]>
  export type TeamScoreHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type TeamScoreHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type TeamScoreHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }

  export type $TeamScoreHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamScoreHistory"
    objects: {
      team: Prisma.$teamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamId: number
      score: number
      date: Date
    }, ExtArgs["result"]["teamScoreHistory"]>
    composites: {}
  }

  type TeamScoreHistoryGetPayload<S extends boolean | null | undefined | TeamScoreHistoryDefaultArgs> = $Result.GetResult<Prisma.$TeamScoreHistoryPayload, S>

  type TeamScoreHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamScoreHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamScoreHistoryCountAggregateInputType | true
    }

  export interface TeamScoreHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamScoreHistory'], meta: { name: 'TeamScoreHistory' } }
    /**
     * Find zero or one TeamScoreHistory that matches the filter.
     * @param {TeamScoreHistoryFindUniqueArgs} args - Arguments to find a TeamScoreHistory
     * @example
     * // Get one TeamScoreHistory
     * const teamScoreHistory = await prisma.teamScoreHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamScoreHistoryFindUniqueArgs>(args: SelectSubset<T, TeamScoreHistoryFindUniqueArgs<ExtArgs>>): Prisma__TeamScoreHistoryClient<$Result.GetResult<Prisma.$TeamScoreHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamScoreHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamScoreHistoryFindUniqueOrThrowArgs} args - Arguments to find a TeamScoreHistory
     * @example
     * // Get one TeamScoreHistory
     * const teamScoreHistory = await prisma.teamScoreHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamScoreHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamScoreHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamScoreHistoryClient<$Result.GetResult<Prisma.$TeamScoreHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamScoreHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreHistoryFindFirstArgs} args - Arguments to find a TeamScoreHistory
     * @example
     * // Get one TeamScoreHistory
     * const teamScoreHistory = await prisma.teamScoreHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamScoreHistoryFindFirstArgs>(args?: SelectSubset<T, TeamScoreHistoryFindFirstArgs<ExtArgs>>): Prisma__TeamScoreHistoryClient<$Result.GetResult<Prisma.$TeamScoreHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamScoreHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreHistoryFindFirstOrThrowArgs} args - Arguments to find a TeamScoreHistory
     * @example
     * // Get one TeamScoreHistory
     * const teamScoreHistory = await prisma.teamScoreHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamScoreHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamScoreHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamScoreHistoryClient<$Result.GetResult<Prisma.$TeamScoreHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamScoreHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamScoreHistories
     * const teamScoreHistories = await prisma.teamScoreHistory.findMany()
     * 
     * // Get first 10 TeamScoreHistories
     * const teamScoreHistories = await prisma.teamScoreHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamScoreHistoryWithIdOnly = await prisma.teamScoreHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamScoreHistoryFindManyArgs>(args?: SelectSubset<T, TeamScoreHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamScoreHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamScoreHistory.
     * @param {TeamScoreHistoryCreateArgs} args - Arguments to create a TeamScoreHistory.
     * @example
     * // Create one TeamScoreHistory
     * const TeamScoreHistory = await prisma.teamScoreHistory.create({
     *   data: {
     *     // ... data to create a TeamScoreHistory
     *   }
     * })
     * 
     */
    create<T extends TeamScoreHistoryCreateArgs>(args: SelectSubset<T, TeamScoreHistoryCreateArgs<ExtArgs>>): Prisma__TeamScoreHistoryClient<$Result.GetResult<Prisma.$TeamScoreHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamScoreHistories.
     * @param {TeamScoreHistoryCreateManyArgs} args - Arguments to create many TeamScoreHistories.
     * @example
     * // Create many TeamScoreHistories
     * const teamScoreHistory = await prisma.teamScoreHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamScoreHistoryCreateManyArgs>(args?: SelectSubset<T, TeamScoreHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamScoreHistories and returns the data saved in the database.
     * @param {TeamScoreHistoryCreateManyAndReturnArgs} args - Arguments to create many TeamScoreHistories.
     * @example
     * // Create many TeamScoreHistories
     * const teamScoreHistory = await prisma.teamScoreHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamScoreHistories and only return the `id`
     * const teamScoreHistoryWithIdOnly = await prisma.teamScoreHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamScoreHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamScoreHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamScoreHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamScoreHistory.
     * @param {TeamScoreHistoryDeleteArgs} args - Arguments to delete one TeamScoreHistory.
     * @example
     * // Delete one TeamScoreHistory
     * const TeamScoreHistory = await prisma.teamScoreHistory.delete({
     *   where: {
     *     // ... filter to delete one TeamScoreHistory
     *   }
     * })
     * 
     */
    delete<T extends TeamScoreHistoryDeleteArgs>(args: SelectSubset<T, TeamScoreHistoryDeleteArgs<ExtArgs>>): Prisma__TeamScoreHistoryClient<$Result.GetResult<Prisma.$TeamScoreHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamScoreHistory.
     * @param {TeamScoreHistoryUpdateArgs} args - Arguments to update one TeamScoreHistory.
     * @example
     * // Update one TeamScoreHistory
     * const teamScoreHistory = await prisma.teamScoreHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamScoreHistoryUpdateArgs>(args: SelectSubset<T, TeamScoreHistoryUpdateArgs<ExtArgs>>): Prisma__TeamScoreHistoryClient<$Result.GetResult<Prisma.$TeamScoreHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamScoreHistories.
     * @param {TeamScoreHistoryDeleteManyArgs} args - Arguments to filter TeamScoreHistories to delete.
     * @example
     * // Delete a few TeamScoreHistories
     * const { count } = await prisma.teamScoreHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamScoreHistoryDeleteManyArgs>(args?: SelectSubset<T, TeamScoreHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamScoreHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamScoreHistories
     * const teamScoreHistory = await prisma.teamScoreHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamScoreHistoryUpdateManyArgs>(args: SelectSubset<T, TeamScoreHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamScoreHistories and returns the data updated in the database.
     * @param {TeamScoreHistoryUpdateManyAndReturnArgs} args - Arguments to update many TeamScoreHistories.
     * @example
     * // Update many TeamScoreHistories
     * const teamScoreHistory = await prisma.teamScoreHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamScoreHistories and only return the `id`
     * const teamScoreHistoryWithIdOnly = await prisma.teamScoreHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamScoreHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamScoreHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamScoreHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamScoreHistory.
     * @param {TeamScoreHistoryUpsertArgs} args - Arguments to update or create a TeamScoreHistory.
     * @example
     * // Update or create a TeamScoreHistory
     * const teamScoreHistory = await prisma.teamScoreHistory.upsert({
     *   create: {
     *     // ... data to create a TeamScoreHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamScoreHistory we want to update
     *   }
     * })
     */
    upsert<T extends TeamScoreHistoryUpsertArgs>(args: SelectSubset<T, TeamScoreHistoryUpsertArgs<ExtArgs>>): Prisma__TeamScoreHistoryClient<$Result.GetResult<Prisma.$TeamScoreHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamScoreHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreHistoryCountArgs} args - Arguments to filter TeamScoreHistories to count.
     * @example
     * // Count the number of TeamScoreHistories
     * const count = await prisma.teamScoreHistory.count({
     *   where: {
     *     // ... the filter for the TeamScoreHistories we want to count
     *   }
     * })
    **/
    count<T extends TeamScoreHistoryCountArgs>(
      args?: Subset<T, TeamScoreHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamScoreHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamScoreHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamScoreHistoryAggregateArgs>(args: Subset<T, TeamScoreHistoryAggregateArgs>): Prisma.PrismaPromise<GetTeamScoreHistoryAggregateType<T>>

    /**
     * Group by TeamScoreHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreHistoryGroupByArgs} args - Group by arguments.
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
      T extends TeamScoreHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamScoreHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TeamScoreHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamScoreHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamScoreHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamScoreHistory model
   */
  readonly fields: TeamScoreHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamScoreHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamScoreHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends teamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamDefaultArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamScoreHistory model
   */
  interface TeamScoreHistoryFieldRefs {
    readonly id: FieldRef<"TeamScoreHistory", 'Int'>
    readonly teamId: FieldRef<"TeamScoreHistory", 'Int'>
    readonly score: FieldRef<"TeamScoreHistory", 'Float'>
    readonly date: FieldRef<"TeamScoreHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamScoreHistory findUnique
   */
  export type TeamScoreHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreHistory
     */
    select?: TeamScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreHistory
     */
    omit?: TeamScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TeamScoreHistory to fetch.
     */
    where: TeamScoreHistoryWhereUniqueInput
  }

  /**
   * TeamScoreHistory findUniqueOrThrow
   */
  export type TeamScoreHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreHistory
     */
    select?: TeamScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreHistory
     */
    omit?: TeamScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TeamScoreHistory to fetch.
     */
    where: TeamScoreHistoryWhereUniqueInput
  }

  /**
   * TeamScoreHistory findFirst
   */
  export type TeamScoreHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreHistory
     */
    select?: TeamScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreHistory
     */
    omit?: TeamScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TeamScoreHistory to fetch.
     */
    where?: TeamScoreHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamScoreHistories to fetch.
     */
    orderBy?: TeamScoreHistoryOrderByWithRelationInput | TeamScoreHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamScoreHistories.
     */
    cursor?: TeamScoreHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamScoreHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamScoreHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamScoreHistories.
     */
    distinct?: TeamScoreHistoryScalarFieldEnum | TeamScoreHistoryScalarFieldEnum[]
  }

  /**
   * TeamScoreHistory findFirstOrThrow
   */
  export type TeamScoreHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreHistory
     */
    select?: TeamScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreHistory
     */
    omit?: TeamScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TeamScoreHistory to fetch.
     */
    where?: TeamScoreHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamScoreHistories to fetch.
     */
    orderBy?: TeamScoreHistoryOrderByWithRelationInput | TeamScoreHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamScoreHistories.
     */
    cursor?: TeamScoreHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamScoreHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamScoreHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamScoreHistories.
     */
    distinct?: TeamScoreHistoryScalarFieldEnum | TeamScoreHistoryScalarFieldEnum[]
  }

  /**
   * TeamScoreHistory findMany
   */
  export type TeamScoreHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreHistory
     */
    select?: TeamScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreHistory
     */
    omit?: TeamScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TeamScoreHistories to fetch.
     */
    where?: TeamScoreHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamScoreHistories to fetch.
     */
    orderBy?: TeamScoreHistoryOrderByWithRelationInput | TeamScoreHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamScoreHistories.
     */
    cursor?: TeamScoreHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamScoreHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamScoreHistories.
     */
    skip?: number
    distinct?: TeamScoreHistoryScalarFieldEnum | TeamScoreHistoryScalarFieldEnum[]
  }

  /**
   * TeamScoreHistory create
   */
  export type TeamScoreHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreHistory
     */
    select?: TeamScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreHistory
     */
    omit?: TeamScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamScoreHistory.
     */
    data: XOR<TeamScoreHistoryCreateInput, TeamScoreHistoryUncheckedCreateInput>
  }

  /**
   * TeamScoreHistory createMany
   */
  export type TeamScoreHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamScoreHistories.
     */
    data: TeamScoreHistoryCreateManyInput | TeamScoreHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamScoreHistory createManyAndReturn
   */
  export type TeamScoreHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreHistory
     */
    select?: TeamScoreHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreHistory
     */
    omit?: TeamScoreHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TeamScoreHistories.
     */
    data: TeamScoreHistoryCreateManyInput | TeamScoreHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamScoreHistory update
   */
  export type TeamScoreHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreHistory
     */
    select?: TeamScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreHistory
     */
    omit?: TeamScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamScoreHistory.
     */
    data: XOR<TeamScoreHistoryUpdateInput, TeamScoreHistoryUncheckedUpdateInput>
    /**
     * Choose, which TeamScoreHistory to update.
     */
    where: TeamScoreHistoryWhereUniqueInput
  }

  /**
   * TeamScoreHistory updateMany
   */
  export type TeamScoreHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamScoreHistories.
     */
    data: XOR<TeamScoreHistoryUpdateManyMutationInput, TeamScoreHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TeamScoreHistories to update
     */
    where?: TeamScoreHistoryWhereInput
    /**
     * Limit how many TeamScoreHistories to update.
     */
    limit?: number
  }

  /**
   * TeamScoreHistory updateManyAndReturn
   */
  export type TeamScoreHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreHistory
     */
    select?: TeamScoreHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreHistory
     */
    omit?: TeamScoreHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TeamScoreHistories.
     */
    data: XOR<TeamScoreHistoryUpdateManyMutationInput, TeamScoreHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TeamScoreHistories to update
     */
    where?: TeamScoreHistoryWhereInput
    /**
     * Limit how many TeamScoreHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamScoreHistory upsert
   */
  export type TeamScoreHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreHistory
     */
    select?: TeamScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreHistory
     */
    omit?: TeamScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamScoreHistory to update in case it exists.
     */
    where: TeamScoreHistoryWhereUniqueInput
    /**
     * In case the TeamScoreHistory found by the `where` argument doesn't exist, create a new TeamScoreHistory with this data.
     */
    create: XOR<TeamScoreHistoryCreateInput, TeamScoreHistoryUncheckedCreateInput>
    /**
     * In case the TeamScoreHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamScoreHistoryUpdateInput, TeamScoreHistoryUncheckedUpdateInput>
  }

  /**
   * TeamScoreHistory delete
   */
  export type TeamScoreHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreHistory
     */
    select?: TeamScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreHistory
     */
    omit?: TeamScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreHistoryInclude<ExtArgs> | null
    /**
     * Filter which TeamScoreHistory to delete.
     */
    where: TeamScoreHistoryWhereUniqueInput
  }

  /**
   * TeamScoreHistory deleteMany
   */
  export type TeamScoreHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamScoreHistories to delete
     */
    where?: TeamScoreHistoryWhereInput
    /**
     * Limit how many TeamScoreHistories to delete.
     */
    limit?: number
  }

  /**
   * TeamScoreHistory without action
   */
  export type TeamScoreHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreHistory
     */
    select?: TeamScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreHistory
     */
    omit?: TeamScoreHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreHistoryInclude<ExtArgs> | null
  }


  /**
   * Model ParticipantScoreHistory
   */

  export type AggregateParticipantScoreHistory = {
    _count: ParticipantScoreHistoryCountAggregateOutputType | null
    _avg: ParticipantScoreHistoryAvgAggregateOutputType | null
    _sum: ParticipantScoreHistorySumAggregateOutputType | null
    _min: ParticipantScoreHistoryMinAggregateOutputType | null
    _max: ParticipantScoreHistoryMaxAggregateOutputType | null
  }

  export type ParticipantScoreHistoryAvgAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type ParticipantScoreHistorySumAggregateOutputType = {
    id: number | null
    score: number | null
  }

  export type ParticipantScoreHistoryMinAggregateOutputType = {
    id: number | null
    participantId: string | null
    score: number | null
    date: Date | null
  }

  export type ParticipantScoreHistoryMaxAggregateOutputType = {
    id: number | null
    participantId: string | null
    score: number | null
    date: Date | null
  }

  export type ParticipantScoreHistoryCountAggregateOutputType = {
    id: number
    participantId: number
    score: number
    date: number
    _all: number
  }


  export type ParticipantScoreHistoryAvgAggregateInputType = {
    id?: true
    score?: true
  }

  export type ParticipantScoreHistorySumAggregateInputType = {
    id?: true
    score?: true
  }

  export type ParticipantScoreHistoryMinAggregateInputType = {
    id?: true
    participantId?: true
    score?: true
    date?: true
  }

  export type ParticipantScoreHistoryMaxAggregateInputType = {
    id?: true
    participantId?: true
    score?: true
    date?: true
  }

  export type ParticipantScoreHistoryCountAggregateInputType = {
    id?: true
    participantId?: true
    score?: true
    date?: true
    _all?: true
  }

  export type ParticipantScoreHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantScoreHistory to aggregate.
     */
    where?: ParticipantScoreHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantScoreHistories to fetch.
     */
    orderBy?: ParticipantScoreHistoryOrderByWithRelationInput | ParticipantScoreHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantScoreHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantScoreHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantScoreHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParticipantScoreHistories
    **/
    _count?: true | ParticipantScoreHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipantScoreHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipantScoreHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantScoreHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantScoreHistoryMaxAggregateInputType
  }

  export type GetParticipantScoreHistoryAggregateType<T extends ParticipantScoreHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipantScoreHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipantScoreHistory[P]>
      : GetScalarType<T[P], AggregateParticipantScoreHistory[P]>
  }




  export type ParticipantScoreHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantScoreHistoryWhereInput
    orderBy?: ParticipantScoreHistoryOrderByWithAggregationInput | ParticipantScoreHistoryOrderByWithAggregationInput[]
    by: ParticipantScoreHistoryScalarFieldEnum[] | ParticipantScoreHistoryScalarFieldEnum
    having?: ParticipantScoreHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantScoreHistoryCountAggregateInputType | true
    _avg?: ParticipantScoreHistoryAvgAggregateInputType
    _sum?: ParticipantScoreHistorySumAggregateInputType
    _min?: ParticipantScoreHistoryMinAggregateInputType
    _max?: ParticipantScoreHistoryMaxAggregateInputType
  }

  export type ParticipantScoreHistoryGroupByOutputType = {
    id: number
    participantId: string
    score: number
    date: Date
    _count: ParticipantScoreHistoryCountAggregateOutputType | null
    _avg: ParticipantScoreHistoryAvgAggregateOutputType | null
    _sum: ParticipantScoreHistorySumAggregateOutputType | null
    _min: ParticipantScoreHistoryMinAggregateOutputType | null
    _max: ParticipantScoreHistoryMaxAggregateOutputType | null
  }

  type GetParticipantScoreHistoryGroupByPayload<T extends ParticipantScoreHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantScoreHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantScoreHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantScoreHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantScoreHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantScoreHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    score?: boolean
    date?: boolean
  }, ExtArgs["result"]["participantScoreHistory"]>

  export type ParticipantScoreHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    score?: boolean
    date?: boolean
  }, ExtArgs["result"]["participantScoreHistory"]>

  export type ParticipantScoreHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    participantId?: boolean
    score?: boolean
    date?: boolean
  }, ExtArgs["result"]["participantScoreHistory"]>

  export type ParticipantScoreHistorySelectScalar = {
    id?: boolean
    participantId?: boolean
    score?: boolean
    date?: boolean
  }

  export type ParticipantScoreHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "participantId" | "score" | "date", ExtArgs["result"]["participantScoreHistory"]>

  export type $ParticipantScoreHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParticipantScoreHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      participantId: string
      score: number
      date: Date
    }, ExtArgs["result"]["participantScoreHistory"]>
    composites: {}
  }

  type ParticipantScoreHistoryGetPayload<S extends boolean | null | undefined | ParticipantScoreHistoryDefaultArgs> = $Result.GetResult<Prisma.$ParticipantScoreHistoryPayload, S>

  type ParticipantScoreHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantScoreHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantScoreHistoryCountAggregateInputType | true
    }

  export interface ParticipantScoreHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParticipantScoreHistory'], meta: { name: 'ParticipantScoreHistory' } }
    /**
     * Find zero or one ParticipantScoreHistory that matches the filter.
     * @param {ParticipantScoreHistoryFindUniqueArgs} args - Arguments to find a ParticipantScoreHistory
     * @example
     * // Get one ParticipantScoreHistory
     * const participantScoreHistory = await prisma.participantScoreHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantScoreHistoryFindUniqueArgs>(args: SelectSubset<T, ParticipantScoreHistoryFindUniqueArgs<ExtArgs>>): Prisma__ParticipantScoreHistoryClient<$Result.GetResult<Prisma.$ParticipantScoreHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParticipantScoreHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantScoreHistoryFindUniqueOrThrowArgs} args - Arguments to find a ParticipantScoreHistory
     * @example
     * // Get one ParticipantScoreHistory
     * const participantScoreHistory = await prisma.participantScoreHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantScoreHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantScoreHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantScoreHistoryClient<$Result.GetResult<Prisma.$ParticipantScoreHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantScoreHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantScoreHistoryFindFirstArgs} args - Arguments to find a ParticipantScoreHistory
     * @example
     * // Get one ParticipantScoreHistory
     * const participantScoreHistory = await prisma.participantScoreHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantScoreHistoryFindFirstArgs>(args?: SelectSubset<T, ParticipantScoreHistoryFindFirstArgs<ExtArgs>>): Prisma__ParticipantScoreHistoryClient<$Result.GetResult<Prisma.$ParticipantScoreHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipantScoreHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantScoreHistoryFindFirstOrThrowArgs} args - Arguments to find a ParticipantScoreHistory
     * @example
     * // Get one ParticipantScoreHistory
     * const participantScoreHistory = await prisma.participantScoreHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantScoreHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantScoreHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantScoreHistoryClient<$Result.GetResult<Prisma.$ParticipantScoreHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParticipantScoreHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantScoreHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParticipantScoreHistories
     * const participantScoreHistories = await prisma.participantScoreHistory.findMany()
     * 
     * // Get first 10 ParticipantScoreHistories
     * const participantScoreHistories = await prisma.participantScoreHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantScoreHistoryWithIdOnly = await prisma.participantScoreHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantScoreHistoryFindManyArgs>(args?: SelectSubset<T, ParticipantScoreHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantScoreHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParticipantScoreHistory.
     * @param {ParticipantScoreHistoryCreateArgs} args - Arguments to create a ParticipantScoreHistory.
     * @example
     * // Create one ParticipantScoreHistory
     * const ParticipantScoreHistory = await prisma.participantScoreHistory.create({
     *   data: {
     *     // ... data to create a ParticipantScoreHistory
     *   }
     * })
     * 
     */
    create<T extends ParticipantScoreHistoryCreateArgs>(args: SelectSubset<T, ParticipantScoreHistoryCreateArgs<ExtArgs>>): Prisma__ParticipantScoreHistoryClient<$Result.GetResult<Prisma.$ParticipantScoreHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParticipantScoreHistories.
     * @param {ParticipantScoreHistoryCreateManyArgs} args - Arguments to create many ParticipantScoreHistories.
     * @example
     * // Create many ParticipantScoreHistories
     * const participantScoreHistory = await prisma.participantScoreHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantScoreHistoryCreateManyArgs>(args?: SelectSubset<T, ParticipantScoreHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParticipantScoreHistories and returns the data saved in the database.
     * @param {ParticipantScoreHistoryCreateManyAndReturnArgs} args - Arguments to create many ParticipantScoreHistories.
     * @example
     * // Create many ParticipantScoreHistories
     * const participantScoreHistory = await prisma.participantScoreHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParticipantScoreHistories and only return the `id`
     * const participantScoreHistoryWithIdOnly = await prisma.participantScoreHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantScoreHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantScoreHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantScoreHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParticipantScoreHistory.
     * @param {ParticipantScoreHistoryDeleteArgs} args - Arguments to delete one ParticipantScoreHistory.
     * @example
     * // Delete one ParticipantScoreHistory
     * const ParticipantScoreHistory = await prisma.participantScoreHistory.delete({
     *   where: {
     *     // ... filter to delete one ParticipantScoreHistory
     *   }
     * })
     * 
     */
    delete<T extends ParticipantScoreHistoryDeleteArgs>(args: SelectSubset<T, ParticipantScoreHistoryDeleteArgs<ExtArgs>>): Prisma__ParticipantScoreHistoryClient<$Result.GetResult<Prisma.$ParticipantScoreHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParticipantScoreHistory.
     * @param {ParticipantScoreHistoryUpdateArgs} args - Arguments to update one ParticipantScoreHistory.
     * @example
     * // Update one ParticipantScoreHistory
     * const participantScoreHistory = await prisma.participantScoreHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantScoreHistoryUpdateArgs>(args: SelectSubset<T, ParticipantScoreHistoryUpdateArgs<ExtArgs>>): Prisma__ParticipantScoreHistoryClient<$Result.GetResult<Prisma.$ParticipantScoreHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParticipantScoreHistories.
     * @param {ParticipantScoreHistoryDeleteManyArgs} args - Arguments to filter ParticipantScoreHistories to delete.
     * @example
     * // Delete a few ParticipantScoreHistories
     * const { count } = await prisma.participantScoreHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantScoreHistoryDeleteManyArgs>(args?: SelectSubset<T, ParticipantScoreHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantScoreHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantScoreHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParticipantScoreHistories
     * const participantScoreHistory = await prisma.participantScoreHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantScoreHistoryUpdateManyArgs>(args: SelectSubset<T, ParticipantScoreHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipantScoreHistories and returns the data updated in the database.
     * @param {ParticipantScoreHistoryUpdateManyAndReturnArgs} args - Arguments to update many ParticipantScoreHistories.
     * @example
     * // Update many ParticipantScoreHistories
     * const participantScoreHistory = await prisma.participantScoreHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParticipantScoreHistories and only return the `id`
     * const participantScoreHistoryWithIdOnly = await prisma.participantScoreHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipantScoreHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantScoreHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantScoreHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParticipantScoreHistory.
     * @param {ParticipantScoreHistoryUpsertArgs} args - Arguments to update or create a ParticipantScoreHistory.
     * @example
     * // Update or create a ParticipantScoreHistory
     * const participantScoreHistory = await prisma.participantScoreHistory.upsert({
     *   create: {
     *     // ... data to create a ParticipantScoreHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParticipantScoreHistory we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantScoreHistoryUpsertArgs>(args: SelectSubset<T, ParticipantScoreHistoryUpsertArgs<ExtArgs>>): Prisma__ParticipantScoreHistoryClient<$Result.GetResult<Prisma.$ParticipantScoreHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParticipantScoreHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantScoreHistoryCountArgs} args - Arguments to filter ParticipantScoreHistories to count.
     * @example
     * // Count the number of ParticipantScoreHistories
     * const count = await prisma.participantScoreHistory.count({
     *   where: {
     *     // ... the filter for the ParticipantScoreHistories we want to count
     *   }
     * })
    **/
    count<T extends ParticipantScoreHistoryCountArgs>(
      args?: Subset<T, ParticipantScoreHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantScoreHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParticipantScoreHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantScoreHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantScoreHistoryAggregateArgs>(args: Subset<T, ParticipantScoreHistoryAggregateArgs>): Prisma.PrismaPromise<GetParticipantScoreHistoryAggregateType<T>>

    /**
     * Group by ParticipantScoreHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantScoreHistoryGroupByArgs} args - Group by arguments.
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
      T extends ParticipantScoreHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantScoreHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantScoreHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantScoreHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantScoreHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParticipantScoreHistory model
   */
  readonly fields: ParticipantScoreHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParticipantScoreHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantScoreHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ParticipantScoreHistory model
   */
  interface ParticipantScoreHistoryFieldRefs {
    readonly id: FieldRef<"ParticipantScoreHistory", 'Int'>
    readonly participantId: FieldRef<"ParticipantScoreHistory", 'String'>
    readonly score: FieldRef<"ParticipantScoreHistory", 'Float'>
    readonly date: FieldRef<"ParticipantScoreHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParticipantScoreHistory findUnique
   */
  export type ParticipantScoreHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantScoreHistory
     */
    select?: ParticipantScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantScoreHistory
     */
    omit?: ParticipantScoreHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ParticipantScoreHistory to fetch.
     */
    where: ParticipantScoreHistoryWhereUniqueInput
  }

  /**
   * ParticipantScoreHistory findUniqueOrThrow
   */
  export type ParticipantScoreHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantScoreHistory
     */
    select?: ParticipantScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantScoreHistory
     */
    omit?: ParticipantScoreHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ParticipantScoreHistory to fetch.
     */
    where: ParticipantScoreHistoryWhereUniqueInput
  }

  /**
   * ParticipantScoreHistory findFirst
   */
  export type ParticipantScoreHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantScoreHistory
     */
    select?: ParticipantScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantScoreHistory
     */
    omit?: ParticipantScoreHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ParticipantScoreHistory to fetch.
     */
    where?: ParticipantScoreHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantScoreHistories to fetch.
     */
    orderBy?: ParticipantScoreHistoryOrderByWithRelationInput | ParticipantScoreHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantScoreHistories.
     */
    cursor?: ParticipantScoreHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantScoreHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantScoreHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantScoreHistories.
     */
    distinct?: ParticipantScoreHistoryScalarFieldEnum | ParticipantScoreHistoryScalarFieldEnum[]
  }

  /**
   * ParticipantScoreHistory findFirstOrThrow
   */
  export type ParticipantScoreHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantScoreHistory
     */
    select?: ParticipantScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantScoreHistory
     */
    omit?: ParticipantScoreHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ParticipantScoreHistory to fetch.
     */
    where?: ParticipantScoreHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantScoreHistories to fetch.
     */
    orderBy?: ParticipantScoreHistoryOrderByWithRelationInput | ParticipantScoreHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipantScoreHistories.
     */
    cursor?: ParticipantScoreHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantScoreHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantScoreHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipantScoreHistories.
     */
    distinct?: ParticipantScoreHistoryScalarFieldEnum | ParticipantScoreHistoryScalarFieldEnum[]
  }

  /**
   * ParticipantScoreHistory findMany
   */
  export type ParticipantScoreHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantScoreHistory
     */
    select?: ParticipantScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantScoreHistory
     */
    omit?: ParticipantScoreHistoryOmit<ExtArgs> | null
    /**
     * Filter, which ParticipantScoreHistories to fetch.
     */
    where?: ParticipantScoreHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipantScoreHistories to fetch.
     */
    orderBy?: ParticipantScoreHistoryOrderByWithRelationInput | ParticipantScoreHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParticipantScoreHistories.
     */
    cursor?: ParticipantScoreHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipantScoreHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipantScoreHistories.
     */
    skip?: number
    distinct?: ParticipantScoreHistoryScalarFieldEnum | ParticipantScoreHistoryScalarFieldEnum[]
  }

  /**
   * ParticipantScoreHistory create
   */
  export type ParticipantScoreHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantScoreHistory
     */
    select?: ParticipantScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantScoreHistory
     */
    omit?: ParticipantScoreHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a ParticipantScoreHistory.
     */
    data: XOR<ParticipantScoreHistoryCreateInput, ParticipantScoreHistoryUncheckedCreateInput>
  }

  /**
   * ParticipantScoreHistory createMany
   */
  export type ParticipantScoreHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParticipantScoreHistories.
     */
    data: ParticipantScoreHistoryCreateManyInput | ParticipantScoreHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParticipantScoreHistory createManyAndReturn
   */
  export type ParticipantScoreHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantScoreHistory
     */
    select?: ParticipantScoreHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantScoreHistory
     */
    omit?: ParticipantScoreHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ParticipantScoreHistories.
     */
    data: ParticipantScoreHistoryCreateManyInput | ParticipantScoreHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParticipantScoreHistory update
   */
  export type ParticipantScoreHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantScoreHistory
     */
    select?: ParticipantScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantScoreHistory
     */
    omit?: ParticipantScoreHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a ParticipantScoreHistory.
     */
    data: XOR<ParticipantScoreHistoryUpdateInput, ParticipantScoreHistoryUncheckedUpdateInput>
    /**
     * Choose, which ParticipantScoreHistory to update.
     */
    where: ParticipantScoreHistoryWhereUniqueInput
  }

  /**
   * ParticipantScoreHistory updateMany
   */
  export type ParticipantScoreHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParticipantScoreHistories.
     */
    data: XOR<ParticipantScoreHistoryUpdateManyMutationInput, ParticipantScoreHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantScoreHistories to update
     */
    where?: ParticipantScoreHistoryWhereInput
    /**
     * Limit how many ParticipantScoreHistories to update.
     */
    limit?: number
  }

  /**
   * ParticipantScoreHistory updateManyAndReturn
   */
  export type ParticipantScoreHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantScoreHistory
     */
    select?: ParticipantScoreHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantScoreHistory
     */
    omit?: ParticipantScoreHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ParticipantScoreHistories.
     */
    data: XOR<ParticipantScoreHistoryUpdateManyMutationInput, ParticipantScoreHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ParticipantScoreHistories to update
     */
    where?: ParticipantScoreHistoryWhereInput
    /**
     * Limit how many ParticipantScoreHistories to update.
     */
    limit?: number
  }

  /**
   * ParticipantScoreHistory upsert
   */
  export type ParticipantScoreHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantScoreHistory
     */
    select?: ParticipantScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantScoreHistory
     */
    omit?: ParticipantScoreHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the ParticipantScoreHistory to update in case it exists.
     */
    where: ParticipantScoreHistoryWhereUniqueInput
    /**
     * In case the ParticipantScoreHistory found by the `where` argument doesn't exist, create a new ParticipantScoreHistory with this data.
     */
    create: XOR<ParticipantScoreHistoryCreateInput, ParticipantScoreHistoryUncheckedCreateInput>
    /**
     * In case the ParticipantScoreHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantScoreHistoryUpdateInput, ParticipantScoreHistoryUncheckedUpdateInput>
  }

  /**
   * ParticipantScoreHistory delete
   */
  export type ParticipantScoreHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantScoreHistory
     */
    select?: ParticipantScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantScoreHistory
     */
    omit?: ParticipantScoreHistoryOmit<ExtArgs> | null
    /**
     * Filter which ParticipantScoreHistory to delete.
     */
    where: ParticipantScoreHistoryWhereUniqueInput
  }

  /**
   * ParticipantScoreHistory deleteMany
   */
  export type ParticipantScoreHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipantScoreHistories to delete
     */
    where?: ParticipantScoreHistoryWhereInput
    /**
     * Limit how many ParticipantScoreHistories to delete.
     */
    limit?: number
  }

  /**
   * ParticipantScoreHistory without action
   */
  export type ParticipantScoreHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipantScoreHistory
     */
    select?: ParticipantScoreHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipantScoreHistory
     */
    omit?: ParticipantScoreHistoryOmit<ExtArgs> | null
  }


  /**
   * Model TeamScoreDistribution
   */

  export type AggregateTeamScoreDistribution = {
    _count: TeamScoreDistributionCountAggregateOutputType | null
    _avg: TeamScoreDistributionAvgAggregateOutputType | null
    _sum: TeamScoreDistributionSumAggregateOutputType | null
    _min: TeamScoreDistributionMinAggregateOutputType | null
    _max: TeamScoreDistributionMaxAggregateOutputType | null
  }

  export type TeamScoreDistributionAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
    scoreTotal: number | null
    percentage: number | null
  }

  export type TeamScoreDistributionSumAggregateOutputType = {
    id: number | null
    teamId: number | null
    scoreTotal: number | null
    percentage: number | null
  }

  export type TeamScoreDistributionMinAggregateOutputType = {
    id: number | null
    teamId: number | null
    scoreTotal: number | null
    percentage: number | null
  }

  export type TeamScoreDistributionMaxAggregateOutputType = {
    id: number | null
    teamId: number | null
    scoreTotal: number | null
    percentage: number | null
  }

  export type TeamScoreDistributionCountAggregateOutputType = {
    id: number
    teamId: number
    scoreTotal: number
    percentage: number
    _all: number
  }


  export type TeamScoreDistributionAvgAggregateInputType = {
    id?: true
    teamId?: true
    scoreTotal?: true
    percentage?: true
  }

  export type TeamScoreDistributionSumAggregateInputType = {
    id?: true
    teamId?: true
    scoreTotal?: true
    percentage?: true
  }

  export type TeamScoreDistributionMinAggregateInputType = {
    id?: true
    teamId?: true
    scoreTotal?: true
    percentage?: true
  }

  export type TeamScoreDistributionMaxAggregateInputType = {
    id?: true
    teamId?: true
    scoreTotal?: true
    percentage?: true
  }

  export type TeamScoreDistributionCountAggregateInputType = {
    id?: true
    teamId?: true
    scoreTotal?: true
    percentage?: true
    _all?: true
  }

  export type TeamScoreDistributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamScoreDistribution to aggregate.
     */
    where?: TeamScoreDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamScoreDistributions to fetch.
     */
    orderBy?: TeamScoreDistributionOrderByWithRelationInput | TeamScoreDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamScoreDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamScoreDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamScoreDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamScoreDistributions
    **/
    _count?: true | TeamScoreDistributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamScoreDistributionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamScoreDistributionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamScoreDistributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamScoreDistributionMaxAggregateInputType
  }

  export type GetTeamScoreDistributionAggregateType<T extends TeamScoreDistributionAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamScoreDistribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamScoreDistribution[P]>
      : GetScalarType<T[P], AggregateTeamScoreDistribution[P]>
  }




  export type TeamScoreDistributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamScoreDistributionWhereInput
    orderBy?: TeamScoreDistributionOrderByWithAggregationInput | TeamScoreDistributionOrderByWithAggregationInput[]
    by: TeamScoreDistributionScalarFieldEnum[] | TeamScoreDistributionScalarFieldEnum
    having?: TeamScoreDistributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamScoreDistributionCountAggregateInputType | true
    _avg?: TeamScoreDistributionAvgAggregateInputType
    _sum?: TeamScoreDistributionSumAggregateInputType
    _min?: TeamScoreDistributionMinAggregateInputType
    _max?: TeamScoreDistributionMaxAggregateInputType
  }

  export type TeamScoreDistributionGroupByOutputType = {
    id: number
    teamId: number
    scoreTotal: number
    percentage: number
    _count: TeamScoreDistributionCountAggregateOutputType | null
    _avg: TeamScoreDistributionAvgAggregateOutputType | null
    _sum: TeamScoreDistributionSumAggregateOutputType | null
    _min: TeamScoreDistributionMinAggregateOutputType | null
    _max: TeamScoreDistributionMaxAggregateOutputType | null
  }

  type GetTeamScoreDistributionGroupByPayload<T extends TeamScoreDistributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamScoreDistributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamScoreDistributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamScoreDistributionGroupByOutputType[P]>
            : GetScalarType<T[P], TeamScoreDistributionGroupByOutputType[P]>
        }
      >
    >


  export type TeamScoreDistributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    scoreTotal?: boolean
    percentage?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamScoreDistribution"]>

  export type TeamScoreDistributionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    scoreTotal?: boolean
    percentage?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamScoreDistribution"]>

  export type TeamScoreDistributionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    scoreTotal?: boolean
    percentage?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamScoreDistribution"]>

  export type TeamScoreDistributionSelectScalar = {
    id?: boolean
    teamId?: boolean
    scoreTotal?: boolean
    percentage?: boolean
  }

  export type TeamScoreDistributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "scoreTotal" | "percentage", ExtArgs["result"]["teamScoreDistribution"]>
  export type TeamScoreDistributionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type TeamScoreDistributionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type TeamScoreDistributionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }

  export type $TeamScoreDistributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamScoreDistribution"
    objects: {
      team: Prisma.$teamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamId: number
      scoreTotal: number
      percentage: number
    }, ExtArgs["result"]["teamScoreDistribution"]>
    composites: {}
  }

  type TeamScoreDistributionGetPayload<S extends boolean | null | undefined | TeamScoreDistributionDefaultArgs> = $Result.GetResult<Prisma.$TeamScoreDistributionPayload, S>

  type TeamScoreDistributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamScoreDistributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamScoreDistributionCountAggregateInputType | true
    }

  export interface TeamScoreDistributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamScoreDistribution'], meta: { name: 'TeamScoreDistribution' } }
    /**
     * Find zero or one TeamScoreDistribution that matches the filter.
     * @param {TeamScoreDistributionFindUniqueArgs} args - Arguments to find a TeamScoreDistribution
     * @example
     * // Get one TeamScoreDistribution
     * const teamScoreDistribution = await prisma.teamScoreDistribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamScoreDistributionFindUniqueArgs>(args: SelectSubset<T, TeamScoreDistributionFindUniqueArgs<ExtArgs>>): Prisma__TeamScoreDistributionClient<$Result.GetResult<Prisma.$TeamScoreDistributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamScoreDistribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamScoreDistributionFindUniqueOrThrowArgs} args - Arguments to find a TeamScoreDistribution
     * @example
     * // Get one TeamScoreDistribution
     * const teamScoreDistribution = await prisma.teamScoreDistribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamScoreDistributionFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamScoreDistributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamScoreDistributionClient<$Result.GetResult<Prisma.$TeamScoreDistributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamScoreDistribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreDistributionFindFirstArgs} args - Arguments to find a TeamScoreDistribution
     * @example
     * // Get one TeamScoreDistribution
     * const teamScoreDistribution = await prisma.teamScoreDistribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamScoreDistributionFindFirstArgs>(args?: SelectSubset<T, TeamScoreDistributionFindFirstArgs<ExtArgs>>): Prisma__TeamScoreDistributionClient<$Result.GetResult<Prisma.$TeamScoreDistributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamScoreDistribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreDistributionFindFirstOrThrowArgs} args - Arguments to find a TeamScoreDistribution
     * @example
     * // Get one TeamScoreDistribution
     * const teamScoreDistribution = await prisma.teamScoreDistribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamScoreDistributionFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamScoreDistributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamScoreDistributionClient<$Result.GetResult<Prisma.$TeamScoreDistributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamScoreDistributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreDistributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamScoreDistributions
     * const teamScoreDistributions = await prisma.teamScoreDistribution.findMany()
     * 
     * // Get first 10 TeamScoreDistributions
     * const teamScoreDistributions = await prisma.teamScoreDistribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamScoreDistributionWithIdOnly = await prisma.teamScoreDistribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamScoreDistributionFindManyArgs>(args?: SelectSubset<T, TeamScoreDistributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamScoreDistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamScoreDistribution.
     * @param {TeamScoreDistributionCreateArgs} args - Arguments to create a TeamScoreDistribution.
     * @example
     * // Create one TeamScoreDistribution
     * const TeamScoreDistribution = await prisma.teamScoreDistribution.create({
     *   data: {
     *     // ... data to create a TeamScoreDistribution
     *   }
     * })
     * 
     */
    create<T extends TeamScoreDistributionCreateArgs>(args: SelectSubset<T, TeamScoreDistributionCreateArgs<ExtArgs>>): Prisma__TeamScoreDistributionClient<$Result.GetResult<Prisma.$TeamScoreDistributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamScoreDistributions.
     * @param {TeamScoreDistributionCreateManyArgs} args - Arguments to create many TeamScoreDistributions.
     * @example
     * // Create many TeamScoreDistributions
     * const teamScoreDistribution = await prisma.teamScoreDistribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamScoreDistributionCreateManyArgs>(args?: SelectSubset<T, TeamScoreDistributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamScoreDistributions and returns the data saved in the database.
     * @param {TeamScoreDistributionCreateManyAndReturnArgs} args - Arguments to create many TeamScoreDistributions.
     * @example
     * // Create many TeamScoreDistributions
     * const teamScoreDistribution = await prisma.teamScoreDistribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamScoreDistributions and only return the `id`
     * const teamScoreDistributionWithIdOnly = await prisma.teamScoreDistribution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamScoreDistributionCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamScoreDistributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamScoreDistributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamScoreDistribution.
     * @param {TeamScoreDistributionDeleteArgs} args - Arguments to delete one TeamScoreDistribution.
     * @example
     * // Delete one TeamScoreDistribution
     * const TeamScoreDistribution = await prisma.teamScoreDistribution.delete({
     *   where: {
     *     // ... filter to delete one TeamScoreDistribution
     *   }
     * })
     * 
     */
    delete<T extends TeamScoreDistributionDeleteArgs>(args: SelectSubset<T, TeamScoreDistributionDeleteArgs<ExtArgs>>): Prisma__TeamScoreDistributionClient<$Result.GetResult<Prisma.$TeamScoreDistributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamScoreDistribution.
     * @param {TeamScoreDistributionUpdateArgs} args - Arguments to update one TeamScoreDistribution.
     * @example
     * // Update one TeamScoreDistribution
     * const teamScoreDistribution = await prisma.teamScoreDistribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamScoreDistributionUpdateArgs>(args: SelectSubset<T, TeamScoreDistributionUpdateArgs<ExtArgs>>): Prisma__TeamScoreDistributionClient<$Result.GetResult<Prisma.$TeamScoreDistributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamScoreDistributions.
     * @param {TeamScoreDistributionDeleteManyArgs} args - Arguments to filter TeamScoreDistributions to delete.
     * @example
     * // Delete a few TeamScoreDistributions
     * const { count } = await prisma.teamScoreDistribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamScoreDistributionDeleteManyArgs>(args?: SelectSubset<T, TeamScoreDistributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamScoreDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreDistributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamScoreDistributions
     * const teamScoreDistribution = await prisma.teamScoreDistribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamScoreDistributionUpdateManyArgs>(args: SelectSubset<T, TeamScoreDistributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamScoreDistributions and returns the data updated in the database.
     * @param {TeamScoreDistributionUpdateManyAndReturnArgs} args - Arguments to update many TeamScoreDistributions.
     * @example
     * // Update many TeamScoreDistributions
     * const teamScoreDistribution = await prisma.teamScoreDistribution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamScoreDistributions and only return the `id`
     * const teamScoreDistributionWithIdOnly = await prisma.teamScoreDistribution.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamScoreDistributionUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamScoreDistributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamScoreDistributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamScoreDistribution.
     * @param {TeamScoreDistributionUpsertArgs} args - Arguments to update or create a TeamScoreDistribution.
     * @example
     * // Update or create a TeamScoreDistribution
     * const teamScoreDistribution = await prisma.teamScoreDistribution.upsert({
     *   create: {
     *     // ... data to create a TeamScoreDistribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamScoreDistribution we want to update
     *   }
     * })
     */
    upsert<T extends TeamScoreDistributionUpsertArgs>(args: SelectSubset<T, TeamScoreDistributionUpsertArgs<ExtArgs>>): Prisma__TeamScoreDistributionClient<$Result.GetResult<Prisma.$TeamScoreDistributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamScoreDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreDistributionCountArgs} args - Arguments to filter TeamScoreDistributions to count.
     * @example
     * // Count the number of TeamScoreDistributions
     * const count = await prisma.teamScoreDistribution.count({
     *   where: {
     *     // ... the filter for the TeamScoreDistributions we want to count
     *   }
     * })
    **/
    count<T extends TeamScoreDistributionCountArgs>(
      args?: Subset<T, TeamScoreDistributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamScoreDistributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamScoreDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreDistributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamScoreDistributionAggregateArgs>(args: Subset<T, TeamScoreDistributionAggregateArgs>): Prisma.PrismaPromise<GetTeamScoreDistributionAggregateType<T>>

    /**
     * Group by TeamScoreDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamScoreDistributionGroupByArgs} args - Group by arguments.
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
      T extends TeamScoreDistributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamScoreDistributionGroupByArgs['orderBy'] }
        : { orderBy?: TeamScoreDistributionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamScoreDistributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamScoreDistributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamScoreDistribution model
   */
  readonly fields: TeamScoreDistributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamScoreDistribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamScoreDistributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends teamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamDefaultArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamScoreDistribution model
   */
  interface TeamScoreDistributionFieldRefs {
    readonly id: FieldRef<"TeamScoreDistribution", 'Int'>
    readonly teamId: FieldRef<"TeamScoreDistribution", 'Int'>
    readonly scoreTotal: FieldRef<"TeamScoreDistribution", 'Float'>
    readonly percentage: FieldRef<"TeamScoreDistribution", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * TeamScoreDistribution findUnique
   */
  export type TeamScoreDistributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreDistribution
     */
    select?: TeamScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreDistribution
     */
    omit?: TeamScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreDistributionInclude<ExtArgs> | null
    /**
     * Filter, which TeamScoreDistribution to fetch.
     */
    where: TeamScoreDistributionWhereUniqueInput
  }

  /**
   * TeamScoreDistribution findUniqueOrThrow
   */
  export type TeamScoreDistributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreDistribution
     */
    select?: TeamScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreDistribution
     */
    omit?: TeamScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreDistributionInclude<ExtArgs> | null
    /**
     * Filter, which TeamScoreDistribution to fetch.
     */
    where: TeamScoreDistributionWhereUniqueInput
  }

  /**
   * TeamScoreDistribution findFirst
   */
  export type TeamScoreDistributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreDistribution
     */
    select?: TeamScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreDistribution
     */
    omit?: TeamScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreDistributionInclude<ExtArgs> | null
    /**
     * Filter, which TeamScoreDistribution to fetch.
     */
    where?: TeamScoreDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamScoreDistributions to fetch.
     */
    orderBy?: TeamScoreDistributionOrderByWithRelationInput | TeamScoreDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamScoreDistributions.
     */
    cursor?: TeamScoreDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamScoreDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamScoreDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamScoreDistributions.
     */
    distinct?: TeamScoreDistributionScalarFieldEnum | TeamScoreDistributionScalarFieldEnum[]
  }

  /**
   * TeamScoreDistribution findFirstOrThrow
   */
  export type TeamScoreDistributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreDistribution
     */
    select?: TeamScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreDistribution
     */
    omit?: TeamScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreDistributionInclude<ExtArgs> | null
    /**
     * Filter, which TeamScoreDistribution to fetch.
     */
    where?: TeamScoreDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamScoreDistributions to fetch.
     */
    orderBy?: TeamScoreDistributionOrderByWithRelationInput | TeamScoreDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamScoreDistributions.
     */
    cursor?: TeamScoreDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamScoreDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamScoreDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamScoreDistributions.
     */
    distinct?: TeamScoreDistributionScalarFieldEnum | TeamScoreDistributionScalarFieldEnum[]
  }

  /**
   * TeamScoreDistribution findMany
   */
  export type TeamScoreDistributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreDistribution
     */
    select?: TeamScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreDistribution
     */
    omit?: TeamScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreDistributionInclude<ExtArgs> | null
    /**
     * Filter, which TeamScoreDistributions to fetch.
     */
    where?: TeamScoreDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamScoreDistributions to fetch.
     */
    orderBy?: TeamScoreDistributionOrderByWithRelationInput | TeamScoreDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamScoreDistributions.
     */
    cursor?: TeamScoreDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamScoreDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamScoreDistributions.
     */
    skip?: number
    distinct?: TeamScoreDistributionScalarFieldEnum | TeamScoreDistributionScalarFieldEnum[]
  }

  /**
   * TeamScoreDistribution create
   */
  export type TeamScoreDistributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreDistribution
     */
    select?: TeamScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreDistribution
     */
    omit?: TeamScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreDistributionInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamScoreDistribution.
     */
    data: XOR<TeamScoreDistributionCreateInput, TeamScoreDistributionUncheckedCreateInput>
  }

  /**
   * TeamScoreDistribution createMany
   */
  export type TeamScoreDistributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamScoreDistributions.
     */
    data: TeamScoreDistributionCreateManyInput | TeamScoreDistributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamScoreDistribution createManyAndReturn
   */
  export type TeamScoreDistributionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreDistribution
     */
    select?: TeamScoreDistributionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreDistribution
     */
    omit?: TeamScoreDistributionOmit<ExtArgs> | null
    /**
     * The data used to create many TeamScoreDistributions.
     */
    data: TeamScoreDistributionCreateManyInput | TeamScoreDistributionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreDistributionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamScoreDistribution update
   */
  export type TeamScoreDistributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreDistribution
     */
    select?: TeamScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreDistribution
     */
    omit?: TeamScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreDistributionInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamScoreDistribution.
     */
    data: XOR<TeamScoreDistributionUpdateInput, TeamScoreDistributionUncheckedUpdateInput>
    /**
     * Choose, which TeamScoreDistribution to update.
     */
    where: TeamScoreDistributionWhereUniqueInput
  }

  /**
   * TeamScoreDistribution updateMany
   */
  export type TeamScoreDistributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamScoreDistributions.
     */
    data: XOR<TeamScoreDistributionUpdateManyMutationInput, TeamScoreDistributionUncheckedUpdateManyInput>
    /**
     * Filter which TeamScoreDistributions to update
     */
    where?: TeamScoreDistributionWhereInput
    /**
     * Limit how many TeamScoreDistributions to update.
     */
    limit?: number
  }

  /**
   * TeamScoreDistribution updateManyAndReturn
   */
  export type TeamScoreDistributionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreDistribution
     */
    select?: TeamScoreDistributionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreDistribution
     */
    omit?: TeamScoreDistributionOmit<ExtArgs> | null
    /**
     * The data used to update TeamScoreDistributions.
     */
    data: XOR<TeamScoreDistributionUpdateManyMutationInput, TeamScoreDistributionUncheckedUpdateManyInput>
    /**
     * Filter which TeamScoreDistributions to update
     */
    where?: TeamScoreDistributionWhereInput
    /**
     * Limit how many TeamScoreDistributions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreDistributionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamScoreDistribution upsert
   */
  export type TeamScoreDistributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreDistribution
     */
    select?: TeamScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreDistribution
     */
    omit?: TeamScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreDistributionInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamScoreDistribution to update in case it exists.
     */
    where: TeamScoreDistributionWhereUniqueInput
    /**
     * In case the TeamScoreDistribution found by the `where` argument doesn't exist, create a new TeamScoreDistribution with this data.
     */
    create: XOR<TeamScoreDistributionCreateInput, TeamScoreDistributionUncheckedCreateInput>
    /**
     * In case the TeamScoreDistribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamScoreDistributionUpdateInput, TeamScoreDistributionUncheckedUpdateInput>
  }

  /**
   * TeamScoreDistribution delete
   */
  export type TeamScoreDistributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreDistribution
     */
    select?: TeamScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreDistribution
     */
    omit?: TeamScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreDistributionInclude<ExtArgs> | null
    /**
     * Filter which TeamScoreDistribution to delete.
     */
    where: TeamScoreDistributionWhereUniqueInput
  }

  /**
   * TeamScoreDistribution deleteMany
   */
  export type TeamScoreDistributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamScoreDistributions to delete
     */
    where?: TeamScoreDistributionWhereInput
    /**
     * Limit how many TeamScoreDistributions to delete.
     */
    limit?: number
  }

  /**
   * TeamScoreDistribution without action
   */
  export type TeamScoreDistributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamScoreDistribution
     */
    select?: TeamScoreDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamScoreDistribution
     */
    omit?: TeamScoreDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamScoreDistributionInclude<ExtArgs> | null
  }


  /**
   * Model CategoryDistribution
   */

  export type AggregateCategoryDistribution = {
    _count: CategoryDistributionCountAggregateOutputType | null
    _avg: CategoryDistributionAvgAggregateOutputType | null
    _sum: CategoryDistributionSumAggregateOutputType | null
    _min: CategoryDistributionMinAggregateOutputType | null
    _max: CategoryDistributionMaxAggregateOutputType | null
  }

  export type CategoryDistributionAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
    totalScore: number | null
  }

  export type CategoryDistributionSumAggregateOutputType = {
    id: number | null
    teamId: number | null
    totalScore: number | null
  }

  export type CategoryDistributionMinAggregateOutputType = {
    id: number | null
    teamId: number | null
    category: string | null
    totalScore: number | null
  }

  export type CategoryDistributionMaxAggregateOutputType = {
    id: number | null
    teamId: number | null
    category: string | null
    totalScore: number | null
  }

  export type CategoryDistributionCountAggregateOutputType = {
    id: number
    teamId: number
    category: number
    totalScore: number
    _all: number
  }


  export type CategoryDistributionAvgAggregateInputType = {
    id?: true
    teamId?: true
    totalScore?: true
  }

  export type CategoryDistributionSumAggregateInputType = {
    id?: true
    teamId?: true
    totalScore?: true
  }

  export type CategoryDistributionMinAggregateInputType = {
    id?: true
    teamId?: true
    category?: true
    totalScore?: true
  }

  export type CategoryDistributionMaxAggregateInputType = {
    id?: true
    teamId?: true
    category?: true
    totalScore?: true
  }

  export type CategoryDistributionCountAggregateInputType = {
    id?: true
    teamId?: true
    category?: true
    totalScore?: true
    _all?: true
  }

  export type CategoryDistributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryDistribution to aggregate.
     */
    where?: CategoryDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryDistributions to fetch.
     */
    orderBy?: CategoryDistributionOrderByWithRelationInput | CategoryDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryDistributions
    **/
    _count?: true | CategoryDistributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryDistributionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryDistributionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryDistributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryDistributionMaxAggregateInputType
  }

  export type GetCategoryDistributionAggregateType<T extends CategoryDistributionAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryDistribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryDistribution[P]>
      : GetScalarType<T[P], AggregateCategoryDistribution[P]>
  }




  export type CategoryDistributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryDistributionWhereInput
    orderBy?: CategoryDistributionOrderByWithAggregationInput | CategoryDistributionOrderByWithAggregationInput[]
    by: CategoryDistributionScalarFieldEnum[] | CategoryDistributionScalarFieldEnum
    having?: CategoryDistributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryDistributionCountAggregateInputType | true
    _avg?: CategoryDistributionAvgAggregateInputType
    _sum?: CategoryDistributionSumAggregateInputType
    _min?: CategoryDistributionMinAggregateInputType
    _max?: CategoryDistributionMaxAggregateInputType
  }

  export type CategoryDistributionGroupByOutputType = {
    id: number
    teamId: number
    category: string
    totalScore: number
    _count: CategoryDistributionCountAggregateOutputType | null
    _avg: CategoryDistributionAvgAggregateOutputType | null
    _sum: CategoryDistributionSumAggregateOutputType | null
    _min: CategoryDistributionMinAggregateOutputType | null
    _max: CategoryDistributionMaxAggregateOutputType | null
  }

  type GetCategoryDistributionGroupByPayload<T extends CategoryDistributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryDistributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryDistributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryDistributionGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryDistributionGroupByOutputType[P]>
        }
      >
    >


  export type CategoryDistributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    category?: boolean
    totalScore?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryDistribution"]>

  export type CategoryDistributionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    category?: boolean
    totalScore?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryDistribution"]>

  export type CategoryDistributionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    category?: boolean
    totalScore?: boolean
    team?: boolean | teamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryDistribution"]>

  export type CategoryDistributionSelectScalar = {
    id?: boolean
    teamId?: boolean
    category?: boolean
    totalScore?: boolean
  }

  export type CategoryDistributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "category" | "totalScore", ExtArgs["result"]["categoryDistribution"]>
  export type CategoryDistributionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type CategoryDistributionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }
  export type CategoryDistributionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>
  }

  export type $CategoryDistributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryDistribution"
    objects: {
      team: Prisma.$teamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamId: number
      category: string
      totalScore: number
    }, ExtArgs["result"]["categoryDistribution"]>
    composites: {}
  }

  type CategoryDistributionGetPayload<S extends boolean | null | undefined | CategoryDistributionDefaultArgs> = $Result.GetResult<Prisma.$CategoryDistributionPayload, S>

  type CategoryDistributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryDistributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryDistributionCountAggregateInputType | true
    }

  export interface CategoryDistributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryDistribution'], meta: { name: 'CategoryDistribution' } }
    /**
     * Find zero or one CategoryDistribution that matches the filter.
     * @param {CategoryDistributionFindUniqueArgs} args - Arguments to find a CategoryDistribution
     * @example
     * // Get one CategoryDistribution
     * const categoryDistribution = await prisma.categoryDistribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryDistributionFindUniqueArgs>(args: SelectSubset<T, CategoryDistributionFindUniqueArgs<ExtArgs>>): Prisma__CategoryDistributionClient<$Result.GetResult<Prisma.$CategoryDistributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryDistribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryDistributionFindUniqueOrThrowArgs} args - Arguments to find a CategoryDistribution
     * @example
     * // Get one CategoryDistribution
     * const categoryDistribution = await prisma.categoryDistribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryDistributionFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryDistributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryDistributionClient<$Result.GetResult<Prisma.$CategoryDistributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryDistribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDistributionFindFirstArgs} args - Arguments to find a CategoryDistribution
     * @example
     * // Get one CategoryDistribution
     * const categoryDistribution = await prisma.categoryDistribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryDistributionFindFirstArgs>(args?: SelectSubset<T, CategoryDistributionFindFirstArgs<ExtArgs>>): Prisma__CategoryDistributionClient<$Result.GetResult<Prisma.$CategoryDistributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryDistribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDistributionFindFirstOrThrowArgs} args - Arguments to find a CategoryDistribution
     * @example
     * // Get one CategoryDistribution
     * const categoryDistribution = await prisma.categoryDistribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryDistributionFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryDistributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryDistributionClient<$Result.GetResult<Prisma.$CategoryDistributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryDistributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDistributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryDistributions
     * const categoryDistributions = await prisma.categoryDistribution.findMany()
     * 
     * // Get first 10 CategoryDistributions
     * const categoryDistributions = await prisma.categoryDistribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryDistributionWithIdOnly = await prisma.categoryDistribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryDistributionFindManyArgs>(args?: SelectSubset<T, CategoryDistributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryDistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryDistribution.
     * @param {CategoryDistributionCreateArgs} args - Arguments to create a CategoryDistribution.
     * @example
     * // Create one CategoryDistribution
     * const CategoryDistribution = await prisma.categoryDistribution.create({
     *   data: {
     *     // ... data to create a CategoryDistribution
     *   }
     * })
     * 
     */
    create<T extends CategoryDistributionCreateArgs>(args: SelectSubset<T, CategoryDistributionCreateArgs<ExtArgs>>): Prisma__CategoryDistributionClient<$Result.GetResult<Prisma.$CategoryDistributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryDistributions.
     * @param {CategoryDistributionCreateManyArgs} args - Arguments to create many CategoryDistributions.
     * @example
     * // Create many CategoryDistributions
     * const categoryDistribution = await prisma.categoryDistribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryDistributionCreateManyArgs>(args?: SelectSubset<T, CategoryDistributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoryDistributions and returns the data saved in the database.
     * @param {CategoryDistributionCreateManyAndReturnArgs} args - Arguments to create many CategoryDistributions.
     * @example
     * // Create many CategoryDistributions
     * const categoryDistribution = await prisma.categoryDistribution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoryDistributions and only return the `id`
     * const categoryDistributionWithIdOnly = await prisma.categoryDistribution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryDistributionCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryDistributionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryDistributionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CategoryDistribution.
     * @param {CategoryDistributionDeleteArgs} args - Arguments to delete one CategoryDistribution.
     * @example
     * // Delete one CategoryDistribution
     * const CategoryDistribution = await prisma.categoryDistribution.delete({
     *   where: {
     *     // ... filter to delete one CategoryDistribution
     *   }
     * })
     * 
     */
    delete<T extends CategoryDistributionDeleteArgs>(args: SelectSubset<T, CategoryDistributionDeleteArgs<ExtArgs>>): Prisma__CategoryDistributionClient<$Result.GetResult<Prisma.$CategoryDistributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryDistribution.
     * @param {CategoryDistributionUpdateArgs} args - Arguments to update one CategoryDistribution.
     * @example
     * // Update one CategoryDistribution
     * const categoryDistribution = await prisma.categoryDistribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryDistributionUpdateArgs>(args: SelectSubset<T, CategoryDistributionUpdateArgs<ExtArgs>>): Prisma__CategoryDistributionClient<$Result.GetResult<Prisma.$CategoryDistributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryDistributions.
     * @param {CategoryDistributionDeleteManyArgs} args - Arguments to filter CategoryDistributions to delete.
     * @example
     * // Delete a few CategoryDistributions
     * const { count } = await prisma.categoryDistribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDistributionDeleteManyArgs>(args?: SelectSubset<T, CategoryDistributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDistributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryDistributions
     * const categoryDistribution = await prisma.categoryDistribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryDistributionUpdateManyArgs>(args: SelectSubset<T, CategoryDistributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryDistributions and returns the data updated in the database.
     * @param {CategoryDistributionUpdateManyAndReturnArgs} args - Arguments to update many CategoryDistributions.
     * @example
     * // Update many CategoryDistributions
     * const categoryDistribution = await prisma.categoryDistribution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategoryDistributions and only return the `id`
     * const categoryDistributionWithIdOnly = await prisma.categoryDistribution.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryDistributionUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryDistributionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryDistributionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CategoryDistribution.
     * @param {CategoryDistributionUpsertArgs} args - Arguments to update or create a CategoryDistribution.
     * @example
     * // Update or create a CategoryDistribution
     * const categoryDistribution = await prisma.categoryDistribution.upsert({
     *   create: {
     *     // ... data to create a CategoryDistribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryDistribution we want to update
     *   }
     * })
     */
    upsert<T extends CategoryDistributionUpsertArgs>(args: SelectSubset<T, CategoryDistributionUpsertArgs<ExtArgs>>): Prisma__CategoryDistributionClient<$Result.GetResult<Prisma.$CategoryDistributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoryDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDistributionCountArgs} args - Arguments to filter CategoryDistributions to count.
     * @example
     * // Count the number of CategoryDistributions
     * const count = await prisma.categoryDistribution.count({
     *   where: {
     *     // ... the filter for the CategoryDistributions we want to count
     *   }
     * })
    **/
    count<T extends CategoryDistributionCountArgs>(
      args?: Subset<T, CategoryDistributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryDistributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDistributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryDistributionAggregateArgs>(args: Subset<T, CategoryDistributionAggregateArgs>): Prisma.PrismaPromise<GetCategoryDistributionAggregateType<T>>

    /**
     * Group by CategoryDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryDistributionGroupByArgs} args - Group by arguments.
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
      T extends CategoryDistributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryDistributionGroupByArgs['orderBy'] }
        : { orderBy?: CategoryDistributionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryDistributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryDistributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryDistribution model
   */
  readonly fields: CategoryDistributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryDistribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryDistributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends teamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamDefaultArgs<ExtArgs>>): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CategoryDistribution model
   */
  interface CategoryDistributionFieldRefs {
    readonly id: FieldRef<"CategoryDistribution", 'Int'>
    readonly teamId: FieldRef<"CategoryDistribution", 'Int'>
    readonly category: FieldRef<"CategoryDistribution", 'String'>
    readonly totalScore: FieldRef<"CategoryDistribution", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CategoryDistribution findUnique
   */
  export type CategoryDistributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDistribution
     */
    select?: CategoryDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDistribution
     */
    omit?: CategoryDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDistributionInclude<ExtArgs> | null
    /**
     * Filter, which CategoryDistribution to fetch.
     */
    where: CategoryDistributionWhereUniqueInput
  }

  /**
   * CategoryDistribution findUniqueOrThrow
   */
  export type CategoryDistributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDistribution
     */
    select?: CategoryDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDistribution
     */
    omit?: CategoryDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDistributionInclude<ExtArgs> | null
    /**
     * Filter, which CategoryDistribution to fetch.
     */
    where: CategoryDistributionWhereUniqueInput
  }

  /**
   * CategoryDistribution findFirst
   */
  export type CategoryDistributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDistribution
     */
    select?: CategoryDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDistribution
     */
    omit?: CategoryDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDistributionInclude<ExtArgs> | null
    /**
     * Filter, which CategoryDistribution to fetch.
     */
    where?: CategoryDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryDistributions to fetch.
     */
    orderBy?: CategoryDistributionOrderByWithRelationInput | CategoryDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryDistributions.
     */
    cursor?: CategoryDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryDistributions.
     */
    distinct?: CategoryDistributionScalarFieldEnum | CategoryDistributionScalarFieldEnum[]
  }

  /**
   * CategoryDistribution findFirstOrThrow
   */
  export type CategoryDistributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDistribution
     */
    select?: CategoryDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDistribution
     */
    omit?: CategoryDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDistributionInclude<ExtArgs> | null
    /**
     * Filter, which CategoryDistribution to fetch.
     */
    where?: CategoryDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryDistributions to fetch.
     */
    orderBy?: CategoryDistributionOrderByWithRelationInput | CategoryDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryDistributions.
     */
    cursor?: CategoryDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryDistributions.
     */
    distinct?: CategoryDistributionScalarFieldEnum | CategoryDistributionScalarFieldEnum[]
  }

  /**
   * CategoryDistribution findMany
   */
  export type CategoryDistributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDistribution
     */
    select?: CategoryDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDistribution
     */
    omit?: CategoryDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDistributionInclude<ExtArgs> | null
    /**
     * Filter, which CategoryDistributions to fetch.
     */
    where?: CategoryDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryDistributions to fetch.
     */
    orderBy?: CategoryDistributionOrderByWithRelationInput | CategoryDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryDistributions.
     */
    cursor?: CategoryDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryDistributions.
     */
    skip?: number
    distinct?: CategoryDistributionScalarFieldEnum | CategoryDistributionScalarFieldEnum[]
  }

  /**
   * CategoryDistribution create
   */
  export type CategoryDistributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDistribution
     */
    select?: CategoryDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDistribution
     */
    omit?: CategoryDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDistributionInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryDistribution.
     */
    data: XOR<CategoryDistributionCreateInput, CategoryDistributionUncheckedCreateInput>
  }

  /**
   * CategoryDistribution createMany
   */
  export type CategoryDistributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryDistributions.
     */
    data: CategoryDistributionCreateManyInput | CategoryDistributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryDistribution createManyAndReturn
   */
  export type CategoryDistributionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDistribution
     */
    select?: CategoryDistributionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDistribution
     */
    omit?: CategoryDistributionOmit<ExtArgs> | null
    /**
     * The data used to create many CategoryDistributions.
     */
    data: CategoryDistributionCreateManyInput | CategoryDistributionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDistributionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoryDistribution update
   */
  export type CategoryDistributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDistribution
     */
    select?: CategoryDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDistribution
     */
    omit?: CategoryDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDistributionInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryDistribution.
     */
    data: XOR<CategoryDistributionUpdateInput, CategoryDistributionUncheckedUpdateInput>
    /**
     * Choose, which CategoryDistribution to update.
     */
    where: CategoryDistributionWhereUniqueInput
  }

  /**
   * CategoryDistribution updateMany
   */
  export type CategoryDistributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryDistributions.
     */
    data: XOR<CategoryDistributionUpdateManyMutationInput, CategoryDistributionUncheckedUpdateManyInput>
    /**
     * Filter which CategoryDistributions to update
     */
    where?: CategoryDistributionWhereInput
    /**
     * Limit how many CategoryDistributions to update.
     */
    limit?: number
  }

  /**
   * CategoryDistribution updateManyAndReturn
   */
  export type CategoryDistributionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDistribution
     */
    select?: CategoryDistributionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDistribution
     */
    omit?: CategoryDistributionOmit<ExtArgs> | null
    /**
     * The data used to update CategoryDistributions.
     */
    data: XOR<CategoryDistributionUpdateManyMutationInput, CategoryDistributionUncheckedUpdateManyInput>
    /**
     * Filter which CategoryDistributions to update
     */
    where?: CategoryDistributionWhereInput
    /**
     * Limit how many CategoryDistributions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDistributionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoryDistribution upsert
   */
  export type CategoryDistributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDistribution
     */
    select?: CategoryDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDistribution
     */
    omit?: CategoryDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDistributionInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryDistribution to update in case it exists.
     */
    where: CategoryDistributionWhereUniqueInput
    /**
     * In case the CategoryDistribution found by the `where` argument doesn't exist, create a new CategoryDistribution with this data.
     */
    create: XOR<CategoryDistributionCreateInput, CategoryDistributionUncheckedCreateInput>
    /**
     * In case the CategoryDistribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryDistributionUpdateInput, CategoryDistributionUncheckedUpdateInput>
  }

  /**
   * CategoryDistribution delete
   */
  export type CategoryDistributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDistribution
     */
    select?: CategoryDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDistribution
     */
    omit?: CategoryDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDistributionInclude<ExtArgs> | null
    /**
     * Filter which CategoryDistribution to delete.
     */
    where: CategoryDistributionWhereUniqueInput
  }

  /**
   * CategoryDistribution deleteMany
   */
  export type CategoryDistributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryDistributions to delete
     */
    where?: CategoryDistributionWhereInput
    /**
     * Limit how many CategoryDistributions to delete.
     */
    limit?: number
  }

  /**
   * CategoryDistribution without action
   */
  export type CategoryDistributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryDistribution
     */
    select?: CategoryDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryDistribution
     */
    omit?: CategoryDistributionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryDistributionInclude<ExtArgs> | null
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


  export const ScoreChangeHistoryScalarFieldEnum: {
    id: 'id',
    activity_id: 'activity_id',
    old_base_score: 'old_base_score',
    old_multiplier: 'old_multiplier',
    new_base_score: 'new_base_score',
    new_multiplier: 'new_multiplier',
    change_reason: 'change_reason',
    changed_at: 'changed_at',
    createdAt: 'createdAt'
  };

  export type ScoreChangeHistoryScalarFieldEnum = (typeof ScoreChangeHistoryScalarFieldEnum)[keyof typeof ScoreChangeHistoryScalarFieldEnum]


  export const RankingTeamScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    teamName: 'teamName',
    scoreTotal: 'scoreTotal',
    rankingPosition: 'rankingPosition',
    rankingVariation: 'rankingVariation',
    scoreDiff: 'scoreDiff',
    generatedAt: 'generatedAt'
  };

  export type RankingTeamScalarFieldEnum = (typeof RankingTeamScalarFieldEnum)[keyof typeof RankingTeamScalarFieldEnum]


  export const RankingParticipantScalarFieldEnum: {
    id: 'id',
    participantId: 'participantId',
    participantName: 'participantName',
    teamId: 'teamId',
    scoreTotal: 'scoreTotal',
    rankingPosition: 'rankingPosition',
    rankingVariation: 'rankingVariation',
    scoreDiff: 'scoreDiff',
    generatedAt: 'generatedAt'
  };

  export type RankingParticipantScalarFieldEnum = (typeof RankingParticipantScalarFieldEnum)[keyof typeof RankingParticipantScalarFieldEnum]


  export const TeamScoreHistoryScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    score: 'score',
    date: 'date'
  };

  export type TeamScoreHistoryScalarFieldEnum = (typeof TeamScoreHistoryScalarFieldEnum)[keyof typeof TeamScoreHistoryScalarFieldEnum]


  export const ParticipantScoreHistoryScalarFieldEnum: {
    id: 'id',
    participantId: 'participantId',
    score: 'score',
    date: 'date'
  };

  export type ParticipantScoreHistoryScalarFieldEnum = (typeof ParticipantScoreHistoryScalarFieldEnum)[keyof typeof ParticipantScoreHistoryScalarFieldEnum]


  export const TeamScoreDistributionScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    scoreTotal: 'scoreTotal',
    percentage: 'percentage'
  };

  export type TeamScoreDistributionScalarFieldEnum = (typeof TeamScoreDistributionScalarFieldEnum)[keyof typeof TeamScoreDistributionScalarFieldEnum]


  export const CategoryDistributionScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    category: 'category',
    totalScore: 'totalScore'
  };

  export type CategoryDistributionScalarFieldEnum = (typeof CategoryDistributionScalarFieldEnum)[keyof typeof CategoryDistributionScalarFieldEnum]


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
    rankings?: RankingTeamListRelationFilter
    participantRankings?: RankingParticipantListRelationFilter
    scoreHistory?: TeamScoreHistoryListRelationFilter
    scoreDistribution?: TeamScoreDistributionListRelationFilter
    categoryDistribution?: CategoryDistributionListRelationFilter
  }

  export type teamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    participants?: participantOrderByRelationAggregateInput
    activities?: activityOrderByRelationAggregateInput
    rankings?: RankingTeamOrderByRelationAggregateInput
    participantRankings?: RankingParticipantOrderByRelationAggregateInput
    scoreHistory?: TeamScoreHistoryOrderByRelationAggregateInput
    scoreDistribution?: TeamScoreDistributionOrderByRelationAggregateInput
    categoryDistribution?: CategoryDistributionOrderByRelationAggregateInput
  }

  export type teamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: teamWhereInput | teamWhereInput[]
    OR?: teamWhereInput[]
    NOT?: teamWhereInput | teamWhereInput[]
    participants?: ParticipantListRelationFilter
    activities?: ActivityListRelationFilter
    rankings?: RankingTeamListRelationFilter
    participantRankings?: RankingParticipantListRelationFilter
    scoreHistory?: TeamScoreHistoryListRelationFilter
    scoreDistribution?: TeamScoreDistributionListRelationFilter
    categoryDistribution?: CategoryDistributionListRelationFilter
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
    scoreChanges?: ScoreChangeHistoryListRelationFilter
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
    scoreChanges?: ScoreChangeHistoryOrderByRelationAggregateInput
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
    scoreChanges?: ScoreChangeHistoryListRelationFilter
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

  export type ScoreChangeHistoryWhereInput = {
    AND?: ScoreChangeHistoryWhereInput | ScoreChangeHistoryWhereInput[]
    OR?: ScoreChangeHistoryWhereInput[]
    NOT?: ScoreChangeHistoryWhereInput | ScoreChangeHistoryWhereInput[]
    id?: StringFilter<"ScoreChangeHistory"> | string
    activity_id?: StringFilter<"ScoreChangeHistory"> | string
    old_base_score?: FloatFilter<"ScoreChangeHistory"> | number
    old_multiplier?: FloatFilter<"ScoreChangeHistory"> | number
    new_base_score?: FloatFilter<"ScoreChangeHistory"> | number
    new_multiplier?: FloatFilter<"ScoreChangeHistory"> | number
    change_reason?: StringFilter<"ScoreChangeHistory"> | string
    changed_at?: DateTimeFilter<"ScoreChangeHistory"> | Date | string
    createdAt?: DateTimeFilter<"ScoreChangeHistory"> | Date | string
    activity?: XOR<ActivityScalarRelationFilter, activityWhereInput>
  }

  export type ScoreChangeHistoryOrderByWithRelationInput = {
    id?: SortOrder
    activity_id?: SortOrder
    old_base_score?: SortOrder
    old_multiplier?: SortOrder
    new_base_score?: SortOrder
    new_multiplier?: SortOrder
    change_reason?: SortOrder
    changed_at?: SortOrder
    createdAt?: SortOrder
    activity?: activityOrderByWithRelationInput
  }

  export type ScoreChangeHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScoreChangeHistoryWhereInput | ScoreChangeHistoryWhereInput[]
    OR?: ScoreChangeHistoryWhereInput[]
    NOT?: ScoreChangeHistoryWhereInput | ScoreChangeHistoryWhereInput[]
    activity_id?: StringFilter<"ScoreChangeHistory"> | string
    old_base_score?: FloatFilter<"ScoreChangeHistory"> | number
    old_multiplier?: FloatFilter<"ScoreChangeHistory"> | number
    new_base_score?: FloatFilter<"ScoreChangeHistory"> | number
    new_multiplier?: FloatFilter<"ScoreChangeHistory"> | number
    change_reason?: StringFilter<"ScoreChangeHistory"> | string
    changed_at?: DateTimeFilter<"ScoreChangeHistory"> | Date | string
    createdAt?: DateTimeFilter<"ScoreChangeHistory"> | Date | string
    activity?: XOR<ActivityScalarRelationFilter, activityWhereInput>
  }, "id">

  export type ScoreChangeHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    activity_id?: SortOrder
    old_base_score?: SortOrder
    old_multiplier?: SortOrder
    new_base_score?: SortOrder
    new_multiplier?: SortOrder
    change_reason?: SortOrder
    changed_at?: SortOrder
    createdAt?: SortOrder
    _count?: ScoreChangeHistoryCountOrderByAggregateInput
    _avg?: ScoreChangeHistoryAvgOrderByAggregateInput
    _max?: ScoreChangeHistoryMaxOrderByAggregateInput
    _min?: ScoreChangeHistoryMinOrderByAggregateInput
    _sum?: ScoreChangeHistorySumOrderByAggregateInput
  }

  export type ScoreChangeHistoryScalarWhereWithAggregatesInput = {
    AND?: ScoreChangeHistoryScalarWhereWithAggregatesInput | ScoreChangeHistoryScalarWhereWithAggregatesInput[]
    OR?: ScoreChangeHistoryScalarWhereWithAggregatesInput[]
    NOT?: ScoreChangeHistoryScalarWhereWithAggregatesInput | ScoreChangeHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScoreChangeHistory"> | string
    activity_id?: StringWithAggregatesFilter<"ScoreChangeHistory"> | string
    old_base_score?: FloatWithAggregatesFilter<"ScoreChangeHistory"> | number
    old_multiplier?: FloatWithAggregatesFilter<"ScoreChangeHistory"> | number
    new_base_score?: FloatWithAggregatesFilter<"ScoreChangeHistory"> | number
    new_multiplier?: FloatWithAggregatesFilter<"ScoreChangeHistory"> | number
    change_reason?: StringWithAggregatesFilter<"ScoreChangeHistory"> | string
    changed_at?: DateTimeWithAggregatesFilter<"ScoreChangeHistory"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ScoreChangeHistory"> | Date | string
  }

  export type RankingTeamWhereInput = {
    AND?: RankingTeamWhereInput | RankingTeamWhereInput[]
    OR?: RankingTeamWhereInput[]
    NOT?: RankingTeamWhereInput | RankingTeamWhereInput[]
    id?: IntFilter<"RankingTeam"> | number
    teamId?: IntFilter<"RankingTeam"> | number
    teamName?: StringFilter<"RankingTeam"> | string
    scoreTotal?: FloatFilter<"RankingTeam"> | number
    rankingPosition?: IntFilter<"RankingTeam"> | number
    rankingVariation?: IntNullableFilter<"RankingTeam"> | number | null
    scoreDiff?: FloatNullableFilter<"RankingTeam"> | number | null
    generatedAt?: DateTimeFilter<"RankingTeam"> | Date | string
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
  }

  export type RankingTeamOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    scoreTotal?: SortOrder
    rankingPosition?: SortOrder
    rankingVariation?: SortOrderInput | SortOrder
    scoreDiff?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    team?: teamOrderByWithRelationInput
  }

  export type RankingTeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RankingTeamWhereInput | RankingTeamWhereInput[]
    OR?: RankingTeamWhereInput[]
    NOT?: RankingTeamWhereInput | RankingTeamWhereInput[]
    teamId?: IntFilter<"RankingTeam"> | number
    teamName?: StringFilter<"RankingTeam"> | string
    scoreTotal?: FloatFilter<"RankingTeam"> | number
    rankingPosition?: IntFilter<"RankingTeam"> | number
    rankingVariation?: IntNullableFilter<"RankingTeam"> | number | null
    scoreDiff?: FloatNullableFilter<"RankingTeam"> | number | null
    generatedAt?: DateTimeFilter<"RankingTeam"> | Date | string
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
  }, "id">

  export type RankingTeamOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    scoreTotal?: SortOrder
    rankingPosition?: SortOrder
    rankingVariation?: SortOrderInput | SortOrder
    scoreDiff?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    _count?: RankingTeamCountOrderByAggregateInput
    _avg?: RankingTeamAvgOrderByAggregateInput
    _max?: RankingTeamMaxOrderByAggregateInput
    _min?: RankingTeamMinOrderByAggregateInput
    _sum?: RankingTeamSumOrderByAggregateInput
  }

  export type RankingTeamScalarWhereWithAggregatesInput = {
    AND?: RankingTeamScalarWhereWithAggregatesInput | RankingTeamScalarWhereWithAggregatesInput[]
    OR?: RankingTeamScalarWhereWithAggregatesInput[]
    NOT?: RankingTeamScalarWhereWithAggregatesInput | RankingTeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RankingTeam"> | number
    teamId?: IntWithAggregatesFilter<"RankingTeam"> | number
    teamName?: StringWithAggregatesFilter<"RankingTeam"> | string
    scoreTotal?: FloatWithAggregatesFilter<"RankingTeam"> | number
    rankingPosition?: IntWithAggregatesFilter<"RankingTeam"> | number
    rankingVariation?: IntNullableWithAggregatesFilter<"RankingTeam"> | number | null
    scoreDiff?: FloatNullableWithAggregatesFilter<"RankingTeam"> | number | null
    generatedAt?: DateTimeWithAggregatesFilter<"RankingTeam"> | Date | string
  }

  export type RankingParticipantWhereInput = {
    AND?: RankingParticipantWhereInput | RankingParticipantWhereInput[]
    OR?: RankingParticipantWhereInput[]
    NOT?: RankingParticipantWhereInput | RankingParticipantWhereInput[]
    id?: IntFilter<"RankingParticipant"> | number
    participantId?: StringFilter<"RankingParticipant"> | string
    participantName?: StringFilter<"RankingParticipant"> | string
    teamId?: IntFilter<"RankingParticipant"> | number
    scoreTotal?: FloatFilter<"RankingParticipant"> | number
    rankingPosition?: IntFilter<"RankingParticipant"> | number
    rankingVariation?: IntNullableFilter<"RankingParticipant"> | number | null
    scoreDiff?: FloatNullableFilter<"RankingParticipant"> | number | null
    generatedAt?: DateTimeFilter<"RankingParticipant"> | Date | string
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
  }

  export type RankingParticipantOrderByWithRelationInput = {
    id?: SortOrder
    participantId?: SortOrder
    participantName?: SortOrder
    teamId?: SortOrder
    scoreTotal?: SortOrder
    rankingPosition?: SortOrder
    rankingVariation?: SortOrderInput | SortOrder
    scoreDiff?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    team?: teamOrderByWithRelationInput
  }

  export type RankingParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RankingParticipantWhereInput | RankingParticipantWhereInput[]
    OR?: RankingParticipantWhereInput[]
    NOT?: RankingParticipantWhereInput | RankingParticipantWhereInput[]
    participantId?: StringFilter<"RankingParticipant"> | string
    participantName?: StringFilter<"RankingParticipant"> | string
    teamId?: IntFilter<"RankingParticipant"> | number
    scoreTotal?: FloatFilter<"RankingParticipant"> | number
    rankingPosition?: IntFilter<"RankingParticipant"> | number
    rankingVariation?: IntNullableFilter<"RankingParticipant"> | number | null
    scoreDiff?: FloatNullableFilter<"RankingParticipant"> | number | null
    generatedAt?: DateTimeFilter<"RankingParticipant"> | Date | string
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
  }, "id">

  export type RankingParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    participantId?: SortOrder
    participantName?: SortOrder
    teamId?: SortOrder
    scoreTotal?: SortOrder
    rankingPosition?: SortOrder
    rankingVariation?: SortOrderInput | SortOrder
    scoreDiff?: SortOrderInput | SortOrder
    generatedAt?: SortOrder
    _count?: RankingParticipantCountOrderByAggregateInput
    _avg?: RankingParticipantAvgOrderByAggregateInput
    _max?: RankingParticipantMaxOrderByAggregateInput
    _min?: RankingParticipantMinOrderByAggregateInput
    _sum?: RankingParticipantSumOrderByAggregateInput
  }

  export type RankingParticipantScalarWhereWithAggregatesInput = {
    AND?: RankingParticipantScalarWhereWithAggregatesInput | RankingParticipantScalarWhereWithAggregatesInput[]
    OR?: RankingParticipantScalarWhereWithAggregatesInput[]
    NOT?: RankingParticipantScalarWhereWithAggregatesInput | RankingParticipantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RankingParticipant"> | number
    participantId?: StringWithAggregatesFilter<"RankingParticipant"> | string
    participantName?: StringWithAggregatesFilter<"RankingParticipant"> | string
    teamId?: IntWithAggregatesFilter<"RankingParticipant"> | number
    scoreTotal?: FloatWithAggregatesFilter<"RankingParticipant"> | number
    rankingPosition?: IntWithAggregatesFilter<"RankingParticipant"> | number
    rankingVariation?: IntNullableWithAggregatesFilter<"RankingParticipant"> | number | null
    scoreDiff?: FloatNullableWithAggregatesFilter<"RankingParticipant"> | number | null
    generatedAt?: DateTimeWithAggregatesFilter<"RankingParticipant"> | Date | string
  }

  export type TeamScoreHistoryWhereInput = {
    AND?: TeamScoreHistoryWhereInput | TeamScoreHistoryWhereInput[]
    OR?: TeamScoreHistoryWhereInput[]
    NOT?: TeamScoreHistoryWhereInput | TeamScoreHistoryWhereInput[]
    id?: IntFilter<"TeamScoreHistory"> | number
    teamId?: IntFilter<"TeamScoreHistory"> | number
    score?: FloatFilter<"TeamScoreHistory"> | number
    date?: DateTimeFilter<"TeamScoreHistory"> | Date | string
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
  }

  export type TeamScoreHistoryOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    score?: SortOrder
    date?: SortOrder
    team?: teamOrderByWithRelationInput
  }

  export type TeamScoreHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamScoreHistoryWhereInput | TeamScoreHistoryWhereInput[]
    OR?: TeamScoreHistoryWhereInput[]
    NOT?: TeamScoreHistoryWhereInput | TeamScoreHistoryWhereInput[]
    teamId?: IntFilter<"TeamScoreHistory"> | number
    score?: FloatFilter<"TeamScoreHistory"> | number
    date?: DateTimeFilter<"TeamScoreHistory"> | Date | string
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
  }, "id">

  export type TeamScoreHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    score?: SortOrder
    date?: SortOrder
    _count?: TeamScoreHistoryCountOrderByAggregateInput
    _avg?: TeamScoreHistoryAvgOrderByAggregateInput
    _max?: TeamScoreHistoryMaxOrderByAggregateInput
    _min?: TeamScoreHistoryMinOrderByAggregateInput
    _sum?: TeamScoreHistorySumOrderByAggregateInput
  }

  export type TeamScoreHistoryScalarWhereWithAggregatesInput = {
    AND?: TeamScoreHistoryScalarWhereWithAggregatesInput | TeamScoreHistoryScalarWhereWithAggregatesInput[]
    OR?: TeamScoreHistoryScalarWhereWithAggregatesInput[]
    NOT?: TeamScoreHistoryScalarWhereWithAggregatesInput | TeamScoreHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeamScoreHistory"> | number
    teamId?: IntWithAggregatesFilter<"TeamScoreHistory"> | number
    score?: FloatWithAggregatesFilter<"TeamScoreHistory"> | number
    date?: DateTimeWithAggregatesFilter<"TeamScoreHistory"> | Date | string
  }

  export type ParticipantScoreHistoryWhereInput = {
    AND?: ParticipantScoreHistoryWhereInput | ParticipantScoreHistoryWhereInput[]
    OR?: ParticipantScoreHistoryWhereInput[]
    NOT?: ParticipantScoreHistoryWhereInput | ParticipantScoreHistoryWhereInput[]
    id?: IntFilter<"ParticipantScoreHistory"> | number
    participantId?: StringFilter<"ParticipantScoreHistory"> | string
    score?: FloatFilter<"ParticipantScoreHistory"> | number
    date?: DateTimeFilter<"ParticipantScoreHistory"> | Date | string
  }

  export type ParticipantScoreHistoryOrderByWithRelationInput = {
    id?: SortOrder
    participantId?: SortOrder
    score?: SortOrder
    date?: SortOrder
  }

  export type ParticipantScoreHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParticipantScoreHistoryWhereInput | ParticipantScoreHistoryWhereInput[]
    OR?: ParticipantScoreHistoryWhereInput[]
    NOT?: ParticipantScoreHistoryWhereInput | ParticipantScoreHistoryWhereInput[]
    participantId?: StringFilter<"ParticipantScoreHistory"> | string
    score?: FloatFilter<"ParticipantScoreHistory"> | number
    date?: DateTimeFilter<"ParticipantScoreHistory"> | Date | string
  }, "id">

  export type ParticipantScoreHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    participantId?: SortOrder
    score?: SortOrder
    date?: SortOrder
    _count?: ParticipantScoreHistoryCountOrderByAggregateInput
    _avg?: ParticipantScoreHistoryAvgOrderByAggregateInput
    _max?: ParticipantScoreHistoryMaxOrderByAggregateInput
    _min?: ParticipantScoreHistoryMinOrderByAggregateInput
    _sum?: ParticipantScoreHistorySumOrderByAggregateInput
  }

  export type ParticipantScoreHistoryScalarWhereWithAggregatesInput = {
    AND?: ParticipantScoreHistoryScalarWhereWithAggregatesInput | ParticipantScoreHistoryScalarWhereWithAggregatesInput[]
    OR?: ParticipantScoreHistoryScalarWhereWithAggregatesInput[]
    NOT?: ParticipantScoreHistoryScalarWhereWithAggregatesInput | ParticipantScoreHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParticipantScoreHistory"> | number
    participantId?: StringWithAggregatesFilter<"ParticipantScoreHistory"> | string
    score?: FloatWithAggregatesFilter<"ParticipantScoreHistory"> | number
    date?: DateTimeWithAggregatesFilter<"ParticipantScoreHistory"> | Date | string
  }

  export type TeamScoreDistributionWhereInput = {
    AND?: TeamScoreDistributionWhereInput | TeamScoreDistributionWhereInput[]
    OR?: TeamScoreDistributionWhereInput[]
    NOT?: TeamScoreDistributionWhereInput | TeamScoreDistributionWhereInput[]
    id?: IntFilter<"TeamScoreDistribution"> | number
    teamId?: IntFilter<"TeamScoreDistribution"> | number
    scoreTotal?: FloatFilter<"TeamScoreDistribution"> | number
    percentage?: FloatFilter<"TeamScoreDistribution"> | number
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
  }

  export type TeamScoreDistributionOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    scoreTotal?: SortOrder
    percentage?: SortOrder
    team?: teamOrderByWithRelationInput
  }

  export type TeamScoreDistributionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeamScoreDistributionWhereInput | TeamScoreDistributionWhereInput[]
    OR?: TeamScoreDistributionWhereInput[]
    NOT?: TeamScoreDistributionWhereInput | TeamScoreDistributionWhereInput[]
    teamId?: IntFilter<"TeamScoreDistribution"> | number
    scoreTotal?: FloatFilter<"TeamScoreDistribution"> | number
    percentage?: FloatFilter<"TeamScoreDistribution"> | number
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
  }, "id">

  export type TeamScoreDistributionOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    scoreTotal?: SortOrder
    percentage?: SortOrder
    _count?: TeamScoreDistributionCountOrderByAggregateInput
    _avg?: TeamScoreDistributionAvgOrderByAggregateInput
    _max?: TeamScoreDistributionMaxOrderByAggregateInput
    _min?: TeamScoreDistributionMinOrderByAggregateInput
    _sum?: TeamScoreDistributionSumOrderByAggregateInput
  }

  export type TeamScoreDistributionScalarWhereWithAggregatesInput = {
    AND?: TeamScoreDistributionScalarWhereWithAggregatesInput | TeamScoreDistributionScalarWhereWithAggregatesInput[]
    OR?: TeamScoreDistributionScalarWhereWithAggregatesInput[]
    NOT?: TeamScoreDistributionScalarWhereWithAggregatesInput | TeamScoreDistributionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeamScoreDistribution"> | number
    teamId?: IntWithAggregatesFilter<"TeamScoreDistribution"> | number
    scoreTotal?: FloatWithAggregatesFilter<"TeamScoreDistribution"> | number
    percentage?: FloatWithAggregatesFilter<"TeamScoreDistribution"> | number
  }

  export type CategoryDistributionWhereInput = {
    AND?: CategoryDistributionWhereInput | CategoryDistributionWhereInput[]
    OR?: CategoryDistributionWhereInput[]
    NOT?: CategoryDistributionWhereInput | CategoryDistributionWhereInput[]
    id?: IntFilter<"CategoryDistribution"> | number
    teamId?: IntFilter<"CategoryDistribution"> | number
    category?: StringFilter<"CategoryDistribution"> | string
    totalScore?: FloatFilter<"CategoryDistribution"> | number
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
  }

  export type CategoryDistributionOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    category?: SortOrder
    totalScore?: SortOrder
    team?: teamOrderByWithRelationInput
  }

  export type CategoryDistributionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryDistributionWhereInput | CategoryDistributionWhereInput[]
    OR?: CategoryDistributionWhereInput[]
    NOT?: CategoryDistributionWhereInput | CategoryDistributionWhereInput[]
    teamId?: IntFilter<"CategoryDistribution"> | number
    category?: StringFilter<"CategoryDistribution"> | string
    totalScore?: FloatFilter<"CategoryDistribution"> | number
    team?: XOR<TeamScalarRelationFilter, teamWhereInput>
  }, "id">

  export type CategoryDistributionOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    category?: SortOrder
    totalScore?: SortOrder
    _count?: CategoryDistributionCountOrderByAggregateInput
    _avg?: CategoryDistributionAvgOrderByAggregateInput
    _max?: CategoryDistributionMaxOrderByAggregateInput
    _min?: CategoryDistributionMinOrderByAggregateInput
    _sum?: CategoryDistributionSumOrderByAggregateInput
  }

  export type CategoryDistributionScalarWhereWithAggregatesInput = {
    AND?: CategoryDistributionScalarWhereWithAggregatesInput | CategoryDistributionScalarWhereWithAggregatesInput[]
    OR?: CategoryDistributionScalarWhereWithAggregatesInput[]
    NOT?: CategoryDistributionScalarWhereWithAggregatesInput | CategoryDistributionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CategoryDistribution"> | number
    teamId?: IntWithAggregatesFilter<"CategoryDistribution"> | number
    category?: StringWithAggregatesFilter<"CategoryDistribution"> | string
    totalScore?: FloatWithAggregatesFilter<"CategoryDistribution"> | number
  }

  export type teamCreateInput = {
    name: string
    participants?: participantCreateNestedManyWithoutTeamInput
    activities?: activityCreateNestedManyWithoutTeam_relationInput
    rankings?: RankingTeamCreateNestedManyWithoutTeamInput
    participantRankings?: RankingParticipantCreateNestedManyWithoutTeamInput
    scoreHistory?: TeamScoreHistoryCreateNestedManyWithoutTeamInput
    scoreDistribution?: TeamScoreDistributionCreateNestedManyWithoutTeamInput
    categoryDistribution?: CategoryDistributionCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateInput = {
    id?: number
    name: string
    participants?: participantUncheckedCreateNestedManyWithoutTeamInput
    activities?: activityUncheckedCreateNestedManyWithoutTeam_relationInput
    rankings?: RankingTeamUncheckedCreateNestedManyWithoutTeamInput
    participantRankings?: RankingParticipantUncheckedCreateNestedManyWithoutTeamInput
    scoreHistory?: TeamScoreHistoryUncheckedCreateNestedManyWithoutTeamInput
    scoreDistribution?: TeamScoreDistributionUncheckedCreateNestedManyWithoutTeamInput
    categoryDistribution?: CategoryDistributionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUpdateManyWithoutTeamNestedInput
    activities?: activityUpdateManyWithoutTeam_relationNestedInput
    rankings?: RankingTeamUpdateManyWithoutTeamNestedInput
    participantRankings?: RankingParticipantUpdateManyWithoutTeamNestedInput
    scoreHistory?: TeamScoreHistoryUpdateManyWithoutTeamNestedInput
    scoreDistribution?: TeamScoreDistributionUpdateManyWithoutTeamNestedInput
    categoryDistribution?: CategoryDistributionUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUncheckedUpdateManyWithoutTeamNestedInput
    activities?: activityUncheckedUpdateManyWithoutTeam_relationNestedInput
    rankings?: RankingTeamUncheckedUpdateManyWithoutTeamNestedInput
    participantRankings?: RankingParticipantUncheckedUpdateManyWithoutTeamNestedInput
    scoreHistory?: TeamScoreHistoryUncheckedUpdateManyWithoutTeamNestedInput
    scoreDistribution?: TeamScoreDistributionUncheckedUpdateManyWithoutTeamNestedInput
    categoryDistribution?: CategoryDistributionUncheckedUpdateManyWithoutTeamNestedInput
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
    scoreChanges?: ScoreChangeHistoryCreateNestedManyWithoutActivityInput
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
    scoreChanges?: ScoreChangeHistoryUncheckedCreateNestedManyWithoutActivityInput
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
    scoreChanges?: ScoreChangeHistoryUpdateManyWithoutActivityNestedInput
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
    scoreChanges?: ScoreChangeHistoryUncheckedUpdateManyWithoutActivityNestedInput
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

  export type ScoreChangeHistoryCreateInput = {
    id?: string
    old_base_score: number
    old_multiplier: number
    new_base_score: number
    new_multiplier: number
    change_reason: string
    changed_at: Date | string
    createdAt?: Date | string
    activity: activityCreateNestedOneWithoutScoreChangesInput
  }

  export type ScoreChangeHistoryUncheckedCreateInput = {
    id?: string
    activity_id: string
    old_base_score: number
    old_multiplier: number
    new_base_score: number
    new_multiplier: number
    change_reason: string
    changed_at: Date | string
    createdAt?: Date | string
  }

  export type ScoreChangeHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    old_base_score?: FloatFieldUpdateOperationsInput | number
    old_multiplier?: FloatFieldUpdateOperationsInput | number
    new_base_score?: FloatFieldUpdateOperationsInput | number
    new_multiplier?: FloatFieldUpdateOperationsInput | number
    change_reason?: StringFieldUpdateOperationsInput | string
    changed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activity?: activityUpdateOneRequiredWithoutScoreChangesNestedInput
  }

  export type ScoreChangeHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity_id?: StringFieldUpdateOperationsInput | string
    old_base_score?: FloatFieldUpdateOperationsInput | number
    old_multiplier?: FloatFieldUpdateOperationsInput | number
    new_base_score?: FloatFieldUpdateOperationsInput | number
    new_multiplier?: FloatFieldUpdateOperationsInput | number
    change_reason?: StringFieldUpdateOperationsInput | string
    changed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreChangeHistoryCreateManyInput = {
    id?: string
    activity_id: string
    old_base_score: number
    old_multiplier: number
    new_base_score: number
    new_multiplier: number
    change_reason: string
    changed_at: Date | string
    createdAt?: Date | string
  }

  export type ScoreChangeHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    old_base_score?: FloatFieldUpdateOperationsInput | number
    old_multiplier?: FloatFieldUpdateOperationsInput | number
    new_base_score?: FloatFieldUpdateOperationsInput | number
    new_multiplier?: FloatFieldUpdateOperationsInput | number
    change_reason?: StringFieldUpdateOperationsInput | string
    changed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreChangeHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    activity_id?: StringFieldUpdateOperationsInput | string
    old_base_score?: FloatFieldUpdateOperationsInput | number
    old_multiplier?: FloatFieldUpdateOperationsInput | number
    new_base_score?: FloatFieldUpdateOperationsInput | number
    new_multiplier?: FloatFieldUpdateOperationsInput | number
    change_reason?: StringFieldUpdateOperationsInput | string
    changed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingTeamCreateInput = {
    teamName: string
    scoreTotal: number
    rankingPosition: number
    rankingVariation?: number | null
    scoreDiff?: number | null
    generatedAt?: Date | string
    team: teamCreateNestedOneWithoutRankingsInput
  }

  export type RankingTeamUncheckedCreateInput = {
    id?: number
    teamId: number
    teamName: string
    scoreTotal: number
    rankingPosition: number
    rankingVariation?: number | null
    scoreDiff?: number | null
    generatedAt?: Date | string
  }

  export type RankingTeamUpdateInput = {
    teamName?: StringFieldUpdateOperationsInput | string
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    rankingPosition?: IntFieldUpdateOperationsInput | number
    rankingVariation?: NullableIntFieldUpdateOperationsInput | number | null
    scoreDiff?: NullableFloatFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: teamUpdateOneRequiredWithoutRankingsNestedInput
  }

  export type RankingTeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    rankingPosition?: IntFieldUpdateOperationsInput | number
    rankingVariation?: NullableIntFieldUpdateOperationsInput | number | null
    scoreDiff?: NullableFloatFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingTeamCreateManyInput = {
    id?: number
    teamId: number
    teamName: string
    scoreTotal: number
    rankingPosition: number
    rankingVariation?: number | null
    scoreDiff?: number | null
    generatedAt?: Date | string
  }

  export type RankingTeamUpdateManyMutationInput = {
    teamName?: StringFieldUpdateOperationsInput | string
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    rankingPosition?: IntFieldUpdateOperationsInput | number
    rankingVariation?: NullableIntFieldUpdateOperationsInput | number | null
    scoreDiff?: NullableFloatFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingTeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    rankingPosition?: IntFieldUpdateOperationsInput | number
    rankingVariation?: NullableIntFieldUpdateOperationsInput | number | null
    scoreDiff?: NullableFloatFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingParticipantCreateInput = {
    participantId: string
    participantName: string
    scoreTotal: number
    rankingPosition: number
    rankingVariation?: number | null
    scoreDiff?: number | null
    generatedAt?: Date | string
    team: teamCreateNestedOneWithoutParticipantRankingsInput
  }

  export type RankingParticipantUncheckedCreateInput = {
    id?: number
    participantId: string
    participantName: string
    teamId: number
    scoreTotal: number
    rankingPosition: number
    rankingVariation?: number | null
    scoreDiff?: number | null
    generatedAt?: Date | string
  }

  export type RankingParticipantUpdateInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    participantName?: StringFieldUpdateOperationsInput | string
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    rankingPosition?: IntFieldUpdateOperationsInput | number
    rankingVariation?: NullableIntFieldUpdateOperationsInput | number | null
    scoreDiff?: NullableFloatFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: teamUpdateOneRequiredWithoutParticipantRankingsNestedInput
  }

  export type RankingParticipantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: StringFieldUpdateOperationsInput | string
    participantName?: StringFieldUpdateOperationsInput | string
    teamId?: IntFieldUpdateOperationsInput | number
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    rankingPosition?: IntFieldUpdateOperationsInput | number
    rankingVariation?: NullableIntFieldUpdateOperationsInput | number | null
    scoreDiff?: NullableFloatFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingParticipantCreateManyInput = {
    id?: number
    participantId: string
    participantName: string
    teamId: number
    scoreTotal: number
    rankingPosition: number
    rankingVariation?: number | null
    scoreDiff?: number | null
    generatedAt?: Date | string
  }

  export type RankingParticipantUpdateManyMutationInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    participantName?: StringFieldUpdateOperationsInput | string
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    rankingPosition?: IntFieldUpdateOperationsInput | number
    rankingVariation?: NullableIntFieldUpdateOperationsInput | number | null
    scoreDiff?: NullableFloatFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingParticipantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: StringFieldUpdateOperationsInput | string
    participantName?: StringFieldUpdateOperationsInput | string
    teamId?: IntFieldUpdateOperationsInput | number
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    rankingPosition?: IntFieldUpdateOperationsInput | number
    rankingVariation?: NullableIntFieldUpdateOperationsInput | number | null
    scoreDiff?: NullableFloatFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamScoreHistoryCreateInput = {
    score: number
    date?: Date | string
    team: teamCreateNestedOneWithoutScoreHistoryInput
  }

  export type TeamScoreHistoryUncheckedCreateInput = {
    id?: number
    teamId: number
    score: number
    date?: Date | string
  }

  export type TeamScoreHistoryUpdateInput = {
    score?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: teamUpdateOneRequiredWithoutScoreHistoryNestedInput
  }

  export type TeamScoreHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamScoreHistoryCreateManyInput = {
    id?: number
    teamId: number
    score: number
    date?: Date | string
  }

  export type TeamScoreHistoryUpdateManyMutationInput = {
    score?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamScoreHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantScoreHistoryCreateInput = {
    participantId: string
    score: number
    date?: Date | string
  }

  export type ParticipantScoreHistoryUncheckedCreateInput = {
    id?: number
    participantId: string
    score: number
    date?: Date | string
  }

  export type ParticipantScoreHistoryUpdateInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantScoreHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantScoreHistoryCreateManyInput = {
    id?: number
    participantId: string
    score: number
    date?: Date | string
  }

  export type ParticipantScoreHistoryUpdateManyMutationInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantScoreHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: StringFieldUpdateOperationsInput | string
    score?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamScoreDistributionCreateInput = {
    scoreTotal: number
    percentage: number
    team: teamCreateNestedOneWithoutScoreDistributionInput
  }

  export type TeamScoreDistributionUncheckedCreateInput = {
    id?: number
    teamId: number
    scoreTotal: number
    percentage: number
  }

  export type TeamScoreDistributionUpdateInput = {
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
    team?: teamUpdateOneRequiredWithoutScoreDistributionNestedInput
  }

  export type TeamScoreDistributionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
  }

  export type TeamScoreDistributionCreateManyInput = {
    id?: number
    teamId: number
    scoreTotal: number
    percentage: number
  }

  export type TeamScoreDistributionUpdateManyMutationInput = {
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
  }

  export type TeamScoreDistributionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
  }

  export type CategoryDistributionCreateInput = {
    category: string
    totalScore: number
    team: teamCreateNestedOneWithoutCategoryDistributionInput
  }

  export type CategoryDistributionUncheckedCreateInput = {
    id?: number
    teamId: number
    category: string
    totalScore: number
  }

  export type CategoryDistributionUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    totalScore?: FloatFieldUpdateOperationsInput | number
    team?: teamUpdateOneRequiredWithoutCategoryDistributionNestedInput
  }

  export type CategoryDistributionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    totalScore?: FloatFieldUpdateOperationsInput | number
  }

  export type CategoryDistributionCreateManyInput = {
    id?: number
    teamId: number
    category: string
    totalScore: number
  }

  export type CategoryDistributionUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    totalScore?: FloatFieldUpdateOperationsInput | number
  }

  export type CategoryDistributionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    totalScore?: FloatFieldUpdateOperationsInput | number
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

  export type RankingTeamListRelationFilter = {
    every?: RankingTeamWhereInput
    some?: RankingTeamWhereInput
    none?: RankingTeamWhereInput
  }

  export type RankingParticipantListRelationFilter = {
    every?: RankingParticipantWhereInput
    some?: RankingParticipantWhereInput
    none?: RankingParticipantWhereInput
  }

  export type TeamScoreHistoryListRelationFilter = {
    every?: TeamScoreHistoryWhereInput
    some?: TeamScoreHistoryWhereInput
    none?: TeamScoreHistoryWhereInput
  }

  export type TeamScoreDistributionListRelationFilter = {
    every?: TeamScoreDistributionWhereInput
    some?: TeamScoreDistributionWhereInput
    none?: TeamScoreDistributionWhereInput
  }

  export type CategoryDistributionListRelationFilter = {
    every?: CategoryDistributionWhereInput
    some?: CategoryDistributionWhereInput
    none?: CategoryDistributionWhereInput
  }

  export type participantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type activityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RankingTeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RankingParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamScoreHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamScoreDistributionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryDistributionOrderByRelationAggregateInput = {
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

  export type ScoreChangeHistoryListRelationFilter = {
    every?: ScoreChangeHistoryWhereInput
    some?: ScoreChangeHistoryWhereInput
    none?: ScoreChangeHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ScoreChangeHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type ActivityScalarRelationFilter = {
    is?: activityWhereInput
    isNot?: activityWhereInput
  }

  export type ScoreChangeHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    old_base_score?: SortOrder
    old_multiplier?: SortOrder
    new_base_score?: SortOrder
    new_multiplier?: SortOrder
    change_reason?: SortOrder
    changed_at?: SortOrder
    createdAt?: SortOrder
  }

  export type ScoreChangeHistoryAvgOrderByAggregateInput = {
    old_base_score?: SortOrder
    old_multiplier?: SortOrder
    new_base_score?: SortOrder
    new_multiplier?: SortOrder
  }

  export type ScoreChangeHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    old_base_score?: SortOrder
    old_multiplier?: SortOrder
    new_base_score?: SortOrder
    new_multiplier?: SortOrder
    change_reason?: SortOrder
    changed_at?: SortOrder
    createdAt?: SortOrder
  }

  export type ScoreChangeHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    activity_id?: SortOrder
    old_base_score?: SortOrder
    old_multiplier?: SortOrder
    new_base_score?: SortOrder
    new_multiplier?: SortOrder
    change_reason?: SortOrder
    changed_at?: SortOrder
    createdAt?: SortOrder
  }

  export type ScoreChangeHistorySumOrderByAggregateInput = {
    old_base_score?: SortOrder
    old_multiplier?: SortOrder
    new_base_score?: SortOrder
    new_multiplier?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RankingTeamCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    scoreTotal?: SortOrder
    rankingPosition?: SortOrder
    rankingVariation?: SortOrder
    scoreDiff?: SortOrder
    generatedAt?: SortOrder
  }

  export type RankingTeamAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    scoreTotal?: SortOrder
    rankingPosition?: SortOrder
    rankingVariation?: SortOrder
    scoreDiff?: SortOrder
  }

  export type RankingTeamMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    scoreTotal?: SortOrder
    rankingPosition?: SortOrder
    rankingVariation?: SortOrder
    scoreDiff?: SortOrder
    generatedAt?: SortOrder
  }

  export type RankingTeamMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    scoreTotal?: SortOrder
    rankingPosition?: SortOrder
    rankingVariation?: SortOrder
    scoreDiff?: SortOrder
    generatedAt?: SortOrder
  }

  export type RankingTeamSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    scoreTotal?: SortOrder
    rankingPosition?: SortOrder
    rankingVariation?: SortOrder
    scoreDiff?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type RankingParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    participantName?: SortOrder
    teamId?: SortOrder
    scoreTotal?: SortOrder
    rankingPosition?: SortOrder
    rankingVariation?: SortOrder
    scoreDiff?: SortOrder
    generatedAt?: SortOrder
  }

  export type RankingParticipantAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    scoreTotal?: SortOrder
    rankingPosition?: SortOrder
    rankingVariation?: SortOrder
    scoreDiff?: SortOrder
  }

  export type RankingParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    participantName?: SortOrder
    teamId?: SortOrder
    scoreTotal?: SortOrder
    rankingPosition?: SortOrder
    rankingVariation?: SortOrder
    scoreDiff?: SortOrder
    generatedAt?: SortOrder
  }

  export type RankingParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    participantName?: SortOrder
    teamId?: SortOrder
    scoreTotal?: SortOrder
    rankingPosition?: SortOrder
    rankingVariation?: SortOrder
    scoreDiff?: SortOrder
    generatedAt?: SortOrder
  }

  export type RankingParticipantSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    scoreTotal?: SortOrder
    rankingPosition?: SortOrder
    rankingVariation?: SortOrder
    scoreDiff?: SortOrder
  }

  export type TeamScoreHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    score?: SortOrder
    date?: SortOrder
  }

  export type TeamScoreHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    score?: SortOrder
  }

  export type TeamScoreHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    score?: SortOrder
    date?: SortOrder
  }

  export type TeamScoreHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    score?: SortOrder
    date?: SortOrder
  }

  export type TeamScoreHistorySumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    score?: SortOrder
  }

  export type ParticipantScoreHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    score?: SortOrder
    date?: SortOrder
  }

  export type ParticipantScoreHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type ParticipantScoreHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    score?: SortOrder
    date?: SortOrder
  }

  export type ParticipantScoreHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    participantId?: SortOrder
    score?: SortOrder
    date?: SortOrder
  }

  export type ParticipantScoreHistorySumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
  }

  export type TeamScoreDistributionCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    scoreTotal?: SortOrder
    percentage?: SortOrder
  }

  export type TeamScoreDistributionAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    scoreTotal?: SortOrder
    percentage?: SortOrder
  }

  export type TeamScoreDistributionMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    scoreTotal?: SortOrder
    percentage?: SortOrder
  }

  export type TeamScoreDistributionMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    scoreTotal?: SortOrder
    percentage?: SortOrder
  }

  export type TeamScoreDistributionSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    scoreTotal?: SortOrder
    percentage?: SortOrder
  }

  export type CategoryDistributionCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    category?: SortOrder
    totalScore?: SortOrder
  }

  export type CategoryDistributionAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    totalScore?: SortOrder
  }

  export type CategoryDistributionMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    category?: SortOrder
    totalScore?: SortOrder
  }

  export type CategoryDistributionMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    category?: SortOrder
    totalScore?: SortOrder
  }

  export type CategoryDistributionSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    totalScore?: SortOrder
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

  export type RankingTeamCreateNestedManyWithoutTeamInput = {
    create?: XOR<RankingTeamCreateWithoutTeamInput, RankingTeamUncheckedCreateWithoutTeamInput> | RankingTeamCreateWithoutTeamInput[] | RankingTeamUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: RankingTeamCreateOrConnectWithoutTeamInput | RankingTeamCreateOrConnectWithoutTeamInput[]
    createMany?: RankingTeamCreateManyTeamInputEnvelope
    connect?: RankingTeamWhereUniqueInput | RankingTeamWhereUniqueInput[]
  }

  export type RankingParticipantCreateNestedManyWithoutTeamInput = {
    create?: XOR<RankingParticipantCreateWithoutTeamInput, RankingParticipantUncheckedCreateWithoutTeamInput> | RankingParticipantCreateWithoutTeamInput[] | RankingParticipantUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: RankingParticipantCreateOrConnectWithoutTeamInput | RankingParticipantCreateOrConnectWithoutTeamInput[]
    createMany?: RankingParticipantCreateManyTeamInputEnvelope
    connect?: RankingParticipantWhereUniqueInput | RankingParticipantWhereUniqueInput[]
  }

  export type TeamScoreHistoryCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamScoreHistoryCreateWithoutTeamInput, TeamScoreHistoryUncheckedCreateWithoutTeamInput> | TeamScoreHistoryCreateWithoutTeamInput[] | TeamScoreHistoryUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamScoreHistoryCreateOrConnectWithoutTeamInput | TeamScoreHistoryCreateOrConnectWithoutTeamInput[]
    createMany?: TeamScoreHistoryCreateManyTeamInputEnvelope
    connect?: TeamScoreHistoryWhereUniqueInput | TeamScoreHistoryWhereUniqueInput[]
  }

  export type TeamScoreDistributionCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamScoreDistributionCreateWithoutTeamInput, TeamScoreDistributionUncheckedCreateWithoutTeamInput> | TeamScoreDistributionCreateWithoutTeamInput[] | TeamScoreDistributionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamScoreDistributionCreateOrConnectWithoutTeamInput | TeamScoreDistributionCreateOrConnectWithoutTeamInput[]
    createMany?: TeamScoreDistributionCreateManyTeamInputEnvelope
    connect?: TeamScoreDistributionWhereUniqueInput | TeamScoreDistributionWhereUniqueInput[]
  }

  export type CategoryDistributionCreateNestedManyWithoutTeamInput = {
    create?: XOR<CategoryDistributionCreateWithoutTeamInput, CategoryDistributionUncheckedCreateWithoutTeamInput> | CategoryDistributionCreateWithoutTeamInput[] | CategoryDistributionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: CategoryDistributionCreateOrConnectWithoutTeamInput | CategoryDistributionCreateOrConnectWithoutTeamInput[]
    createMany?: CategoryDistributionCreateManyTeamInputEnvelope
    connect?: CategoryDistributionWhereUniqueInput | CategoryDistributionWhereUniqueInput[]
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

  export type RankingTeamUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<RankingTeamCreateWithoutTeamInput, RankingTeamUncheckedCreateWithoutTeamInput> | RankingTeamCreateWithoutTeamInput[] | RankingTeamUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: RankingTeamCreateOrConnectWithoutTeamInput | RankingTeamCreateOrConnectWithoutTeamInput[]
    createMany?: RankingTeamCreateManyTeamInputEnvelope
    connect?: RankingTeamWhereUniqueInput | RankingTeamWhereUniqueInput[]
  }

  export type RankingParticipantUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<RankingParticipantCreateWithoutTeamInput, RankingParticipantUncheckedCreateWithoutTeamInput> | RankingParticipantCreateWithoutTeamInput[] | RankingParticipantUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: RankingParticipantCreateOrConnectWithoutTeamInput | RankingParticipantCreateOrConnectWithoutTeamInput[]
    createMany?: RankingParticipantCreateManyTeamInputEnvelope
    connect?: RankingParticipantWhereUniqueInput | RankingParticipantWhereUniqueInput[]
  }

  export type TeamScoreHistoryUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamScoreHistoryCreateWithoutTeamInput, TeamScoreHistoryUncheckedCreateWithoutTeamInput> | TeamScoreHistoryCreateWithoutTeamInput[] | TeamScoreHistoryUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamScoreHistoryCreateOrConnectWithoutTeamInput | TeamScoreHistoryCreateOrConnectWithoutTeamInput[]
    createMany?: TeamScoreHistoryCreateManyTeamInputEnvelope
    connect?: TeamScoreHistoryWhereUniqueInput | TeamScoreHistoryWhereUniqueInput[]
  }

  export type TeamScoreDistributionUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamScoreDistributionCreateWithoutTeamInput, TeamScoreDistributionUncheckedCreateWithoutTeamInput> | TeamScoreDistributionCreateWithoutTeamInput[] | TeamScoreDistributionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamScoreDistributionCreateOrConnectWithoutTeamInput | TeamScoreDistributionCreateOrConnectWithoutTeamInput[]
    createMany?: TeamScoreDistributionCreateManyTeamInputEnvelope
    connect?: TeamScoreDistributionWhereUniqueInput | TeamScoreDistributionWhereUniqueInput[]
  }

  export type CategoryDistributionUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<CategoryDistributionCreateWithoutTeamInput, CategoryDistributionUncheckedCreateWithoutTeamInput> | CategoryDistributionCreateWithoutTeamInput[] | CategoryDistributionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: CategoryDistributionCreateOrConnectWithoutTeamInput | CategoryDistributionCreateOrConnectWithoutTeamInput[]
    createMany?: CategoryDistributionCreateManyTeamInputEnvelope
    connect?: CategoryDistributionWhereUniqueInput | CategoryDistributionWhereUniqueInput[]
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

  export type RankingTeamUpdateManyWithoutTeamNestedInput = {
    create?: XOR<RankingTeamCreateWithoutTeamInput, RankingTeamUncheckedCreateWithoutTeamInput> | RankingTeamCreateWithoutTeamInput[] | RankingTeamUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: RankingTeamCreateOrConnectWithoutTeamInput | RankingTeamCreateOrConnectWithoutTeamInput[]
    upsert?: RankingTeamUpsertWithWhereUniqueWithoutTeamInput | RankingTeamUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: RankingTeamCreateManyTeamInputEnvelope
    set?: RankingTeamWhereUniqueInput | RankingTeamWhereUniqueInput[]
    disconnect?: RankingTeamWhereUniqueInput | RankingTeamWhereUniqueInput[]
    delete?: RankingTeamWhereUniqueInput | RankingTeamWhereUniqueInput[]
    connect?: RankingTeamWhereUniqueInput | RankingTeamWhereUniqueInput[]
    update?: RankingTeamUpdateWithWhereUniqueWithoutTeamInput | RankingTeamUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: RankingTeamUpdateManyWithWhereWithoutTeamInput | RankingTeamUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: RankingTeamScalarWhereInput | RankingTeamScalarWhereInput[]
  }

  export type RankingParticipantUpdateManyWithoutTeamNestedInput = {
    create?: XOR<RankingParticipantCreateWithoutTeamInput, RankingParticipantUncheckedCreateWithoutTeamInput> | RankingParticipantCreateWithoutTeamInput[] | RankingParticipantUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: RankingParticipantCreateOrConnectWithoutTeamInput | RankingParticipantCreateOrConnectWithoutTeamInput[]
    upsert?: RankingParticipantUpsertWithWhereUniqueWithoutTeamInput | RankingParticipantUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: RankingParticipantCreateManyTeamInputEnvelope
    set?: RankingParticipantWhereUniqueInput | RankingParticipantWhereUniqueInput[]
    disconnect?: RankingParticipantWhereUniqueInput | RankingParticipantWhereUniqueInput[]
    delete?: RankingParticipantWhereUniqueInput | RankingParticipantWhereUniqueInput[]
    connect?: RankingParticipantWhereUniqueInput | RankingParticipantWhereUniqueInput[]
    update?: RankingParticipantUpdateWithWhereUniqueWithoutTeamInput | RankingParticipantUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: RankingParticipantUpdateManyWithWhereWithoutTeamInput | RankingParticipantUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: RankingParticipantScalarWhereInput | RankingParticipantScalarWhereInput[]
  }

  export type TeamScoreHistoryUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamScoreHistoryCreateWithoutTeamInput, TeamScoreHistoryUncheckedCreateWithoutTeamInput> | TeamScoreHistoryCreateWithoutTeamInput[] | TeamScoreHistoryUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamScoreHistoryCreateOrConnectWithoutTeamInput | TeamScoreHistoryCreateOrConnectWithoutTeamInput[]
    upsert?: TeamScoreHistoryUpsertWithWhereUniqueWithoutTeamInput | TeamScoreHistoryUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamScoreHistoryCreateManyTeamInputEnvelope
    set?: TeamScoreHistoryWhereUniqueInput | TeamScoreHistoryWhereUniqueInput[]
    disconnect?: TeamScoreHistoryWhereUniqueInput | TeamScoreHistoryWhereUniqueInput[]
    delete?: TeamScoreHistoryWhereUniqueInput | TeamScoreHistoryWhereUniqueInput[]
    connect?: TeamScoreHistoryWhereUniqueInput | TeamScoreHistoryWhereUniqueInput[]
    update?: TeamScoreHistoryUpdateWithWhereUniqueWithoutTeamInput | TeamScoreHistoryUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamScoreHistoryUpdateManyWithWhereWithoutTeamInput | TeamScoreHistoryUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamScoreHistoryScalarWhereInput | TeamScoreHistoryScalarWhereInput[]
  }

  export type TeamScoreDistributionUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamScoreDistributionCreateWithoutTeamInput, TeamScoreDistributionUncheckedCreateWithoutTeamInput> | TeamScoreDistributionCreateWithoutTeamInput[] | TeamScoreDistributionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamScoreDistributionCreateOrConnectWithoutTeamInput | TeamScoreDistributionCreateOrConnectWithoutTeamInput[]
    upsert?: TeamScoreDistributionUpsertWithWhereUniqueWithoutTeamInput | TeamScoreDistributionUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamScoreDistributionCreateManyTeamInputEnvelope
    set?: TeamScoreDistributionWhereUniqueInput | TeamScoreDistributionWhereUniqueInput[]
    disconnect?: TeamScoreDistributionWhereUniqueInput | TeamScoreDistributionWhereUniqueInput[]
    delete?: TeamScoreDistributionWhereUniqueInput | TeamScoreDistributionWhereUniqueInput[]
    connect?: TeamScoreDistributionWhereUniqueInput | TeamScoreDistributionWhereUniqueInput[]
    update?: TeamScoreDistributionUpdateWithWhereUniqueWithoutTeamInput | TeamScoreDistributionUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamScoreDistributionUpdateManyWithWhereWithoutTeamInput | TeamScoreDistributionUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamScoreDistributionScalarWhereInput | TeamScoreDistributionScalarWhereInput[]
  }

  export type CategoryDistributionUpdateManyWithoutTeamNestedInput = {
    create?: XOR<CategoryDistributionCreateWithoutTeamInput, CategoryDistributionUncheckedCreateWithoutTeamInput> | CategoryDistributionCreateWithoutTeamInput[] | CategoryDistributionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: CategoryDistributionCreateOrConnectWithoutTeamInput | CategoryDistributionCreateOrConnectWithoutTeamInput[]
    upsert?: CategoryDistributionUpsertWithWhereUniqueWithoutTeamInput | CategoryDistributionUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: CategoryDistributionCreateManyTeamInputEnvelope
    set?: CategoryDistributionWhereUniqueInput | CategoryDistributionWhereUniqueInput[]
    disconnect?: CategoryDistributionWhereUniqueInput | CategoryDistributionWhereUniqueInput[]
    delete?: CategoryDistributionWhereUniqueInput | CategoryDistributionWhereUniqueInput[]
    connect?: CategoryDistributionWhereUniqueInput | CategoryDistributionWhereUniqueInput[]
    update?: CategoryDistributionUpdateWithWhereUniqueWithoutTeamInput | CategoryDistributionUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: CategoryDistributionUpdateManyWithWhereWithoutTeamInput | CategoryDistributionUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: CategoryDistributionScalarWhereInput | CategoryDistributionScalarWhereInput[]
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

  export type RankingTeamUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<RankingTeamCreateWithoutTeamInput, RankingTeamUncheckedCreateWithoutTeamInput> | RankingTeamCreateWithoutTeamInput[] | RankingTeamUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: RankingTeamCreateOrConnectWithoutTeamInput | RankingTeamCreateOrConnectWithoutTeamInput[]
    upsert?: RankingTeamUpsertWithWhereUniqueWithoutTeamInput | RankingTeamUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: RankingTeamCreateManyTeamInputEnvelope
    set?: RankingTeamWhereUniqueInput | RankingTeamWhereUniqueInput[]
    disconnect?: RankingTeamWhereUniqueInput | RankingTeamWhereUniqueInput[]
    delete?: RankingTeamWhereUniqueInput | RankingTeamWhereUniqueInput[]
    connect?: RankingTeamWhereUniqueInput | RankingTeamWhereUniqueInput[]
    update?: RankingTeamUpdateWithWhereUniqueWithoutTeamInput | RankingTeamUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: RankingTeamUpdateManyWithWhereWithoutTeamInput | RankingTeamUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: RankingTeamScalarWhereInput | RankingTeamScalarWhereInput[]
  }

  export type RankingParticipantUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<RankingParticipantCreateWithoutTeamInput, RankingParticipantUncheckedCreateWithoutTeamInput> | RankingParticipantCreateWithoutTeamInput[] | RankingParticipantUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: RankingParticipantCreateOrConnectWithoutTeamInput | RankingParticipantCreateOrConnectWithoutTeamInput[]
    upsert?: RankingParticipantUpsertWithWhereUniqueWithoutTeamInput | RankingParticipantUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: RankingParticipantCreateManyTeamInputEnvelope
    set?: RankingParticipantWhereUniqueInput | RankingParticipantWhereUniqueInput[]
    disconnect?: RankingParticipantWhereUniqueInput | RankingParticipantWhereUniqueInput[]
    delete?: RankingParticipantWhereUniqueInput | RankingParticipantWhereUniqueInput[]
    connect?: RankingParticipantWhereUniqueInput | RankingParticipantWhereUniqueInput[]
    update?: RankingParticipantUpdateWithWhereUniqueWithoutTeamInput | RankingParticipantUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: RankingParticipantUpdateManyWithWhereWithoutTeamInput | RankingParticipantUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: RankingParticipantScalarWhereInput | RankingParticipantScalarWhereInput[]
  }

  export type TeamScoreHistoryUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamScoreHistoryCreateWithoutTeamInput, TeamScoreHistoryUncheckedCreateWithoutTeamInput> | TeamScoreHistoryCreateWithoutTeamInput[] | TeamScoreHistoryUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamScoreHistoryCreateOrConnectWithoutTeamInput | TeamScoreHistoryCreateOrConnectWithoutTeamInput[]
    upsert?: TeamScoreHistoryUpsertWithWhereUniqueWithoutTeamInput | TeamScoreHistoryUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamScoreHistoryCreateManyTeamInputEnvelope
    set?: TeamScoreHistoryWhereUniqueInput | TeamScoreHistoryWhereUniqueInput[]
    disconnect?: TeamScoreHistoryWhereUniqueInput | TeamScoreHistoryWhereUniqueInput[]
    delete?: TeamScoreHistoryWhereUniqueInput | TeamScoreHistoryWhereUniqueInput[]
    connect?: TeamScoreHistoryWhereUniqueInput | TeamScoreHistoryWhereUniqueInput[]
    update?: TeamScoreHistoryUpdateWithWhereUniqueWithoutTeamInput | TeamScoreHistoryUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamScoreHistoryUpdateManyWithWhereWithoutTeamInput | TeamScoreHistoryUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamScoreHistoryScalarWhereInput | TeamScoreHistoryScalarWhereInput[]
  }

  export type TeamScoreDistributionUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamScoreDistributionCreateWithoutTeamInput, TeamScoreDistributionUncheckedCreateWithoutTeamInput> | TeamScoreDistributionCreateWithoutTeamInput[] | TeamScoreDistributionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamScoreDistributionCreateOrConnectWithoutTeamInput | TeamScoreDistributionCreateOrConnectWithoutTeamInput[]
    upsert?: TeamScoreDistributionUpsertWithWhereUniqueWithoutTeamInput | TeamScoreDistributionUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamScoreDistributionCreateManyTeamInputEnvelope
    set?: TeamScoreDistributionWhereUniqueInput | TeamScoreDistributionWhereUniqueInput[]
    disconnect?: TeamScoreDistributionWhereUniqueInput | TeamScoreDistributionWhereUniqueInput[]
    delete?: TeamScoreDistributionWhereUniqueInput | TeamScoreDistributionWhereUniqueInput[]
    connect?: TeamScoreDistributionWhereUniqueInput | TeamScoreDistributionWhereUniqueInput[]
    update?: TeamScoreDistributionUpdateWithWhereUniqueWithoutTeamInput | TeamScoreDistributionUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamScoreDistributionUpdateManyWithWhereWithoutTeamInput | TeamScoreDistributionUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamScoreDistributionScalarWhereInput | TeamScoreDistributionScalarWhereInput[]
  }

  export type CategoryDistributionUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<CategoryDistributionCreateWithoutTeamInput, CategoryDistributionUncheckedCreateWithoutTeamInput> | CategoryDistributionCreateWithoutTeamInput[] | CategoryDistributionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: CategoryDistributionCreateOrConnectWithoutTeamInput | CategoryDistributionCreateOrConnectWithoutTeamInput[]
    upsert?: CategoryDistributionUpsertWithWhereUniqueWithoutTeamInput | CategoryDistributionUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: CategoryDistributionCreateManyTeamInputEnvelope
    set?: CategoryDistributionWhereUniqueInput | CategoryDistributionWhereUniqueInput[]
    disconnect?: CategoryDistributionWhereUniqueInput | CategoryDistributionWhereUniqueInput[]
    delete?: CategoryDistributionWhereUniqueInput | CategoryDistributionWhereUniqueInput[]
    connect?: CategoryDistributionWhereUniqueInput | CategoryDistributionWhereUniqueInput[]
    update?: CategoryDistributionUpdateWithWhereUniqueWithoutTeamInput | CategoryDistributionUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: CategoryDistributionUpdateManyWithWhereWithoutTeamInput | CategoryDistributionUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: CategoryDistributionScalarWhereInput | CategoryDistributionScalarWhereInput[]
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

  export type ScoreChangeHistoryCreateNestedManyWithoutActivityInput = {
    create?: XOR<ScoreChangeHistoryCreateWithoutActivityInput, ScoreChangeHistoryUncheckedCreateWithoutActivityInput> | ScoreChangeHistoryCreateWithoutActivityInput[] | ScoreChangeHistoryUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ScoreChangeHistoryCreateOrConnectWithoutActivityInput | ScoreChangeHistoryCreateOrConnectWithoutActivityInput[]
    createMany?: ScoreChangeHistoryCreateManyActivityInputEnvelope
    connect?: ScoreChangeHistoryWhereUniqueInput | ScoreChangeHistoryWhereUniqueInput[]
  }

  export type ScoreChangeHistoryUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<ScoreChangeHistoryCreateWithoutActivityInput, ScoreChangeHistoryUncheckedCreateWithoutActivityInput> | ScoreChangeHistoryCreateWithoutActivityInput[] | ScoreChangeHistoryUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ScoreChangeHistoryCreateOrConnectWithoutActivityInput | ScoreChangeHistoryCreateOrConnectWithoutActivityInput[]
    createMany?: ScoreChangeHistoryCreateManyActivityInputEnvelope
    connect?: ScoreChangeHistoryWhereUniqueInput | ScoreChangeHistoryWhereUniqueInput[]
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

  export type ScoreChangeHistoryUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ScoreChangeHistoryCreateWithoutActivityInput, ScoreChangeHistoryUncheckedCreateWithoutActivityInput> | ScoreChangeHistoryCreateWithoutActivityInput[] | ScoreChangeHistoryUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ScoreChangeHistoryCreateOrConnectWithoutActivityInput | ScoreChangeHistoryCreateOrConnectWithoutActivityInput[]
    upsert?: ScoreChangeHistoryUpsertWithWhereUniqueWithoutActivityInput | ScoreChangeHistoryUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ScoreChangeHistoryCreateManyActivityInputEnvelope
    set?: ScoreChangeHistoryWhereUniqueInput | ScoreChangeHistoryWhereUniqueInput[]
    disconnect?: ScoreChangeHistoryWhereUniqueInput | ScoreChangeHistoryWhereUniqueInput[]
    delete?: ScoreChangeHistoryWhereUniqueInput | ScoreChangeHistoryWhereUniqueInput[]
    connect?: ScoreChangeHistoryWhereUniqueInput | ScoreChangeHistoryWhereUniqueInput[]
    update?: ScoreChangeHistoryUpdateWithWhereUniqueWithoutActivityInput | ScoreChangeHistoryUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ScoreChangeHistoryUpdateManyWithWhereWithoutActivityInput | ScoreChangeHistoryUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ScoreChangeHistoryScalarWhereInput | ScoreChangeHistoryScalarWhereInput[]
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

  export type ScoreChangeHistoryUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<ScoreChangeHistoryCreateWithoutActivityInput, ScoreChangeHistoryUncheckedCreateWithoutActivityInput> | ScoreChangeHistoryCreateWithoutActivityInput[] | ScoreChangeHistoryUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: ScoreChangeHistoryCreateOrConnectWithoutActivityInput | ScoreChangeHistoryCreateOrConnectWithoutActivityInput[]
    upsert?: ScoreChangeHistoryUpsertWithWhereUniqueWithoutActivityInput | ScoreChangeHistoryUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: ScoreChangeHistoryCreateManyActivityInputEnvelope
    set?: ScoreChangeHistoryWhereUniqueInput | ScoreChangeHistoryWhereUniqueInput[]
    disconnect?: ScoreChangeHistoryWhereUniqueInput | ScoreChangeHistoryWhereUniqueInput[]
    delete?: ScoreChangeHistoryWhereUniqueInput | ScoreChangeHistoryWhereUniqueInput[]
    connect?: ScoreChangeHistoryWhereUniqueInput | ScoreChangeHistoryWhereUniqueInput[]
    update?: ScoreChangeHistoryUpdateWithWhereUniqueWithoutActivityInput | ScoreChangeHistoryUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: ScoreChangeHistoryUpdateManyWithWhereWithoutActivityInput | ScoreChangeHistoryUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: ScoreChangeHistoryScalarWhereInput | ScoreChangeHistoryScalarWhereInput[]
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

  export type activityCreateNestedOneWithoutScoreChangesInput = {
    create?: XOR<activityCreateWithoutScoreChangesInput, activityUncheckedCreateWithoutScoreChangesInput>
    connectOrCreate?: activityCreateOrConnectWithoutScoreChangesInput
    connect?: activityWhereUniqueInput
  }

  export type activityUpdateOneRequiredWithoutScoreChangesNestedInput = {
    create?: XOR<activityCreateWithoutScoreChangesInput, activityUncheckedCreateWithoutScoreChangesInput>
    connectOrCreate?: activityCreateOrConnectWithoutScoreChangesInput
    upsert?: activityUpsertWithoutScoreChangesInput
    connect?: activityWhereUniqueInput
    update?: XOR<XOR<activityUpdateToOneWithWhereWithoutScoreChangesInput, activityUpdateWithoutScoreChangesInput>, activityUncheckedUpdateWithoutScoreChangesInput>
  }

  export type teamCreateNestedOneWithoutRankingsInput = {
    create?: XOR<teamCreateWithoutRankingsInput, teamUncheckedCreateWithoutRankingsInput>
    connectOrCreate?: teamCreateOrConnectWithoutRankingsInput
    connect?: teamWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type teamUpdateOneRequiredWithoutRankingsNestedInput = {
    create?: XOR<teamCreateWithoutRankingsInput, teamUncheckedCreateWithoutRankingsInput>
    connectOrCreate?: teamCreateOrConnectWithoutRankingsInput
    upsert?: teamUpsertWithoutRankingsInput
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutRankingsInput, teamUpdateWithoutRankingsInput>, teamUncheckedUpdateWithoutRankingsInput>
  }

  export type teamCreateNestedOneWithoutParticipantRankingsInput = {
    create?: XOR<teamCreateWithoutParticipantRankingsInput, teamUncheckedCreateWithoutParticipantRankingsInput>
    connectOrCreate?: teamCreateOrConnectWithoutParticipantRankingsInput
    connect?: teamWhereUniqueInput
  }

  export type teamUpdateOneRequiredWithoutParticipantRankingsNestedInput = {
    create?: XOR<teamCreateWithoutParticipantRankingsInput, teamUncheckedCreateWithoutParticipantRankingsInput>
    connectOrCreate?: teamCreateOrConnectWithoutParticipantRankingsInput
    upsert?: teamUpsertWithoutParticipantRankingsInput
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutParticipantRankingsInput, teamUpdateWithoutParticipantRankingsInput>, teamUncheckedUpdateWithoutParticipantRankingsInput>
  }

  export type teamCreateNestedOneWithoutScoreHistoryInput = {
    create?: XOR<teamCreateWithoutScoreHistoryInput, teamUncheckedCreateWithoutScoreHistoryInput>
    connectOrCreate?: teamCreateOrConnectWithoutScoreHistoryInput
    connect?: teamWhereUniqueInput
  }

  export type teamUpdateOneRequiredWithoutScoreHistoryNestedInput = {
    create?: XOR<teamCreateWithoutScoreHistoryInput, teamUncheckedCreateWithoutScoreHistoryInput>
    connectOrCreate?: teamCreateOrConnectWithoutScoreHistoryInput
    upsert?: teamUpsertWithoutScoreHistoryInput
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutScoreHistoryInput, teamUpdateWithoutScoreHistoryInput>, teamUncheckedUpdateWithoutScoreHistoryInput>
  }

  export type teamCreateNestedOneWithoutScoreDistributionInput = {
    create?: XOR<teamCreateWithoutScoreDistributionInput, teamUncheckedCreateWithoutScoreDistributionInput>
    connectOrCreate?: teamCreateOrConnectWithoutScoreDistributionInput
    connect?: teamWhereUniqueInput
  }

  export type teamUpdateOneRequiredWithoutScoreDistributionNestedInput = {
    create?: XOR<teamCreateWithoutScoreDistributionInput, teamUncheckedCreateWithoutScoreDistributionInput>
    connectOrCreate?: teamCreateOrConnectWithoutScoreDistributionInput
    upsert?: teamUpsertWithoutScoreDistributionInput
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutScoreDistributionInput, teamUpdateWithoutScoreDistributionInput>, teamUncheckedUpdateWithoutScoreDistributionInput>
  }

  export type teamCreateNestedOneWithoutCategoryDistributionInput = {
    create?: XOR<teamCreateWithoutCategoryDistributionInput, teamUncheckedCreateWithoutCategoryDistributionInput>
    connectOrCreate?: teamCreateOrConnectWithoutCategoryDistributionInput
    connect?: teamWhereUniqueInput
  }

  export type teamUpdateOneRequiredWithoutCategoryDistributionNestedInput = {
    create?: XOR<teamCreateWithoutCategoryDistributionInput, teamUncheckedCreateWithoutCategoryDistributionInput>
    connectOrCreate?: teamCreateOrConnectWithoutCategoryDistributionInput
    upsert?: teamUpsertWithoutCategoryDistributionInput
    connect?: teamWhereUniqueInput
    update?: XOR<XOR<teamUpdateToOneWithWhereWithoutCategoryDistributionInput, teamUpdateWithoutCategoryDistributionInput>, teamUncheckedUpdateWithoutCategoryDistributionInput>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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
    scoreChanges?: ScoreChangeHistoryCreateNestedManyWithoutActivityInput
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
    scoreChanges?: ScoreChangeHistoryUncheckedCreateNestedManyWithoutActivityInput
  }

  export type activityCreateOrConnectWithoutTeam_relationInput = {
    where: activityWhereUniqueInput
    create: XOR<activityCreateWithoutTeam_relationInput, activityUncheckedCreateWithoutTeam_relationInput>
  }

  export type activityCreateManyTeam_relationInputEnvelope = {
    data: activityCreateManyTeam_relationInput | activityCreateManyTeam_relationInput[]
    skipDuplicates?: boolean
  }

  export type RankingTeamCreateWithoutTeamInput = {
    teamName: string
    scoreTotal: number
    rankingPosition: number
    rankingVariation?: number | null
    scoreDiff?: number | null
    generatedAt?: Date | string
  }

  export type RankingTeamUncheckedCreateWithoutTeamInput = {
    id?: number
    teamName: string
    scoreTotal: number
    rankingPosition: number
    rankingVariation?: number | null
    scoreDiff?: number | null
    generatedAt?: Date | string
  }

  export type RankingTeamCreateOrConnectWithoutTeamInput = {
    where: RankingTeamWhereUniqueInput
    create: XOR<RankingTeamCreateWithoutTeamInput, RankingTeamUncheckedCreateWithoutTeamInput>
  }

  export type RankingTeamCreateManyTeamInputEnvelope = {
    data: RankingTeamCreateManyTeamInput | RankingTeamCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type RankingParticipantCreateWithoutTeamInput = {
    participantId: string
    participantName: string
    scoreTotal: number
    rankingPosition: number
    rankingVariation?: number | null
    scoreDiff?: number | null
    generatedAt?: Date | string
  }

  export type RankingParticipantUncheckedCreateWithoutTeamInput = {
    id?: number
    participantId: string
    participantName: string
    scoreTotal: number
    rankingPosition: number
    rankingVariation?: number | null
    scoreDiff?: number | null
    generatedAt?: Date | string
  }

  export type RankingParticipantCreateOrConnectWithoutTeamInput = {
    where: RankingParticipantWhereUniqueInput
    create: XOR<RankingParticipantCreateWithoutTeamInput, RankingParticipantUncheckedCreateWithoutTeamInput>
  }

  export type RankingParticipantCreateManyTeamInputEnvelope = {
    data: RankingParticipantCreateManyTeamInput | RankingParticipantCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamScoreHistoryCreateWithoutTeamInput = {
    score: number
    date?: Date | string
  }

  export type TeamScoreHistoryUncheckedCreateWithoutTeamInput = {
    id?: number
    score: number
    date?: Date | string
  }

  export type TeamScoreHistoryCreateOrConnectWithoutTeamInput = {
    where: TeamScoreHistoryWhereUniqueInput
    create: XOR<TeamScoreHistoryCreateWithoutTeamInput, TeamScoreHistoryUncheckedCreateWithoutTeamInput>
  }

  export type TeamScoreHistoryCreateManyTeamInputEnvelope = {
    data: TeamScoreHistoryCreateManyTeamInput | TeamScoreHistoryCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamScoreDistributionCreateWithoutTeamInput = {
    scoreTotal: number
    percentage: number
  }

  export type TeamScoreDistributionUncheckedCreateWithoutTeamInput = {
    id?: number
    scoreTotal: number
    percentage: number
  }

  export type TeamScoreDistributionCreateOrConnectWithoutTeamInput = {
    where: TeamScoreDistributionWhereUniqueInput
    create: XOR<TeamScoreDistributionCreateWithoutTeamInput, TeamScoreDistributionUncheckedCreateWithoutTeamInput>
  }

  export type TeamScoreDistributionCreateManyTeamInputEnvelope = {
    data: TeamScoreDistributionCreateManyTeamInput | TeamScoreDistributionCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type CategoryDistributionCreateWithoutTeamInput = {
    category: string
    totalScore: number
  }

  export type CategoryDistributionUncheckedCreateWithoutTeamInput = {
    id?: number
    category: string
    totalScore: number
  }

  export type CategoryDistributionCreateOrConnectWithoutTeamInput = {
    where: CategoryDistributionWhereUniqueInput
    create: XOR<CategoryDistributionCreateWithoutTeamInput, CategoryDistributionUncheckedCreateWithoutTeamInput>
  }

  export type CategoryDistributionCreateManyTeamInputEnvelope = {
    data: CategoryDistributionCreateManyTeamInput | CategoryDistributionCreateManyTeamInput[]
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

  export type RankingTeamUpsertWithWhereUniqueWithoutTeamInput = {
    where: RankingTeamWhereUniqueInput
    update: XOR<RankingTeamUpdateWithoutTeamInput, RankingTeamUncheckedUpdateWithoutTeamInput>
    create: XOR<RankingTeamCreateWithoutTeamInput, RankingTeamUncheckedCreateWithoutTeamInput>
  }

  export type RankingTeamUpdateWithWhereUniqueWithoutTeamInput = {
    where: RankingTeamWhereUniqueInput
    data: XOR<RankingTeamUpdateWithoutTeamInput, RankingTeamUncheckedUpdateWithoutTeamInput>
  }

  export type RankingTeamUpdateManyWithWhereWithoutTeamInput = {
    where: RankingTeamScalarWhereInput
    data: XOR<RankingTeamUpdateManyMutationInput, RankingTeamUncheckedUpdateManyWithoutTeamInput>
  }

  export type RankingTeamScalarWhereInput = {
    AND?: RankingTeamScalarWhereInput | RankingTeamScalarWhereInput[]
    OR?: RankingTeamScalarWhereInput[]
    NOT?: RankingTeamScalarWhereInput | RankingTeamScalarWhereInput[]
    id?: IntFilter<"RankingTeam"> | number
    teamId?: IntFilter<"RankingTeam"> | number
    teamName?: StringFilter<"RankingTeam"> | string
    scoreTotal?: FloatFilter<"RankingTeam"> | number
    rankingPosition?: IntFilter<"RankingTeam"> | number
    rankingVariation?: IntNullableFilter<"RankingTeam"> | number | null
    scoreDiff?: FloatNullableFilter<"RankingTeam"> | number | null
    generatedAt?: DateTimeFilter<"RankingTeam"> | Date | string
  }

  export type RankingParticipantUpsertWithWhereUniqueWithoutTeamInput = {
    where: RankingParticipantWhereUniqueInput
    update: XOR<RankingParticipantUpdateWithoutTeamInput, RankingParticipantUncheckedUpdateWithoutTeamInput>
    create: XOR<RankingParticipantCreateWithoutTeamInput, RankingParticipantUncheckedCreateWithoutTeamInput>
  }

  export type RankingParticipantUpdateWithWhereUniqueWithoutTeamInput = {
    where: RankingParticipantWhereUniqueInput
    data: XOR<RankingParticipantUpdateWithoutTeamInput, RankingParticipantUncheckedUpdateWithoutTeamInput>
  }

  export type RankingParticipantUpdateManyWithWhereWithoutTeamInput = {
    where: RankingParticipantScalarWhereInput
    data: XOR<RankingParticipantUpdateManyMutationInput, RankingParticipantUncheckedUpdateManyWithoutTeamInput>
  }

  export type RankingParticipantScalarWhereInput = {
    AND?: RankingParticipantScalarWhereInput | RankingParticipantScalarWhereInput[]
    OR?: RankingParticipantScalarWhereInput[]
    NOT?: RankingParticipantScalarWhereInput | RankingParticipantScalarWhereInput[]
    id?: IntFilter<"RankingParticipant"> | number
    participantId?: StringFilter<"RankingParticipant"> | string
    participantName?: StringFilter<"RankingParticipant"> | string
    teamId?: IntFilter<"RankingParticipant"> | number
    scoreTotal?: FloatFilter<"RankingParticipant"> | number
    rankingPosition?: IntFilter<"RankingParticipant"> | number
    rankingVariation?: IntNullableFilter<"RankingParticipant"> | number | null
    scoreDiff?: FloatNullableFilter<"RankingParticipant"> | number | null
    generatedAt?: DateTimeFilter<"RankingParticipant"> | Date | string
  }

  export type TeamScoreHistoryUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamScoreHistoryWhereUniqueInput
    update: XOR<TeamScoreHistoryUpdateWithoutTeamInput, TeamScoreHistoryUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamScoreHistoryCreateWithoutTeamInput, TeamScoreHistoryUncheckedCreateWithoutTeamInput>
  }

  export type TeamScoreHistoryUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamScoreHistoryWhereUniqueInput
    data: XOR<TeamScoreHistoryUpdateWithoutTeamInput, TeamScoreHistoryUncheckedUpdateWithoutTeamInput>
  }

  export type TeamScoreHistoryUpdateManyWithWhereWithoutTeamInput = {
    where: TeamScoreHistoryScalarWhereInput
    data: XOR<TeamScoreHistoryUpdateManyMutationInput, TeamScoreHistoryUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamScoreHistoryScalarWhereInput = {
    AND?: TeamScoreHistoryScalarWhereInput | TeamScoreHistoryScalarWhereInput[]
    OR?: TeamScoreHistoryScalarWhereInput[]
    NOT?: TeamScoreHistoryScalarWhereInput | TeamScoreHistoryScalarWhereInput[]
    id?: IntFilter<"TeamScoreHistory"> | number
    teamId?: IntFilter<"TeamScoreHistory"> | number
    score?: FloatFilter<"TeamScoreHistory"> | number
    date?: DateTimeFilter<"TeamScoreHistory"> | Date | string
  }

  export type TeamScoreDistributionUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamScoreDistributionWhereUniqueInput
    update: XOR<TeamScoreDistributionUpdateWithoutTeamInput, TeamScoreDistributionUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamScoreDistributionCreateWithoutTeamInput, TeamScoreDistributionUncheckedCreateWithoutTeamInput>
  }

  export type TeamScoreDistributionUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamScoreDistributionWhereUniqueInput
    data: XOR<TeamScoreDistributionUpdateWithoutTeamInput, TeamScoreDistributionUncheckedUpdateWithoutTeamInput>
  }

  export type TeamScoreDistributionUpdateManyWithWhereWithoutTeamInput = {
    where: TeamScoreDistributionScalarWhereInput
    data: XOR<TeamScoreDistributionUpdateManyMutationInput, TeamScoreDistributionUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamScoreDistributionScalarWhereInput = {
    AND?: TeamScoreDistributionScalarWhereInput | TeamScoreDistributionScalarWhereInput[]
    OR?: TeamScoreDistributionScalarWhereInput[]
    NOT?: TeamScoreDistributionScalarWhereInput | TeamScoreDistributionScalarWhereInput[]
    id?: IntFilter<"TeamScoreDistribution"> | number
    teamId?: IntFilter<"TeamScoreDistribution"> | number
    scoreTotal?: FloatFilter<"TeamScoreDistribution"> | number
    percentage?: FloatFilter<"TeamScoreDistribution"> | number
  }

  export type CategoryDistributionUpsertWithWhereUniqueWithoutTeamInput = {
    where: CategoryDistributionWhereUniqueInput
    update: XOR<CategoryDistributionUpdateWithoutTeamInput, CategoryDistributionUncheckedUpdateWithoutTeamInput>
    create: XOR<CategoryDistributionCreateWithoutTeamInput, CategoryDistributionUncheckedCreateWithoutTeamInput>
  }

  export type CategoryDistributionUpdateWithWhereUniqueWithoutTeamInput = {
    where: CategoryDistributionWhereUniqueInput
    data: XOR<CategoryDistributionUpdateWithoutTeamInput, CategoryDistributionUncheckedUpdateWithoutTeamInput>
  }

  export type CategoryDistributionUpdateManyWithWhereWithoutTeamInput = {
    where: CategoryDistributionScalarWhereInput
    data: XOR<CategoryDistributionUpdateManyMutationInput, CategoryDistributionUncheckedUpdateManyWithoutTeamInput>
  }

  export type CategoryDistributionScalarWhereInput = {
    AND?: CategoryDistributionScalarWhereInput | CategoryDistributionScalarWhereInput[]
    OR?: CategoryDistributionScalarWhereInput[]
    NOT?: CategoryDistributionScalarWhereInput | CategoryDistributionScalarWhereInput[]
    id?: IntFilter<"CategoryDistribution"> | number
    teamId?: IntFilter<"CategoryDistribution"> | number
    category?: StringFilter<"CategoryDistribution"> | string
    totalScore?: FloatFilter<"CategoryDistribution"> | number
  }

  export type teamCreateWithoutActivitiesInput = {
    name: string
    participants?: participantCreateNestedManyWithoutTeamInput
    rankings?: RankingTeamCreateNestedManyWithoutTeamInput
    participantRankings?: RankingParticipantCreateNestedManyWithoutTeamInput
    scoreHistory?: TeamScoreHistoryCreateNestedManyWithoutTeamInput
    scoreDistribution?: TeamScoreDistributionCreateNestedManyWithoutTeamInput
    categoryDistribution?: CategoryDistributionCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutActivitiesInput = {
    id?: number
    name: string
    participants?: participantUncheckedCreateNestedManyWithoutTeamInput
    rankings?: RankingTeamUncheckedCreateNestedManyWithoutTeamInput
    participantRankings?: RankingParticipantUncheckedCreateNestedManyWithoutTeamInput
    scoreHistory?: TeamScoreHistoryUncheckedCreateNestedManyWithoutTeamInput
    scoreDistribution?: TeamScoreDistributionUncheckedCreateNestedManyWithoutTeamInput
    categoryDistribution?: CategoryDistributionUncheckedCreateNestedManyWithoutTeamInput
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

  export type ScoreChangeHistoryCreateWithoutActivityInput = {
    id?: string
    old_base_score: number
    old_multiplier: number
    new_base_score: number
    new_multiplier: number
    change_reason: string
    changed_at: Date | string
    createdAt?: Date | string
  }

  export type ScoreChangeHistoryUncheckedCreateWithoutActivityInput = {
    id?: string
    old_base_score: number
    old_multiplier: number
    new_base_score: number
    new_multiplier: number
    change_reason: string
    changed_at: Date | string
    createdAt?: Date | string
  }

  export type ScoreChangeHistoryCreateOrConnectWithoutActivityInput = {
    where: ScoreChangeHistoryWhereUniqueInput
    create: XOR<ScoreChangeHistoryCreateWithoutActivityInput, ScoreChangeHistoryUncheckedCreateWithoutActivityInput>
  }

  export type ScoreChangeHistoryCreateManyActivityInputEnvelope = {
    data: ScoreChangeHistoryCreateManyActivityInput | ScoreChangeHistoryCreateManyActivityInput[]
    skipDuplicates?: boolean
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
    rankings?: RankingTeamUpdateManyWithoutTeamNestedInput
    participantRankings?: RankingParticipantUpdateManyWithoutTeamNestedInput
    scoreHistory?: TeamScoreHistoryUpdateManyWithoutTeamNestedInput
    scoreDistribution?: TeamScoreDistributionUpdateManyWithoutTeamNestedInput
    categoryDistribution?: CategoryDistributionUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUncheckedUpdateManyWithoutTeamNestedInput
    rankings?: RankingTeamUncheckedUpdateManyWithoutTeamNestedInput
    participantRankings?: RankingParticipantUncheckedUpdateManyWithoutTeamNestedInput
    scoreHistory?: TeamScoreHistoryUncheckedUpdateManyWithoutTeamNestedInput
    scoreDistribution?: TeamScoreDistributionUncheckedUpdateManyWithoutTeamNestedInput
    categoryDistribution?: CategoryDistributionUncheckedUpdateManyWithoutTeamNestedInput
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

  export type ScoreChangeHistoryUpsertWithWhereUniqueWithoutActivityInput = {
    where: ScoreChangeHistoryWhereUniqueInput
    update: XOR<ScoreChangeHistoryUpdateWithoutActivityInput, ScoreChangeHistoryUncheckedUpdateWithoutActivityInput>
    create: XOR<ScoreChangeHistoryCreateWithoutActivityInput, ScoreChangeHistoryUncheckedCreateWithoutActivityInput>
  }

  export type ScoreChangeHistoryUpdateWithWhereUniqueWithoutActivityInput = {
    where: ScoreChangeHistoryWhereUniqueInput
    data: XOR<ScoreChangeHistoryUpdateWithoutActivityInput, ScoreChangeHistoryUncheckedUpdateWithoutActivityInput>
  }

  export type ScoreChangeHistoryUpdateManyWithWhereWithoutActivityInput = {
    where: ScoreChangeHistoryScalarWhereInput
    data: XOR<ScoreChangeHistoryUpdateManyMutationInput, ScoreChangeHistoryUncheckedUpdateManyWithoutActivityInput>
  }

  export type ScoreChangeHistoryScalarWhereInput = {
    AND?: ScoreChangeHistoryScalarWhereInput | ScoreChangeHistoryScalarWhereInput[]
    OR?: ScoreChangeHistoryScalarWhereInput[]
    NOT?: ScoreChangeHistoryScalarWhereInput | ScoreChangeHistoryScalarWhereInput[]
    id?: StringFilter<"ScoreChangeHistory"> | string
    activity_id?: StringFilter<"ScoreChangeHistory"> | string
    old_base_score?: FloatFilter<"ScoreChangeHistory"> | number
    old_multiplier?: FloatFilter<"ScoreChangeHistory"> | number
    new_base_score?: FloatFilter<"ScoreChangeHistory"> | number
    new_multiplier?: FloatFilter<"ScoreChangeHistory"> | number
    change_reason?: StringFilter<"ScoreChangeHistory"> | string
    changed_at?: DateTimeFilter<"ScoreChangeHistory"> | Date | string
    createdAt?: DateTimeFilter<"ScoreChangeHistory"> | Date | string
  }

  export type teamCreateWithoutParticipantsInput = {
    name: string
    activities?: activityCreateNestedManyWithoutTeam_relationInput
    rankings?: RankingTeamCreateNestedManyWithoutTeamInput
    participantRankings?: RankingParticipantCreateNestedManyWithoutTeamInput
    scoreHistory?: TeamScoreHistoryCreateNestedManyWithoutTeamInput
    scoreDistribution?: TeamScoreDistributionCreateNestedManyWithoutTeamInput
    categoryDistribution?: CategoryDistributionCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutParticipantsInput = {
    id?: number
    name: string
    activities?: activityUncheckedCreateNestedManyWithoutTeam_relationInput
    rankings?: RankingTeamUncheckedCreateNestedManyWithoutTeamInput
    participantRankings?: RankingParticipantUncheckedCreateNestedManyWithoutTeamInput
    scoreHistory?: TeamScoreHistoryUncheckedCreateNestedManyWithoutTeamInput
    scoreDistribution?: TeamScoreDistributionUncheckedCreateNestedManyWithoutTeamInput
    categoryDistribution?: CategoryDistributionUncheckedCreateNestedManyWithoutTeamInput
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
    scoreChanges?: ScoreChangeHistoryCreateNestedManyWithoutActivityInput
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
    scoreChanges?: ScoreChangeHistoryUncheckedCreateNestedManyWithoutActivityInput
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
    rankings?: RankingTeamUpdateManyWithoutTeamNestedInput
    participantRankings?: RankingParticipantUpdateManyWithoutTeamNestedInput
    scoreHistory?: TeamScoreHistoryUpdateManyWithoutTeamNestedInput
    scoreDistribution?: TeamScoreDistributionUpdateManyWithoutTeamNestedInput
    categoryDistribution?: CategoryDistributionUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutParticipantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    activities?: activityUncheckedUpdateManyWithoutTeam_relationNestedInput
    rankings?: RankingTeamUncheckedUpdateManyWithoutTeamNestedInput
    participantRankings?: RankingParticipantUncheckedUpdateManyWithoutTeamNestedInput
    scoreHistory?: TeamScoreHistoryUncheckedUpdateManyWithoutTeamNestedInput
    scoreDistribution?: TeamScoreDistributionUncheckedUpdateManyWithoutTeamNestedInput
    categoryDistribution?: CategoryDistributionUncheckedUpdateManyWithoutTeamNestedInput
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

  export type activityCreateWithoutScoreChangesInput = {
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

  export type activityUncheckedCreateWithoutScoreChangesInput = {
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

  export type activityCreateOrConnectWithoutScoreChangesInput = {
    where: activityWhereUniqueInput
    create: XOR<activityCreateWithoutScoreChangesInput, activityUncheckedCreateWithoutScoreChangesInput>
  }

  export type activityUpsertWithoutScoreChangesInput = {
    update: XOR<activityUpdateWithoutScoreChangesInput, activityUncheckedUpdateWithoutScoreChangesInput>
    create: XOR<activityCreateWithoutScoreChangesInput, activityUncheckedCreateWithoutScoreChangesInput>
    where?: activityWhereInput
  }

  export type activityUpdateToOneWithWhereWithoutScoreChangesInput = {
    where?: activityWhereInput
    data: XOR<activityUpdateWithoutScoreChangesInput, activityUncheckedUpdateWithoutScoreChangesInput>
  }

  export type activityUpdateWithoutScoreChangesInput = {
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

  export type activityUncheckedUpdateWithoutScoreChangesInput = {
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

  export type teamCreateWithoutRankingsInput = {
    name: string
    participants?: participantCreateNestedManyWithoutTeamInput
    activities?: activityCreateNestedManyWithoutTeam_relationInput
    participantRankings?: RankingParticipantCreateNestedManyWithoutTeamInput
    scoreHistory?: TeamScoreHistoryCreateNestedManyWithoutTeamInput
    scoreDistribution?: TeamScoreDistributionCreateNestedManyWithoutTeamInput
    categoryDistribution?: CategoryDistributionCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutRankingsInput = {
    id?: number
    name: string
    participants?: participantUncheckedCreateNestedManyWithoutTeamInput
    activities?: activityUncheckedCreateNestedManyWithoutTeam_relationInput
    participantRankings?: RankingParticipantUncheckedCreateNestedManyWithoutTeamInput
    scoreHistory?: TeamScoreHistoryUncheckedCreateNestedManyWithoutTeamInput
    scoreDistribution?: TeamScoreDistributionUncheckedCreateNestedManyWithoutTeamInput
    categoryDistribution?: CategoryDistributionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutRankingsInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutRankingsInput, teamUncheckedCreateWithoutRankingsInput>
  }

  export type teamUpsertWithoutRankingsInput = {
    update: XOR<teamUpdateWithoutRankingsInput, teamUncheckedUpdateWithoutRankingsInput>
    create: XOR<teamCreateWithoutRankingsInput, teamUncheckedCreateWithoutRankingsInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutRankingsInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutRankingsInput, teamUncheckedUpdateWithoutRankingsInput>
  }

  export type teamUpdateWithoutRankingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUpdateManyWithoutTeamNestedInput
    activities?: activityUpdateManyWithoutTeam_relationNestedInput
    participantRankings?: RankingParticipantUpdateManyWithoutTeamNestedInput
    scoreHistory?: TeamScoreHistoryUpdateManyWithoutTeamNestedInput
    scoreDistribution?: TeamScoreDistributionUpdateManyWithoutTeamNestedInput
    categoryDistribution?: CategoryDistributionUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutRankingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUncheckedUpdateManyWithoutTeamNestedInput
    activities?: activityUncheckedUpdateManyWithoutTeam_relationNestedInput
    participantRankings?: RankingParticipantUncheckedUpdateManyWithoutTeamNestedInput
    scoreHistory?: TeamScoreHistoryUncheckedUpdateManyWithoutTeamNestedInput
    scoreDistribution?: TeamScoreDistributionUncheckedUpdateManyWithoutTeamNestedInput
    categoryDistribution?: CategoryDistributionUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type teamCreateWithoutParticipantRankingsInput = {
    name: string
    participants?: participantCreateNestedManyWithoutTeamInput
    activities?: activityCreateNestedManyWithoutTeam_relationInput
    rankings?: RankingTeamCreateNestedManyWithoutTeamInput
    scoreHistory?: TeamScoreHistoryCreateNestedManyWithoutTeamInput
    scoreDistribution?: TeamScoreDistributionCreateNestedManyWithoutTeamInput
    categoryDistribution?: CategoryDistributionCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutParticipantRankingsInput = {
    id?: number
    name: string
    participants?: participantUncheckedCreateNestedManyWithoutTeamInput
    activities?: activityUncheckedCreateNestedManyWithoutTeam_relationInput
    rankings?: RankingTeamUncheckedCreateNestedManyWithoutTeamInput
    scoreHistory?: TeamScoreHistoryUncheckedCreateNestedManyWithoutTeamInput
    scoreDistribution?: TeamScoreDistributionUncheckedCreateNestedManyWithoutTeamInput
    categoryDistribution?: CategoryDistributionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutParticipantRankingsInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutParticipantRankingsInput, teamUncheckedCreateWithoutParticipantRankingsInput>
  }

  export type teamUpsertWithoutParticipantRankingsInput = {
    update: XOR<teamUpdateWithoutParticipantRankingsInput, teamUncheckedUpdateWithoutParticipantRankingsInput>
    create: XOR<teamCreateWithoutParticipantRankingsInput, teamUncheckedCreateWithoutParticipantRankingsInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutParticipantRankingsInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutParticipantRankingsInput, teamUncheckedUpdateWithoutParticipantRankingsInput>
  }

  export type teamUpdateWithoutParticipantRankingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUpdateManyWithoutTeamNestedInput
    activities?: activityUpdateManyWithoutTeam_relationNestedInput
    rankings?: RankingTeamUpdateManyWithoutTeamNestedInput
    scoreHistory?: TeamScoreHistoryUpdateManyWithoutTeamNestedInput
    scoreDistribution?: TeamScoreDistributionUpdateManyWithoutTeamNestedInput
    categoryDistribution?: CategoryDistributionUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutParticipantRankingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUncheckedUpdateManyWithoutTeamNestedInput
    activities?: activityUncheckedUpdateManyWithoutTeam_relationNestedInput
    rankings?: RankingTeamUncheckedUpdateManyWithoutTeamNestedInput
    scoreHistory?: TeamScoreHistoryUncheckedUpdateManyWithoutTeamNestedInput
    scoreDistribution?: TeamScoreDistributionUncheckedUpdateManyWithoutTeamNestedInput
    categoryDistribution?: CategoryDistributionUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type teamCreateWithoutScoreHistoryInput = {
    name: string
    participants?: participantCreateNestedManyWithoutTeamInput
    activities?: activityCreateNestedManyWithoutTeam_relationInput
    rankings?: RankingTeamCreateNestedManyWithoutTeamInput
    participantRankings?: RankingParticipantCreateNestedManyWithoutTeamInput
    scoreDistribution?: TeamScoreDistributionCreateNestedManyWithoutTeamInput
    categoryDistribution?: CategoryDistributionCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutScoreHistoryInput = {
    id?: number
    name: string
    participants?: participantUncheckedCreateNestedManyWithoutTeamInput
    activities?: activityUncheckedCreateNestedManyWithoutTeam_relationInput
    rankings?: RankingTeamUncheckedCreateNestedManyWithoutTeamInput
    participantRankings?: RankingParticipantUncheckedCreateNestedManyWithoutTeamInput
    scoreDistribution?: TeamScoreDistributionUncheckedCreateNestedManyWithoutTeamInput
    categoryDistribution?: CategoryDistributionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutScoreHistoryInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutScoreHistoryInput, teamUncheckedCreateWithoutScoreHistoryInput>
  }

  export type teamUpsertWithoutScoreHistoryInput = {
    update: XOR<teamUpdateWithoutScoreHistoryInput, teamUncheckedUpdateWithoutScoreHistoryInput>
    create: XOR<teamCreateWithoutScoreHistoryInput, teamUncheckedCreateWithoutScoreHistoryInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutScoreHistoryInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutScoreHistoryInput, teamUncheckedUpdateWithoutScoreHistoryInput>
  }

  export type teamUpdateWithoutScoreHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUpdateManyWithoutTeamNestedInput
    activities?: activityUpdateManyWithoutTeam_relationNestedInput
    rankings?: RankingTeamUpdateManyWithoutTeamNestedInput
    participantRankings?: RankingParticipantUpdateManyWithoutTeamNestedInput
    scoreDistribution?: TeamScoreDistributionUpdateManyWithoutTeamNestedInput
    categoryDistribution?: CategoryDistributionUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutScoreHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUncheckedUpdateManyWithoutTeamNestedInput
    activities?: activityUncheckedUpdateManyWithoutTeam_relationNestedInput
    rankings?: RankingTeamUncheckedUpdateManyWithoutTeamNestedInput
    participantRankings?: RankingParticipantUncheckedUpdateManyWithoutTeamNestedInput
    scoreDistribution?: TeamScoreDistributionUncheckedUpdateManyWithoutTeamNestedInput
    categoryDistribution?: CategoryDistributionUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type teamCreateWithoutScoreDistributionInput = {
    name: string
    participants?: participantCreateNestedManyWithoutTeamInput
    activities?: activityCreateNestedManyWithoutTeam_relationInput
    rankings?: RankingTeamCreateNestedManyWithoutTeamInput
    participantRankings?: RankingParticipantCreateNestedManyWithoutTeamInput
    scoreHistory?: TeamScoreHistoryCreateNestedManyWithoutTeamInput
    categoryDistribution?: CategoryDistributionCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutScoreDistributionInput = {
    id?: number
    name: string
    participants?: participantUncheckedCreateNestedManyWithoutTeamInput
    activities?: activityUncheckedCreateNestedManyWithoutTeam_relationInput
    rankings?: RankingTeamUncheckedCreateNestedManyWithoutTeamInput
    participantRankings?: RankingParticipantUncheckedCreateNestedManyWithoutTeamInput
    scoreHistory?: TeamScoreHistoryUncheckedCreateNestedManyWithoutTeamInput
    categoryDistribution?: CategoryDistributionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutScoreDistributionInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutScoreDistributionInput, teamUncheckedCreateWithoutScoreDistributionInput>
  }

  export type teamUpsertWithoutScoreDistributionInput = {
    update: XOR<teamUpdateWithoutScoreDistributionInput, teamUncheckedUpdateWithoutScoreDistributionInput>
    create: XOR<teamCreateWithoutScoreDistributionInput, teamUncheckedCreateWithoutScoreDistributionInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutScoreDistributionInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutScoreDistributionInput, teamUncheckedUpdateWithoutScoreDistributionInput>
  }

  export type teamUpdateWithoutScoreDistributionInput = {
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUpdateManyWithoutTeamNestedInput
    activities?: activityUpdateManyWithoutTeam_relationNestedInput
    rankings?: RankingTeamUpdateManyWithoutTeamNestedInput
    participantRankings?: RankingParticipantUpdateManyWithoutTeamNestedInput
    scoreHistory?: TeamScoreHistoryUpdateManyWithoutTeamNestedInput
    categoryDistribution?: CategoryDistributionUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutScoreDistributionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUncheckedUpdateManyWithoutTeamNestedInput
    activities?: activityUncheckedUpdateManyWithoutTeam_relationNestedInput
    rankings?: RankingTeamUncheckedUpdateManyWithoutTeamNestedInput
    participantRankings?: RankingParticipantUncheckedUpdateManyWithoutTeamNestedInput
    scoreHistory?: TeamScoreHistoryUncheckedUpdateManyWithoutTeamNestedInput
    categoryDistribution?: CategoryDistributionUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type teamCreateWithoutCategoryDistributionInput = {
    name: string
    participants?: participantCreateNestedManyWithoutTeamInput
    activities?: activityCreateNestedManyWithoutTeam_relationInput
    rankings?: RankingTeamCreateNestedManyWithoutTeamInput
    participantRankings?: RankingParticipantCreateNestedManyWithoutTeamInput
    scoreHistory?: TeamScoreHistoryCreateNestedManyWithoutTeamInput
    scoreDistribution?: TeamScoreDistributionCreateNestedManyWithoutTeamInput
  }

  export type teamUncheckedCreateWithoutCategoryDistributionInput = {
    id?: number
    name: string
    participants?: participantUncheckedCreateNestedManyWithoutTeamInput
    activities?: activityUncheckedCreateNestedManyWithoutTeam_relationInput
    rankings?: RankingTeamUncheckedCreateNestedManyWithoutTeamInput
    participantRankings?: RankingParticipantUncheckedCreateNestedManyWithoutTeamInput
    scoreHistory?: TeamScoreHistoryUncheckedCreateNestedManyWithoutTeamInput
    scoreDistribution?: TeamScoreDistributionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type teamCreateOrConnectWithoutCategoryDistributionInput = {
    where: teamWhereUniqueInput
    create: XOR<teamCreateWithoutCategoryDistributionInput, teamUncheckedCreateWithoutCategoryDistributionInput>
  }

  export type teamUpsertWithoutCategoryDistributionInput = {
    update: XOR<teamUpdateWithoutCategoryDistributionInput, teamUncheckedUpdateWithoutCategoryDistributionInput>
    create: XOR<teamCreateWithoutCategoryDistributionInput, teamUncheckedCreateWithoutCategoryDistributionInput>
    where?: teamWhereInput
  }

  export type teamUpdateToOneWithWhereWithoutCategoryDistributionInput = {
    where?: teamWhereInput
    data: XOR<teamUpdateWithoutCategoryDistributionInput, teamUncheckedUpdateWithoutCategoryDistributionInput>
  }

  export type teamUpdateWithoutCategoryDistributionInput = {
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUpdateManyWithoutTeamNestedInput
    activities?: activityUpdateManyWithoutTeam_relationNestedInput
    rankings?: RankingTeamUpdateManyWithoutTeamNestedInput
    participantRankings?: RankingParticipantUpdateManyWithoutTeamNestedInput
    scoreHistory?: TeamScoreHistoryUpdateManyWithoutTeamNestedInput
    scoreDistribution?: TeamScoreDistributionUpdateManyWithoutTeamNestedInput
  }

  export type teamUncheckedUpdateWithoutCategoryDistributionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    participants?: participantUncheckedUpdateManyWithoutTeamNestedInput
    activities?: activityUncheckedUpdateManyWithoutTeam_relationNestedInput
    rankings?: RankingTeamUncheckedUpdateManyWithoutTeamNestedInput
    participantRankings?: RankingParticipantUncheckedUpdateManyWithoutTeamNestedInput
    scoreHistory?: TeamScoreHistoryUncheckedUpdateManyWithoutTeamNestedInput
    scoreDistribution?: TeamScoreDistributionUncheckedUpdateManyWithoutTeamNestedInput
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

  export type RankingTeamCreateManyTeamInput = {
    id?: number
    teamName: string
    scoreTotal: number
    rankingPosition: number
    rankingVariation?: number | null
    scoreDiff?: number | null
    generatedAt?: Date | string
  }

  export type RankingParticipantCreateManyTeamInput = {
    id?: number
    participantId: string
    participantName: string
    scoreTotal: number
    rankingPosition: number
    rankingVariation?: number | null
    scoreDiff?: number | null
    generatedAt?: Date | string
  }

  export type TeamScoreHistoryCreateManyTeamInput = {
    id?: number
    score: number
    date?: Date | string
  }

  export type TeamScoreDistributionCreateManyTeamInput = {
    id?: number
    scoreTotal: number
    percentage: number
  }

  export type CategoryDistributionCreateManyTeamInput = {
    id?: number
    category: string
    totalScore: number
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
    scoreChanges?: ScoreChangeHistoryUpdateManyWithoutActivityNestedInput
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
    scoreChanges?: ScoreChangeHistoryUncheckedUpdateManyWithoutActivityNestedInput
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

  export type RankingTeamUpdateWithoutTeamInput = {
    teamName?: StringFieldUpdateOperationsInput | string
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    rankingPosition?: IntFieldUpdateOperationsInput | number
    rankingVariation?: NullableIntFieldUpdateOperationsInput | number | null
    scoreDiff?: NullableFloatFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingTeamUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    rankingPosition?: IntFieldUpdateOperationsInput | number
    rankingVariation?: NullableIntFieldUpdateOperationsInput | number | null
    scoreDiff?: NullableFloatFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingTeamUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamName?: StringFieldUpdateOperationsInput | string
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    rankingPosition?: IntFieldUpdateOperationsInput | number
    rankingVariation?: NullableIntFieldUpdateOperationsInput | number | null
    scoreDiff?: NullableFloatFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingParticipantUpdateWithoutTeamInput = {
    participantId?: StringFieldUpdateOperationsInput | string
    participantName?: StringFieldUpdateOperationsInput | string
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    rankingPosition?: IntFieldUpdateOperationsInput | number
    rankingVariation?: NullableIntFieldUpdateOperationsInput | number | null
    scoreDiff?: NullableFloatFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingParticipantUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: StringFieldUpdateOperationsInput | string
    participantName?: StringFieldUpdateOperationsInput | string
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    rankingPosition?: IntFieldUpdateOperationsInput | number
    rankingVariation?: NullableIntFieldUpdateOperationsInput | number | null
    scoreDiff?: NullableFloatFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RankingParticipantUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    participantId?: StringFieldUpdateOperationsInput | string
    participantName?: StringFieldUpdateOperationsInput | string
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    rankingPosition?: IntFieldUpdateOperationsInput | number
    rankingVariation?: NullableIntFieldUpdateOperationsInput | number | null
    scoreDiff?: NullableFloatFieldUpdateOperationsInput | number | null
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamScoreHistoryUpdateWithoutTeamInput = {
    score?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamScoreHistoryUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamScoreHistoryUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamScoreDistributionUpdateWithoutTeamInput = {
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
  }

  export type TeamScoreDistributionUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
  }

  export type TeamScoreDistributionUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    scoreTotal?: FloatFieldUpdateOperationsInput | number
    percentage?: FloatFieldUpdateOperationsInput | number
  }

  export type CategoryDistributionUpdateWithoutTeamInput = {
    category?: StringFieldUpdateOperationsInput | string
    totalScore?: FloatFieldUpdateOperationsInput | number
  }

  export type CategoryDistributionUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    totalScore?: FloatFieldUpdateOperationsInput | number
  }

  export type CategoryDistributionUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    totalScore?: FloatFieldUpdateOperationsInput | number
  }

  export type ScoreChangeHistoryCreateManyActivityInput = {
    id?: string
    old_base_score: number
    old_multiplier: number
    new_base_score: number
    new_multiplier: number
    change_reason: string
    changed_at: Date | string
    createdAt?: Date | string
  }

  export type ScoreChangeHistoryUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    old_base_score?: FloatFieldUpdateOperationsInput | number
    old_multiplier?: FloatFieldUpdateOperationsInput | number
    new_base_score?: FloatFieldUpdateOperationsInput | number
    new_multiplier?: FloatFieldUpdateOperationsInput | number
    change_reason?: StringFieldUpdateOperationsInput | string
    changed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreChangeHistoryUncheckedUpdateWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    old_base_score?: FloatFieldUpdateOperationsInput | number
    old_multiplier?: FloatFieldUpdateOperationsInput | number
    new_base_score?: FloatFieldUpdateOperationsInput | number
    new_multiplier?: FloatFieldUpdateOperationsInput | number
    change_reason?: StringFieldUpdateOperationsInput | string
    changed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScoreChangeHistoryUncheckedUpdateManyWithoutActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    old_base_score?: FloatFieldUpdateOperationsInput | number
    old_multiplier?: FloatFieldUpdateOperationsInput | number
    new_base_score?: FloatFieldUpdateOperationsInput | number
    new_multiplier?: FloatFieldUpdateOperationsInput | number
    change_reason?: StringFieldUpdateOperationsInput | string
    changed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    scoreChanges?: ScoreChangeHistoryUpdateManyWithoutActivityNestedInput
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
    scoreChanges?: ScoreChangeHistoryUncheckedUpdateManyWithoutActivityNestedInput
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