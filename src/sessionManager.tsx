import { createSignal } from "solid-js";
import { supabase } from "./supabaseClient";

export const [session, setSession] = createSignal();
