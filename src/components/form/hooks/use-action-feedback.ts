import { useEffect, useRef } from "react";
import { ActionState } from "../utils/to-action-state";

type onArgs = {
  actionState: ActionState;
};

type useActionFeedbackOptions = {
  onSuccess?: (onArgs: onArgs) => void;
  onError?: (onArgs: onArgs) => void;
};

export const useActionFeedback = (
  actionState: ActionState,
  options: useActionFeedbackOptions
) => {
  const prevTimestamp = useRef(actionState.timestamp);
  const isUpdate = prevTimestamp.current !== actionState.timestamp;

  useEffect(() => {
    if (!isUpdate) {
      return;
    }

    if (actionState.status === "SUCCESS") {
      options.onSuccess?.({ actionState });
    }

    if (actionState.status === "ERROR") {
      options.onError?.({ actionState });
    }

    prevTimestamp.current = actionState.timestamp;
  }, [actionState, options, isUpdate]);
};
