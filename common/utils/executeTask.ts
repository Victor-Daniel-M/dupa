/**
 * Given a taskEither, execute the task, await the result and return a promise.
 * It is used a lot as nest rely pretty heavily on Promise
 *
 * @param task: a TaskEither
 */
export const executeTask = async <E, A>(task: any): Promise<A> => {
  const result = await task();
  return result;
};

/**
 * Given a taskEither, execute the task, and call the onLeft or OnRight callback.
 *
 * @param task: a TaskEither
 * @param onLeft
 * @param onRight
 */
export const executeAndHandle = async <E, A, B>(task: any): Promise<B> => {
  const result = await task();
  return result;
};
