import supabase, { supabaseUrl } from "./supabase";

export async function getApplications() {
  const { data, error } = await supabase.from("job_application").select("*");

  if (error) {
    console.error(error);
    throw new Error("Job applications could not be loaded");
  }

  return data;
}

export async function createEditApplication(newApplication, id) {
  // Create job application
  let query = supabase.from("job-application");

  if (!id) {
    query = query.insert([{ newApplication }]);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Application could not be created");
  }

  return data;
}
