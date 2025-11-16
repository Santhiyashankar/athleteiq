// Import createClient from Supabase
import { createClient } from "@supabase/supabase-js";

// Make sure you have your Supabase URL and anon/public key in environment variables
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_KEY in environment variables");
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
