import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ejgmgaiovibloqevdksk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqZ21nYWlvdmlibG9xZXZka3NrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4Njg2MjksImV4cCI6MjA0MzQ0NDYyOX0.7fbuSTFFP3s3L9FTFvJ1_OI5oxOx2nNlBqpUPJzAOTs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
