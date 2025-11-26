async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/diogomota5/Portfolio-profissional/refs/heads/main/assets/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}