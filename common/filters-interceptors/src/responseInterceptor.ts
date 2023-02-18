import { ExecutionContext, NestInterceptor } from '@nestjs/common';
import { CallHandler } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        const statusCode = context.switchToHttp().getResponse().statusCode;
        const message = 'SUCCESS';
        return { statusCode, data, message };
      }),
    );
  }
}
