import { Grid } from "@src/components/Grid";
import { type Response } from "@src/schemas/response";
import React from "react";
import { FItem } from "../FItem";
import { Stack } from "@src/components/Stack";
import { Text } from "@src/components/Typography";
import { Divider } from "@src/components/Divider";
import { vars } from "@src/styles/main.css";

interface Props {
    response: Response;
}

export const BotResponse: React.FC<Props> = ({ response }) => {
    return (
        <Stack direction="column" align="start" gap={4}>
            <FItem item={response} />
            <Text>{response.description}</Text>
            <Stack direction="column">
                {/* <Text block style={{
                    fontWeight: vars.fontWeight.extraBold
                }}>Justification:</Text> */}
                <Text>{response.justification}</Text>
            </Stack>
        </Stack>
    )
};