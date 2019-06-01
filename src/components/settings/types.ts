export interface SettingsState {
  clock: ClockSettings
}

export interface ClockSettings {
  timeFormat: string;
  dateFormat: string;
}
