export interface Repository<T> {
    load: () => Promise<T[]>;
    search: ({ id }: { id: string }) => Promise<T>;
}
