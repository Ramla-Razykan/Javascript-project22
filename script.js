function generateEvenNumbers() {
    const limit = parseInt(document.getElementById('limit').value);
    let output = '';
    let i = 0;

    while (i <= limit) {
        output += i + (i < limit ? ', ' : '');
        i += 2; // Increment by 2 to get the next even number
    }

    document.getElementById('output').innerText = output;
}