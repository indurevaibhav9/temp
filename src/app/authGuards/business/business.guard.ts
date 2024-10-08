import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { DecodedToken } from "src/app/models/decodedToken";
import { JwtDecoderService } from "src/app/services/jwtDecoder/jwt-decoder.service";

export const businessGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const jwtDecoder = inject(JwtDecoderService);
  const token = localStorage.getItem("token") || "";

  function isTokenExpired(decodedToken: DecodedToken): boolean {
    const currentTime = Math.floor(Date.now() / 10000); // Current time in seconds since the epoch
    return currentTime > decodedToken.exp;
  }

  if (token) {
    const decodedInfoFromToken: DecodedToken =
      jwtDecoder.decodeInfoFromToken(token);
    const userType = decodedInfoFromToken["User Type"];
    console.log(decodedInfoFromToken);
    if (isTokenExpired(decodedInfoFromToken)) {
      localStorage.removeItem("token");
      router.navigate(["/login"]);
      return false;
    }
    if (userType === "Business") return true;
  }
  router.navigate(["/login"]);
  return false;
};
