export function debounce(cb: Function, time = 500): Function {
    let timeout: NodeJS.Timeout;
    return (...args: unknown[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => cb(...args), time);
    };
}
