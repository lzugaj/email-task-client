import env from "../env";

const api = {
  emailTask: `${env.REACT_APP_GATEWAY_BASE_URL}/api/v1`,
};

export const emailTask = {
  emailMessage: `${api.emailTask}/email-message`,
};
