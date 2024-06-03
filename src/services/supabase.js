import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fiuxxgoyafcrlavjnexf.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpdXh4Z295YWZjcmxhdmpuZXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2NzA4NDEsImV4cCI6MjAzMDI0Njg0MX0.BYFppYotWFQso2QlEJmN4lWRqy93HlBlCkYO7MzvWzU";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
