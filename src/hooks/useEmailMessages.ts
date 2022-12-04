import { useEffect, useState } from "react";

import { getEmailMessage } from "../api/getEmailMessage";
import { EmailMessageResponse } from "../api/types";

export const useEmailMessages = () => {
  const [emailMessages, setEmailMessages] = useState<EmailMessageResponse[]>([]);

  useEffect(() => {
    getEmailMessage()
      .then((data: EmailMessageResponse[]) => setEmailMessages(data))
      .catch((error) => console.log(error));
  }, []);

  return emailMessages;
};
