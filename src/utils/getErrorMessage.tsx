import { Text } from "@src/components/Typography";

const getError = (error: any) => {
    if (error instanceof Error) {
        return error.message
    }
    
    const errorObject = error as object;

    if ('message' in errorObject && typeof errorObject.message === 'string') {
        return errorObject.message;
    }

    return String(error);
}

export const getErrorMessage = (error: any) => {
    return (<Text color="error">{getError(error)}</Text>);
};
