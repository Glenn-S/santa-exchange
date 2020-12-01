
export const getEnvironmentVar = (envVar: string): string => {
  const envValue = process.env[envVar]
  if (!envValue) {
    throw new Error(`Environment variable ${envVar}, could not be found`);
  }

  return envValue;
}