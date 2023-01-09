export const INIT_SESSION_SLICE_STATE = {
  session: {},
};

export const sessionWithId = (sessionId) => (
  { session: { id: sessionId} }
);
