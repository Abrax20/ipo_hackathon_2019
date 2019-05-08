import * as Stomp from "stompjs";
import * as SockJS from "sockjs-client";
import { PROVIDER_URI } from "./constants/api";
import { updateProccessFromSocket } from "./actions/socket";

export default async ({ dispatch }) => {
  const ws = new SockJS(`${PROVIDER_URI}/socket`);
  const stompClient = Stomp.over(ws);
  stompClient.debug = null;
  stompClient.connect({}, function() {
    stompClient.subscribe("/progress", reqest => {
      const action = JSON.parse(reqest.body)
      switch (action.type) {
        case "UPDATE_PROCESS": {
          dispatch(updateProccessFromSocket(action.payload));
          break;
        }
        default:
          break;
      }
    });
  });
};
