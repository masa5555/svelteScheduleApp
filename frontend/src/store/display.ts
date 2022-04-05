import type { DisplayType } from "types/global"
import { writable } from "svelte/store"

export const displayTypeNameArray: readonly DisplayType[] = [
  "TaskView",
  "ScheduleView",
  "ProgressView"
]

export const currentDisplayType = writable("TaskView" as DisplayType)