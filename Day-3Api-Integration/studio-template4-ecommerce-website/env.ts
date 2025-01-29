



// Helper function to assert environment variables
function assertValue<T>(v: T | undefined, errorMessage: string, defaultValue?: T): T {
    if (v === undefined) {
        if (defaultValue !== undefined) {
            console.warn(`${errorMessage}, using default value: ${defaultValue}`);
            return defaultValue;
        } else {
            throw new Error(errorMessage);
        }
    }
    return v;
}

// Accessing environment variables
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-14'; // Default value

export const dataset = assertValue(
    process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET',
    'defaultDataset' // Default value for dataset
);

export const projectId = assertValue(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ej5nfqyu',
    'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID',
    'defaultProjectId' // Default value for projectId
);

// Debugging: Print environment variables
console.log('NEXT_PUBLIC_SANITY_API_VERSION:', process.env.NEXT_PUBLIC_SANITY_API_VERSION);
console.log('NEXT_PUBLIC_SANITY_PROJECT_ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log('NEXT_PUBLIC_SANITY_DATASET:', process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log('SANITY_API_TOKEN:', process.env.SANITY_API_TOKEN); // Should not be exposed in public builds
