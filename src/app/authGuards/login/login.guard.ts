import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { DecodedToken } from "src/app/models/decodedToken";
import { JwtDecoderService } from "src/app/services/jwtDecoder/jwt-decoder.service";

export const loginGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem("token");
  const router = inject(Router);

  function isTokenExpired(decodedToken: DecodedToken): boolean {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds since the epoch
    return currentTime < decodedToken.exp;
  }

  const jwtDecoder = inject(JwtDecoderService);

  if (token) {
    const decodedInfoFromToken: DecodedToken =
      jwtDecoder.decodeInfoFromToken(token);
    if (isTokenExpired(decodedInfoFromToken)) {
      localStorage.removeItem("token");
      return true;
    }

    const userType = decodedInfoFromToken["User Type"];
    if (userType === "Consumer") router.navigate(["consumer-home"]);
    else if (userType === "Business") router.navigate(["business-home"]);
    else router.navigate(["consumer-home"]);
    return false;
  }

  return true;
};
