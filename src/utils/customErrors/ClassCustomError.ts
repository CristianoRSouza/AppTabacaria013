export class AppError extends Error {
  constructor(
    public readonly message: string,
    public readonly code?: string,
    public readonly details?: any
  ) {
    super(message);
    this.name = 'AppError';
    
    // Mantém o stack trace para debug
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}


export function appErrorCustom( message: string, code: string, details?: any): never {
  throw new AppError(message, code, details);
}
//throw new AppError('Falha na autenticação', 'AUTH_001', { userId: 123 });