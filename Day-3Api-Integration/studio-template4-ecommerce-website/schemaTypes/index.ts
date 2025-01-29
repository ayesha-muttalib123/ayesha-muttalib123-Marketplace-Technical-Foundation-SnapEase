import { type SchemaTypeDefinition } from 'sanity'
import ProductSchema from './product'

// Export the schemaTypes array (not just the schema object)
export const schemaTypes: SchemaTypeDefinition[] = [ProductSchema]
