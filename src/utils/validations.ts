import { z } from 'zod';

// ==================================================================================================
// Remarks: This file is for general zod validations that can be reused across the whole applications
// ==================================================================================================

// Validation for general string
export const customStringValidation = (field: string) =>
  z.string({ required_error: `Invalid ${field}`, invalid_type_error: `Invalid ${field}` }).min(1);
