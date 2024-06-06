import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      withCredentials: true,
    });
    // console.log(req);
    return next.handle(modifiedReq)
    // .pipe(
    //   filter((val) => val.type === HttpEventType.Sent),
    //   tap((val) => {
    //     console.log('sent the req');
    //   })
    // );
  }
}
