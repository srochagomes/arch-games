// Helper function to get environment variables with defaults
const getEnvVar = (name: string, defaultValue?: string): string => {
  try {
    const value = process.env[name] || defaultValue;
    if (value === undefined) {
      throw new Error(`Environment variable ${name} is not set and no default value provided`);
    }
    return value;
  } catch (error) {
    console.error(`Error getting environment variable ${name}:`, error);
    throw error;
  }
};

// Validate database configuration
const validateDatabaseConfig = (config: typeof env.database) => {
  const requiredFields = ['host', 'port', 'user', 'password', 'database', 'schema'];
  const missingFields = requiredFields.filter(field => !config[field as keyof typeof config]);
  
  if (missingFields.length > 0) {
    throw new Error(`Missing required database configuration fields: ${missingFields.join(', ')}`);
  }
  
  if (isNaN(config.port)) {
    throw new Error(`Invalid database port: ${config.port}`);
  }
};

// Load environment variables with defaults for local development
export const env = {
  database: {
    host: getEnvVar('POSTGRES_HOST', 'localhost'),
    port: parseInt(getEnvVar('POSTGRES_PORT', '5433')),
    user: getEnvVar('POSTGRES_USER', 'n8n_user'),
    password: getEnvVar('POSTGRES_PASSWORD', 'n8n_pass'),
    database: getEnvVar('POSTGRES_DB', 'n8n'),
    schema: getEnvVar('POSTGRES_SCHEMA', 'arch_games'),
  },
  app: {
    uploadDir: getEnvVar('UPLOAD_DIR', 'uploads'),
  },
  public: {
    apiUrl: getEnvVar('NEXT_PUBLIC_API_URL', 'http://localhost:5446'),
  },
  n8n: {
    webhookUrl: getEnvVar('N8N_WEBHOOK_URL', 'http://localhost:5678/webhook-test/55bb9880-0bf3-4553-b291-65bd90e45cf6'),
    username: getEnvVar('N8N_USERNAME', 'n8n'),
    password: getEnvVar('N8N_PASSWORD', 'n8npass'),
  }
} as const;

// Validate the database configuration
validateDatabaseConfig(env.database);

// Type for environment configuration
export type Env = typeof env;

export default env; 