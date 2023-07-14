import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wqzagzujzetgjofilhwe.supabase.co";
// const supabaseKey = process.env.VITE_SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxemFnenVqemV0Z2pvZmlsaHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkyOTAwNTEsImV4cCI6MjAwNDg2NjA1MX0.vwHvlmqO5QrwZyukkBp0u1N82g5k7yMTtJpM96hzGZw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
