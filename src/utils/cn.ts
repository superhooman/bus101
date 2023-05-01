import type { ClassValue as ClassValueBase } from "clsx";
import clsx from "clsx";

export type ClassValue = ClassValueBase;

export const cn = (...values: ClassValue[]) => clsx(...values);
