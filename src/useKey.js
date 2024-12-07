import { useEffect } from "react";
export const useKey = (keyCode, action) => {
  useEffect(
    function () {
      function hookCallback(e) {
        if (e.code.toLowerCase() === keyCode.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", hookCallback);

      return function () {
        document.removeEventListener("keydown", hookCallback);
      };
    },
    [action, keyCode],
  );
};
