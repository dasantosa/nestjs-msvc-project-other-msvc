import {
  RpcExceptionFilter,
  Catch,
  ArgumentsHost,
  Logger,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Observable, throwError } from 'rxjs';

@Catch(RpcException)
export class AllExceptionFilter implements RpcExceptionFilter<RpcException> {
  public catch(exception: RpcException, host: ArgumentsHost): Observable<any> {
    const exceptionError = exception.getError() as any;

    const error = {
      error: exceptionError.response?.error,
      message: exceptionError.response?.message,
      status: exceptionError.response?.statusCode,
      timestamp: new Date().toISOString(),
    };
    Logger.error(error.status + '. ' + error.message);
    return throwError(() => new RpcException(error));
  }
}
