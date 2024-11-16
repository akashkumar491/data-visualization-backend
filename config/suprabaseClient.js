const { createClient } = require('@supabase/supabase-js');
const suprabaseUrl = "https://guqqojeoglrxgodvuooz.supabase.co"
const suprabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1cXFvamVvZ2xyeGdvZHZ1b296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzNDE4MjgsImV4cCI6MjA0NjkxNzgyOH0._cxm8deYB0KijQLoJxzH9K9W94LSElAV85X3Do8TPN0"
const supabase = createClient(suprabaseUrl, suprabaseKey);

module.exports = supabase;
