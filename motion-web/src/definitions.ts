declare global {
  interface PluginRegistry {
    rgs-motion-web?: rgs-motion-webPlugin;
  }
}

export interface rgs-motion-webPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
