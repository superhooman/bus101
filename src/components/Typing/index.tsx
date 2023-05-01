import React from "react";
import { Stack } from "../Stack";
import * as cls from './Typing.css';
import { unit } from "@src/styles/unit";

export const Typing: React.FC = () => (
    <Stack gap={1} align="center" style={{ height: unit(5) }}>
        <div className={cls.item} />
        <div className={cls.item} />
        <div className={cls.item} />
    </Stack>
);
