//const SUPABASE_URL = 'https://cnlchrq5g6hen2t5llr0.baseapi.memfiredb.com';
const SUPABASE_URL = 'https://dshmbsawwrbuycnivcjs.supabase.co';

const SUPABASE_ANON_KEY = 'your_anon_key';

const supabase = new SupabaseClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function uploadFile() {
    const avatarFile = document.getElementById('avatarFile').files[0];

    supabase.storage
        .from('avatars')
        .upload('public/avatar1.png', avatarFile, {
            cacheControl: '3600',
            upsert: false
        })
        .then(({ data, error }) => {
            if (error) {
                console.log('Error uploading file:', error);
            } else {
                console.log('File uploaded successfully:', data);
            }
        });
}