const btn = document.getElementById('write_story');
btn.addEventListener('click', writeStory);
function writeStory() {
    let story_title = document.getElementById('story_title').value;
    let story_text = document.getElementById('story_text');
    let model = document.getElementById('gpt_type').value;
    let spinner = document.getElementById('spinner');
    spinner.style.display = 'block';
    story_text.innerHTML = '';
    story_text.style.display = 'none';
    fetch('http://localhost:5000/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: story_title, model:  model}),
    })
        .then((response) => response.json())
        .then((data) => {
            story_text.innerHTML = data;
            spinner.style.display = 'none';
            story_text.style.display = 'block';
        })
}