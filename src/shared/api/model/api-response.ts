import { ApiResponseMetadata } from './api-response-metadata';

export interface ApiResponse<T> {
    info: ApiResponseMetadata;
    results: T;
}
