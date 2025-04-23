
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model MessageGroupGlobalChat
 * 
 */
export type MessageGroupGlobalChat = $Result.DefaultSelection<Prisma.$MessageGroupGlobalChatPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model GlobalChat
 * 
 */
export type GlobalChat = $Result.DefaultSelection<Prisma.$GlobalChatPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  GUEST: 'GUEST'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Presence: {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE'
};

export type Presence = (typeof Presence)[keyof typeof Presence]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Presence = $Enums.Presence

export const Presence: typeof $Enums.Presence

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messageGroupGlobalChat`: Exposes CRUD operations for the **MessageGroupGlobalChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageGroupGlobalChats
    * const messageGroupGlobalChats = await prisma.messageGroupGlobalChat.findMany()
    * ```
    */
  get messageGroupGlobalChat(): Prisma.MessageGroupGlobalChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.globalChat`: Exposes CRUD operations for the **GlobalChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GlobalChats
    * const globalChats = await prisma.globalChat.findMany()
    * ```
    */
  get globalChat(): Prisma.GlobalChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Chat: 'Chat',
    Message: 'Message',
    MessageGroupGlobalChat: 'MessageGroupGlobalChat',
    Group: 'Group',
    GlobalChat: 'GlobalChat',
    Session: 'Session'
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
      modelProps: "user" | "chat" | "message" | "messageGroupGlobalChat" | "group" | "globalChat" | "session"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      MessageGroupGlobalChat: {
        payload: Prisma.$MessageGroupGlobalChatPayload<ExtArgs>
        fields: Prisma.MessageGroupGlobalChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageGroupGlobalChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupGlobalChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageGroupGlobalChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupGlobalChatPayload>
          }
          findFirst: {
            args: Prisma.MessageGroupGlobalChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupGlobalChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageGroupGlobalChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupGlobalChatPayload>
          }
          findMany: {
            args: Prisma.MessageGroupGlobalChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupGlobalChatPayload>[]
          }
          create: {
            args: Prisma.MessageGroupGlobalChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupGlobalChatPayload>
          }
          createMany: {
            args: Prisma.MessageGroupGlobalChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageGroupGlobalChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupGlobalChatPayload>[]
          }
          delete: {
            args: Prisma.MessageGroupGlobalChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupGlobalChatPayload>
          }
          update: {
            args: Prisma.MessageGroupGlobalChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupGlobalChatPayload>
          }
          deleteMany: {
            args: Prisma.MessageGroupGlobalChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageGroupGlobalChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageGroupGlobalChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupGlobalChatPayload>[]
          }
          upsert: {
            args: Prisma.MessageGroupGlobalChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessageGroupGlobalChatPayload>
          }
          aggregate: {
            args: Prisma.MessageGroupGlobalChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessageGroupGlobalChat>
          }
          groupBy: {
            args: Prisma.MessageGroupGlobalChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupGlobalChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageGroupGlobalChatCountArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupGlobalChatCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GlobalChat: {
        payload: Prisma.$GlobalChatPayload<ExtArgs>
        fields: Prisma.GlobalChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GlobalChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GlobalChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatPayload>
          }
          findFirst: {
            args: Prisma.GlobalChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GlobalChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatPayload>
          }
          findMany: {
            args: Prisma.GlobalChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatPayload>[]
          }
          create: {
            args: Prisma.GlobalChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatPayload>
          }
          createMany: {
            args: Prisma.GlobalChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GlobalChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatPayload>[]
          }
          delete: {
            args: Prisma.GlobalChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatPayload>
          }
          update: {
            args: Prisma.GlobalChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatPayload>
          }
          deleteMany: {
            args: Prisma.GlobalChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GlobalChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GlobalChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatPayload>[]
          }
          upsert: {
            args: Prisma.GlobalChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GlobalChatPayload>
          }
          aggregate: {
            args: Prisma.GlobalChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGlobalChat>
          }
          groupBy: {
            args: Prisma.GlobalChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<GlobalChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.GlobalChatCountArgs<ExtArgs>
            result: $Utils.Optional<GlobalChatCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
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
    user?: UserOmit
    chat?: ChatOmit
    message?: MessageOmit
    messageGroupGlobalChat?: MessageGroupGlobalChatOmit
    group?: GroupOmit
    globalChat?: GlobalChatOmit
    session?: SessionOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    senderChat: number
    receiverChat: number
    senderMessage: number
    receiverMessage: number
    messagesGGChat: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderChat?: boolean | UserCountOutputTypeCountSenderChatArgs
    receiverChat?: boolean | UserCountOutputTypeCountReceiverChatArgs
    senderMessage?: boolean | UserCountOutputTypeCountSenderMessageArgs
    receiverMessage?: boolean | UserCountOutputTypeCountReceiverMessageArgs
    messagesGGChat?: boolean | UserCountOutputTypeCountMessagesGGChatArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSenderChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceiverChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSenderMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceiverMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesGGChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageGroupGlobalChatWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    messages: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    users: number
    messagesGGChat: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | GroupCountOutputTypeCountUsersArgs
    messagesGGChat?: boolean | GroupCountOutputTypeCountMessagesGGChatArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMessagesGGChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageGroupGlobalChatWhereInput
  }


  /**
   * Count Type GlobalChatCountOutputType
   */

  export type GlobalChatCountOutputType = {
    users: number
    messagesGGChat: number
  }

  export type GlobalChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | GlobalChatCountOutputTypeCountUsersArgs
    messagesGGChat?: boolean | GlobalChatCountOutputTypeCountMessagesGGChatArgs
  }

  // Custom InputTypes
  /**
   * GlobalChatCountOutputType without action
   */
  export type GlobalChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChatCountOutputType
     */
    select?: GlobalChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GlobalChatCountOutputType without action
   */
  export type GlobalChatCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * GlobalChatCountOutputType without action
   */
  export type GlobalChatCountOutputTypeCountMessagesGGChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageGroupGlobalChatWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    username: string | null
    password: string | null
    confirm_password: string | null
    bio: string | null
    profile_picture: string | null
    background_picture: string | null
    online_presence: $Enums.Presence | null
    role: $Enums.Role | null
    groupId: string | null
    globalChatId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    username: string | null
    password: string | null
    confirm_password: string | null
    bio: string | null
    profile_picture: string | null
    background_picture: string | null
    online_presence: $Enums.Presence | null
    role: $Enums.Role | null
    groupId: string | null
    globalChatId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    username: number
    password: number
    confirm_password: number
    bio: number
    profile_picture: number
    background_picture: number
    online_presence: number
    role: number
    groupId: number
    globalChatId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    username?: true
    password?: true
    confirm_password?: true
    bio?: true
    profile_picture?: true
    background_picture?: true
    online_presence?: true
    role?: true
    groupId?: true
    globalChatId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    username?: true
    password?: true
    confirm_password?: true
    bio?: true
    profile_picture?: true
    background_picture?: true
    online_presence?: true
    role?: true
    groupId?: true
    globalChatId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    username?: true
    password?: true
    confirm_password?: true
    bio?: true
    profile_picture?: true
    background_picture?: true
    online_presence?: true
    role?: true
    groupId?: true
    globalChatId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio: string | null
    profile_picture: string
    background_picture: string
    online_presence: $Enums.Presence
    role: $Enums.Role
    groupId: string | null
    globalChatId: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    password?: boolean
    confirm_password?: boolean
    bio?: boolean
    profile_picture?: boolean
    background_picture?: boolean
    online_presence?: boolean
    role?: boolean
    groupId?: boolean
    globalChatId?: boolean
    senderChat?: boolean | User$senderChatArgs<ExtArgs>
    receiverChat?: boolean | User$receiverChatArgs<ExtArgs>
    senderMessage?: boolean | User$senderMessageArgs<ExtArgs>
    receiverMessage?: boolean | User$receiverMessageArgs<ExtArgs>
    messagesGGChat?: boolean | User$messagesGGChatArgs<ExtArgs>
    group?: boolean | User$groupArgs<ExtArgs>
    globalChat?: boolean | User$globalChatArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    password?: boolean
    confirm_password?: boolean
    bio?: boolean
    profile_picture?: boolean
    background_picture?: boolean
    online_presence?: boolean
    role?: boolean
    groupId?: boolean
    globalChatId?: boolean
    group?: boolean | User$groupArgs<ExtArgs>
    globalChat?: boolean | User$globalChatArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    password?: boolean
    confirm_password?: boolean
    bio?: boolean
    profile_picture?: boolean
    background_picture?: boolean
    online_presence?: boolean
    role?: boolean
    groupId?: boolean
    globalChatId?: boolean
    group?: boolean | User$groupArgs<ExtArgs>
    globalChat?: boolean | User$globalChatArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    username?: boolean
    password?: boolean
    confirm_password?: boolean
    bio?: boolean
    profile_picture?: boolean
    background_picture?: boolean
    online_presence?: boolean
    role?: boolean
    groupId?: boolean
    globalChatId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "username" | "password" | "confirm_password" | "bio" | "profile_picture" | "background_picture" | "online_presence" | "role" | "groupId" | "globalChatId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderChat?: boolean | User$senderChatArgs<ExtArgs>
    receiverChat?: boolean | User$receiverChatArgs<ExtArgs>
    senderMessage?: boolean | User$senderMessageArgs<ExtArgs>
    receiverMessage?: boolean | User$receiverMessageArgs<ExtArgs>
    messagesGGChat?: boolean | User$messagesGGChatArgs<ExtArgs>
    group?: boolean | User$groupArgs<ExtArgs>
    globalChat?: boolean | User$globalChatArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | User$groupArgs<ExtArgs>
    globalChat?: boolean | User$globalChatArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | User$groupArgs<ExtArgs>
    globalChat?: boolean | User$globalChatArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      senderChat: Prisma.$ChatPayload<ExtArgs>[]
      receiverChat: Prisma.$ChatPayload<ExtArgs>[]
      senderMessage: Prisma.$MessagePayload<ExtArgs>[]
      receiverMessage: Prisma.$MessagePayload<ExtArgs>[]
      messagesGGChat: Prisma.$MessageGroupGlobalChatPayload<ExtArgs>[]
      group: Prisma.$GroupPayload<ExtArgs> | null
      globalChat: Prisma.$GlobalChatPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      username: string
      password: string
      confirm_password: string
      bio: string | null
      profile_picture: string
      background_picture: string
      online_presence: $Enums.Presence
      role: $Enums.Role
      groupId: string | null
      globalChatId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    senderChat<T extends User$senderChatArgs<ExtArgs> = {}>(args?: Subset<T, User$senderChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receiverChat<T extends User$receiverChatArgs<ExtArgs> = {}>(args?: Subset<T, User$receiverChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    senderMessage<T extends User$senderMessageArgs<ExtArgs> = {}>(args?: Subset<T, User$senderMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receiverMessage<T extends User$receiverMessageArgs<ExtArgs> = {}>(args?: Subset<T, User$receiverMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messagesGGChat<T extends User$messagesGGChatArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesGGChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageGroupGlobalChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    group<T extends User$groupArgs<ExtArgs> = {}>(args?: Subset<T, User$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    globalChat<T extends User$globalChatArgs<ExtArgs> = {}>(args?: Subset<T, User$globalChatArgs<ExtArgs>>): Prisma__GlobalChatClient<$Result.GetResult<Prisma.$GlobalChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly confirm_password: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly profile_picture: FieldRef<"User", 'String'>
    readonly background_picture: FieldRef<"User", 'String'>
    readonly online_presence: FieldRef<"User", 'Presence'>
    readonly role: FieldRef<"User", 'Role'>
    readonly groupId: FieldRef<"User", 'String'>
    readonly globalChatId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.senderChat
   */
  export type User$senderChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.receiverChat
   */
  export type User$receiverChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.senderMessage
   */
  export type User$senderMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.receiverMessage
   */
  export type User$receiverMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.messagesGGChat
   */
  export type User$messagesGGChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupGlobalChat
     */
    select?: MessageGroupGlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupGlobalChat
     */
    omit?: MessageGroupGlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupGlobalChatInclude<ExtArgs> | null
    where?: MessageGroupGlobalChatWhereInput
    orderBy?: MessageGroupGlobalChatOrderByWithRelationInput | MessageGroupGlobalChatOrderByWithRelationInput[]
    cursor?: MessageGroupGlobalChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageGroupGlobalChatScalarFieldEnum | MessageGroupGlobalChatScalarFieldEnum[]
  }

  /**
   * User.group
   */
  export type User$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * User.globalChat
   */
  export type User$globalChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChat
     */
    select?: GlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChat
     */
    omit?: GlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatInclude<ExtArgs> | null
    where?: GlobalChatWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatAvgAggregateOutputType = {
    senderChatId: number | null
    receiverChatId: number | null
  }

  export type ChatSumAggregateOutputType = {
    senderChatId: number | null
    receiverChatId: number | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    senderChatId: number | null
    receiverChatId: number | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    senderChatId: number | null
    receiverChatId: number | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    senderChatId: number
    receiverChatId: number
    _all: number
  }


  export type ChatAvgAggregateInputType = {
    senderChatId?: true
    receiverChatId?: true
  }

  export type ChatSumAggregateInputType = {
    senderChatId?: true
    receiverChatId?: true
  }

  export type ChatMinAggregateInputType = {
    id?: true
    senderChatId?: true
    receiverChatId?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    senderChatId?: true
    receiverChatId?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    senderChatId?: true
    receiverChatId?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _avg?: ChatAvgAggregateInputType
    _sum?: ChatSumAggregateInputType
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    senderChatId: number
    receiverChatId: number
    _count: ChatCountAggregateOutputType | null
    _avg: ChatAvgAggregateOutputType | null
    _sum: ChatSumAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderChatId?: boolean
    receiverChatId?: boolean
    senderChat?: boolean | UserDefaultArgs<ExtArgs>
    receiverChat?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderChatId?: boolean
    receiverChatId?: boolean
    senderChat?: boolean | UserDefaultArgs<ExtArgs>
    receiverChat?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderChatId?: boolean
    receiverChatId?: boolean
    senderChat?: boolean | UserDefaultArgs<ExtArgs>
    receiverChat?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    senderChatId?: boolean
    receiverChatId?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderChatId" | "receiverChatId", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderChat?: boolean | UserDefaultArgs<ExtArgs>
    receiverChat?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderChat?: boolean | UserDefaultArgs<ExtArgs>
    receiverChat?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderChat?: boolean | UserDefaultArgs<ExtArgs>
    receiverChat?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      senderChat: Prisma.$UserPayload<ExtArgs>
      receiverChat: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderChatId: number
      receiverChatId: number
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    senderChat<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiverChat<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly senderChatId: FieldRef<"Chat", 'Int'>
    readonly receiverChatId: FieldRef<"Chat", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    message_imageSize: number | null
    senderMessageId: number | null
    receiverMessageId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    message_imageSize: number | null
    senderMessageId: number | null
    receiverMessageId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    message_text: string | null
    message_imageName: string | null
    message_imageURL: string | null
    message_imageType: string | null
    message_imageSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
    senderMessageId: number | null
    receiverMessageId: number | null
    chatId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    message_text: string | null
    message_imageName: string | null
    message_imageURL: string | null
    message_imageType: string | null
    message_imageSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
    senderMessageId: number | null
    receiverMessageId: number | null
    chatId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    message_text: number
    message_imageName: number
    message_imageURL: number
    message_imageType: number
    message_imageSize: number
    createdAt: number
    updatedAt: number
    senderMessageId: number
    receiverMessageId: number
    chatId: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    message_imageSize?: true
    senderMessageId?: true
    receiverMessageId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    message_imageSize?: true
    senderMessageId?: true
    receiverMessageId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    message_text?: true
    message_imageName?: true
    message_imageURL?: true
    message_imageType?: true
    message_imageSize?: true
    createdAt?: true
    updatedAt?: true
    senderMessageId?: true
    receiverMessageId?: true
    chatId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    message_text?: true
    message_imageName?: true
    message_imageURL?: true
    message_imageType?: true
    message_imageSize?: true
    createdAt?: true
    updatedAt?: true
    senderMessageId?: true
    receiverMessageId?: true
    chatId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    message_text?: true
    message_imageName?: true
    message_imageURL?: true
    message_imageType?: true
    message_imageSize?: true
    createdAt?: true
    updatedAt?: true
    senderMessageId?: true
    receiverMessageId?: true
    chatId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt: Date
    updatedAt: Date
    senderMessageId: number
    receiverMessageId: number
    chatId: string
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_text?: boolean
    message_imageName?: boolean
    message_imageURL?: boolean
    message_imageType?: boolean
    message_imageSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    senderMessageId?: boolean
    receiverMessageId?: boolean
    chatId?: boolean
    senderMessage?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_text?: boolean
    message_imageName?: boolean
    message_imageURL?: boolean
    message_imageType?: boolean
    message_imageSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    senderMessageId?: boolean
    receiverMessageId?: boolean
    chatId?: boolean
    senderMessage?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_text?: boolean
    message_imageName?: boolean
    message_imageURL?: boolean
    message_imageType?: boolean
    message_imageSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    senderMessageId?: boolean
    receiverMessageId?: boolean
    chatId?: boolean
    senderMessage?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    message_text?: boolean
    message_imageName?: boolean
    message_imageURL?: boolean
    message_imageType?: boolean
    message_imageSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    senderMessageId?: boolean
    receiverMessageId?: boolean
    chatId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message_text" | "message_imageName" | "message_imageURL" | "message_imageType" | "message_imageSize" | "createdAt" | "updatedAt" | "senderMessageId" | "receiverMessageId" | "chatId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderMessage?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderMessage?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderMessage?: boolean | UserDefaultArgs<ExtArgs>
    receiverMessage?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      senderMessage: Prisma.$UserPayload<ExtArgs>
      receiverMessage: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message_text: string
      message_imageName: string
      message_imageURL: string
      message_imageType: string
      message_imageSize: number
      createdAt: Date
      updatedAt: Date
      senderMessageId: number
      receiverMessageId: number
      chatId: string
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    senderMessage<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiverMessage<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly message_text: FieldRef<"Message", 'String'>
    readonly message_imageName: FieldRef<"Message", 'String'>
    readonly message_imageURL: FieldRef<"Message", 'String'>
    readonly message_imageType: FieldRef<"Message", 'String'>
    readonly message_imageSize: FieldRef<"Message", 'Int'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
    readonly senderMessageId: FieldRef<"Message", 'Int'>
    readonly receiverMessageId: FieldRef<"Message", 'Int'>
    readonly chatId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model MessageGroupGlobalChat
   */

  export type AggregateMessageGroupGlobalChat = {
    _count: MessageGroupGlobalChatCountAggregateOutputType | null
    _avg: MessageGroupGlobalChatAvgAggregateOutputType | null
    _sum: MessageGroupGlobalChatSumAggregateOutputType | null
    _min: MessageGroupGlobalChatMinAggregateOutputType | null
    _max: MessageGroupGlobalChatMaxAggregateOutputType | null
  }

  export type MessageGroupGlobalChatAvgAggregateOutputType = {
    id: number | null
    message_imageSize: number | null
    userId: number | null
  }

  export type MessageGroupGlobalChatSumAggregateOutputType = {
    id: number | null
    message_imageSize: number | null
    userId: number | null
  }

  export type MessageGroupGlobalChatMinAggregateOutputType = {
    id: number | null
    message_text: string | null
    message_imageName: string | null
    message_imageURL: string | null
    message_imageType: string | null
    message_imageSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    groupId: string | null
    globalChatId: string | null
  }

  export type MessageGroupGlobalChatMaxAggregateOutputType = {
    id: number | null
    message_text: string | null
    message_imageName: string | null
    message_imageURL: string | null
    message_imageType: string | null
    message_imageSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    groupId: string | null
    globalChatId: string | null
  }

  export type MessageGroupGlobalChatCountAggregateOutputType = {
    id: number
    message_text: number
    message_imageName: number
    message_imageURL: number
    message_imageType: number
    message_imageSize: number
    createdAt: number
    updatedAt: number
    userId: number
    groupId: number
    globalChatId: number
    _all: number
  }


  export type MessageGroupGlobalChatAvgAggregateInputType = {
    id?: true
    message_imageSize?: true
    userId?: true
  }

  export type MessageGroupGlobalChatSumAggregateInputType = {
    id?: true
    message_imageSize?: true
    userId?: true
  }

  export type MessageGroupGlobalChatMinAggregateInputType = {
    id?: true
    message_text?: true
    message_imageName?: true
    message_imageURL?: true
    message_imageType?: true
    message_imageSize?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    groupId?: true
    globalChatId?: true
  }

  export type MessageGroupGlobalChatMaxAggregateInputType = {
    id?: true
    message_text?: true
    message_imageName?: true
    message_imageURL?: true
    message_imageType?: true
    message_imageSize?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    groupId?: true
    globalChatId?: true
  }

  export type MessageGroupGlobalChatCountAggregateInputType = {
    id?: true
    message_text?: true
    message_imageName?: true
    message_imageURL?: true
    message_imageType?: true
    message_imageSize?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    groupId?: true
    globalChatId?: true
    _all?: true
  }

  export type MessageGroupGlobalChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageGroupGlobalChat to aggregate.
     */
    where?: MessageGroupGlobalChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageGroupGlobalChats to fetch.
     */
    orderBy?: MessageGroupGlobalChatOrderByWithRelationInput | MessageGroupGlobalChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageGroupGlobalChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageGroupGlobalChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageGroupGlobalChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageGroupGlobalChats
    **/
    _count?: true | MessageGroupGlobalChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageGroupGlobalChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageGroupGlobalChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageGroupGlobalChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageGroupGlobalChatMaxAggregateInputType
  }

  export type GetMessageGroupGlobalChatAggregateType<T extends MessageGroupGlobalChatAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageGroupGlobalChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageGroupGlobalChat[P]>
      : GetScalarType<T[P], AggregateMessageGroupGlobalChat[P]>
  }




  export type MessageGroupGlobalChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageGroupGlobalChatWhereInput
    orderBy?: MessageGroupGlobalChatOrderByWithAggregationInput | MessageGroupGlobalChatOrderByWithAggregationInput[]
    by: MessageGroupGlobalChatScalarFieldEnum[] | MessageGroupGlobalChatScalarFieldEnum
    having?: MessageGroupGlobalChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageGroupGlobalChatCountAggregateInputType | true
    _avg?: MessageGroupGlobalChatAvgAggregateInputType
    _sum?: MessageGroupGlobalChatSumAggregateInputType
    _min?: MessageGroupGlobalChatMinAggregateInputType
    _max?: MessageGroupGlobalChatMaxAggregateInputType
  }

  export type MessageGroupGlobalChatGroupByOutputType = {
    id: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt: Date
    updatedAt: Date
    userId: number
    groupId: string | null
    globalChatId: string | null
    _count: MessageGroupGlobalChatCountAggregateOutputType | null
    _avg: MessageGroupGlobalChatAvgAggregateOutputType | null
    _sum: MessageGroupGlobalChatSumAggregateOutputType | null
    _min: MessageGroupGlobalChatMinAggregateOutputType | null
    _max: MessageGroupGlobalChatMaxAggregateOutputType | null
  }

  type GetMessageGroupGlobalChatGroupByPayload<T extends MessageGroupGlobalChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupGlobalChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupGlobalChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupGlobalChatGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupGlobalChatGroupByOutputType[P]>
        }
      >
    >


  export type MessageGroupGlobalChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_text?: boolean
    message_imageName?: boolean
    message_imageURL?: boolean
    message_imageType?: boolean
    message_imageSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    groupId?: boolean
    globalChatId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | MessageGroupGlobalChat$groupArgs<ExtArgs>
    globalChat?: boolean | MessageGroupGlobalChat$globalChatArgs<ExtArgs>
  }, ExtArgs["result"]["messageGroupGlobalChat"]>

  export type MessageGroupGlobalChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_text?: boolean
    message_imageName?: boolean
    message_imageURL?: boolean
    message_imageType?: boolean
    message_imageSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    groupId?: boolean
    globalChatId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | MessageGroupGlobalChat$groupArgs<ExtArgs>
    globalChat?: boolean | MessageGroupGlobalChat$globalChatArgs<ExtArgs>
  }, ExtArgs["result"]["messageGroupGlobalChat"]>

  export type MessageGroupGlobalChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message_text?: boolean
    message_imageName?: boolean
    message_imageURL?: boolean
    message_imageType?: boolean
    message_imageSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    groupId?: boolean
    globalChatId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | MessageGroupGlobalChat$groupArgs<ExtArgs>
    globalChat?: boolean | MessageGroupGlobalChat$globalChatArgs<ExtArgs>
  }, ExtArgs["result"]["messageGroupGlobalChat"]>

  export type MessageGroupGlobalChatSelectScalar = {
    id?: boolean
    message_text?: boolean
    message_imageName?: boolean
    message_imageURL?: boolean
    message_imageType?: boolean
    message_imageSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    groupId?: boolean
    globalChatId?: boolean
  }

  export type MessageGroupGlobalChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message_text" | "message_imageName" | "message_imageURL" | "message_imageType" | "message_imageSize" | "createdAt" | "updatedAt" | "userId" | "groupId" | "globalChatId", ExtArgs["result"]["messageGroupGlobalChat"]>
  export type MessageGroupGlobalChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | MessageGroupGlobalChat$groupArgs<ExtArgs>
    globalChat?: boolean | MessageGroupGlobalChat$globalChatArgs<ExtArgs>
  }
  export type MessageGroupGlobalChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | MessageGroupGlobalChat$groupArgs<ExtArgs>
    globalChat?: boolean | MessageGroupGlobalChat$globalChatArgs<ExtArgs>
  }
  export type MessageGroupGlobalChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    group?: boolean | MessageGroupGlobalChat$groupArgs<ExtArgs>
    globalChat?: boolean | MessageGroupGlobalChat$globalChatArgs<ExtArgs>
  }

  export type $MessageGroupGlobalChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MessageGroupGlobalChat"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      group: Prisma.$GroupPayload<ExtArgs> | null
      globalChat: Prisma.$GlobalChatPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      message_text: string
      message_imageName: string
      message_imageURL: string
      message_imageType: string
      message_imageSize: number
      createdAt: Date
      updatedAt: Date
      userId: number
      groupId: string | null
      globalChatId: string | null
    }, ExtArgs["result"]["messageGroupGlobalChat"]>
    composites: {}
  }

  type MessageGroupGlobalChatGetPayload<S extends boolean | null | undefined | MessageGroupGlobalChatDefaultArgs> = $Result.GetResult<Prisma.$MessageGroupGlobalChatPayload, S>

  type MessageGroupGlobalChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageGroupGlobalChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageGroupGlobalChatCountAggregateInputType | true
    }

  export interface MessageGroupGlobalChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageGroupGlobalChat'], meta: { name: 'MessageGroupGlobalChat' } }
    /**
     * Find zero or one MessageGroupGlobalChat that matches the filter.
     * @param {MessageGroupGlobalChatFindUniqueArgs} args - Arguments to find a MessageGroupGlobalChat
     * @example
     * // Get one MessageGroupGlobalChat
     * const messageGroupGlobalChat = await prisma.messageGroupGlobalChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageGroupGlobalChatFindUniqueArgs>(args: SelectSubset<T, MessageGroupGlobalChatFindUniqueArgs<ExtArgs>>): Prisma__MessageGroupGlobalChatClient<$Result.GetResult<Prisma.$MessageGroupGlobalChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MessageGroupGlobalChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageGroupGlobalChatFindUniqueOrThrowArgs} args - Arguments to find a MessageGroupGlobalChat
     * @example
     * // Get one MessageGroupGlobalChat
     * const messageGroupGlobalChat = await prisma.messageGroupGlobalChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageGroupGlobalChatFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageGroupGlobalChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageGroupGlobalChatClient<$Result.GetResult<Prisma.$MessageGroupGlobalChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageGroupGlobalChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupGlobalChatFindFirstArgs} args - Arguments to find a MessageGroupGlobalChat
     * @example
     * // Get one MessageGroupGlobalChat
     * const messageGroupGlobalChat = await prisma.messageGroupGlobalChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageGroupGlobalChatFindFirstArgs>(args?: SelectSubset<T, MessageGroupGlobalChatFindFirstArgs<ExtArgs>>): Prisma__MessageGroupGlobalChatClient<$Result.GetResult<Prisma.$MessageGroupGlobalChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MessageGroupGlobalChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupGlobalChatFindFirstOrThrowArgs} args - Arguments to find a MessageGroupGlobalChat
     * @example
     * // Get one MessageGroupGlobalChat
     * const messageGroupGlobalChat = await prisma.messageGroupGlobalChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageGroupGlobalChatFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageGroupGlobalChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageGroupGlobalChatClient<$Result.GetResult<Prisma.$MessageGroupGlobalChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MessageGroupGlobalChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupGlobalChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageGroupGlobalChats
     * const messageGroupGlobalChats = await prisma.messageGroupGlobalChat.findMany()
     * 
     * // Get first 10 MessageGroupGlobalChats
     * const messageGroupGlobalChats = await prisma.messageGroupGlobalChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageGroupGlobalChatWithIdOnly = await prisma.messageGroupGlobalChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageGroupGlobalChatFindManyArgs>(args?: SelectSubset<T, MessageGroupGlobalChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageGroupGlobalChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MessageGroupGlobalChat.
     * @param {MessageGroupGlobalChatCreateArgs} args - Arguments to create a MessageGroupGlobalChat.
     * @example
     * // Create one MessageGroupGlobalChat
     * const MessageGroupGlobalChat = await prisma.messageGroupGlobalChat.create({
     *   data: {
     *     // ... data to create a MessageGroupGlobalChat
     *   }
     * })
     * 
     */
    create<T extends MessageGroupGlobalChatCreateArgs>(args: SelectSubset<T, MessageGroupGlobalChatCreateArgs<ExtArgs>>): Prisma__MessageGroupGlobalChatClient<$Result.GetResult<Prisma.$MessageGroupGlobalChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MessageGroupGlobalChats.
     * @param {MessageGroupGlobalChatCreateManyArgs} args - Arguments to create many MessageGroupGlobalChats.
     * @example
     * // Create many MessageGroupGlobalChats
     * const messageGroupGlobalChat = await prisma.messageGroupGlobalChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageGroupGlobalChatCreateManyArgs>(args?: SelectSubset<T, MessageGroupGlobalChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MessageGroupGlobalChats and returns the data saved in the database.
     * @param {MessageGroupGlobalChatCreateManyAndReturnArgs} args - Arguments to create many MessageGroupGlobalChats.
     * @example
     * // Create many MessageGroupGlobalChats
     * const messageGroupGlobalChat = await prisma.messageGroupGlobalChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MessageGroupGlobalChats and only return the `id`
     * const messageGroupGlobalChatWithIdOnly = await prisma.messageGroupGlobalChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageGroupGlobalChatCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageGroupGlobalChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageGroupGlobalChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MessageGroupGlobalChat.
     * @param {MessageGroupGlobalChatDeleteArgs} args - Arguments to delete one MessageGroupGlobalChat.
     * @example
     * // Delete one MessageGroupGlobalChat
     * const MessageGroupGlobalChat = await prisma.messageGroupGlobalChat.delete({
     *   where: {
     *     // ... filter to delete one MessageGroupGlobalChat
     *   }
     * })
     * 
     */
    delete<T extends MessageGroupGlobalChatDeleteArgs>(args: SelectSubset<T, MessageGroupGlobalChatDeleteArgs<ExtArgs>>): Prisma__MessageGroupGlobalChatClient<$Result.GetResult<Prisma.$MessageGroupGlobalChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MessageGroupGlobalChat.
     * @param {MessageGroupGlobalChatUpdateArgs} args - Arguments to update one MessageGroupGlobalChat.
     * @example
     * // Update one MessageGroupGlobalChat
     * const messageGroupGlobalChat = await prisma.messageGroupGlobalChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageGroupGlobalChatUpdateArgs>(args: SelectSubset<T, MessageGroupGlobalChatUpdateArgs<ExtArgs>>): Prisma__MessageGroupGlobalChatClient<$Result.GetResult<Prisma.$MessageGroupGlobalChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MessageGroupGlobalChats.
     * @param {MessageGroupGlobalChatDeleteManyArgs} args - Arguments to filter MessageGroupGlobalChats to delete.
     * @example
     * // Delete a few MessageGroupGlobalChats
     * const { count } = await prisma.messageGroupGlobalChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageGroupGlobalChatDeleteManyArgs>(args?: SelectSubset<T, MessageGroupGlobalChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageGroupGlobalChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupGlobalChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageGroupGlobalChats
     * const messageGroupGlobalChat = await prisma.messageGroupGlobalChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageGroupGlobalChatUpdateManyArgs>(args: SelectSubset<T, MessageGroupGlobalChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageGroupGlobalChats and returns the data updated in the database.
     * @param {MessageGroupGlobalChatUpdateManyAndReturnArgs} args - Arguments to update many MessageGroupGlobalChats.
     * @example
     * // Update many MessageGroupGlobalChats
     * const messageGroupGlobalChat = await prisma.messageGroupGlobalChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MessageGroupGlobalChats and only return the `id`
     * const messageGroupGlobalChatWithIdOnly = await prisma.messageGroupGlobalChat.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageGroupGlobalChatUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageGroupGlobalChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageGroupGlobalChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MessageGroupGlobalChat.
     * @param {MessageGroupGlobalChatUpsertArgs} args - Arguments to update or create a MessageGroupGlobalChat.
     * @example
     * // Update or create a MessageGroupGlobalChat
     * const messageGroupGlobalChat = await prisma.messageGroupGlobalChat.upsert({
     *   create: {
     *     // ... data to create a MessageGroupGlobalChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageGroupGlobalChat we want to update
     *   }
     * })
     */
    upsert<T extends MessageGroupGlobalChatUpsertArgs>(args: SelectSubset<T, MessageGroupGlobalChatUpsertArgs<ExtArgs>>): Prisma__MessageGroupGlobalChatClient<$Result.GetResult<Prisma.$MessageGroupGlobalChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MessageGroupGlobalChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupGlobalChatCountArgs} args - Arguments to filter MessageGroupGlobalChats to count.
     * @example
     * // Count the number of MessageGroupGlobalChats
     * const count = await prisma.messageGroupGlobalChat.count({
     *   where: {
     *     // ... the filter for the MessageGroupGlobalChats we want to count
     *   }
     * })
    **/
    count<T extends MessageGroupGlobalChatCountArgs>(
      args?: Subset<T, MessageGroupGlobalChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageGroupGlobalChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageGroupGlobalChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupGlobalChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageGroupGlobalChatAggregateArgs>(args: Subset<T, MessageGroupGlobalChatAggregateArgs>): Prisma.PrismaPromise<GetMessageGroupGlobalChatAggregateType<T>>

    /**
     * Group by MessageGroupGlobalChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupGlobalChatGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupGlobalChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupGlobalChatGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupGlobalChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupGlobalChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupGlobalChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageGroupGlobalChat model
   */
  readonly fields: MessageGroupGlobalChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageGroupGlobalChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageGroupGlobalChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    group<T extends MessageGroupGlobalChat$groupArgs<ExtArgs> = {}>(args?: Subset<T, MessageGroupGlobalChat$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    globalChat<T extends MessageGroupGlobalChat$globalChatArgs<ExtArgs> = {}>(args?: Subset<T, MessageGroupGlobalChat$globalChatArgs<ExtArgs>>): Prisma__GlobalChatClient<$Result.GetResult<Prisma.$GlobalChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MessageGroupGlobalChat model
   */
  interface MessageGroupGlobalChatFieldRefs {
    readonly id: FieldRef<"MessageGroupGlobalChat", 'Int'>
    readonly message_text: FieldRef<"MessageGroupGlobalChat", 'String'>
    readonly message_imageName: FieldRef<"MessageGroupGlobalChat", 'String'>
    readonly message_imageURL: FieldRef<"MessageGroupGlobalChat", 'String'>
    readonly message_imageType: FieldRef<"MessageGroupGlobalChat", 'String'>
    readonly message_imageSize: FieldRef<"MessageGroupGlobalChat", 'Int'>
    readonly createdAt: FieldRef<"MessageGroupGlobalChat", 'DateTime'>
    readonly updatedAt: FieldRef<"MessageGroupGlobalChat", 'DateTime'>
    readonly userId: FieldRef<"MessageGroupGlobalChat", 'Int'>
    readonly groupId: FieldRef<"MessageGroupGlobalChat", 'String'>
    readonly globalChatId: FieldRef<"MessageGroupGlobalChat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MessageGroupGlobalChat findUnique
   */
  export type MessageGroupGlobalChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupGlobalChat
     */
    select?: MessageGroupGlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupGlobalChat
     */
    omit?: MessageGroupGlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupGlobalChatInclude<ExtArgs> | null
    /**
     * Filter, which MessageGroupGlobalChat to fetch.
     */
    where: MessageGroupGlobalChatWhereUniqueInput
  }

  /**
   * MessageGroupGlobalChat findUniqueOrThrow
   */
  export type MessageGroupGlobalChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupGlobalChat
     */
    select?: MessageGroupGlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupGlobalChat
     */
    omit?: MessageGroupGlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupGlobalChatInclude<ExtArgs> | null
    /**
     * Filter, which MessageGroupGlobalChat to fetch.
     */
    where: MessageGroupGlobalChatWhereUniqueInput
  }

  /**
   * MessageGroupGlobalChat findFirst
   */
  export type MessageGroupGlobalChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupGlobalChat
     */
    select?: MessageGroupGlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupGlobalChat
     */
    omit?: MessageGroupGlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupGlobalChatInclude<ExtArgs> | null
    /**
     * Filter, which MessageGroupGlobalChat to fetch.
     */
    where?: MessageGroupGlobalChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageGroupGlobalChats to fetch.
     */
    orderBy?: MessageGroupGlobalChatOrderByWithRelationInput | MessageGroupGlobalChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageGroupGlobalChats.
     */
    cursor?: MessageGroupGlobalChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageGroupGlobalChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageGroupGlobalChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageGroupGlobalChats.
     */
    distinct?: MessageGroupGlobalChatScalarFieldEnum | MessageGroupGlobalChatScalarFieldEnum[]
  }

  /**
   * MessageGroupGlobalChat findFirstOrThrow
   */
  export type MessageGroupGlobalChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupGlobalChat
     */
    select?: MessageGroupGlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupGlobalChat
     */
    omit?: MessageGroupGlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupGlobalChatInclude<ExtArgs> | null
    /**
     * Filter, which MessageGroupGlobalChat to fetch.
     */
    where?: MessageGroupGlobalChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageGroupGlobalChats to fetch.
     */
    orderBy?: MessageGroupGlobalChatOrderByWithRelationInput | MessageGroupGlobalChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageGroupGlobalChats.
     */
    cursor?: MessageGroupGlobalChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageGroupGlobalChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageGroupGlobalChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageGroupGlobalChats.
     */
    distinct?: MessageGroupGlobalChatScalarFieldEnum | MessageGroupGlobalChatScalarFieldEnum[]
  }

  /**
   * MessageGroupGlobalChat findMany
   */
  export type MessageGroupGlobalChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupGlobalChat
     */
    select?: MessageGroupGlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupGlobalChat
     */
    omit?: MessageGroupGlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupGlobalChatInclude<ExtArgs> | null
    /**
     * Filter, which MessageGroupGlobalChats to fetch.
     */
    where?: MessageGroupGlobalChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageGroupGlobalChats to fetch.
     */
    orderBy?: MessageGroupGlobalChatOrderByWithRelationInput | MessageGroupGlobalChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageGroupGlobalChats.
     */
    cursor?: MessageGroupGlobalChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageGroupGlobalChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageGroupGlobalChats.
     */
    skip?: number
    distinct?: MessageGroupGlobalChatScalarFieldEnum | MessageGroupGlobalChatScalarFieldEnum[]
  }

  /**
   * MessageGroupGlobalChat create
   */
  export type MessageGroupGlobalChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupGlobalChat
     */
    select?: MessageGroupGlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupGlobalChat
     */
    omit?: MessageGroupGlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupGlobalChatInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageGroupGlobalChat.
     */
    data: XOR<MessageGroupGlobalChatCreateInput, MessageGroupGlobalChatUncheckedCreateInput>
  }

  /**
   * MessageGroupGlobalChat createMany
   */
  export type MessageGroupGlobalChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageGroupGlobalChats.
     */
    data: MessageGroupGlobalChatCreateManyInput | MessageGroupGlobalChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MessageGroupGlobalChat createManyAndReturn
   */
  export type MessageGroupGlobalChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupGlobalChat
     */
    select?: MessageGroupGlobalChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupGlobalChat
     */
    omit?: MessageGroupGlobalChatOmit<ExtArgs> | null
    /**
     * The data used to create many MessageGroupGlobalChats.
     */
    data: MessageGroupGlobalChatCreateManyInput | MessageGroupGlobalChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupGlobalChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageGroupGlobalChat update
   */
  export type MessageGroupGlobalChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupGlobalChat
     */
    select?: MessageGroupGlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupGlobalChat
     */
    omit?: MessageGroupGlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupGlobalChatInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageGroupGlobalChat.
     */
    data: XOR<MessageGroupGlobalChatUpdateInput, MessageGroupGlobalChatUncheckedUpdateInput>
    /**
     * Choose, which MessageGroupGlobalChat to update.
     */
    where: MessageGroupGlobalChatWhereUniqueInput
  }

  /**
   * MessageGroupGlobalChat updateMany
   */
  export type MessageGroupGlobalChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageGroupGlobalChats.
     */
    data: XOR<MessageGroupGlobalChatUpdateManyMutationInput, MessageGroupGlobalChatUncheckedUpdateManyInput>
    /**
     * Filter which MessageGroupGlobalChats to update
     */
    where?: MessageGroupGlobalChatWhereInput
    /**
     * Limit how many MessageGroupGlobalChats to update.
     */
    limit?: number
  }

  /**
   * MessageGroupGlobalChat updateManyAndReturn
   */
  export type MessageGroupGlobalChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupGlobalChat
     */
    select?: MessageGroupGlobalChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupGlobalChat
     */
    omit?: MessageGroupGlobalChatOmit<ExtArgs> | null
    /**
     * The data used to update MessageGroupGlobalChats.
     */
    data: XOR<MessageGroupGlobalChatUpdateManyMutationInput, MessageGroupGlobalChatUncheckedUpdateManyInput>
    /**
     * Filter which MessageGroupGlobalChats to update
     */
    where?: MessageGroupGlobalChatWhereInput
    /**
     * Limit how many MessageGroupGlobalChats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupGlobalChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MessageGroupGlobalChat upsert
   */
  export type MessageGroupGlobalChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupGlobalChat
     */
    select?: MessageGroupGlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupGlobalChat
     */
    omit?: MessageGroupGlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupGlobalChatInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageGroupGlobalChat to update in case it exists.
     */
    where: MessageGroupGlobalChatWhereUniqueInput
    /**
     * In case the MessageGroupGlobalChat found by the `where` argument doesn't exist, create a new MessageGroupGlobalChat with this data.
     */
    create: XOR<MessageGroupGlobalChatCreateInput, MessageGroupGlobalChatUncheckedCreateInput>
    /**
     * In case the MessageGroupGlobalChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageGroupGlobalChatUpdateInput, MessageGroupGlobalChatUncheckedUpdateInput>
  }

  /**
   * MessageGroupGlobalChat delete
   */
  export type MessageGroupGlobalChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupGlobalChat
     */
    select?: MessageGroupGlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupGlobalChat
     */
    omit?: MessageGroupGlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupGlobalChatInclude<ExtArgs> | null
    /**
     * Filter which MessageGroupGlobalChat to delete.
     */
    where: MessageGroupGlobalChatWhereUniqueInput
  }

  /**
   * MessageGroupGlobalChat deleteMany
   */
  export type MessageGroupGlobalChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageGroupGlobalChats to delete
     */
    where?: MessageGroupGlobalChatWhereInput
    /**
     * Limit how many MessageGroupGlobalChats to delete.
     */
    limit?: number
  }

  /**
   * MessageGroupGlobalChat.group
   */
  export type MessageGroupGlobalChat$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * MessageGroupGlobalChat.globalChat
   */
  export type MessageGroupGlobalChat$globalChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChat
     */
    select?: GlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChat
     */
    omit?: GlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatInclude<ExtArgs> | null
    where?: GlobalChatWhereInput
  }

  /**
   * MessageGroupGlobalChat without action
   */
  export type MessageGroupGlobalChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupGlobalChat
     */
    select?: MessageGroupGlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupGlobalChat
     */
    omit?: MessageGroupGlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupGlobalChatInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    group_creatorId: number | null
  }

  export type GroupSumAggregateOutputType = {
    group_creatorId: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    group_name: string | null
    group_image: string | null
    group_creatorId: number | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    group_name: string | null
    group_image: string | null
    group_creatorId: number | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    group_name: number
    group_image: number
    group_creatorId: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    group_creatorId?: true
  }

  export type GroupSumAggregateInputType = {
    group_creatorId?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    group_name?: true
    group_image?: true
    group_creatorId?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    group_name?: true
    group_image?: true
    group_creatorId?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    group_name?: true
    group_image?: true
    group_creatorId?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    group_name: string
    group_image: string
    group_creatorId: number
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_name?: boolean
    group_image?: boolean
    group_creatorId?: boolean
    users?: boolean | Group$usersArgs<ExtArgs>
    messagesGGChat?: boolean | Group$messagesGGChatArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_name?: boolean
    group_image?: boolean
    group_creatorId?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group_name?: boolean
    group_image?: boolean
    group_creatorId?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    group_name?: boolean
    group_image?: boolean
    group_creatorId?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "group_name" | "group_image" | "group_creatorId", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Group$usersArgs<ExtArgs>
    messagesGGChat?: boolean | Group$messagesGGChatArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      messagesGGChat: Prisma.$MessageGroupGlobalChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      group_name: string
      group_image: string
      group_creatorId: number
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Group$usersArgs<ExtArgs> = {}>(args?: Subset<T, Group$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messagesGGChat<T extends Group$messagesGGChatArgs<ExtArgs> = {}>(args?: Subset<T, Group$messagesGGChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageGroupGlobalChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly group_name: FieldRef<"Group", 'String'>
    readonly group_image: FieldRef<"Group", 'String'>
    readonly group_creatorId: FieldRef<"Group", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.users
   */
  export type Group$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Group.messagesGGChat
   */
  export type Group$messagesGGChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupGlobalChat
     */
    select?: MessageGroupGlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupGlobalChat
     */
    omit?: MessageGroupGlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupGlobalChatInclude<ExtArgs> | null
    where?: MessageGroupGlobalChatWhereInput
    orderBy?: MessageGroupGlobalChatOrderByWithRelationInput | MessageGroupGlobalChatOrderByWithRelationInput[]
    cursor?: MessageGroupGlobalChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageGroupGlobalChatScalarFieldEnum | MessageGroupGlobalChatScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model GlobalChat
   */

  export type AggregateGlobalChat = {
    _count: GlobalChatCountAggregateOutputType | null
    _min: GlobalChatMinAggregateOutputType | null
    _max: GlobalChatMaxAggregateOutputType | null
  }

  export type GlobalChatMinAggregateOutputType = {
    id: string | null
  }

  export type GlobalChatMaxAggregateOutputType = {
    id: string | null
  }

  export type GlobalChatCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type GlobalChatMinAggregateInputType = {
    id?: true
  }

  export type GlobalChatMaxAggregateInputType = {
    id?: true
  }

  export type GlobalChatCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type GlobalChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalChat to aggregate.
     */
    where?: GlobalChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalChats to fetch.
     */
    orderBy?: GlobalChatOrderByWithRelationInput | GlobalChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GlobalChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GlobalChats
    **/
    _count?: true | GlobalChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GlobalChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GlobalChatMaxAggregateInputType
  }

  export type GetGlobalChatAggregateType<T extends GlobalChatAggregateArgs> = {
        [P in keyof T & keyof AggregateGlobalChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGlobalChat[P]>
      : GetScalarType<T[P], AggregateGlobalChat[P]>
  }




  export type GlobalChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GlobalChatWhereInput
    orderBy?: GlobalChatOrderByWithAggregationInput | GlobalChatOrderByWithAggregationInput[]
    by: GlobalChatScalarFieldEnum[] | GlobalChatScalarFieldEnum
    having?: GlobalChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GlobalChatCountAggregateInputType | true
    _min?: GlobalChatMinAggregateInputType
    _max?: GlobalChatMaxAggregateInputType
  }

  export type GlobalChatGroupByOutputType = {
    id: string
    _count: GlobalChatCountAggregateOutputType | null
    _min: GlobalChatMinAggregateOutputType | null
    _max: GlobalChatMaxAggregateOutputType | null
  }

  type GetGlobalChatGroupByPayload<T extends GlobalChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GlobalChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GlobalChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GlobalChatGroupByOutputType[P]>
            : GetScalarType<T[P], GlobalChatGroupByOutputType[P]>
        }
      >
    >


  export type GlobalChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    users?: boolean | GlobalChat$usersArgs<ExtArgs>
    messagesGGChat?: boolean | GlobalChat$messagesGGChatArgs<ExtArgs>
    _count?: boolean | GlobalChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["globalChat"]>

  export type GlobalChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["globalChat"]>

  export type GlobalChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["globalChat"]>

  export type GlobalChatSelectScalar = {
    id?: boolean
  }

  export type GlobalChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id", ExtArgs["result"]["globalChat"]>
  export type GlobalChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | GlobalChat$usersArgs<ExtArgs>
    messagesGGChat?: boolean | GlobalChat$messagesGGChatArgs<ExtArgs>
    _count?: boolean | GlobalChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GlobalChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GlobalChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GlobalChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GlobalChat"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      messagesGGChat: Prisma.$MessageGroupGlobalChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["globalChat"]>
    composites: {}
  }

  type GlobalChatGetPayload<S extends boolean | null | undefined | GlobalChatDefaultArgs> = $Result.GetResult<Prisma.$GlobalChatPayload, S>

  type GlobalChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GlobalChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GlobalChatCountAggregateInputType | true
    }

  export interface GlobalChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GlobalChat'], meta: { name: 'GlobalChat' } }
    /**
     * Find zero or one GlobalChat that matches the filter.
     * @param {GlobalChatFindUniqueArgs} args - Arguments to find a GlobalChat
     * @example
     * // Get one GlobalChat
     * const globalChat = await prisma.globalChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GlobalChatFindUniqueArgs>(args: SelectSubset<T, GlobalChatFindUniqueArgs<ExtArgs>>): Prisma__GlobalChatClient<$Result.GetResult<Prisma.$GlobalChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GlobalChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GlobalChatFindUniqueOrThrowArgs} args - Arguments to find a GlobalChat
     * @example
     * // Get one GlobalChat
     * const globalChat = await prisma.globalChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GlobalChatFindUniqueOrThrowArgs>(args: SelectSubset<T, GlobalChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GlobalChatClient<$Result.GetResult<Prisma.$GlobalChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatFindFirstArgs} args - Arguments to find a GlobalChat
     * @example
     * // Get one GlobalChat
     * const globalChat = await prisma.globalChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GlobalChatFindFirstArgs>(args?: SelectSubset<T, GlobalChatFindFirstArgs<ExtArgs>>): Prisma__GlobalChatClient<$Result.GetResult<Prisma.$GlobalChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GlobalChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatFindFirstOrThrowArgs} args - Arguments to find a GlobalChat
     * @example
     * // Get one GlobalChat
     * const globalChat = await prisma.globalChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GlobalChatFindFirstOrThrowArgs>(args?: SelectSubset<T, GlobalChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__GlobalChatClient<$Result.GetResult<Prisma.$GlobalChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GlobalChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GlobalChats
     * const globalChats = await prisma.globalChat.findMany()
     * 
     * // Get first 10 GlobalChats
     * const globalChats = await prisma.globalChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const globalChatWithIdOnly = await prisma.globalChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GlobalChatFindManyArgs>(args?: SelectSubset<T, GlobalChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GlobalChat.
     * @param {GlobalChatCreateArgs} args - Arguments to create a GlobalChat.
     * @example
     * // Create one GlobalChat
     * const GlobalChat = await prisma.globalChat.create({
     *   data: {
     *     // ... data to create a GlobalChat
     *   }
     * })
     * 
     */
    create<T extends GlobalChatCreateArgs>(args: SelectSubset<T, GlobalChatCreateArgs<ExtArgs>>): Prisma__GlobalChatClient<$Result.GetResult<Prisma.$GlobalChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GlobalChats.
     * @param {GlobalChatCreateManyArgs} args - Arguments to create many GlobalChats.
     * @example
     * // Create many GlobalChats
     * const globalChat = await prisma.globalChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GlobalChatCreateManyArgs>(args?: SelectSubset<T, GlobalChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GlobalChats and returns the data saved in the database.
     * @param {GlobalChatCreateManyAndReturnArgs} args - Arguments to create many GlobalChats.
     * @example
     * // Create many GlobalChats
     * const globalChat = await prisma.globalChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GlobalChats and only return the `id`
     * const globalChatWithIdOnly = await prisma.globalChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GlobalChatCreateManyAndReturnArgs>(args?: SelectSubset<T, GlobalChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GlobalChat.
     * @param {GlobalChatDeleteArgs} args - Arguments to delete one GlobalChat.
     * @example
     * // Delete one GlobalChat
     * const GlobalChat = await prisma.globalChat.delete({
     *   where: {
     *     // ... filter to delete one GlobalChat
     *   }
     * })
     * 
     */
    delete<T extends GlobalChatDeleteArgs>(args: SelectSubset<T, GlobalChatDeleteArgs<ExtArgs>>): Prisma__GlobalChatClient<$Result.GetResult<Prisma.$GlobalChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GlobalChat.
     * @param {GlobalChatUpdateArgs} args - Arguments to update one GlobalChat.
     * @example
     * // Update one GlobalChat
     * const globalChat = await prisma.globalChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GlobalChatUpdateArgs>(args: SelectSubset<T, GlobalChatUpdateArgs<ExtArgs>>): Prisma__GlobalChatClient<$Result.GetResult<Prisma.$GlobalChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GlobalChats.
     * @param {GlobalChatDeleteManyArgs} args - Arguments to filter GlobalChats to delete.
     * @example
     * // Delete a few GlobalChats
     * const { count } = await prisma.globalChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GlobalChatDeleteManyArgs>(args?: SelectSubset<T, GlobalChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GlobalChats
     * const globalChat = await prisma.globalChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GlobalChatUpdateManyArgs>(args: SelectSubset<T, GlobalChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GlobalChats and returns the data updated in the database.
     * @param {GlobalChatUpdateManyAndReturnArgs} args - Arguments to update many GlobalChats.
     * @example
     * // Update many GlobalChats
     * const globalChat = await prisma.globalChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GlobalChats and only return the `id`
     * const globalChatWithIdOnly = await prisma.globalChat.updateManyAndReturn({
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
    updateManyAndReturn<T extends GlobalChatUpdateManyAndReturnArgs>(args: SelectSubset<T, GlobalChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GlobalChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GlobalChat.
     * @param {GlobalChatUpsertArgs} args - Arguments to update or create a GlobalChat.
     * @example
     * // Update or create a GlobalChat
     * const globalChat = await prisma.globalChat.upsert({
     *   create: {
     *     // ... data to create a GlobalChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GlobalChat we want to update
     *   }
     * })
     */
    upsert<T extends GlobalChatUpsertArgs>(args: SelectSubset<T, GlobalChatUpsertArgs<ExtArgs>>): Prisma__GlobalChatClient<$Result.GetResult<Prisma.$GlobalChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GlobalChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatCountArgs} args - Arguments to filter GlobalChats to count.
     * @example
     * // Count the number of GlobalChats
     * const count = await prisma.globalChat.count({
     *   where: {
     *     // ... the filter for the GlobalChats we want to count
     *   }
     * })
    **/
    count<T extends GlobalChatCountArgs>(
      args?: Subset<T, GlobalChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GlobalChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GlobalChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GlobalChatAggregateArgs>(args: Subset<T, GlobalChatAggregateArgs>): Prisma.PrismaPromise<GetGlobalChatAggregateType<T>>

    /**
     * Group by GlobalChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GlobalChatGroupByArgs} args - Group by arguments.
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
      T extends GlobalChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GlobalChatGroupByArgs['orderBy'] }
        : { orderBy?: GlobalChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GlobalChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGlobalChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GlobalChat model
   */
  readonly fields: GlobalChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GlobalChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GlobalChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends GlobalChat$usersArgs<ExtArgs> = {}>(args?: Subset<T, GlobalChat$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messagesGGChat<T extends GlobalChat$messagesGGChatArgs<ExtArgs> = {}>(args?: Subset<T, GlobalChat$messagesGGChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageGroupGlobalChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GlobalChat model
   */
  interface GlobalChatFieldRefs {
    readonly id: FieldRef<"GlobalChat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GlobalChat findUnique
   */
  export type GlobalChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChat
     */
    select?: GlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChat
     */
    omit?: GlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatInclude<ExtArgs> | null
    /**
     * Filter, which GlobalChat to fetch.
     */
    where: GlobalChatWhereUniqueInput
  }

  /**
   * GlobalChat findUniqueOrThrow
   */
  export type GlobalChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChat
     */
    select?: GlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChat
     */
    omit?: GlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatInclude<ExtArgs> | null
    /**
     * Filter, which GlobalChat to fetch.
     */
    where: GlobalChatWhereUniqueInput
  }

  /**
   * GlobalChat findFirst
   */
  export type GlobalChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChat
     */
    select?: GlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChat
     */
    omit?: GlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatInclude<ExtArgs> | null
    /**
     * Filter, which GlobalChat to fetch.
     */
    where?: GlobalChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalChats to fetch.
     */
    orderBy?: GlobalChatOrderByWithRelationInput | GlobalChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalChats.
     */
    cursor?: GlobalChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalChats.
     */
    distinct?: GlobalChatScalarFieldEnum | GlobalChatScalarFieldEnum[]
  }

  /**
   * GlobalChat findFirstOrThrow
   */
  export type GlobalChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChat
     */
    select?: GlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChat
     */
    omit?: GlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatInclude<ExtArgs> | null
    /**
     * Filter, which GlobalChat to fetch.
     */
    where?: GlobalChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalChats to fetch.
     */
    orderBy?: GlobalChatOrderByWithRelationInput | GlobalChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GlobalChats.
     */
    cursor?: GlobalChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GlobalChats.
     */
    distinct?: GlobalChatScalarFieldEnum | GlobalChatScalarFieldEnum[]
  }

  /**
   * GlobalChat findMany
   */
  export type GlobalChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChat
     */
    select?: GlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChat
     */
    omit?: GlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatInclude<ExtArgs> | null
    /**
     * Filter, which GlobalChats to fetch.
     */
    where?: GlobalChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GlobalChats to fetch.
     */
    orderBy?: GlobalChatOrderByWithRelationInput | GlobalChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GlobalChats.
     */
    cursor?: GlobalChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GlobalChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GlobalChats.
     */
    skip?: number
    distinct?: GlobalChatScalarFieldEnum | GlobalChatScalarFieldEnum[]
  }

  /**
   * GlobalChat create
   */
  export type GlobalChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChat
     */
    select?: GlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChat
     */
    omit?: GlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatInclude<ExtArgs> | null
    /**
     * The data needed to create a GlobalChat.
     */
    data?: XOR<GlobalChatCreateInput, GlobalChatUncheckedCreateInput>
  }

  /**
   * GlobalChat createMany
   */
  export type GlobalChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GlobalChats.
     */
    data: GlobalChatCreateManyInput | GlobalChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalChat createManyAndReturn
   */
  export type GlobalChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChat
     */
    select?: GlobalChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChat
     */
    omit?: GlobalChatOmit<ExtArgs> | null
    /**
     * The data used to create many GlobalChats.
     */
    data: GlobalChatCreateManyInput | GlobalChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GlobalChat update
   */
  export type GlobalChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChat
     */
    select?: GlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChat
     */
    omit?: GlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatInclude<ExtArgs> | null
    /**
     * The data needed to update a GlobalChat.
     */
    data: XOR<GlobalChatUpdateInput, GlobalChatUncheckedUpdateInput>
    /**
     * Choose, which GlobalChat to update.
     */
    where: GlobalChatWhereUniqueInput
  }

  /**
   * GlobalChat updateMany
   */
  export type GlobalChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GlobalChats.
     */
    data: XOR<GlobalChatUpdateManyMutationInput, GlobalChatUncheckedUpdateManyInput>
    /**
     * Filter which GlobalChats to update
     */
    where?: GlobalChatWhereInput
    /**
     * Limit how many GlobalChats to update.
     */
    limit?: number
  }

  /**
   * GlobalChat updateManyAndReturn
   */
  export type GlobalChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChat
     */
    select?: GlobalChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChat
     */
    omit?: GlobalChatOmit<ExtArgs> | null
    /**
     * The data used to update GlobalChats.
     */
    data: XOR<GlobalChatUpdateManyMutationInput, GlobalChatUncheckedUpdateManyInput>
    /**
     * Filter which GlobalChats to update
     */
    where?: GlobalChatWhereInput
    /**
     * Limit how many GlobalChats to update.
     */
    limit?: number
  }

  /**
   * GlobalChat upsert
   */
  export type GlobalChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChat
     */
    select?: GlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChat
     */
    omit?: GlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatInclude<ExtArgs> | null
    /**
     * The filter to search for the GlobalChat to update in case it exists.
     */
    where: GlobalChatWhereUniqueInput
    /**
     * In case the GlobalChat found by the `where` argument doesn't exist, create a new GlobalChat with this data.
     */
    create: XOR<GlobalChatCreateInput, GlobalChatUncheckedCreateInput>
    /**
     * In case the GlobalChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GlobalChatUpdateInput, GlobalChatUncheckedUpdateInput>
  }

  /**
   * GlobalChat delete
   */
  export type GlobalChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChat
     */
    select?: GlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChat
     */
    omit?: GlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatInclude<ExtArgs> | null
    /**
     * Filter which GlobalChat to delete.
     */
    where: GlobalChatWhereUniqueInput
  }

  /**
   * GlobalChat deleteMany
   */
  export type GlobalChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GlobalChats to delete
     */
    where?: GlobalChatWhereInput
    /**
     * Limit how many GlobalChats to delete.
     */
    limit?: number
  }

  /**
   * GlobalChat.users
   */
  export type GlobalChat$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * GlobalChat.messagesGGChat
   */
  export type GlobalChat$messagesGGChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageGroupGlobalChat
     */
    select?: MessageGroupGlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MessageGroupGlobalChat
     */
    omit?: MessageGroupGlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageGroupGlobalChatInclude<ExtArgs> | null
    where?: MessageGroupGlobalChatWhereInput
    orderBy?: MessageGroupGlobalChatOrderByWithRelationInput | MessageGroupGlobalChatOrderByWithRelationInput[]
    cursor?: MessageGroupGlobalChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageGroupGlobalChatScalarFieldEnum | MessageGroupGlobalChatScalarFieldEnum[]
  }

  /**
   * GlobalChat without action
   */
  export type GlobalChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GlobalChat
     */
    select?: GlobalChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GlobalChat
     */
    omit?: GlobalChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GlobalChatInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sid" | "data" | "expiresAt", ExtArgs["result"]["session"]>

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sid: string
      data: string
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sid: FieldRef<"Session", 'String'>
    readonly data: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    username: 'username',
    password: 'password',
    confirm_password: 'confirm_password',
    bio: 'bio',
    profile_picture: 'profile_picture',
    background_picture: 'background_picture',
    online_presence: 'online_presence',
    role: 'role',
    groupId: 'groupId',
    globalChatId: 'globalChatId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    senderChatId: 'senderChatId',
    receiverChatId: 'receiverChatId'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    message_text: 'message_text',
    message_imageName: 'message_imageName',
    message_imageURL: 'message_imageURL',
    message_imageType: 'message_imageType',
    message_imageSize: 'message_imageSize',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    senderMessageId: 'senderMessageId',
    receiverMessageId: 'receiverMessageId',
    chatId: 'chatId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MessageGroupGlobalChatScalarFieldEnum: {
    id: 'id',
    message_text: 'message_text',
    message_imageName: 'message_imageName',
    message_imageURL: 'message_imageURL',
    message_imageType: 'message_imageType',
    message_imageSize: 'message_imageSize',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    groupId: 'groupId',
    globalChatId: 'globalChatId'
  };

  export type MessageGroupGlobalChatScalarFieldEnum = (typeof MessageGroupGlobalChatScalarFieldEnum)[keyof typeof MessageGroupGlobalChatScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    group_name: 'group_name',
    group_image: 'group_image',
    group_creatorId: 'group_creatorId'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GlobalChatScalarFieldEnum: {
    id: 'id'
  };

  export type GlobalChatScalarFieldEnum = (typeof GlobalChatScalarFieldEnum)[keyof typeof GlobalChatScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Presence'
   */
  export type EnumPresenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Presence'>
    


  /**
   * Reference to a field of type 'Presence[]'
   */
  export type ListEnumPresenceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Presence[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    confirm_password?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    profile_picture?: StringFilter<"User"> | string
    background_picture?: StringFilter<"User"> | string
    online_presence?: EnumPresenceFilter<"User"> | $Enums.Presence
    role?: EnumRoleFilter<"User"> | $Enums.Role
    groupId?: StringNullableFilter<"User"> | string | null
    globalChatId?: StringNullableFilter<"User"> | string | null
    senderChat?: ChatListRelationFilter
    receiverChat?: ChatListRelationFilter
    senderMessage?: MessageListRelationFilter
    receiverMessage?: MessageListRelationFilter
    messagesGGChat?: MessageGroupGlobalChatListRelationFilter
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    globalChat?: XOR<GlobalChatNullableScalarRelationFilter, GlobalChatWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    confirm_password?: SortOrder
    bio?: SortOrderInput | SortOrder
    profile_picture?: SortOrder
    background_picture?: SortOrder
    online_presence?: SortOrder
    role?: SortOrder
    groupId?: SortOrderInput | SortOrder
    globalChatId?: SortOrderInput | SortOrder
    senderChat?: ChatOrderByRelationAggregateInput
    receiverChat?: ChatOrderByRelationAggregateInput
    senderMessage?: MessageOrderByRelationAggregateInput
    receiverMessage?: MessageOrderByRelationAggregateInput
    messagesGGChat?: MessageGroupGlobalChatOrderByRelationAggregateInput
    group?: GroupOrderByWithRelationInput
    globalChat?: GlobalChatOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    first_name?: string
    last_name?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    confirm_password?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    profile_picture?: StringFilter<"User"> | string
    background_picture?: StringFilter<"User"> | string
    online_presence?: EnumPresenceFilter<"User"> | $Enums.Presence
    role?: EnumRoleFilter<"User"> | $Enums.Role
    groupId?: StringNullableFilter<"User"> | string | null
    globalChatId?: StringNullableFilter<"User"> | string | null
    senderChat?: ChatListRelationFilter
    receiverChat?: ChatListRelationFilter
    senderMessage?: MessageListRelationFilter
    receiverMessage?: MessageListRelationFilter
    messagesGGChat?: MessageGroupGlobalChatListRelationFilter
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    globalChat?: XOR<GlobalChatNullableScalarRelationFilter, GlobalChatWhereInput> | null
  }, "id" | "first_name" | "last_name" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    confirm_password?: SortOrder
    bio?: SortOrderInput | SortOrder
    profile_picture?: SortOrder
    background_picture?: SortOrder
    online_presence?: SortOrder
    role?: SortOrder
    groupId?: SortOrderInput | SortOrder
    globalChatId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    confirm_password?: StringWithAggregatesFilter<"User"> | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    profile_picture?: StringWithAggregatesFilter<"User"> | string
    background_picture?: StringWithAggregatesFilter<"User"> | string
    online_presence?: EnumPresenceWithAggregatesFilter<"User"> | $Enums.Presence
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    groupId?: StringNullableWithAggregatesFilter<"User"> | string | null
    globalChatId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    senderChatId?: IntFilter<"Chat"> | number
    receiverChatId?: IntFilter<"Chat"> | number
    senderChat?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiverChat?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    senderChatId?: SortOrder
    receiverChatId?: SortOrder
    senderChat?: UserOrderByWithRelationInput
    receiverChat?: UserOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    senderChatId?: IntFilter<"Chat"> | number
    receiverChatId?: IntFilter<"Chat"> | number
    senderChat?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiverChat?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: MessageListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    senderChatId?: SortOrder
    receiverChatId?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _avg?: ChatAvgOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
    _sum?: ChatSumOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    senderChatId?: IntWithAggregatesFilter<"Chat"> | number
    receiverChatId?: IntWithAggregatesFilter<"Chat"> | number
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    message_text?: StringFilter<"Message"> | string
    message_imageName?: StringFilter<"Message"> | string
    message_imageURL?: StringFilter<"Message"> | string
    message_imageType?: StringFilter<"Message"> | string
    message_imageSize?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    senderMessageId?: IntFilter<"Message"> | number
    receiverMessageId?: IntFilter<"Message"> | number
    chatId?: StringFilter<"Message"> | string
    senderMessage?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiverMessage?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    message_text?: SortOrder
    message_imageName?: SortOrder
    message_imageURL?: SortOrder
    message_imageType?: SortOrder
    message_imageSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    senderMessageId?: SortOrder
    receiverMessageId?: SortOrder
    chatId?: SortOrder
    senderMessage?: UserOrderByWithRelationInput
    receiverMessage?: UserOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    message_text?: StringFilter<"Message"> | string
    message_imageName?: StringFilter<"Message"> | string
    message_imageURL?: StringFilter<"Message"> | string
    message_imageType?: StringFilter<"Message"> | string
    message_imageSize?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    senderMessageId?: IntFilter<"Message"> | number
    receiverMessageId?: IntFilter<"Message"> | number
    chatId?: StringFilter<"Message"> | string
    senderMessage?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiverMessage?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    message_text?: SortOrder
    message_imageName?: SortOrder
    message_imageURL?: SortOrder
    message_imageType?: SortOrder
    message_imageSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    senderMessageId?: SortOrder
    receiverMessageId?: SortOrder
    chatId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    message_text?: StringWithAggregatesFilter<"Message"> | string
    message_imageName?: StringWithAggregatesFilter<"Message"> | string
    message_imageURL?: StringWithAggregatesFilter<"Message"> | string
    message_imageType?: StringWithAggregatesFilter<"Message"> | string
    message_imageSize?: IntWithAggregatesFilter<"Message"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    senderMessageId?: IntWithAggregatesFilter<"Message"> | number
    receiverMessageId?: IntWithAggregatesFilter<"Message"> | number
    chatId?: StringWithAggregatesFilter<"Message"> | string
  }

  export type MessageGroupGlobalChatWhereInput = {
    AND?: MessageGroupGlobalChatWhereInput | MessageGroupGlobalChatWhereInput[]
    OR?: MessageGroupGlobalChatWhereInput[]
    NOT?: MessageGroupGlobalChatWhereInput | MessageGroupGlobalChatWhereInput[]
    id?: IntFilter<"MessageGroupGlobalChat"> | number
    message_text?: StringFilter<"MessageGroupGlobalChat"> | string
    message_imageName?: StringFilter<"MessageGroupGlobalChat"> | string
    message_imageURL?: StringFilter<"MessageGroupGlobalChat"> | string
    message_imageType?: StringFilter<"MessageGroupGlobalChat"> | string
    message_imageSize?: IntFilter<"MessageGroupGlobalChat"> | number
    createdAt?: DateTimeFilter<"MessageGroupGlobalChat"> | Date | string
    updatedAt?: DateTimeFilter<"MessageGroupGlobalChat"> | Date | string
    userId?: IntFilter<"MessageGroupGlobalChat"> | number
    groupId?: StringNullableFilter<"MessageGroupGlobalChat"> | string | null
    globalChatId?: StringNullableFilter<"MessageGroupGlobalChat"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    globalChat?: XOR<GlobalChatNullableScalarRelationFilter, GlobalChatWhereInput> | null
  }

  export type MessageGroupGlobalChatOrderByWithRelationInput = {
    id?: SortOrder
    message_text?: SortOrder
    message_imageName?: SortOrder
    message_imageURL?: SortOrder
    message_imageType?: SortOrder
    message_imageSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    globalChatId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
    globalChat?: GlobalChatOrderByWithRelationInput
  }

  export type MessageGroupGlobalChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageGroupGlobalChatWhereInput | MessageGroupGlobalChatWhereInput[]
    OR?: MessageGroupGlobalChatWhereInput[]
    NOT?: MessageGroupGlobalChatWhereInput | MessageGroupGlobalChatWhereInput[]
    message_text?: StringFilter<"MessageGroupGlobalChat"> | string
    message_imageName?: StringFilter<"MessageGroupGlobalChat"> | string
    message_imageURL?: StringFilter<"MessageGroupGlobalChat"> | string
    message_imageType?: StringFilter<"MessageGroupGlobalChat"> | string
    message_imageSize?: IntFilter<"MessageGroupGlobalChat"> | number
    createdAt?: DateTimeFilter<"MessageGroupGlobalChat"> | Date | string
    updatedAt?: DateTimeFilter<"MessageGroupGlobalChat"> | Date | string
    userId?: IntFilter<"MessageGroupGlobalChat"> | number
    groupId?: StringNullableFilter<"MessageGroupGlobalChat"> | string | null
    globalChatId?: StringNullableFilter<"MessageGroupGlobalChat"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    globalChat?: XOR<GlobalChatNullableScalarRelationFilter, GlobalChatWhereInput> | null
  }, "id">

  export type MessageGroupGlobalChatOrderByWithAggregationInput = {
    id?: SortOrder
    message_text?: SortOrder
    message_imageName?: SortOrder
    message_imageURL?: SortOrder
    message_imageType?: SortOrder
    message_imageSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    groupId?: SortOrderInput | SortOrder
    globalChatId?: SortOrderInput | SortOrder
    _count?: MessageGroupGlobalChatCountOrderByAggregateInput
    _avg?: MessageGroupGlobalChatAvgOrderByAggregateInput
    _max?: MessageGroupGlobalChatMaxOrderByAggregateInput
    _min?: MessageGroupGlobalChatMinOrderByAggregateInput
    _sum?: MessageGroupGlobalChatSumOrderByAggregateInput
  }

  export type MessageGroupGlobalChatScalarWhereWithAggregatesInput = {
    AND?: MessageGroupGlobalChatScalarWhereWithAggregatesInput | MessageGroupGlobalChatScalarWhereWithAggregatesInput[]
    OR?: MessageGroupGlobalChatScalarWhereWithAggregatesInput[]
    NOT?: MessageGroupGlobalChatScalarWhereWithAggregatesInput | MessageGroupGlobalChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MessageGroupGlobalChat"> | number
    message_text?: StringWithAggregatesFilter<"MessageGroupGlobalChat"> | string
    message_imageName?: StringWithAggregatesFilter<"MessageGroupGlobalChat"> | string
    message_imageURL?: StringWithAggregatesFilter<"MessageGroupGlobalChat"> | string
    message_imageType?: StringWithAggregatesFilter<"MessageGroupGlobalChat"> | string
    message_imageSize?: IntWithAggregatesFilter<"MessageGroupGlobalChat"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MessageGroupGlobalChat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MessageGroupGlobalChat"> | Date | string
    userId?: IntWithAggregatesFilter<"MessageGroupGlobalChat"> | number
    groupId?: StringNullableWithAggregatesFilter<"MessageGroupGlobalChat"> | string | null
    globalChatId?: StringNullableWithAggregatesFilter<"MessageGroupGlobalChat"> | string | null
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    group_name?: StringFilter<"Group"> | string
    group_image?: StringFilter<"Group"> | string
    group_creatorId?: IntFilter<"Group"> | number
    users?: UserListRelationFilter
    messagesGGChat?: MessageGroupGlobalChatListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    group_name?: SortOrder
    group_image?: SortOrder
    group_creatorId?: SortOrder
    users?: UserOrderByRelationAggregateInput
    messagesGGChat?: MessageGroupGlobalChatOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    group_name?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    group_image?: StringFilter<"Group"> | string
    group_creatorId?: IntFilter<"Group"> | number
    users?: UserListRelationFilter
    messagesGGChat?: MessageGroupGlobalChatListRelationFilter
  }, "id" | "group_name">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    group_name?: SortOrder
    group_image?: SortOrder
    group_creatorId?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    group_name?: StringWithAggregatesFilter<"Group"> | string
    group_image?: StringWithAggregatesFilter<"Group"> | string
    group_creatorId?: IntWithAggregatesFilter<"Group"> | number
  }

  export type GlobalChatWhereInput = {
    AND?: GlobalChatWhereInput | GlobalChatWhereInput[]
    OR?: GlobalChatWhereInput[]
    NOT?: GlobalChatWhereInput | GlobalChatWhereInput[]
    id?: StringFilter<"GlobalChat"> | string
    users?: UserListRelationFilter
    messagesGGChat?: MessageGroupGlobalChatListRelationFilter
  }

  export type GlobalChatOrderByWithRelationInput = {
    id?: SortOrder
    users?: UserOrderByRelationAggregateInput
    messagesGGChat?: MessageGroupGlobalChatOrderByRelationAggregateInput
  }

  export type GlobalChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GlobalChatWhereInput | GlobalChatWhereInput[]
    OR?: GlobalChatWhereInput[]
    NOT?: GlobalChatWhereInput | GlobalChatWhereInput[]
    users?: UserListRelationFilter
    messagesGGChat?: MessageGroupGlobalChatListRelationFilter
  }, "id">

  export type GlobalChatOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: GlobalChatCountOrderByAggregateInput
    _max?: GlobalChatMaxOrderByAggregateInput
    _min?: GlobalChatMinOrderByAggregateInput
  }

  export type GlobalChatScalarWhereWithAggregatesInput = {
    AND?: GlobalChatScalarWhereWithAggregatesInput | GlobalChatScalarWhereWithAggregatesInput[]
    OR?: GlobalChatScalarWhereWithAggregatesInput[]
    NOT?: GlobalChatScalarWhereWithAggregatesInput | GlobalChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GlobalChat"> | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sid?: StringFilter<"Session"> | string
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sid?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    data?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }, "id" | "sid">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sid?: StringWithAggregatesFilter<"Session"> | string
    data?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserCreateInput = {
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    senderChat?: ChatCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessageCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessageCreateNestedManyWithoutReceiverMessageInput
    messagesGGChat?: MessageGroupGlobalChatCreateNestedManyWithoutUserInput
    group?: GroupCreateNestedOneWithoutUsersInput
    globalChat?: GlobalChatCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    groupId?: string | null
    globalChatId?: string | null
    senderChat?: ChatUncheckedCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatUncheckedCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessageUncheckedCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessageUncheckedCreateNestedManyWithoutReceiverMessageInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    senderChat?: ChatUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessageUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessageUpdateManyWithoutReceiverMessageNestedInput
    messagesGGChat?: MessageGroupGlobalChatUpdateManyWithoutUserNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    globalChat?: GlobalChatUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    globalChatId?: NullableStringFieldUpdateOperationsInput | string | null
    senderChat?: ChatUncheckedUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUncheckedUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessageUncheckedUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessageUncheckedUpdateManyWithoutReceiverMessageNestedInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    groupId?: string | null
    globalChatId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    globalChatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatCreateInput = {
    id?: string
    senderChat: UserCreateNestedOneWithoutSenderChatInput
    receiverChat: UserCreateNestedOneWithoutReceiverChatInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    senderChatId: number
    receiverChatId: number
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderChat?: UserUpdateOneRequiredWithoutSenderChatNestedInput
    receiverChat?: UserUpdateOneRequiredWithoutReceiverChatNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderChatId?: IntFieldUpdateOperationsInput | number
    receiverChatId?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    senderChatId: number
    receiverChatId: number
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderChatId?: IntFieldUpdateOperationsInput | number
    receiverChatId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateInput = {
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    senderMessage: UserCreateNestedOneWithoutSenderMessageInput
    receiverMessage: UserCreateNestedOneWithoutReceiverMessageInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    senderMessageId: number
    receiverMessageId: number
    chatId: string
  }

  export type MessageUpdateInput = {
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessage?: UserUpdateOneRequiredWithoutSenderMessageNestedInput
    receiverMessage?: UserUpdateOneRequiredWithoutReceiverMessageNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessageId?: IntFieldUpdateOperationsInput | number
    receiverMessageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyInput = {
    id?: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    senderMessageId: number
    receiverMessageId: number
    chatId: string
  }

  export type MessageUpdateManyMutationInput = {
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessageId?: IntFieldUpdateOperationsInput | number
    receiverMessageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageGroupGlobalChatCreateInput = {
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMessagesGGChatInput
    group?: GroupCreateNestedOneWithoutMessagesGGChatInput
    globalChat?: GlobalChatCreateNestedOneWithoutMessagesGGChatInput
  }

  export type MessageGroupGlobalChatUncheckedCreateInput = {
    id?: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    groupId?: string | null
    globalChatId?: string | null
  }

  export type MessageGroupGlobalChatUpdateInput = {
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesGGChatNestedInput
    group?: GroupUpdateOneWithoutMessagesGGChatNestedInput
    globalChat?: GlobalChatUpdateOneWithoutMessagesGGChatNestedInput
  }

  export type MessageGroupGlobalChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    globalChatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageGroupGlobalChatCreateManyInput = {
    id?: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    groupId?: string | null
    globalChatId?: string | null
  }

  export type MessageGroupGlobalChatUpdateManyMutationInput = {
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageGroupGlobalChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    globalChatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupCreateInput = {
    id?: string
    group_name: string
    group_image: string
    group_creatorId: number
    users?: UserCreateNestedManyWithoutGroupInput
    messagesGGChat?: MessageGroupGlobalChatCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    group_name: string
    group_image: string
    group_creatorId: number
    users?: UserUncheckedCreateNestedManyWithoutGroupInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_image?: StringFieldUpdateOperationsInput | string
    group_creatorId?: IntFieldUpdateOperationsInput | number
    users?: UserUpdateManyWithoutGroupNestedInput
    messagesGGChat?: MessageGroupGlobalChatUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_image?: StringFieldUpdateOperationsInput | string
    group_creatorId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutGroupNestedInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    group_name: string
    group_image: string
    group_creatorId: number
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_image?: StringFieldUpdateOperationsInput | string
    group_creatorId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_image?: StringFieldUpdateOperationsInput | string
    group_creatorId?: IntFieldUpdateOperationsInput | number
  }

  export type GlobalChatCreateInput = {
    id?: string
    users?: UserCreateNestedManyWithoutGlobalChatInput
    messagesGGChat?: MessageGroupGlobalChatCreateNestedManyWithoutGlobalChatInput
  }

  export type GlobalChatUncheckedCreateInput = {
    id?: string
    users?: UserUncheckedCreateNestedManyWithoutGlobalChatInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedCreateNestedManyWithoutGlobalChatInput
  }

  export type GlobalChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutGlobalChatNestedInput
    messagesGGChat?: MessageGroupGlobalChatUpdateManyWithoutGlobalChatNestedInput
  }

  export type GlobalChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutGlobalChatNestedInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedUpdateManyWithoutGlobalChatNestedInput
  }

  export type GlobalChatCreateManyInput = {
    id?: string
  }

  export type GlobalChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type GlobalChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumPresenceFilter<$PrismaModel = never> = {
    equals?: $Enums.Presence | EnumPresenceFieldRefInput<$PrismaModel>
    in?: $Enums.Presence[] | ListEnumPresenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Presence[] | ListEnumPresenceFieldRefInput<$PrismaModel>
    not?: NestedEnumPresenceFilter<$PrismaModel> | $Enums.Presence
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageGroupGlobalChatListRelationFilter = {
    every?: MessageGroupGlobalChatWhereInput
    some?: MessageGroupGlobalChatWhereInput
    none?: MessageGroupGlobalChatWhereInput
  }

  export type GroupNullableScalarRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type GlobalChatNullableScalarRelationFilter = {
    is?: GlobalChatWhereInput | null
    isNot?: GlobalChatWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageGroupGlobalChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    confirm_password?: SortOrder
    bio?: SortOrder
    profile_picture?: SortOrder
    background_picture?: SortOrder
    online_presence?: SortOrder
    role?: SortOrder
    groupId?: SortOrder
    globalChatId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    confirm_password?: SortOrder
    bio?: SortOrder
    profile_picture?: SortOrder
    background_picture?: SortOrder
    online_presence?: SortOrder
    role?: SortOrder
    groupId?: SortOrder
    globalChatId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    confirm_password?: SortOrder
    bio?: SortOrder
    profile_picture?: SortOrder
    background_picture?: SortOrder
    online_presence?: SortOrder
    role?: SortOrder
    groupId?: SortOrder
    globalChatId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type EnumPresenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Presence | EnumPresenceFieldRefInput<$PrismaModel>
    in?: $Enums.Presence[] | ListEnumPresenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Presence[] | ListEnumPresenceFieldRefInput<$PrismaModel>
    not?: NestedEnumPresenceWithAggregatesFilter<$PrismaModel> | $Enums.Presence
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPresenceFilter<$PrismaModel>
    _max?: NestedEnumPresenceFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    senderChatId?: SortOrder
    receiverChatId?: SortOrder
  }

  export type ChatAvgOrderByAggregateInput = {
    senderChatId?: SortOrder
    receiverChatId?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    senderChatId?: SortOrder
    receiverChatId?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    senderChatId?: SortOrder
    receiverChatId?: SortOrder
  }

  export type ChatSumOrderByAggregateInput = {
    senderChatId?: SortOrder
    receiverChatId?: SortOrder
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

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    message_text?: SortOrder
    message_imageName?: SortOrder
    message_imageURL?: SortOrder
    message_imageType?: SortOrder
    message_imageSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    senderMessageId?: SortOrder
    receiverMessageId?: SortOrder
    chatId?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    message_imageSize?: SortOrder
    senderMessageId?: SortOrder
    receiverMessageId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    message_text?: SortOrder
    message_imageName?: SortOrder
    message_imageURL?: SortOrder
    message_imageType?: SortOrder
    message_imageSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    senderMessageId?: SortOrder
    receiverMessageId?: SortOrder
    chatId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    message_text?: SortOrder
    message_imageName?: SortOrder
    message_imageURL?: SortOrder
    message_imageType?: SortOrder
    message_imageSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    senderMessageId?: SortOrder
    receiverMessageId?: SortOrder
    chatId?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    message_imageSize?: SortOrder
    senderMessageId?: SortOrder
    receiverMessageId?: SortOrder
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

  export type MessageGroupGlobalChatCountOrderByAggregateInput = {
    id?: SortOrder
    message_text?: SortOrder
    message_imageName?: SortOrder
    message_imageURL?: SortOrder
    message_imageType?: SortOrder
    message_imageSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    globalChatId?: SortOrder
  }

  export type MessageGroupGlobalChatAvgOrderByAggregateInput = {
    id?: SortOrder
    message_imageSize?: SortOrder
    userId?: SortOrder
  }

  export type MessageGroupGlobalChatMaxOrderByAggregateInput = {
    id?: SortOrder
    message_text?: SortOrder
    message_imageName?: SortOrder
    message_imageURL?: SortOrder
    message_imageType?: SortOrder
    message_imageSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    globalChatId?: SortOrder
  }

  export type MessageGroupGlobalChatMinOrderByAggregateInput = {
    id?: SortOrder
    message_text?: SortOrder
    message_imageName?: SortOrder
    message_imageURL?: SortOrder
    message_imageType?: SortOrder
    message_imageSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    groupId?: SortOrder
    globalChatId?: SortOrder
  }

  export type MessageGroupGlobalChatSumOrderByAggregateInput = {
    id?: SortOrder
    message_imageSize?: SortOrder
    userId?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    group_name?: SortOrder
    group_image?: SortOrder
    group_creatorId?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    group_creatorId?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    group_name?: SortOrder
    group_image?: SortOrder
    group_creatorId?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    group_name?: SortOrder
    group_image?: SortOrder
    group_creatorId?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    group_creatorId?: SortOrder
  }

  export type GlobalChatCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GlobalChatMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GlobalChatMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type ChatCreateNestedManyWithoutSenderChatInput = {
    create?: XOR<ChatCreateWithoutSenderChatInput, ChatUncheckedCreateWithoutSenderChatInput> | ChatCreateWithoutSenderChatInput[] | ChatUncheckedCreateWithoutSenderChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderChatInput | ChatCreateOrConnectWithoutSenderChatInput[]
    createMany?: ChatCreateManySenderChatInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutReceiverChatInput = {
    create?: XOR<ChatCreateWithoutReceiverChatInput, ChatUncheckedCreateWithoutReceiverChatInput> | ChatCreateWithoutReceiverChatInput[] | ChatUncheckedCreateWithoutReceiverChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverChatInput | ChatCreateOrConnectWithoutReceiverChatInput[]
    createMany?: ChatCreateManyReceiverChatInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderMessageInput = {
    create?: XOR<MessageCreateWithoutSenderMessageInput, MessageUncheckedCreateWithoutSenderMessageInput> | MessageCreateWithoutSenderMessageInput[] | MessageUncheckedCreateWithoutSenderMessageInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderMessageInput | MessageCreateOrConnectWithoutSenderMessageInput[]
    createMany?: MessageCreateManySenderMessageInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverMessageInput = {
    create?: XOR<MessageCreateWithoutReceiverMessageInput, MessageUncheckedCreateWithoutReceiverMessageInput> | MessageCreateWithoutReceiverMessageInput[] | MessageUncheckedCreateWithoutReceiverMessageInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverMessageInput | MessageCreateOrConnectWithoutReceiverMessageInput[]
    createMany?: MessageCreateManyReceiverMessageInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageGroupGlobalChatCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageGroupGlobalChatCreateWithoutUserInput, MessageGroupGlobalChatUncheckedCreateWithoutUserInput> | MessageGroupGlobalChatCreateWithoutUserInput[] | MessageGroupGlobalChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageGroupGlobalChatCreateOrConnectWithoutUserInput | MessageGroupGlobalChatCreateOrConnectWithoutUserInput[]
    createMany?: MessageGroupGlobalChatCreateManyUserInputEnvelope
    connect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
  }

  export type GroupCreateNestedOneWithoutUsersInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
    connect?: GroupWhereUniqueInput
  }

  export type GlobalChatCreateNestedOneWithoutUsersInput = {
    create?: XOR<GlobalChatCreateWithoutUsersInput, GlobalChatUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GlobalChatCreateOrConnectWithoutUsersInput
    connect?: GlobalChatWhereUniqueInput
  }

  export type ChatUncheckedCreateNestedManyWithoutSenderChatInput = {
    create?: XOR<ChatCreateWithoutSenderChatInput, ChatUncheckedCreateWithoutSenderChatInput> | ChatCreateWithoutSenderChatInput[] | ChatUncheckedCreateWithoutSenderChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderChatInput | ChatCreateOrConnectWithoutSenderChatInput[]
    createMany?: ChatCreateManySenderChatInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutReceiverChatInput = {
    create?: XOR<ChatCreateWithoutReceiverChatInput, ChatUncheckedCreateWithoutReceiverChatInput> | ChatCreateWithoutReceiverChatInput[] | ChatUncheckedCreateWithoutReceiverChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverChatInput | ChatCreateOrConnectWithoutReceiverChatInput[]
    createMany?: ChatCreateManyReceiverChatInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderMessageInput = {
    create?: XOR<MessageCreateWithoutSenderMessageInput, MessageUncheckedCreateWithoutSenderMessageInput> | MessageCreateWithoutSenderMessageInput[] | MessageUncheckedCreateWithoutSenderMessageInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderMessageInput | MessageCreateOrConnectWithoutSenderMessageInput[]
    createMany?: MessageCreateManySenderMessageInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverMessageInput = {
    create?: XOR<MessageCreateWithoutReceiverMessageInput, MessageUncheckedCreateWithoutReceiverMessageInput> | MessageCreateWithoutReceiverMessageInput[] | MessageUncheckedCreateWithoutReceiverMessageInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverMessageInput | MessageCreateOrConnectWithoutReceiverMessageInput[]
    createMany?: MessageCreateManyReceiverMessageInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageGroupGlobalChatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageGroupGlobalChatCreateWithoutUserInput, MessageGroupGlobalChatUncheckedCreateWithoutUserInput> | MessageGroupGlobalChatCreateWithoutUserInput[] | MessageGroupGlobalChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageGroupGlobalChatCreateOrConnectWithoutUserInput | MessageGroupGlobalChatCreateOrConnectWithoutUserInput[]
    createMany?: MessageGroupGlobalChatCreateManyUserInputEnvelope
    connect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPresenceFieldUpdateOperationsInput = {
    set?: $Enums.Presence
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ChatUpdateManyWithoutSenderChatNestedInput = {
    create?: XOR<ChatCreateWithoutSenderChatInput, ChatUncheckedCreateWithoutSenderChatInput> | ChatCreateWithoutSenderChatInput[] | ChatUncheckedCreateWithoutSenderChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderChatInput | ChatCreateOrConnectWithoutSenderChatInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutSenderChatInput | ChatUpsertWithWhereUniqueWithoutSenderChatInput[]
    createMany?: ChatCreateManySenderChatInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutSenderChatInput | ChatUpdateWithWhereUniqueWithoutSenderChatInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutSenderChatInput | ChatUpdateManyWithWhereWithoutSenderChatInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutReceiverChatNestedInput = {
    create?: XOR<ChatCreateWithoutReceiverChatInput, ChatUncheckedCreateWithoutReceiverChatInput> | ChatCreateWithoutReceiverChatInput[] | ChatUncheckedCreateWithoutReceiverChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverChatInput | ChatCreateOrConnectWithoutReceiverChatInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutReceiverChatInput | ChatUpsertWithWhereUniqueWithoutReceiverChatInput[]
    createMany?: ChatCreateManyReceiverChatInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutReceiverChatInput | ChatUpdateWithWhereUniqueWithoutReceiverChatInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutReceiverChatInput | ChatUpdateManyWithWhereWithoutReceiverChatInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderMessageNestedInput = {
    create?: XOR<MessageCreateWithoutSenderMessageInput, MessageUncheckedCreateWithoutSenderMessageInput> | MessageCreateWithoutSenderMessageInput[] | MessageUncheckedCreateWithoutSenderMessageInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderMessageInput | MessageCreateOrConnectWithoutSenderMessageInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderMessageInput | MessageUpsertWithWhereUniqueWithoutSenderMessageInput[]
    createMany?: MessageCreateManySenderMessageInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderMessageInput | MessageUpdateWithWhereUniqueWithoutSenderMessageInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderMessageInput | MessageUpdateManyWithWhereWithoutSenderMessageInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverMessageNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverMessageInput, MessageUncheckedCreateWithoutReceiverMessageInput> | MessageCreateWithoutReceiverMessageInput[] | MessageUncheckedCreateWithoutReceiverMessageInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverMessageInput | MessageCreateOrConnectWithoutReceiverMessageInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverMessageInput | MessageUpsertWithWhereUniqueWithoutReceiverMessageInput[]
    createMany?: MessageCreateManyReceiverMessageInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverMessageInput | MessageUpdateWithWhereUniqueWithoutReceiverMessageInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverMessageInput | MessageUpdateManyWithWhereWithoutReceiverMessageInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageGroupGlobalChatUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageGroupGlobalChatCreateWithoutUserInput, MessageGroupGlobalChatUncheckedCreateWithoutUserInput> | MessageGroupGlobalChatCreateWithoutUserInput[] | MessageGroupGlobalChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageGroupGlobalChatCreateOrConnectWithoutUserInput | MessageGroupGlobalChatCreateOrConnectWithoutUserInput[]
    upsert?: MessageGroupGlobalChatUpsertWithWhereUniqueWithoutUserInput | MessageGroupGlobalChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageGroupGlobalChatCreateManyUserInputEnvelope
    set?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    disconnect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    delete?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    connect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    update?: MessageGroupGlobalChatUpdateWithWhereUniqueWithoutUserInput | MessageGroupGlobalChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageGroupGlobalChatUpdateManyWithWhereWithoutUserInput | MessageGroupGlobalChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageGroupGlobalChatScalarWhereInput | MessageGroupGlobalChatScalarWhereInput[]
  }

  export type GroupUpdateOneWithoutUsersNestedInput = {
    create?: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput
    upsert?: GroupUpsertWithoutUsersInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutUsersInput, GroupUpdateWithoutUsersInput>, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type GlobalChatUpdateOneWithoutUsersNestedInput = {
    create?: XOR<GlobalChatCreateWithoutUsersInput, GlobalChatUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GlobalChatCreateOrConnectWithoutUsersInput
    upsert?: GlobalChatUpsertWithoutUsersInput
    disconnect?: GlobalChatWhereInput | boolean
    delete?: GlobalChatWhereInput | boolean
    connect?: GlobalChatWhereUniqueInput
    update?: XOR<XOR<GlobalChatUpdateToOneWithWhereWithoutUsersInput, GlobalChatUpdateWithoutUsersInput>, GlobalChatUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChatUncheckedUpdateManyWithoutSenderChatNestedInput = {
    create?: XOR<ChatCreateWithoutSenderChatInput, ChatUncheckedCreateWithoutSenderChatInput> | ChatCreateWithoutSenderChatInput[] | ChatUncheckedCreateWithoutSenderChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderChatInput | ChatCreateOrConnectWithoutSenderChatInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutSenderChatInput | ChatUpsertWithWhereUniqueWithoutSenderChatInput[]
    createMany?: ChatCreateManySenderChatInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutSenderChatInput | ChatUpdateWithWhereUniqueWithoutSenderChatInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutSenderChatInput | ChatUpdateManyWithWhereWithoutSenderChatInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutReceiverChatNestedInput = {
    create?: XOR<ChatCreateWithoutReceiverChatInput, ChatUncheckedCreateWithoutReceiverChatInput> | ChatCreateWithoutReceiverChatInput[] | ChatUncheckedCreateWithoutReceiverChatInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReceiverChatInput | ChatCreateOrConnectWithoutReceiverChatInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutReceiverChatInput | ChatUpsertWithWhereUniqueWithoutReceiverChatInput[]
    createMany?: ChatCreateManyReceiverChatInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutReceiverChatInput | ChatUpdateWithWhereUniqueWithoutReceiverChatInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutReceiverChatInput | ChatUpdateManyWithWhereWithoutReceiverChatInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderMessageNestedInput = {
    create?: XOR<MessageCreateWithoutSenderMessageInput, MessageUncheckedCreateWithoutSenderMessageInput> | MessageCreateWithoutSenderMessageInput[] | MessageUncheckedCreateWithoutSenderMessageInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderMessageInput | MessageCreateOrConnectWithoutSenderMessageInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderMessageInput | MessageUpsertWithWhereUniqueWithoutSenderMessageInput[]
    createMany?: MessageCreateManySenderMessageInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderMessageInput | MessageUpdateWithWhereUniqueWithoutSenderMessageInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderMessageInput | MessageUpdateManyWithWhereWithoutSenderMessageInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverMessageNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverMessageInput, MessageUncheckedCreateWithoutReceiverMessageInput> | MessageCreateWithoutReceiverMessageInput[] | MessageUncheckedCreateWithoutReceiverMessageInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverMessageInput | MessageCreateOrConnectWithoutReceiverMessageInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverMessageInput | MessageUpsertWithWhereUniqueWithoutReceiverMessageInput[]
    createMany?: MessageCreateManyReceiverMessageInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverMessageInput | MessageUpdateWithWhereUniqueWithoutReceiverMessageInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverMessageInput | MessageUpdateManyWithWhereWithoutReceiverMessageInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageGroupGlobalChatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageGroupGlobalChatCreateWithoutUserInput, MessageGroupGlobalChatUncheckedCreateWithoutUserInput> | MessageGroupGlobalChatCreateWithoutUserInput[] | MessageGroupGlobalChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageGroupGlobalChatCreateOrConnectWithoutUserInput | MessageGroupGlobalChatCreateOrConnectWithoutUserInput[]
    upsert?: MessageGroupGlobalChatUpsertWithWhereUniqueWithoutUserInput | MessageGroupGlobalChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageGroupGlobalChatCreateManyUserInputEnvelope
    set?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    disconnect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    delete?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    connect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    update?: MessageGroupGlobalChatUpdateWithWhereUniqueWithoutUserInput | MessageGroupGlobalChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageGroupGlobalChatUpdateManyWithWhereWithoutUserInput | MessageGroupGlobalChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageGroupGlobalChatScalarWhereInput | MessageGroupGlobalChatScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSenderChatInput = {
    create?: XOR<UserCreateWithoutSenderChatInput, UserUncheckedCreateWithoutSenderChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutSenderChatInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceiverChatInput = {
    create?: XOR<UserCreateWithoutReceiverChatInput, UserUncheckedCreateWithoutReceiverChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiverChatInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSenderChatNestedInput = {
    create?: XOR<UserCreateWithoutSenderChatInput, UserUncheckedCreateWithoutSenderChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutSenderChatInput
    upsert?: UserUpsertWithoutSenderChatInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSenderChatInput, UserUpdateWithoutSenderChatInput>, UserUncheckedUpdateWithoutSenderChatInput>
  }

  export type UserUpdateOneRequiredWithoutReceiverChatNestedInput = {
    create?: XOR<UserCreateWithoutReceiverChatInput, UserUncheckedCreateWithoutReceiverChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiverChatInput
    upsert?: UserUpsertWithoutReceiverChatInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceiverChatInput, UserUpdateWithoutReceiverChatInput>, UserUncheckedUpdateWithoutReceiverChatInput>
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSenderMessageInput = {
    create?: XOR<UserCreateWithoutSenderMessageInput, UserUncheckedCreateWithoutSenderMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutSenderMessageInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceiverMessageInput = {
    create?: XOR<UserCreateWithoutReceiverMessageInput, UserUncheckedCreateWithoutReceiverMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiverMessageInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSenderMessageNestedInput = {
    create?: XOR<UserCreateWithoutSenderMessageInput, UserUncheckedCreateWithoutSenderMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutSenderMessageInput
    upsert?: UserUpsertWithoutSenderMessageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSenderMessageInput, UserUpdateWithoutSenderMessageInput>, UserUncheckedUpdateWithoutSenderMessageInput>
  }

  export type UserUpdateOneRequiredWithoutReceiverMessageNestedInput = {
    create?: XOR<UserCreateWithoutReceiverMessageInput, UserUncheckedCreateWithoutReceiverMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiverMessageInput
    upsert?: UserUpsertWithoutReceiverMessageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceiverMessageInput, UserUpdateWithoutReceiverMessageInput>, UserUncheckedUpdateWithoutReceiverMessageInput>
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutMessagesGGChatInput = {
    create?: XOR<UserCreateWithoutMessagesGGChatInput, UserUncheckedCreateWithoutMessagesGGChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesGGChatInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutMessagesGGChatInput = {
    create?: XOR<GroupCreateWithoutMessagesGGChatInput, GroupUncheckedCreateWithoutMessagesGGChatInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMessagesGGChatInput
    connect?: GroupWhereUniqueInput
  }

  export type GlobalChatCreateNestedOneWithoutMessagesGGChatInput = {
    create?: XOR<GlobalChatCreateWithoutMessagesGGChatInput, GlobalChatUncheckedCreateWithoutMessagesGGChatInput>
    connectOrCreate?: GlobalChatCreateOrConnectWithoutMessagesGGChatInput
    connect?: GlobalChatWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesGGChatNestedInput = {
    create?: XOR<UserCreateWithoutMessagesGGChatInput, UserUncheckedCreateWithoutMessagesGGChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesGGChatInput
    upsert?: UserUpsertWithoutMessagesGGChatInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesGGChatInput, UserUpdateWithoutMessagesGGChatInput>, UserUncheckedUpdateWithoutMessagesGGChatInput>
  }

  export type GroupUpdateOneWithoutMessagesGGChatNestedInput = {
    create?: XOR<GroupCreateWithoutMessagesGGChatInput, GroupUncheckedCreateWithoutMessagesGGChatInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMessagesGGChatInput
    upsert?: GroupUpsertWithoutMessagesGGChatInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMessagesGGChatInput, GroupUpdateWithoutMessagesGGChatInput>, GroupUncheckedUpdateWithoutMessagesGGChatInput>
  }

  export type GlobalChatUpdateOneWithoutMessagesGGChatNestedInput = {
    create?: XOR<GlobalChatCreateWithoutMessagesGGChatInput, GlobalChatUncheckedCreateWithoutMessagesGGChatInput>
    connectOrCreate?: GlobalChatCreateOrConnectWithoutMessagesGGChatInput
    upsert?: GlobalChatUpsertWithoutMessagesGGChatInput
    disconnect?: GlobalChatWhereInput | boolean
    delete?: GlobalChatWhereInput | boolean
    connect?: GlobalChatWhereUniqueInput
    update?: XOR<XOR<GlobalChatUpdateToOneWithWhereWithoutMessagesGGChatInput, GlobalChatUpdateWithoutMessagesGGChatInput>, GlobalChatUncheckedUpdateWithoutMessagesGGChatInput>
  }

  export type UserCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageGroupGlobalChatCreateNestedManyWithoutGroupInput = {
    create?: XOR<MessageGroupGlobalChatCreateWithoutGroupInput, MessageGroupGlobalChatUncheckedCreateWithoutGroupInput> | MessageGroupGlobalChatCreateWithoutGroupInput[] | MessageGroupGlobalChatUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MessageGroupGlobalChatCreateOrConnectWithoutGroupInput | MessageGroupGlobalChatCreateOrConnectWithoutGroupInput[]
    createMany?: MessageGroupGlobalChatCreateManyGroupInputEnvelope
    connect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageGroupGlobalChatUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<MessageGroupGlobalChatCreateWithoutGroupInput, MessageGroupGlobalChatUncheckedCreateWithoutGroupInput> | MessageGroupGlobalChatCreateWithoutGroupInput[] | MessageGroupGlobalChatUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MessageGroupGlobalChatCreateOrConnectWithoutGroupInput | MessageGroupGlobalChatCreateOrConnectWithoutGroupInput[]
    createMany?: MessageGroupGlobalChatCreateManyGroupInputEnvelope
    connect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupInput | UserUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupInput | UserUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupInput | UserUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageGroupGlobalChatUpdateManyWithoutGroupNestedInput = {
    create?: XOR<MessageGroupGlobalChatCreateWithoutGroupInput, MessageGroupGlobalChatUncheckedCreateWithoutGroupInput> | MessageGroupGlobalChatCreateWithoutGroupInput[] | MessageGroupGlobalChatUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MessageGroupGlobalChatCreateOrConnectWithoutGroupInput | MessageGroupGlobalChatCreateOrConnectWithoutGroupInput[]
    upsert?: MessageGroupGlobalChatUpsertWithWhereUniqueWithoutGroupInput | MessageGroupGlobalChatUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: MessageGroupGlobalChatCreateManyGroupInputEnvelope
    set?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    disconnect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    delete?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    connect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    update?: MessageGroupGlobalChatUpdateWithWhereUniqueWithoutGroupInput | MessageGroupGlobalChatUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: MessageGroupGlobalChatUpdateManyWithWhereWithoutGroupInput | MessageGroupGlobalChatUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: MessageGroupGlobalChatScalarWhereInput | MessageGroupGlobalChatScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput> | UserCreateWithoutGroupInput[] | UserUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupInput | UserCreateOrConnectWithoutGroupInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupInput | UserUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: UserCreateManyGroupInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupInput | UserUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupInput | UserUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageGroupGlobalChatUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<MessageGroupGlobalChatCreateWithoutGroupInput, MessageGroupGlobalChatUncheckedCreateWithoutGroupInput> | MessageGroupGlobalChatCreateWithoutGroupInput[] | MessageGroupGlobalChatUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MessageGroupGlobalChatCreateOrConnectWithoutGroupInput | MessageGroupGlobalChatCreateOrConnectWithoutGroupInput[]
    upsert?: MessageGroupGlobalChatUpsertWithWhereUniqueWithoutGroupInput | MessageGroupGlobalChatUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: MessageGroupGlobalChatCreateManyGroupInputEnvelope
    set?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    disconnect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    delete?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    connect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    update?: MessageGroupGlobalChatUpdateWithWhereUniqueWithoutGroupInput | MessageGroupGlobalChatUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: MessageGroupGlobalChatUpdateManyWithWhereWithoutGroupInput | MessageGroupGlobalChatUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: MessageGroupGlobalChatScalarWhereInput | MessageGroupGlobalChatScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutGlobalChatInput = {
    create?: XOR<UserCreateWithoutGlobalChatInput, UserUncheckedCreateWithoutGlobalChatInput> | UserCreateWithoutGlobalChatInput[] | UserUncheckedCreateWithoutGlobalChatInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGlobalChatInput | UserCreateOrConnectWithoutGlobalChatInput[]
    createMany?: UserCreateManyGlobalChatInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageGroupGlobalChatCreateNestedManyWithoutGlobalChatInput = {
    create?: XOR<MessageGroupGlobalChatCreateWithoutGlobalChatInput, MessageGroupGlobalChatUncheckedCreateWithoutGlobalChatInput> | MessageGroupGlobalChatCreateWithoutGlobalChatInput[] | MessageGroupGlobalChatUncheckedCreateWithoutGlobalChatInput[]
    connectOrCreate?: MessageGroupGlobalChatCreateOrConnectWithoutGlobalChatInput | MessageGroupGlobalChatCreateOrConnectWithoutGlobalChatInput[]
    createMany?: MessageGroupGlobalChatCreateManyGlobalChatInputEnvelope
    connect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutGlobalChatInput = {
    create?: XOR<UserCreateWithoutGlobalChatInput, UserUncheckedCreateWithoutGlobalChatInput> | UserCreateWithoutGlobalChatInput[] | UserUncheckedCreateWithoutGlobalChatInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGlobalChatInput | UserCreateOrConnectWithoutGlobalChatInput[]
    createMany?: UserCreateManyGlobalChatInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageGroupGlobalChatUncheckedCreateNestedManyWithoutGlobalChatInput = {
    create?: XOR<MessageGroupGlobalChatCreateWithoutGlobalChatInput, MessageGroupGlobalChatUncheckedCreateWithoutGlobalChatInput> | MessageGroupGlobalChatCreateWithoutGlobalChatInput[] | MessageGroupGlobalChatUncheckedCreateWithoutGlobalChatInput[]
    connectOrCreate?: MessageGroupGlobalChatCreateOrConnectWithoutGlobalChatInput | MessageGroupGlobalChatCreateOrConnectWithoutGlobalChatInput[]
    createMany?: MessageGroupGlobalChatCreateManyGlobalChatInputEnvelope
    connect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutGlobalChatNestedInput = {
    create?: XOR<UserCreateWithoutGlobalChatInput, UserUncheckedCreateWithoutGlobalChatInput> | UserCreateWithoutGlobalChatInput[] | UserUncheckedCreateWithoutGlobalChatInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGlobalChatInput | UserCreateOrConnectWithoutGlobalChatInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGlobalChatInput | UserUpsertWithWhereUniqueWithoutGlobalChatInput[]
    createMany?: UserCreateManyGlobalChatInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGlobalChatInput | UserUpdateWithWhereUniqueWithoutGlobalChatInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGlobalChatInput | UserUpdateManyWithWhereWithoutGlobalChatInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageGroupGlobalChatUpdateManyWithoutGlobalChatNestedInput = {
    create?: XOR<MessageGroupGlobalChatCreateWithoutGlobalChatInput, MessageGroupGlobalChatUncheckedCreateWithoutGlobalChatInput> | MessageGroupGlobalChatCreateWithoutGlobalChatInput[] | MessageGroupGlobalChatUncheckedCreateWithoutGlobalChatInput[]
    connectOrCreate?: MessageGroupGlobalChatCreateOrConnectWithoutGlobalChatInput | MessageGroupGlobalChatCreateOrConnectWithoutGlobalChatInput[]
    upsert?: MessageGroupGlobalChatUpsertWithWhereUniqueWithoutGlobalChatInput | MessageGroupGlobalChatUpsertWithWhereUniqueWithoutGlobalChatInput[]
    createMany?: MessageGroupGlobalChatCreateManyGlobalChatInputEnvelope
    set?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    disconnect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    delete?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    connect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    update?: MessageGroupGlobalChatUpdateWithWhereUniqueWithoutGlobalChatInput | MessageGroupGlobalChatUpdateWithWhereUniqueWithoutGlobalChatInput[]
    updateMany?: MessageGroupGlobalChatUpdateManyWithWhereWithoutGlobalChatInput | MessageGroupGlobalChatUpdateManyWithWhereWithoutGlobalChatInput[]
    deleteMany?: MessageGroupGlobalChatScalarWhereInput | MessageGroupGlobalChatScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutGlobalChatNestedInput = {
    create?: XOR<UserCreateWithoutGlobalChatInput, UserUncheckedCreateWithoutGlobalChatInput> | UserCreateWithoutGlobalChatInput[] | UserUncheckedCreateWithoutGlobalChatInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGlobalChatInput | UserCreateOrConnectWithoutGlobalChatInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGlobalChatInput | UserUpsertWithWhereUniqueWithoutGlobalChatInput[]
    createMany?: UserCreateManyGlobalChatInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGlobalChatInput | UserUpdateWithWhereUniqueWithoutGlobalChatInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGlobalChatInput | UserUpdateManyWithWhereWithoutGlobalChatInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageGroupGlobalChatUncheckedUpdateManyWithoutGlobalChatNestedInput = {
    create?: XOR<MessageGroupGlobalChatCreateWithoutGlobalChatInput, MessageGroupGlobalChatUncheckedCreateWithoutGlobalChatInput> | MessageGroupGlobalChatCreateWithoutGlobalChatInput[] | MessageGroupGlobalChatUncheckedCreateWithoutGlobalChatInput[]
    connectOrCreate?: MessageGroupGlobalChatCreateOrConnectWithoutGlobalChatInput | MessageGroupGlobalChatCreateOrConnectWithoutGlobalChatInput[]
    upsert?: MessageGroupGlobalChatUpsertWithWhereUniqueWithoutGlobalChatInput | MessageGroupGlobalChatUpsertWithWhereUniqueWithoutGlobalChatInput[]
    createMany?: MessageGroupGlobalChatCreateManyGlobalChatInputEnvelope
    set?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    disconnect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    delete?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    connect?: MessageGroupGlobalChatWhereUniqueInput | MessageGroupGlobalChatWhereUniqueInput[]
    update?: MessageGroupGlobalChatUpdateWithWhereUniqueWithoutGlobalChatInput | MessageGroupGlobalChatUpdateWithWhereUniqueWithoutGlobalChatInput[]
    updateMany?: MessageGroupGlobalChatUpdateManyWithWhereWithoutGlobalChatInput | MessageGroupGlobalChatUpdateManyWithWhereWithoutGlobalChatInput[]
    deleteMany?: MessageGroupGlobalChatScalarWhereInput | MessageGroupGlobalChatScalarWhereInput[]
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

  export type NestedEnumPresenceFilter<$PrismaModel = never> = {
    equals?: $Enums.Presence | EnumPresenceFieldRefInput<$PrismaModel>
    in?: $Enums.Presence[] | ListEnumPresenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Presence[] | ListEnumPresenceFieldRefInput<$PrismaModel>
    not?: NestedEnumPresenceFilter<$PrismaModel> | $Enums.Presence
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumPresenceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Presence | EnumPresenceFieldRefInput<$PrismaModel>
    in?: $Enums.Presence[] | ListEnumPresenceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Presence[] | ListEnumPresenceFieldRefInput<$PrismaModel>
    not?: NestedEnumPresenceWithAggregatesFilter<$PrismaModel> | $Enums.Presence
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPresenceFilter<$PrismaModel>
    _max?: NestedEnumPresenceFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type ChatCreateWithoutSenderChatInput = {
    id?: string
    receiverChat: UserCreateNestedOneWithoutReceiverChatInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutSenderChatInput = {
    id?: string
    receiverChatId: number
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutSenderChatInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutSenderChatInput, ChatUncheckedCreateWithoutSenderChatInput>
  }

  export type ChatCreateManySenderChatInputEnvelope = {
    data: ChatCreateManySenderChatInput | ChatCreateManySenderChatInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutReceiverChatInput = {
    id?: string
    senderChat: UserCreateNestedOneWithoutSenderChatInput
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutReceiverChatInput = {
    id?: string
    senderChatId: number
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutReceiverChatInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutReceiverChatInput, ChatUncheckedCreateWithoutReceiverChatInput>
  }

  export type ChatCreateManyReceiverChatInputEnvelope = {
    data: ChatCreateManyReceiverChatInput | ChatCreateManyReceiverChatInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderMessageInput = {
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    receiverMessage: UserCreateNestedOneWithoutReceiverMessageInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderMessageInput = {
    id?: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    receiverMessageId: number
    chatId: string
  }

  export type MessageCreateOrConnectWithoutSenderMessageInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderMessageInput, MessageUncheckedCreateWithoutSenderMessageInput>
  }

  export type MessageCreateManySenderMessageInputEnvelope = {
    data: MessageCreateManySenderMessageInput | MessageCreateManySenderMessageInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverMessageInput = {
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    senderMessage: UserCreateNestedOneWithoutSenderMessageInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutReceiverMessageInput = {
    id?: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    senderMessageId: number
    chatId: string
  }

  export type MessageCreateOrConnectWithoutReceiverMessageInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverMessageInput, MessageUncheckedCreateWithoutReceiverMessageInput>
  }

  export type MessageCreateManyReceiverMessageInputEnvelope = {
    data: MessageCreateManyReceiverMessageInput | MessageCreateManyReceiverMessageInput[]
    skipDuplicates?: boolean
  }

  export type MessageGroupGlobalChatCreateWithoutUserInput = {
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutMessagesGGChatInput
    globalChat?: GlobalChatCreateNestedOneWithoutMessagesGGChatInput
  }

  export type MessageGroupGlobalChatUncheckedCreateWithoutUserInput = {
    id?: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groupId?: string | null
    globalChatId?: string | null
  }

  export type MessageGroupGlobalChatCreateOrConnectWithoutUserInput = {
    where: MessageGroupGlobalChatWhereUniqueInput
    create: XOR<MessageGroupGlobalChatCreateWithoutUserInput, MessageGroupGlobalChatUncheckedCreateWithoutUserInput>
  }

  export type MessageGroupGlobalChatCreateManyUserInputEnvelope = {
    data: MessageGroupGlobalChatCreateManyUserInput | MessageGroupGlobalChatCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutUsersInput = {
    id?: string
    group_name: string
    group_image: string
    group_creatorId: number
    messagesGGChat?: MessageGroupGlobalChatCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutUsersInput = {
    id?: string
    group_name: string
    group_image: string
    group_creatorId: number
    messagesGGChat?: MessageGroupGlobalChatUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutUsersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
  }

  export type GlobalChatCreateWithoutUsersInput = {
    id?: string
    messagesGGChat?: MessageGroupGlobalChatCreateNestedManyWithoutGlobalChatInput
  }

  export type GlobalChatUncheckedCreateWithoutUsersInput = {
    id?: string
    messagesGGChat?: MessageGroupGlobalChatUncheckedCreateNestedManyWithoutGlobalChatInput
  }

  export type GlobalChatCreateOrConnectWithoutUsersInput = {
    where: GlobalChatWhereUniqueInput
    create: XOR<GlobalChatCreateWithoutUsersInput, GlobalChatUncheckedCreateWithoutUsersInput>
  }

  export type ChatUpsertWithWhereUniqueWithoutSenderChatInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutSenderChatInput, ChatUncheckedUpdateWithoutSenderChatInput>
    create: XOR<ChatCreateWithoutSenderChatInput, ChatUncheckedCreateWithoutSenderChatInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutSenderChatInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutSenderChatInput, ChatUncheckedUpdateWithoutSenderChatInput>
  }

  export type ChatUpdateManyWithWhereWithoutSenderChatInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutSenderChatInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    senderChatId?: IntFilter<"Chat"> | number
    receiverChatId?: IntFilter<"Chat"> | number
  }

  export type ChatUpsertWithWhereUniqueWithoutReceiverChatInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutReceiverChatInput, ChatUncheckedUpdateWithoutReceiverChatInput>
    create: XOR<ChatCreateWithoutReceiverChatInput, ChatUncheckedCreateWithoutReceiverChatInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutReceiverChatInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutReceiverChatInput, ChatUncheckedUpdateWithoutReceiverChatInput>
  }

  export type ChatUpdateManyWithWhereWithoutReceiverChatInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutReceiverChatInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderMessageInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderMessageInput, MessageUncheckedUpdateWithoutSenderMessageInput>
    create: XOR<MessageCreateWithoutSenderMessageInput, MessageUncheckedCreateWithoutSenderMessageInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderMessageInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderMessageInput, MessageUncheckedUpdateWithoutSenderMessageInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderMessageInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderMessageInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    message_text?: StringFilter<"Message"> | string
    message_imageName?: StringFilter<"Message"> | string
    message_imageURL?: StringFilter<"Message"> | string
    message_imageType?: StringFilter<"Message"> | string
    message_imageSize?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    senderMessageId?: IntFilter<"Message"> | number
    receiverMessageId?: IntFilter<"Message"> | number
    chatId?: StringFilter<"Message"> | string
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverMessageInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverMessageInput, MessageUncheckedUpdateWithoutReceiverMessageInput>
    create: XOR<MessageCreateWithoutReceiverMessageInput, MessageUncheckedCreateWithoutReceiverMessageInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverMessageInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverMessageInput, MessageUncheckedUpdateWithoutReceiverMessageInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverMessageInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverMessageInput>
  }

  export type MessageGroupGlobalChatUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageGroupGlobalChatWhereUniqueInput
    update: XOR<MessageGroupGlobalChatUpdateWithoutUserInput, MessageGroupGlobalChatUncheckedUpdateWithoutUserInput>
    create: XOR<MessageGroupGlobalChatCreateWithoutUserInput, MessageGroupGlobalChatUncheckedCreateWithoutUserInput>
  }

  export type MessageGroupGlobalChatUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageGroupGlobalChatWhereUniqueInput
    data: XOR<MessageGroupGlobalChatUpdateWithoutUserInput, MessageGroupGlobalChatUncheckedUpdateWithoutUserInput>
  }

  export type MessageGroupGlobalChatUpdateManyWithWhereWithoutUserInput = {
    where: MessageGroupGlobalChatScalarWhereInput
    data: XOR<MessageGroupGlobalChatUpdateManyMutationInput, MessageGroupGlobalChatUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageGroupGlobalChatScalarWhereInput = {
    AND?: MessageGroupGlobalChatScalarWhereInput | MessageGroupGlobalChatScalarWhereInput[]
    OR?: MessageGroupGlobalChatScalarWhereInput[]
    NOT?: MessageGroupGlobalChatScalarWhereInput | MessageGroupGlobalChatScalarWhereInput[]
    id?: IntFilter<"MessageGroupGlobalChat"> | number
    message_text?: StringFilter<"MessageGroupGlobalChat"> | string
    message_imageName?: StringFilter<"MessageGroupGlobalChat"> | string
    message_imageURL?: StringFilter<"MessageGroupGlobalChat"> | string
    message_imageType?: StringFilter<"MessageGroupGlobalChat"> | string
    message_imageSize?: IntFilter<"MessageGroupGlobalChat"> | number
    createdAt?: DateTimeFilter<"MessageGroupGlobalChat"> | Date | string
    updatedAt?: DateTimeFilter<"MessageGroupGlobalChat"> | Date | string
    userId?: IntFilter<"MessageGroupGlobalChat"> | number
    groupId?: StringNullableFilter<"MessageGroupGlobalChat"> | string | null
    globalChatId?: StringNullableFilter<"MessageGroupGlobalChat"> | string | null
  }

  export type GroupUpsertWithoutUsersInput = {
    update: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
    create: XOR<GroupCreateWithoutUsersInput, GroupUncheckedCreateWithoutUsersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutUsersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutUsersInput, GroupUncheckedUpdateWithoutUsersInput>
  }

  export type GroupUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_image?: StringFieldUpdateOperationsInput | string
    group_creatorId?: IntFieldUpdateOperationsInput | number
    messagesGGChat?: MessageGroupGlobalChatUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_image?: StringFieldUpdateOperationsInput | string
    group_creatorId?: IntFieldUpdateOperationsInput | number
    messagesGGChat?: MessageGroupGlobalChatUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GlobalChatUpsertWithoutUsersInput = {
    update: XOR<GlobalChatUpdateWithoutUsersInput, GlobalChatUncheckedUpdateWithoutUsersInput>
    create: XOR<GlobalChatCreateWithoutUsersInput, GlobalChatUncheckedCreateWithoutUsersInput>
    where?: GlobalChatWhereInput
  }

  export type GlobalChatUpdateToOneWithWhereWithoutUsersInput = {
    where?: GlobalChatWhereInput
    data: XOR<GlobalChatUpdateWithoutUsersInput, GlobalChatUncheckedUpdateWithoutUsersInput>
  }

  export type GlobalChatUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    messagesGGChat?: MessageGroupGlobalChatUpdateManyWithoutGlobalChatNestedInput
  }

  export type GlobalChatUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    messagesGGChat?: MessageGroupGlobalChatUncheckedUpdateManyWithoutGlobalChatNestedInput
  }

  export type UserCreateWithoutSenderChatInput = {
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    receiverChat?: ChatCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessageCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessageCreateNestedManyWithoutReceiverMessageInput
    messagesGGChat?: MessageGroupGlobalChatCreateNestedManyWithoutUserInput
    group?: GroupCreateNestedOneWithoutUsersInput
    globalChat?: GlobalChatCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSenderChatInput = {
    id?: number
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    groupId?: string | null
    globalChatId?: string | null
    receiverChat?: ChatUncheckedCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessageUncheckedCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessageUncheckedCreateNestedManyWithoutReceiverMessageInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSenderChatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSenderChatInput, UserUncheckedCreateWithoutSenderChatInput>
  }

  export type UserCreateWithoutReceiverChatInput = {
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    senderChat?: ChatCreateNestedManyWithoutSenderChatInput
    senderMessage?: MessageCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessageCreateNestedManyWithoutReceiverMessageInput
    messagesGGChat?: MessageGroupGlobalChatCreateNestedManyWithoutUserInput
    group?: GroupCreateNestedOneWithoutUsersInput
    globalChat?: GlobalChatCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutReceiverChatInput = {
    id?: number
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    groupId?: string | null
    globalChatId?: string | null
    senderChat?: ChatUncheckedCreateNestedManyWithoutSenderChatInput
    senderMessage?: MessageUncheckedCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessageUncheckedCreateNestedManyWithoutReceiverMessageInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceiverChatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceiverChatInput, UserUncheckedCreateWithoutReceiverChatInput>
  }

  export type MessageCreateWithoutChatInput = {
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    senderMessage: UserCreateNestedOneWithoutSenderMessageInput
    receiverMessage: UserCreateNestedOneWithoutReceiverMessageInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    senderMessageId: number
    receiverMessageId: number
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSenderChatInput = {
    update: XOR<UserUpdateWithoutSenderChatInput, UserUncheckedUpdateWithoutSenderChatInput>
    create: XOR<UserCreateWithoutSenderChatInput, UserUncheckedCreateWithoutSenderChatInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSenderChatInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSenderChatInput, UserUncheckedUpdateWithoutSenderChatInput>
  }

  export type UserUpdateWithoutSenderChatInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    receiverChat?: ChatUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessageUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessageUpdateManyWithoutReceiverMessageNestedInput
    messagesGGChat?: MessageGroupGlobalChatUpdateManyWithoutUserNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    globalChat?: GlobalChatUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSenderChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    globalChatId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverChat?: ChatUncheckedUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessageUncheckedUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessageUncheckedUpdateManyWithoutReceiverMessageNestedInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceiverChatInput = {
    update: XOR<UserUpdateWithoutReceiverChatInput, UserUncheckedUpdateWithoutReceiverChatInput>
    create: XOR<UserCreateWithoutReceiverChatInput, UserUncheckedCreateWithoutReceiverChatInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceiverChatInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceiverChatInput, UserUncheckedUpdateWithoutReceiverChatInput>
  }

  export type UserUpdateWithoutReceiverChatInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    senderChat?: ChatUpdateManyWithoutSenderChatNestedInput
    senderMessage?: MessageUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessageUpdateManyWithoutReceiverMessageNestedInput
    messagesGGChat?: MessageGroupGlobalChatUpdateManyWithoutUserNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    globalChat?: GlobalChatUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutReceiverChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    globalChatId?: NullableStringFieldUpdateOperationsInput | string | null
    senderChat?: ChatUncheckedUpdateManyWithoutSenderChatNestedInput
    senderMessage?: MessageUncheckedUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessageUncheckedUpdateManyWithoutReceiverMessageNestedInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type UserCreateWithoutSenderMessageInput = {
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    senderChat?: ChatCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatCreateNestedManyWithoutReceiverChatInput
    receiverMessage?: MessageCreateNestedManyWithoutReceiverMessageInput
    messagesGGChat?: MessageGroupGlobalChatCreateNestedManyWithoutUserInput
    group?: GroupCreateNestedOneWithoutUsersInput
    globalChat?: GlobalChatCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutSenderMessageInput = {
    id?: number
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    groupId?: string | null
    globalChatId?: string | null
    senderChat?: ChatUncheckedCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatUncheckedCreateNestedManyWithoutReceiverChatInput
    receiverMessage?: MessageUncheckedCreateNestedManyWithoutReceiverMessageInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSenderMessageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSenderMessageInput, UserUncheckedCreateWithoutSenderMessageInput>
  }

  export type UserCreateWithoutReceiverMessageInput = {
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    senderChat?: ChatCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessageCreateNestedManyWithoutSenderMessageInput
    messagesGGChat?: MessageGroupGlobalChatCreateNestedManyWithoutUserInput
    group?: GroupCreateNestedOneWithoutUsersInput
    globalChat?: GlobalChatCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutReceiverMessageInput = {
    id?: number
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    groupId?: string | null
    globalChatId?: string | null
    senderChat?: ChatUncheckedCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatUncheckedCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessageUncheckedCreateNestedManyWithoutSenderMessageInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceiverMessageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceiverMessageInput, UserUncheckedCreateWithoutReceiverMessageInput>
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    senderChat: UserCreateNestedOneWithoutSenderChatInput
    receiverChat: UserCreateNestedOneWithoutReceiverChatInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    senderChatId: number
    receiverChatId: number
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutSenderMessageInput = {
    update: XOR<UserUpdateWithoutSenderMessageInput, UserUncheckedUpdateWithoutSenderMessageInput>
    create: XOR<UserCreateWithoutSenderMessageInput, UserUncheckedCreateWithoutSenderMessageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSenderMessageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSenderMessageInput, UserUncheckedUpdateWithoutSenderMessageInput>
  }

  export type UserUpdateWithoutSenderMessageInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    senderChat?: ChatUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUpdateManyWithoutReceiverChatNestedInput
    receiverMessage?: MessageUpdateManyWithoutReceiverMessageNestedInput
    messagesGGChat?: MessageGroupGlobalChatUpdateManyWithoutUserNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    globalChat?: GlobalChatUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutSenderMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    globalChatId?: NullableStringFieldUpdateOperationsInput | string | null
    senderChat?: ChatUncheckedUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUncheckedUpdateManyWithoutReceiverChatNestedInput
    receiverMessage?: MessageUncheckedUpdateManyWithoutReceiverMessageNestedInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceiverMessageInput = {
    update: XOR<UserUpdateWithoutReceiverMessageInput, UserUncheckedUpdateWithoutReceiverMessageInput>
    create: XOR<UserCreateWithoutReceiverMessageInput, UserUncheckedCreateWithoutReceiverMessageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceiverMessageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceiverMessageInput, UserUncheckedUpdateWithoutReceiverMessageInput>
  }

  export type UserUpdateWithoutReceiverMessageInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    senderChat?: ChatUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessageUpdateManyWithoutSenderMessageNestedInput
    messagesGGChat?: MessageGroupGlobalChatUpdateManyWithoutUserNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    globalChat?: GlobalChatUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutReceiverMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    globalChatId?: NullableStringFieldUpdateOperationsInput | string | null
    senderChat?: ChatUncheckedUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUncheckedUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessageUncheckedUpdateManyWithoutSenderMessageNestedInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderChat?: UserUpdateOneRequiredWithoutSenderChatNestedInput
    receiverChat?: UserUpdateOneRequiredWithoutReceiverChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderChatId?: IntFieldUpdateOperationsInput | number
    receiverChatId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutMessagesGGChatInput = {
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    senderChat?: ChatCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessageCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessageCreateNestedManyWithoutReceiverMessageInput
    group?: GroupCreateNestedOneWithoutUsersInput
    globalChat?: GlobalChatCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutMessagesGGChatInput = {
    id?: number
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    groupId?: string | null
    globalChatId?: string | null
    senderChat?: ChatUncheckedCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatUncheckedCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessageUncheckedCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessageUncheckedCreateNestedManyWithoutReceiverMessageInput
  }

  export type UserCreateOrConnectWithoutMessagesGGChatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesGGChatInput, UserUncheckedCreateWithoutMessagesGGChatInput>
  }

  export type GroupCreateWithoutMessagesGGChatInput = {
    id?: string
    group_name: string
    group_image: string
    group_creatorId: number
    users?: UserCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMessagesGGChatInput = {
    id?: string
    group_name: string
    group_image: string
    group_creatorId: number
    users?: UserUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMessagesGGChatInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMessagesGGChatInput, GroupUncheckedCreateWithoutMessagesGGChatInput>
  }

  export type GlobalChatCreateWithoutMessagesGGChatInput = {
    id?: string
    users?: UserCreateNestedManyWithoutGlobalChatInput
  }

  export type GlobalChatUncheckedCreateWithoutMessagesGGChatInput = {
    id?: string
    users?: UserUncheckedCreateNestedManyWithoutGlobalChatInput
  }

  export type GlobalChatCreateOrConnectWithoutMessagesGGChatInput = {
    where: GlobalChatWhereUniqueInput
    create: XOR<GlobalChatCreateWithoutMessagesGGChatInput, GlobalChatUncheckedCreateWithoutMessagesGGChatInput>
  }

  export type UserUpsertWithoutMessagesGGChatInput = {
    update: XOR<UserUpdateWithoutMessagesGGChatInput, UserUncheckedUpdateWithoutMessagesGGChatInput>
    create: XOR<UserCreateWithoutMessagesGGChatInput, UserUncheckedCreateWithoutMessagesGGChatInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesGGChatInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesGGChatInput, UserUncheckedUpdateWithoutMessagesGGChatInput>
  }

  export type UserUpdateWithoutMessagesGGChatInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    senderChat?: ChatUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessageUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessageUpdateManyWithoutReceiverMessageNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
    globalChat?: GlobalChatUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesGGChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    globalChatId?: NullableStringFieldUpdateOperationsInput | string | null
    senderChat?: ChatUncheckedUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUncheckedUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessageUncheckedUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessageUncheckedUpdateManyWithoutReceiverMessageNestedInput
  }

  export type GroupUpsertWithoutMessagesGGChatInput = {
    update: XOR<GroupUpdateWithoutMessagesGGChatInput, GroupUncheckedUpdateWithoutMessagesGGChatInput>
    create: XOR<GroupCreateWithoutMessagesGGChatInput, GroupUncheckedCreateWithoutMessagesGGChatInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMessagesGGChatInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMessagesGGChatInput, GroupUncheckedUpdateWithoutMessagesGGChatInput>
  }

  export type GroupUpdateWithoutMessagesGGChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_image?: StringFieldUpdateOperationsInput | string
    group_creatorId?: IntFieldUpdateOperationsInput | number
    users?: UserUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMessagesGGChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    group_name?: StringFieldUpdateOperationsInput | string
    group_image?: StringFieldUpdateOperationsInput | string
    group_creatorId?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GlobalChatUpsertWithoutMessagesGGChatInput = {
    update: XOR<GlobalChatUpdateWithoutMessagesGGChatInput, GlobalChatUncheckedUpdateWithoutMessagesGGChatInput>
    create: XOR<GlobalChatCreateWithoutMessagesGGChatInput, GlobalChatUncheckedCreateWithoutMessagesGGChatInput>
    where?: GlobalChatWhereInput
  }

  export type GlobalChatUpdateToOneWithWhereWithoutMessagesGGChatInput = {
    where?: GlobalChatWhereInput
    data: XOR<GlobalChatUpdateWithoutMessagesGGChatInput, GlobalChatUncheckedUpdateWithoutMessagesGGChatInput>
  }

  export type GlobalChatUpdateWithoutMessagesGGChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutGlobalChatNestedInput
  }

  export type GlobalChatUncheckedUpdateWithoutMessagesGGChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutGlobalChatNestedInput
  }

  export type UserCreateWithoutGroupInput = {
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    senderChat?: ChatCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessageCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessageCreateNestedManyWithoutReceiverMessageInput
    messagesGGChat?: MessageGroupGlobalChatCreateNestedManyWithoutUserInput
    globalChat?: GlobalChatCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutGroupInput = {
    id?: number
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    globalChatId?: string | null
    senderChat?: ChatUncheckedCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatUncheckedCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessageUncheckedCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessageUncheckedCreateNestedManyWithoutReceiverMessageInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type UserCreateManyGroupInputEnvelope = {
    data: UserCreateManyGroupInput | UserCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type MessageGroupGlobalChatCreateWithoutGroupInput = {
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMessagesGGChatInput
    globalChat?: GlobalChatCreateNestedOneWithoutMessagesGGChatInput
  }

  export type MessageGroupGlobalChatUncheckedCreateWithoutGroupInput = {
    id?: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    globalChatId?: string | null
  }

  export type MessageGroupGlobalChatCreateOrConnectWithoutGroupInput = {
    where: MessageGroupGlobalChatWhereUniqueInput
    create: XOR<MessageGroupGlobalChatCreateWithoutGroupInput, MessageGroupGlobalChatUncheckedCreateWithoutGroupInput>
  }

  export type MessageGroupGlobalChatCreateManyGroupInputEnvelope = {
    data: MessageGroupGlobalChatCreateManyGroupInput | MessageGroupGlobalChatCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
    create: XOR<UserCreateWithoutGroupInput, UserUncheckedCreateWithoutGroupInput>
  }

  export type UserUpdateWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutGroupInput, UserUncheckedUpdateWithoutGroupInput>
  }

  export type UserUpdateManyWithWhereWithoutGroupInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    confirm_password?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    profile_picture?: StringFilter<"User"> | string
    background_picture?: StringFilter<"User"> | string
    online_presence?: EnumPresenceFilter<"User"> | $Enums.Presence
    role?: EnumRoleFilter<"User"> | $Enums.Role
    groupId?: StringNullableFilter<"User"> | string | null
    globalChatId?: StringNullableFilter<"User"> | string | null
  }

  export type MessageGroupGlobalChatUpsertWithWhereUniqueWithoutGroupInput = {
    where: MessageGroupGlobalChatWhereUniqueInput
    update: XOR<MessageGroupGlobalChatUpdateWithoutGroupInput, MessageGroupGlobalChatUncheckedUpdateWithoutGroupInput>
    create: XOR<MessageGroupGlobalChatCreateWithoutGroupInput, MessageGroupGlobalChatUncheckedCreateWithoutGroupInput>
  }

  export type MessageGroupGlobalChatUpdateWithWhereUniqueWithoutGroupInput = {
    where: MessageGroupGlobalChatWhereUniqueInput
    data: XOR<MessageGroupGlobalChatUpdateWithoutGroupInput, MessageGroupGlobalChatUncheckedUpdateWithoutGroupInput>
  }

  export type MessageGroupGlobalChatUpdateManyWithWhereWithoutGroupInput = {
    where: MessageGroupGlobalChatScalarWhereInput
    data: XOR<MessageGroupGlobalChatUpdateManyMutationInput, MessageGroupGlobalChatUncheckedUpdateManyWithoutGroupInput>
  }

  export type UserCreateWithoutGlobalChatInput = {
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    senderChat?: ChatCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessageCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessageCreateNestedManyWithoutReceiverMessageInput
    messagesGGChat?: MessageGroupGlobalChatCreateNestedManyWithoutUserInput
    group?: GroupCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutGlobalChatInput = {
    id?: number
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    groupId?: string | null
    senderChat?: ChatUncheckedCreateNestedManyWithoutSenderChatInput
    receiverChat?: ChatUncheckedCreateNestedManyWithoutReceiverChatInput
    senderMessage?: MessageUncheckedCreateNestedManyWithoutSenderMessageInput
    receiverMessage?: MessageUncheckedCreateNestedManyWithoutReceiverMessageInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGlobalChatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGlobalChatInput, UserUncheckedCreateWithoutGlobalChatInput>
  }

  export type UserCreateManyGlobalChatInputEnvelope = {
    data: UserCreateManyGlobalChatInput | UserCreateManyGlobalChatInput[]
    skipDuplicates?: boolean
  }

  export type MessageGroupGlobalChatCreateWithoutGlobalChatInput = {
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMessagesGGChatInput
    group?: GroupCreateNestedOneWithoutMessagesGGChatInput
  }

  export type MessageGroupGlobalChatUncheckedCreateWithoutGlobalChatInput = {
    id?: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    groupId?: string | null
  }

  export type MessageGroupGlobalChatCreateOrConnectWithoutGlobalChatInput = {
    where: MessageGroupGlobalChatWhereUniqueInput
    create: XOR<MessageGroupGlobalChatCreateWithoutGlobalChatInput, MessageGroupGlobalChatUncheckedCreateWithoutGlobalChatInput>
  }

  export type MessageGroupGlobalChatCreateManyGlobalChatInputEnvelope = {
    data: MessageGroupGlobalChatCreateManyGlobalChatInput | MessageGroupGlobalChatCreateManyGlobalChatInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutGlobalChatInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutGlobalChatInput, UserUncheckedUpdateWithoutGlobalChatInput>
    create: XOR<UserCreateWithoutGlobalChatInput, UserUncheckedCreateWithoutGlobalChatInput>
  }

  export type UserUpdateWithWhereUniqueWithoutGlobalChatInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutGlobalChatInput, UserUncheckedUpdateWithoutGlobalChatInput>
  }

  export type UserUpdateManyWithWhereWithoutGlobalChatInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutGlobalChatInput>
  }

  export type MessageGroupGlobalChatUpsertWithWhereUniqueWithoutGlobalChatInput = {
    where: MessageGroupGlobalChatWhereUniqueInput
    update: XOR<MessageGroupGlobalChatUpdateWithoutGlobalChatInput, MessageGroupGlobalChatUncheckedUpdateWithoutGlobalChatInput>
    create: XOR<MessageGroupGlobalChatCreateWithoutGlobalChatInput, MessageGroupGlobalChatUncheckedCreateWithoutGlobalChatInput>
  }

  export type MessageGroupGlobalChatUpdateWithWhereUniqueWithoutGlobalChatInput = {
    where: MessageGroupGlobalChatWhereUniqueInput
    data: XOR<MessageGroupGlobalChatUpdateWithoutGlobalChatInput, MessageGroupGlobalChatUncheckedUpdateWithoutGlobalChatInput>
  }

  export type MessageGroupGlobalChatUpdateManyWithWhereWithoutGlobalChatInput = {
    where: MessageGroupGlobalChatScalarWhereInput
    data: XOR<MessageGroupGlobalChatUpdateManyMutationInput, MessageGroupGlobalChatUncheckedUpdateManyWithoutGlobalChatInput>
  }

  export type ChatCreateManySenderChatInput = {
    id?: string
    receiverChatId: number
  }

  export type ChatCreateManyReceiverChatInput = {
    id?: string
    senderChatId: number
  }

  export type MessageCreateManySenderMessageInput = {
    id?: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    receiverMessageId: number
    chatId: string
  }

  export type MessageCreateManyReceiverMessageInput = {
    id?: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    senderMessageId: number
    chatId: string
  }

  export type MessageGroupGlobalChatCreateManyUserInput = {
    id?: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    groupId?: string | null
    globalChatId?: string | null
  }

  export type ChatUpdateWithoutSenderChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverChat?: UserUpdateOneRequiredWithoutReceiverChatNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutSenderChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverChatId?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutSenderChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverChatId?: IntFieldUpdateOperationsInput | number
  }

  export type ChatUpdateWithoutReceiverChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderChat?: UserUpdateOneRequiredWithoutSenderChatNestedInput
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutReceiverChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderChatId?: IntFieldUpdateOperationsInput | number
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutReceiverChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderChatId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUpdateWithoutSenderMessageInput = {
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverMessage?: UserUpdateOneRequiredWithoutReceiverMessageNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverMessageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiverMessageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutReceiverMessageInput = {
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessage?: UserUpdateOneRequiredWithoutSenderMessageNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutReceiverMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessageId?: IntFieldUpdateOperationsInput | number
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageGroupGlobalChatUpdateWithoutUserInput = {
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutMessagesGGChatNestedInput
    globalChat?: GlobalChatUpdateOneWithoutMessagesGGChatNestedInput
  }

  export type MessageGroupGlobalChatUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    globalChatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageGroupGlobalChatUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    globalChatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyChatInput = {
    id?: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    senderMessageId: number
    receiverMessageId: number
  }

  export type MessageUpdateWithoutChatInput = {
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessage?: UserUpdateOneRequiredWithoutSenderMessageNestedInput
    receiverMessage?: UserUpdateOneRequiredWithoutReceiverMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessageId?: IntFieldUpdateOperationsInput | number
    receiverMessageId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderMessageId?: IntFieldUpdateOperationsInput | number
    receiverMessageId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyGroupInput = {
    id?: number
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    globalChatId?: string | null
  }

  export type MessageGroupGlobalChatCreateManyGroupInput = {
    id?: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    globalChatId?: string | null
  }

  export type UserUpdateWithoutGroupInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    senderChat?: ChatUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessageUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessageUpdateManyWithoutReceiverMessageNestedInput
    messagesGGChat?: MessageGroupGlobalChatUpdateManyWithoutUserNestedInput
    globalChat?: GlobalChatUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    globalChatId?: NullableStringFieldUpdateOperationsInput | string | null
    senderChat?: ChatUncheckedUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUncheckedUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessageUncheckedUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessageUncheckedUpdateManyWithoutReceiverMessageNestedInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    globalChatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageGroupGlobalChatUpdateWithoutGroupInput = {
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesGGChatNestedInput
    globalChat?: GlobalChatUpdateOneWithoutMessagesGGChatNestedInput
  }

  export type MessageGroupGlobalChatUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    globalChatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageGroupGlobalChatUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    globalChatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyGlobalChatInput = {
    id?: number
    first_name: string
    last_name: string
    username: string
    password: string
    confirm_password: string
    bio?: string | null
    profile_picture: string
    background_picture: string
    online_presence?: $Enums.Presence
    role?: $Enums.Role
    groupId?: string | null
  }

  export type MessageGroupGlobalChatCreateManyGlobalChatInput = {
    id?: number
    message_text: string
    message_imageName: string
    message_imageURL: string
    message_imageType: string
    message_imageSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    groupId?: string | null
  }

  export type UserUpdateWithoutGlobalChatInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    senderChat?: ChatUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessageUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessageUpdateManyWithoutReceiverMessageNestedInput
    messagesGGChat?: MessageGroupGlobalChatUpdateManyWithoutUserNestedInput
    group?: GroupUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutGlobalChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    senderChat?: ChatUncheckedUpdateManyWithoutSenderChatNestedInput
    receiverChat?: ChatUncheckedUpdateManyWithoutReceiverChatNestedInput
    senderMessage?: MessageUncheckedUpdateManyWithoutSenderMessageNestedInput
    receiverMessage?: MessageUncheckedUpdateManyWithoutReceiverMessageNestedInput
    messagesGGChat?: MessageGroupGlobalChatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutGlobalChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    confirm_password?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: StringFieldUpdateOperationsInput | string
    background_picture?: StringFieldUpdateOperationsInput | string
    online_presence?: EnumPresenceFieldUpdateOperationsInput | $Enums.Presence
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageGroupGlobalChatUpdateWithoutGlobalChatInput = {
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesGGChatNestedInput
    group?: GroupUpdateOneWithoutMessagesGGChatNestedInput
  }

  export type MessageGroupGlobalChatUncheckedUpdateWithoutGlobalChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageGroupGlobalChatUncheckedUpdateManyWithoutGlobalChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    message_text?: StringFieldUpdateOperationsInput | string
    message_imageName?: StringFieldUpdateOperationsInput | string
    message_imageURL?: StringFieldUpdateOperationsInput | string
    message_imageType?: StringFieldUpdateOperationsInput | string
    message_imageSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
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