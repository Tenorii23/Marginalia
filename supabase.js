import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://ttcdazcrzuvgxnjyjhel.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0Y2RhemNyenV2Z3huanlqaGVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg4OTg2NjYsImV4cCI6MjEwNDQ3NDY2Nn0.Nm7TwD6PP31-JzIX5EcuZ6dbyS-QH99Uhi-RLBNfgfY'

export const supabase = createClient(supabaseUrl, supabaseKey)
