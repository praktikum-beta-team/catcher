export interface IErrorResponse {
  reason: string;
}

/**
 * В сваггере структура возвращаемых ошибок, другая.
 * Возможно, в каких-то запросах это себя проявит
 *
 * {
 *   message: string;
 *   body: Record<string, unknown>;
 * }
 */
